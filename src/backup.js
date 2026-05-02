function exportJsonBackup() {
    if (!confirm(t('backup.exportConfirm'))) return;
    saveAppData();
    const blob = new Blob([JSON.stringify(appData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `gaol-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setShareFeedback(t('backup.exportSuccess'));
}

function importJsonBackup(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file) return;
    if (!confirm(t('backup.importConfirm'))) {
        input.value = '';
        return;
    }
    const reader = new FileReader();
    reader.onload = () => {
        try {
            appData = normalizeAppData(JSON.parse(reader.result));
            members = appData.members;
            hydrateWorkingStateFromPlan();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
            applyStaticTranslations();
            initShareControls();
            initBoardUI();
            refreshBoard();
            renderSettingsList();
            updateSharePreview();
            setShareFeedback(t('backup.importSuccess'));
        } catch {
            setShareFeedback(t('backup.importFailure'));
        } finally {
            input.value = '';
        }
    };
    reader.readAsText(file);
}

