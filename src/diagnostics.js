function createDiagnostic(status, title, detail) {
    return { status, title, detail };
}

function statusLabel(status) {
    if (status === 'ok') return 'OK';
    if (status === 'warn') return t('common.statusWarn');
    return t('common.statusError');
}

function canUseLocalStorage() {
    try {
        const key = `${STORAGE_KEY}_diagnostic`;
        localStorage.setItem(key, '1');
        localStorage.removeItem(key);
        return true;
    } catch {
        return false;
    }
}

function countDuplicateJobs() {
    const seenMain = new Map();
    const seenBonus = new Set();
    const duplicates = new Set();
    boardState.forEach((rowJobs, row) => {
        rowJobs.slice(0, MAIN_FIGHT_COUNT).forEach((jobId, col) => {
            if (!jobId) return;
            if (seenMain.has(jobId)) duplicates.add(`main:${jobId}`);
            seenMain.set(jobId, { row, col });
        });
        const bonusJobId = rowJobs[BONUS_COL];
        if (!bonusJobId) return;
        if (seenBonus.has(bonusJobId)) duplicates.add(`bonus:${bonusJobId}`);
        seenBonus.add(bonusJobId);
    });
    return duplicates.size;
}

function countInvalidAssignments() {
    let invalidCount = 0;
    for (let row = 0; row < 6; row++) {
        const member = getMemberById(selectedMemberIds[row]);
        for (let col = 0; col < TOTAL_BATTLE_COUNT; col++) {
            const jobId = boardState[row][col];
            if (jobId && (!member || !isJobAvailable(member, jobId))) invalidCount++;
        }
    }
    return invalidCount;
}

function countFilledSlotsByBattleGroup() {
    return boardState.reduce((counts, rowJobs) => {
        counts.main += rowJobs.slice(0, MAIN_FIGHT_COUNT).filter(Boolean).length;
        if (rowJobs[BONUS_COL]) counts.bonus++;
        return counts;
    }, { main: 0, bonus: 0 });
}

function hasExternalRuntimeAssets() {
    return Array.from(document.querySelectorAll('script[src], link[href], img[src]')).some(element => {
        const value = element.getAttribute('src') || element.getAttribute('href') || '';
        return /^https?:\/\//i.test(value);
    });
}

function hasHardcodedOldPath() {
    return Array.from(document.querySelectorAll('script[src], link[href], a[href], img[src]')).some(element => {
        const value = element.getAttribute('src') || element.getAttribute('href') || '';
        return value.includes(LEGACY_PUBLIC_PATH);
    });
}

