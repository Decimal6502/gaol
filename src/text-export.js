function formatShareText(sharePlan) {
    const lines = [getLanguage() === 'en' ? '[Gaol Plan]' : '【Gaol Plan】', t(sharePlan.nameMode === 'anonymous' ? 'share.namesAnonymous' : 'share.namesDisplay')];
    sharePlan.fights.forEach(fight => {
        const bossLabel = fight.weak ? `${fight.bossName} (${fight.weak})` : fight.bossName;
        lines.push('', `${fight.label}: ${bossLabel}`);
        fight.slots.forEach(slot => {
            const jobLabel = slot.jobShort ? `${slot.jobShort}${slot.availability || ''}` : '-';
            lines.push(`${slot.label}: ${jobLabel}`);
        });
    });
    return lines.join('\n');
}

async function copyShareText() {
    const preview = document.getElementById('share-text-preview');
    if (!preview) return;
    try {
        await navigator.clipboard.writeText(preview.value);
        setShareFeedback(t('share.copySuccess'));
    } catch {
        preview.focus();
        preview.select();
        const copied = document.execCommand('copy');
        setShareFeedback(copied ? t('share.copySuccess') : t('share.copyFailure'));
    }
}

