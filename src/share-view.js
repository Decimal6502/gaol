function getBossById(bossId) {
    return BOSS_DATA.find(boss => boss.id === bossId) || BOSS_DATA.find(boss => boss.id === null);
}

function includeDisplayNamesForShare() {
    return document.getElementById('share-name-toggle')?.checked || false;
}

function getShareDisplayLabel(row, includeDisplayNames) {
    const anonymousLabel = ANONYMOUS_LABELS[row] || String(row + 1);
    if (!includeDisplayNames) return anonymousLabel;
    const member = getMemberById(selectedMemberIds[row]);
    return member?.displayName?.trim() || anonymousLabel;
}

function createShareViewPlan(options = {}) {
    saveAppData();
    const includeDisplayNames = options.includeDisplayNames === true;
    const plan = getCurrentPlan();
    const battles = [
        ...plan.fights.map((fight, col) => ({ ...fight, col, label: getLanguage() === 'en' ? `Fight ${col + 1}` : `${col + 1}戦目`, index: col + 1, isBonus: false })),
        { ...plan.bonusBattle, col: BONUS_COL, label: t('plan.bonusAmpText'), index: null, isBonus: true }
    ];
    return {
        version: 1,
        generatedAt: new Date().toISOString(),
        nameMode: includeDisplayNames ? 'display' : 'anonymous',
        labels: ANONYMOUS_LABELS.map((label, row) => ({
            row,
            label: getShareDisplayLabel(row, includeDisplayNames)
        })),
        fights: battles.map(fight => {
            const boss = getBossById(fight.bossId);
            return {
                index: fight.index,
                label: fight.label,
                isBonus: fight.isBonus,
                bossId: boss?.id || null,
                bossName: boss?.name || '---',
                weak: bossWeak(boss),
                slots: Array.from({ length: 6 }, (_, row) => {
                    const member = getMemberById(selectedMemberIds[row]);
                    const jobId = boardState[row][fight.col];
                    return {
                        row,
                        label: getShareDisplayLabel(row, includeDisplayNames),
                        jobId,
                        jobShort: jobShort(jobId) || '',
                        jobName: jobName(jobId) || '',
                        availability: jobId && member ? availabilityLabel(member, jobId) : ''
                    };
                })
            };
        })
    };
}

function setShareFeedback(message) {
    const feedback = document.getElementById('share-feedback');
    if (!feedback) return;
    feedback.textContent = message;
}

function handleShareNameToggle() {
    appData.settings.shareNameMode = includeDisplayNamesForShare() ? 'display' : 'anonymous';
    saveAppData();
    updateSharePreview();
}

function updateSharePreview() {
    const preview = document.getElementById('share-text-preview');
    const canvas = document.getElementById('share-image-preview');
    if (!preview && !canvas) return;
    const sharePlan = createShareViewPlan({ includeDisplayNames: includeDisplayNamesForShare() });
    if (preview) preview.value = formatShareText(sharePlan);
    if (canvas) renderShareImage(sharePlan, canvas);
}

function initShareControls() {
    const toggle = document.getElementById('share-name-toggle');
    if (!toggle) return;
    toggle.checked = appData.settings.shareNameMode === 'display';
}