function collectDiagnostics() {
    saveAppData();
    const plan = getCurrentPlan();
    const selectedMembers = selectedMemberIds.filter(Boolean).length;
    const filledSlots = countFilledSlotsByBattleGroup();
    const duplicateJobs = countDuplicateJobs();
    const invalidAssignments = countInvalidAssignments();
    const selectedBosses = plan.fights.filter(fight => fight.bossId).length;
    const hasBonusBoss = Boolean(plan.bonusBattle.bossId);
    const diagnostics = [];

    diagnostics.push(createDiagnostic(
        appData.version === 2 ? 'ok' : 'error',
        t('diagnostic.dataFormat.title'),
        `localStorage key: ${STORAGE_KEY}, version: ${appData.version || t('diagnostic.versionNone')}`
    ));

    diagnostics.push(createDiagnostic(
        canUseLocalStorage() ? 'ok' : 'error',
        'localStorage',
        canUseLocalStorage() ? t('diagnostic.localStorage.ok') : t('diagnostic.localStorage.error')
    ));

    diagnostics.push(createDiagnostic(
        members.length > 0 ? 'ok' : 'warn',
        t('diagnostic.members.title'),
        t('diagnostic.members.detail', { count: members.length, hint: members.length > 0 ? '' : t('diagnostic.members.hint') })
    ));

    diagnostics.push(createDiagnostic(
        selectedMembers === 6 ? 'ok' : 'warn',
        t('diagnostic.selectedMembers.title'),
        t('diagnostic.selectedMembers.detail', { count: selectedMembers })
    ));

    diagnostics.push(createDiagnostic(
        selectedBosses === 3 ? 'ok' : 'warn',
        t('diagnostic.mainBosses.title'),
        t('diagnostic.mainBosses.detail', { count: selectedBosses })
    ));

    diagnostics.push(createDiagnostic(
        hasBonusBoss ? 'ok' : 'warn',
        t('diagnostic.bonusBoss.title'),
        hasBonusBoss ? t('diagnostic.bonusBoss.ok') : t('diagnostic.bonusBoss.warn')
    ));

    diagnostics.push(createDiagnostic(
        duplicateJobs === 0 ? 'ok' : 'error',
        t('diagnostic.duplicateJobs.title'),
        duplicateJobs === 0 ? t('diagnostic.duplicateJobs.ok') : t('diagnostic.duplicateJobs.error', { count: duplicateJobs })
    ));

    diagnostics.push(createDiagnostic(
        invalidAssignments === 0 ? 'ok' : 'error',
        t('diagnostic.invalidAssignments.title'),
        invalidAssignments === 0 ? t('diagnostic.invalidAssignments.ok') : t('diagnostic.invalidAssignments.error', { count: invalidAssignments })
    ));

    diagnostics.push(createDiagnostic(
        filledSlots.main === 18 && filledSlots.bonus === 6 ? 'ok' : 'warn',
        t('diagnostic.completion.title'),
        t('diagnostic.completion.detail', { main: filledSlots.main, bonus: filledSlots.bonus })
    ));

    diagnostics.push(createDiagnostic(
        appData.settings.shareNameMode === 'anonymous' ? 'ok' : 'warn',
        t('diagnostic.shareName.title'),
        appData.settings.shareNameMode === 'anonymous' ? t('diagnostic.shareName.ok') : t('diagnostic.shareName.warn')
    ));

    diagnostics.push(createDiagnostic(
        hasHardcodedOldPath() ? 'error' : 'ok',
        t('diagnostic.publicPath.title'),
        hasHardcodedOldPath() ? t('diagnostic.publicPath.error') : t('diagnostic.publicPath.ok')
    ));

    diagnostics.push(createDiagnostic(
        hasExternalRuntimeAssets() ? 'warn' : 'ok',
        t('diagnostic.externalAssets.title'),
        hasExternalRuntimeAssets() ? t('diagnostic.externalAssets.warn') : t('diagnostic.externalAssets.ok')
    ));

    diagnostics.push(createDiagnostic(
        'ok',
        t('diagnostic.features.title'),
        t('diagnostic.features.detail')
    ));

    return diagnostics;
}

function renderDiagnostics() {
    const summary = document.getElementById('diagnostics-summary');
    const list = document.getElementById('diagnostics-list');
    if (!summary || !list) return;

    const diagnostics = collectDiagnostics();
    const counts = diagnostics.reduce((acc, item) => {
        acc[item.status] = (acc[item.status] || 0) + 1;
        return acc;
    }, { ok: 0, warn: 0, error: 0 });

    summary.innerHTML = `
        <div class="summary-card status-ok"><strong>${counts.ok || 0}</strong><span>OK</span></div>
        <div class="summary-card status-warn"><strong>${counts.warn || 0}</strong><span>${escapeAttr(t('common.statusWarn'))}</span></div>
        <div class="summary-card status-error"><strong>${counts.error || 0}</strong><span>${escapeAttr(t('common.statusError'))}</span></div>
    `;

    list.innerHTML = diagnostics.map(item => `
        <div class="diagnostic-item status-${item.status}">
            <div class="diagnostic-title">
                <span>${escapeAttr(item.title)}</span>
                <strong>${statusLabel(item.status)}</strong>
            </div>
            <p>${escapeAttr(item.detail)}</p>
        </div>
    `).join('');
}

