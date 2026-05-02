const JOBS = [
    { id: 'WAR', shortJa: '戦', nameJa: '戦士', shortEn: 'WAR', nameEn: 'Warrior' },
    { id: 'MNK', shortJa: 'モ', nameJa: 'モンク', shortEn: 'MNK', nameEn: 'Monk' },
    { id: 'WHM', shortJa: '白', nameJa: '白魔', shortEn: 'WHM', nameEn: 'White Mage' },
    { id: 'BLM', shortJa: '黒', nameJa: '黒魔', shortEn: 'BLM', nameEn: 'Black Mage' },
    { id: 'RDM', shortJa: '赤', nameJa: '赤魔', shortEn: 'RDM', nameEn: 'Red Mage' },
    { id: 'THF', shortJa: 'シ', nameJa: 'シーフ', shortEn: 'THF', nameEn: 'Thief' },
    { id: 'PLD', shortJa: 'ナ', nameJa: 'ナイト', shortEn: 'PLD', nameEn: 'Paladin' },
    { id: 'DRK', shortJa: '暗', nameJa: '暗黒', shortEn: 'DRK', nameEn: 'Dark Knight' },
    { id: 'BST', shortJa: '獣', nameJa: '獣使', shortEn: 'BST', nameEn: 'Beastmaster' },
    { id: 'BRD', shortJa: '詩', nameJa: '詩人', shortEn: 'BRD', nameEn: 'Bard' },
    { id: 'RNG', shortJa: '狩', nameJa: '狩人', shortEn: 'RNG', nameEn: 'Ranger' },
    { id: 'SAM', shortJa: '侍', nameJa: '侍', shortEn: 'SAM', nameEn: 'Samurai' },
    { id: 'NIN', shortJa: '忍', nameJa: '忍者', shortEn: 'NIN', nameEn: 'Ninja' },
    { id: 'DRG', shortJa: '竜', nameJa: '竜騎', shortEn: 'DRG', nameEn: 'Dragoon' },
    { id: 'SMN', shortJa: '召', nameJa: '召喚', shortEn: 'SMN', nameEn: 'Summoner' },
    { id: 'BLU', shortJa: '青', nameJa: '青魔', shortEn: 'BLU', nameEn: 'Blue Mage' },
    { id: 'COR', shortJa: 'コ', nameJa: 'コル', shortEn: 'COR', nameEn: 'Corsair' },
    { id: 'PUP', shortJa: 'か', nameJa: 'から', shortEn: 'PUP', nameEn: 'Puppetmaster' },
    { id: 'DNC', shortJa: '踊', nameJa: '踊り', shortEn: 'DNC', nameEn: 'Dancer' },
    { id: 'SCH', shortJa: '学', nameJa: '学者', shortEn: 'SCH', nameEn: 'Scholar' },
    { id: 'GEO', shortJa: '風', nameJa: '風水', shortEn: 'GEO', nameEn: 'Geomancer' },
    { id: 'RUN', shortJa: '剣', nameJa: '剣', shortEn: 'RUN', nameEn: 'Rune Fencer' }
];

const BOSS_DATA = [
    { id: 'ongo', name: 'Ongo', weakJa: '土/魔', weakEn: 'Earth/Magic' },
    { id: 'xevioso', name: 'Xevioso', weakJa: '突/クリ', weakEn: 'Piercing/Crit' },
    { id: 'arebati', name: 'Arebati', weakJa: '突/遠', weakEn: 'Piercing/Ranged' },
    { id: 'ngai', name: 'Ngai', weakJa: '打', weakEn: 'Blunt' },
    { id: 'kalunga', name: 'Kalunga', weakJa: '斬', weakEn: 'Slashing' },
    { id: 'mboze', name: 'Mboze', weakJa: '斬', weakEn: 'Slashing' },
    { id: 'bumba', name: 'Bumba', weakJa: '魔/特', weakEn: 'Magic/Special' },
    { id: 'gogmagog', name: 'Gogmagog', weakJa: '打', weakEn: 'Blunt' },
    { id: 'aristaeus', name: 'Aristaeus', weakJa: '斬', weakEn: 'Slashing' },
    { id: 'raskovniche', name: 'Raskovniche', weakJa: '風/魔', weakEn: 'Wind/Magic' },
    { id: 'marmorkrebs', name: 'Marmorkrebs', weakJa: '雷/魔', weakEn: 'Lightning/Magic' },
    { id: 'gigelorum', name: 'Gigelorum', weakJa: '打', weakEn: 'Blunt' },
    { id: 'procne', name: 'Procne', weakJa: '突', weakEn: 'Piercing' },
    { id: 'henwen', name: 'Henwen', weakJa: '打', weakEn: 'Blunt' },
    { id: 'sgili', name: 'Sgili', weakJa: '火/魔', weakEn: 'Fire/Magic' },
    { id: 'u_bnai', name: 'U Bnai', weakJa: '火/魔', weakEn: 'Fire/Magic' },
    { id: 'dealan_dhe', name: 'Dealan-dhe', weakJa: '突', weakEn: 'Piercing' },
    { id: null, name: '---', weakJa: '', weakEn: '' }
];

const STORAGE_KEY = 'gt_app_data_v2';
const CURRENT_PLAN_ID = 'current-plan';
const DEFAULT_BOSSES = ['ongo', 'kalunga', 'mboze'];
const ANONYMOUS_LABELS = ['A', 'B', 'C', 'D', 'E', 'F'];
const MAIN_FIGHT_COUNT = 3;
const TOTAL_BATTLE_COUNT = 4;
const BONUS_COL = 3;
const LEGACY_PUBLIC_PATH = '/' + 'ffxi' + '/';

const jobById = Object.fromEntries(JOBS.map(job => [job.id, job]));
const AVAILABILITY_CYCLE = ['ng', 'main', 'ok', 'fill'];
const AVAILABILITY_LABELS = {
    ng: '-',
    main: '★',
    ok: '☆',
    fill: '○'
};

const LOCALES = {
    ja: {
        'tab.plan': '編成',
        'tab.members': 'メンバー',
        'tab.diagnostics': '診断',
        'members.title': 'メンバー登録',
        'members.addDisplayName': 'メンバーを追加',
        'settings.language': '言語',
        'settings.languageAuto': '自動',
        'settings.languageJa': '日本語',
        'settings.languageEn': 'English',
        'availability.main': '上級マスター',
        'availability.ok': '初級マスター',
        'availability.fill': 'Lv99',
        'availability.ng': '不可',
        'availability.mainDescription': 'パーティの核となるメイン戦力',
        'availability.okDescription': '状況に応じて活躍できるサブ戦力',
        'availability.fillDescription': '数合わせ要員ジョブ',
        'availability.ngDescription': '出場不可(Lv99未満)',
        'plan.autoFill': '残りを適当に埋める',
        'plan.memberHeader': 'MEMBER',
        'plan.bonusAmp': 'ボーナス(アンプ)',
        'plan.bonusAmpText': 'ボーナス(アンプ)',
        'common.reset': 'リセット',
        'common.delete': '削除',
        'common.refresh': '更新',
        'common.statusWarn': '要確認',
        'common.statusError': '要修正',
        'share.previewAria': '共有用プレビュー',
        'share.previewTitle': '共有プレビュー',
        'share.previewDescription': '現在の編成だけを匿名ラベルで出力します。',
        'share.includeDisplayNames': '表示名を含める',
        'share.copyText': 'テキストをコピー',
        'share.savePng': 'PNGを保存',
        'share.textPreview': 'テキストプレビュー',
        'share.pngPreview': 'PNGプレビュー',
        'share.title': 'Gaol 3戦 + ボーナス 編成',
        'share.namesAnonymous': '表示: 匿名',
        'share.namesDisplay': '表示: 表示名',
        'share.copySuccess': 'テキストをコピーしました。',
        'share.copyFailure': 'コピーできませんでした。テキストを選択してコピーしてください。',
        'share.pngFailure': 'PNGを作成できませんでした。',
        'share.pngSuccess': 'PNGを保存しました。',
        'backup.saveJson': 'JSON保存',
        'backup.loadJson': 'JSON読込',
        'backup.exportConfirm': 'JSONバックアップには表示名とジョブ可否設定を含みます。保存しますか？',
        'backup.exportSuccess': 'JSONバックアップを保存しました。',
        'backup.importConfirm': '現在のブラウザ内データをJSONバックアップで置き換えます。続行しますか？',
        'backup.importSuccess': 'JSONバックアップを読み込みました。',
        'backup.importFailure': 'JSONバックアップを読み込めませんでした。',
        'diagnostics.panelTitle': '診断パネル',
        'diagnostics.panelDescription': '現在のデータと実装状態を確認します。',
        'diagnostics.noticeTitle': '外部連携について',
        'diagnostics.noticeBody': 'このアプリは手入力用の外部メモツールです。FFXIクライアント、PlayOnline、Windower、Ashitaとは連携せず、ゲームデータの取得・解析・自動操作は行いません。',
        'deck.selectInPlan': '編成タブでジョブを選択',
        'deck.selectJob': 'ジョブを選択してください',
        'deck.selectedJob': '「{job}」を選択中...',
        'form.displayName': '表示名',
        'form.select': '-- 選択 --',
        'form.selected': '選択済',
        'confirm.deleteMember': '削除しますか？',
        'confirm.autoFill': '空いている枠を自動で埋めますか？',
        'confirm.resetJobs': '配置されたジョブを全てリセットしますか？\n（メンバーは維持されます）',
        'alert.jobUsed': '{job} は既に使用されています',
        'diagnostic.dataFormat.title': 'データ形式',
        'diagnostic.versionNone': 'なし',
        'diagnostic.localStorage.ok': '編集データをブラウザ内に保存できます。',
        'diagnostic.localStorage.error': 'localStorage に保存できません。',
        'diagnostic.members.title': '表示名登録',
        'diagnostic.members.detail': '{count} 件登録済み。{hint}',
        'diagnostic.members.hint': 'まずメンバータブで表示名を追加してください。',
        'diagnostic.selectedMembers.title': '編成メンバー',
        'diagnostic.selectedMembers.detail': '{count}/6 枠が選択済み。',
        'diagnostic.mainBosses.title': '3戦ボス',
        'diagnostic.mainBosses.detail': '{count}/3 戦が選択済み。',
        'diagnostic.bonusBoss.title': 'ボーナス戦ボス',
        'diagnostic.bonusBoss.ok': 'ボーナス戦のボスが選択済み。',
        'diagnostic.bonusBoss.warn': 'ボーナス戦のボスが未選択です。',
        'diagnostic.duplicateJobs.title': 'ジョブ重複',
        'diagnostic.duplicateJobs.ok': '3戦側とボーナス戦内に重複使用はありません。',
        'diagnostic.duplicateJobs.error': '{count} 種類のジョブが、3戦側またはボーナス戦内で重複しています。',
        'diagnostic.invalidAssignments.title': '使用不可ジョブ',
        'diagnostic.invalidAssignments.ok': '3戦とボーナス戦の編成は表示名設定と矛盾していません。',
        'diagnostic.invalidAssignments.error': '{count} 枠に使用不可ジョブがあります。',
        'diagnostic.completion.title': '編成完成度',
        'diagnostic.completion.detail': '3戦 {main}/18 枠、ボーナス戦 {bonus}/6 枠が入力済み。',
        'diagnostic.shareName.title': '共有名の既定値',
        'diagnostic.shareName.ok': '匿名ラベルが既定です。',
        'diagnostic.shareName.warn': '表示名を出す設定です。共有前に確認してください。',
        'diagnostic.publicPath.title': '公開パス',
        'diagnostic.publicPath.ok': '現在の DOM 参照に旧公開パスの固定参照はありません。',
        'diagnostic.publicPath.error': '旧公開パスを含む参照があります。',
        'diagnostic.externalAssets.title': '外部アセット',
        'diagnostic.externalAssets.ok': '外部 runtime asset 参照はありません。',
        'diagnostic.externalAssets.warn': '外部 URL の runtime asset 参照があります。',
        'diagnostic.features.title': '共有/バックアップ機能',
        'diagnostic.features.detail': '3戦 + ボーナス戦の Text preview/copy, PNG preview/download, JSON backup/import はブラウザ内で処理します。'
    },
    en: {
        'tab.plan': 'Plan',
        'tab.members': 'Members',
        'tab.diagnostics': 'Diagnostics',
        'members.title': 'Display Names',
        'members.addDisplayName': 'Add Member',
        'settings.language': 'Language',
        'settings.languageAuto': 'Auto',
        'settings.languageJa': 'Japanese',
        'settings.languageEn': 'English',
        'availability.main': 'Advanced Master',
        'availability.ok': 'Basic Master',
        'availability.fill': 'Lv. 99',
        'availability.ng': 'Unavailable',
        'availability.mainDescription': 'Core job for the party',
        'availability.okDescription': 'Secondary job that can work in the right situation',
        'availability.fillDescription': 'Fill-in job for roster coverage',
        'availability.ngDescription': 'Cannot join (below Lv. 99)',
        'plan.autoFill': 'Fill Empty Slots',
        'plan.memberHeader': 'MEMBER',
        'plan.bonusAmp': 'Bonus (Amplifier)',
        'plan.bonusAmpText': 'Bonus (Amplifier)',
        'common.reset': 'Reset',
        'common.delete': 'Delete',
        'common.refresh': 'Refresh',
        'common.statusWarn': 'Review',
        'common.statusError': 'Fix',
        'share.previewAria': 'Share preview',
        'share.previewTitle': 'Share Preview',
        'share.previewDescription': 'Exports only the current plan with anonymous labels by default.',
        'share.includeDisplayNames': 'Include display names',
        'share.copyText': 'Copy Text',
        'share.savePng': 'Save PNG',
        'share.textPreview': 'Text Preview',
        'share.pngPreview': 'PNG Preview',
        'share.title': 'Gaol 3 Fights + Bonus Plan',
        'share.namesAnonymous': 'Names: Anonymous',
        'share.namesDisplay': 'Names: Display Names',
        'share.copySuccess': 'Text copied.',
        'share.copyFailure': 'Copy failed. Select the text and copy it manually.',
        'share.pngFailure': 'Could not create PNG.',
        'share.pngSuccess': 'PNG saved.',
        'backup.saveJson': 'Save JSON',
        'backup.loadJson': 'Load JSON',
        'backup.exportConfirm': 'The JSON backup includes display names and job availability. Save it?',
        'backup.exportSuccess': 'JSON backup saved.',
        'backup.importConfirm': 'This will replace the current browser data with the JSON backup. Continue?',
        'backup.importSuccess': 'JSON backup loaded.',
        'backup.importFailure': 'Could not load JSON backup.',
        'diagnostics.panelTitle': 'Diagnostics',
        'diagnostics.panelDescription': 'Check the current data and implementation state.',
        'diagnostics.noticeTitle': 'External Integration',
        'diagnostics.noticeBody': 'This app is an external memo tool for manual entry. It does not integrate with the FFXI client, PlayOnline, Windower, or Ashita, and it does not collect, parse, or automate game data.',
        'deck.selectInPlan': 'Select jobs on the Plan tab',
        'deck.selectJob': 'Select a job',
        'deck.selectedJob': 'Selected: {job}',
        'form.displayName': 'Display Name',
        'form.select': '-- Select --',
        'form.selected': 'Selected',
        'confirm.deleteMember': 'Delete this display name?',
        'confirm.autoFill': 'Fill empty slots automatically?',
        'confirm.resetJobs': 'Reset all assigned jobs?\n(Display names will stay selected.)',
        'alert.jobUsed': '{job} is already used',
        'diagnostic.dataFormat.title': 'Data Format',
        'diagnostic.versionNone': 'none',
        'diagnostic.localStorage.ok': 'Editable data can be saved in this browser.',
        'diagnostic.localStorage.error': 'localStorage is not available.',
        'diagnostic.members.title': 'Display Names',
        'diagnostic.members.detail': '{count} saved. {hint}',
        'diagnostic.members.hint': 'Add display names on the Members tab first.',
        'diagnostic.selectedMembers.title': 'Plan Members',
        'diagnostic.selectedMembers.detail': '{count}/6 slots selected.',
        'diagnostic.mainBosses.title': '3 Fight Bosses',
        'diagnostic.mainBosses.detail': '{count}/3 fights selected.',
        'diagnostic.bonusBoss.title': 'Bonus Boss',
        'diagnostic.bonusBoss.ok': 'Bonus boss is selected.',
        'diagnostic.bonusBoss.warn': 'Bonus boss is not selected.',
        'diagnostic.duplicateJobs.title': 'Duplicate Jobs',
        'diagnostic.duplicateJobs.ok': 'No duplicate jobs in the 3 fights or within the bonus fight.',
        'diagnostic.duplicateJobs.error': '{count} duplicate job type(s) found in the 3 fights or within the bonus fight.',
        'diagnostic.invalidAssignments.title': 'Unavailable Jobs',
        'diagnostic.invalidAssignments.ok': 'The 3 fights and bonus fight match the display name settings.',
        'diagnostic.invalidAssignments.error': '{count} slot(s) contain unavailable jobs.',
        'diagnostic.completion.title': 'Plan Completion',
        'diagnostic.completion.detail': '3 fights: {main}/18 slots, bonus: {bonus}/6 slots filled.',
        'diagnostic.shareName.title': 'Default Share Names',
        'diagnostic.shareName.ok': 'Anonymous labels are the default.',
        'diagnostic.shareName.warn': 'Display names are enabled. Check before sharing.',
        'diagnostic.publicPath.title': 'Public Path',
        'diagnostic.publicPath.ok': 'No old public path references in the current DOM.',
        'diagnostic.publicPath.error': 'An old public path reference is present.',
        'diagnostic.externalAssets.title': 'External Assets',
        'diagnostic.externalAssets.ok': 'No external runtime asset references.',
        'diagnostic.externalAssets.warn': 'External runtime asset references are present.',
        'diagnostic.features.title': 'Share/Backup Features',
        'diagnostic.features.detail': 'Text preview/copy, PNG preview/download, and JSON backup/import for the 3 fights + bonus fight all run in the browser.'
    }
};

let appData = createDefaultAppData();
let members = appData.members;
let boardState = createEmptyBoard();
let selectedMemberIds = Array(6).fill(null);
let selectedJob = null;

window.onload = function () {
    loadAppData();
    applyStaticTranslations();
    initBoardUI();
    initShareControls();
    switchTab('board');
};

function createId(prefix) {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
        return `${prefix}-${window.crypto.randomUUID()}`;
    }
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function createEmptyJobMap() {
    return Object.fromEntries(JOBS.map(job => [job.id, 'ng']));
}

function createEmptyBoard() {
    return Array(6).fill(null).map(() => Array(TOTAL_BATTLE_COUNT).fill(null));
}

function createSlots() {
    return Array(6).fill(null).map(() => ({ memberId: null, jobId: null }));
}

function createDefaultPlan() {
    return {
        id: CURRENT_PLAN_ID,
        name: 'Default Plan',
        fights: DEFAULT_BOSSES.map(bossId => ({ bossId, slots: createSlots() })),
        bonusBattle: { bossId: null, slots: createSlots() },
        updatedAt: new Date().toISOString()
    };
}

function createDefaultAppData() {
    return {
        version: 2,
        members: [],
        plans: [createDefaultPlan()],
        templates: [],
        settings: {
            language: 'auto',
            theme: 'system',
            jobLabelMode: 'full',
            shareNameMode: 'anonymous'
        },
        currentPlanId: CURRENT_PLAN_ID
    };
}

function normalizeAppData(data) {
    const fallback = createDefaultAppData();
    if (!data || data.version !== 2) return fallback;

    const normalized = {
        ...fallback,
        ...data,
        members: Array.isArray(data.members) ? data.members : [],
        plans: Array.isArray(data.plans) && data.plans.length ? data.plans : fallback.plans,
        templates: Array.isArray(data.templates) ? data.templates : [],
        settings: { ...fallback.settings, ...(data.settings || {}) },
        currentPlanId: data.currentPlanId || CURRENT_PLAN_ID
    };

    normalized.members = normalized.members.map(member => ({
        id: member.id || createId('member'),
        displayName: member.displayName || '',
        jobs: normalizeJobMap(member.jobs)
    }));

    let currentPlan = normalized.plans.find(plan => plan.id === normalized.currentPlanId);
    if (!currentPlan) {
        currentPlan = normalized.plans[0] || createDefaultPlan();
        normalized.currentPlanId = currentPlan.id;
    }
    normalizePlan(currentPlan);
    return normalized;
}

function normalizeJobMap(jobs) {
    const normalized = createEmptyJobMap();
    if (!jobs) return normalized;
    JOBS.forEach(job => {
        if (['main', 'ok', 'fill', 'ng'].includes(jobs[job.id])) {
            normalized[job.id] = jobs[job.id];
        }
    });
    return normalized;
}

function normalizePlan(plan) {
    plan.id = plan.id || CURRENT_PLAN_ID;
    plan.name = plan.name || 'Default Plan';
    plan.updatedAt = plan.updatedAt || new Date().toISOString();
    if (!Array.isArray(plan.fights)) plan.fights = [];
    for (let fightIndex = 0; fightIndex < MAIN_FIGHT_COUNT; fightIndex++) {
        if (!plan.fights[fightIndex]) {
            plan.fights[fightIndex] = { bossId: DEFAULT_BOSSES[fightIndex], slots: createSlots() };
        }
        normalizeBattle(plan.fights[fightIndex], DEFAULT_BOSSES[fightIndex]);
    }
    plan.fights = plan.fights.slice(0, MAIN_FIGHT_COUNT);
    if (!plan.bonusBattle) plan.bonusBattle = { bossId: null, slots: createSlots() };
    normalizeBattle(plan.bonusBattle, null);
}

function normalizeBattle(battle, fallbackBossId) {
    if (!BOSS_DATA.some(boss => boss.id === battle.bossId)) {
        battle.bossId = fallbackBossId;
    }
    if (!Array.isArray(battle.slots)) battle.slots = [];
    for (let row = 0; row < 6; row++) {
        if (!battle.slots[row]) battle.slots[row] = { memberId: null, jobId: null };
        battle.slots[row].memberId = battle.slots[row].memberId || null;
        battle.slots[row].jobId = jobById[battle.slots[row].jobId] ? battle.slots[row].jobId : null;
    }
    battle.slots = battle.slots.slice(0, 6);
}

function loadAppData() {
    try {
        appData = normalizeAppData(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch {
        appData = createDefaultAppData();
    }
    members = appData.members;
    hydrateWorkingStateFromPlan();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function saveAppData() {
    syncWorkingStateToPlan();
    members = appData.members;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function getCurrentPlan() {
    let plan = appData.plans.find(item => item.id === appData.currentPlanId);
    if (!plan) {
        plan = createDefaultPlan();
        appData.plans = [plan];
        appData.currentPlanId = plan.id;
    }
    normalizePlan(plan);
    return plan;
}

function hydrateWorkingStateFromPlan() {
    const plan = getCurrentPlan();
    selectedMemberIds = Array(6).fill(null);
    boardState = createEmptyBoard();
    for (let row = 0; row < 6; row++) {
        selectedMemberIds[row] = plan.fights.find(fight => fight.slots[row]?.memberId)?.slots[row].memberId
            || plan.bonusBattle.slots[row]?.memberId
            || null;
        for (let col = 0; col < MAIN_FIGHT_COUNT; col++) {
            boardState[row][col] = plan.fights[col].slots[row].jobId || null;
        }
        boardState[row][BONUS_COL] = plan.bonusBattle.slots[row].jobId || null;
    }
}

function syncWorkingStateToPlan() {
    const plan = getCurrentPlan();
    for (let col = 0; col < MAIN_FIGHT_COUNT; col++) {
        const bossSelect = document.getElementById(`boss-${col + 1}`);
        if (bossSelect) plan.fights[col].bossId = bossSelect.value || null;
        for (let row = 0; row < 6; row++) {
            plan.fights[col].slots[row].memberId = selectedMemberIds[row] || null;
            plan.fights[col].slots[row].jobId = boardState[row][col] || null;
        }
    }
    const bonusSelect = document.getElementById('boss-bonus');
    if (bonusSelect) plan.bonusBattle.bossId = bonusSelect.value || null;
    for (let row = 0; row < 6; row++) {
        plan.bonusBattle.slots[row].memberId = selectedMemberIds[row] || null;
        plan.bonusBattle.slots[row].jobId = boardState[row][BONUS_COL] || null;
    }
    plan.updatedAt = new Date().toISOString();
}

function getMemberById(memberId) {
    return members.find(member => member.id === memberId) || null;
}

function isJobAvailable(member, jobId) {
    if (!member || !jobId) return false;
    return ['main', 'ok', 'fill'].includes(member.jobs[jobId]);
}

function jobsByAvailability(member, availability) {
    return JOBS.filter(job => member.jobs[job.id] === availability).map(job => job.id);
}

function jobShort(jobId) {
    const job = jobById[jobId];
    if (!job) return '';
    return getLanguage() === 'en' ? job.shortEn : job.shortJa;
}

function jobName(jobId) {
    const job = jobById[jobId];
    if (!job) return '';
    return getLanguage() === 'en' ? job.nameEn : job.nameJa;
}

function bossWeak(boss) {
    if (!boss) return '';
    return getLanguage() === 'en' ? boss.weakEn : boss.weakJa;
}

function availabilityLabel(member, jobId) {
    return AVAILABILITY_LABELS[member?.jobs[jobId] || 'ng'];
}

function formatPreviewJobGroup(member, availability, className, label) {
    const jobIds = jobsByAvailability(member, availability);
    if (jobIds.length === 0) return '';
    const jobs = jobIds.map(jobId => `<span>${jobShort(jobId)}</span>`).join('');
    return `<span class="job-preview-group ${className}"><strong>${label}</strong>${jobs}</span>`;
}

function cycleAvailability(memberIndex, jobId) {
    const member = members[memberIndex];
    if (!member) return;
    const current = member.jobs[jobId] || 'ng';
    const next = AVAILABILITY_CYCLE[(AVAILABILITY_CYCLE.indexOf(current) + 1) % AVAILABILITY_CYCLE.length];
    member.jobs[jobId] = next;
    clearInvalidJobsForMember(member.id);
    saveAppData();
    renderSettingsList();
    refreshBoard();
}

function clearInvalidJobsForMember(memberId) {
    const member = getMemberById(memberId);
    if (!member) return;
    for (let row = 0; row < 6; row++) {
        if (selectedMemberIds[row] !== memberId) continue;
        for (let col = 0; col < TOTAL_BATTLE_COUNT; col++) {
            if (boardState[row][col] && !isJobAvailable(member, boardState[row][col])) {
                boardState[row][col] = null;
            }
        }
    }
}

function escapeAttr(value) {
    return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function interpolate(template, values = {}) {
    return String(template).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
}

function getLanguage() {
    const setting = appData.settings?.language || 'auto';
    if (setting === 'ja' || setting === 'en') return setting;
    return navigator.language?.toLowerCase().startsWith('ja') ? 'ja' : 'en';
}

function t(key, values) {
    const lang = getLanguage();
    return interpolate(LOCALES[lang]?.[key] ?? LOCALES.ja[key] ?? key, values);
}

function applyStaticTranslations() {
    const lang = getLanguage();
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        element.dataset.i18nAttr.split(';').forEach(pair => {
            const [attr, key] = pair.split(':').map(value => value.trim());
            if (attr && key) element.setAttribute(attr, t(key));
        });
    });
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) languageSelect.value = appData.settings.language || 'auto';
}

function rerenderLocalizedUI() {
    applyStaticTranslations();
    initBoardUI();
    renderSettingsList();
    refreshBoard();
    updateDeckMessage();
    if (document.getElementById('diagnostics')?.classList.contains('active')) renderDiagnostics();
}

function changeLanguage(language) {
    appData.settings.language = ['auto', 'ja', 'en'].includes(language) ? language : 'auto';
    saveAppData();
    rerenderLocalizedUI();
}

function switchTab(tabName) {
    if (document.getElementById('settings').classList.contains('active')) saveSettingsFromDOM();

    updateDeckMessage();
    document.body.dataset.tab = tabName;

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    if (tabName === 'settings') {
        document.querySelector('.tab:nth-child(2)').classList.add('active');
        document.getElementById('settings').classList.add('active');
        renderSettingsList();
    } else if (tabName === 'diagnostics') {
        document.querySelector('.tab:nth-child(3)').classList.add('active');
        document.getElementById('diagnostics').classList.add('active');
        renderDiagnostics();
    } else {
        document.querySelector('.tab:nth-child(1)').classList.add('active');
        document.getElementById('board').classList.add('active');
        refreshBoard();
    }
    updateDeckMessage();
}

function updateDeckMessage() {
    const msg = document.getElementById('deck-message');
    const isSettings = document.getElementById('settings').classList.contains('active');

    if (isSettings) {
        msg.textContent = t('deck.selectInPlan');
        msg.style.color = '#28a745';
    } else if (!selectedJob) {
        msg.textContent = t('deck.selectJob');
        msg.style.color = '#007bff';
    } else {
        msg.textContent = t('deck.selectedJob', { job: jobName(selectedJob) });
        msg.style.color = '#d9534f';
    }
}

function saveBoardState() {
    saveAppData();
    updateBossWeakLabels();
    updateSharePreview();
}

function saveSettingsFromDOM() {
    const rows = document.getElementById('settings-list').children;
    if (rows.length === 0 && members.length > 0) return;

    const nextMembers = members.slice(0, rows.length);
    for (let index = 0; index < rows.length; index++) {
        const displayName = document.getElementById(`name-${index}`)?.value || '';
        nextMembers[index] = {
            id: members[index]?.id || createId('member'),
            displayName,
            jobs: normalizeJobMap(members[index]?.jobs)
        };
    }

    appData.members = nextMembers;
    members = appData.members;
    selectedMemberIds = selectedMemberIds.map(memberId => getMemberById(memberId) ? memberId : null);
    saveAppData();
}

function renderSettingsList() {
    const container = document.getElementById('settings-list');
    container.innerHTML = '';
    members.forEach((member, index) => {
        const div = document.createElement('div');
        div.className = 'member-row';
        const jobCells = JOBS.map(job => {
            const availability = member.jobs[job.id] || 'ng';
            return `<button type="button" class="availability-cell availability-${availability}" onclick="cycleAvailability(${index}, '${job.id}')" aria-label="${jobName(job.id)} ${AVAILABILITY_LABELS[availability]}"><span class="availability-job">${jobShort(job.id)}</span><span class="availability-mark">${AVAILABILITY_LABELS[availability]}</span></button>`;
        }).join('');
        div.innerHTML = `<div class="member-row-header"><input type="text" value="${escapeAttr(member.displayName)}" id="name-${index}" placeholder="${escapeAttr(t('form.displayName'))}" maxlength="15" onchange="saveSettingsFromDOM()"><button class="btn-action del-row" onclick="deleteMember(${index})">${escapeAttr(t('common.delete'))}</button></div><div class="availability-grid">${jobCells}</div>`;
        container.appendChild(div);
    });
}

function addMemberRow() {
    saveSettingsFromDOM();
    members.push({ id: createId('member'), displayName: '', jobs: createEmptyJobMap() });
    appData.members = members;
    renderSettingsList();
    saveAppData();
}

function deleteMember(targetIndex) {
    if (!confirm(t('confirm.deleteMember'))) return;
    const deletedMemberId = members[targetIndex]?.id;
    saveSettingsFromDOM();
    members.splice(targetIndex, 1);
    appData.members = members;
    for (let row = 0; row < 6; row++) {
        if (selectedMemberIds[row] === deletedMemberId) {
            selectedMemberIds[row] = null;
            boardState[row] = Array(TOTAL_BATTLE_COUNT).fill(null);
        }
    }
    saveAppData();
    renderSettingsList();
}

function initBoardUI() {
    const plan = getCurrentPlan();
    const selects = document.querySelectorAll('.boss-select');
    selects.forEach((select, index) => {
        select.innerHTML = BOSS_DATA.map(boss => {
            return `<option value="${boss.id || ''}">${escapeAttr(boss.name)}</option>`;
        }).join('');
        select.value = index < MAIN_FIGHT_COUNT ? plan.fights[index].bossId || '' : plan.bonusBattle.bossId || '';
    });
    updateBossWeakLabels();

    const grid = document.getElementById('battle-grid');
    grid.innerHTML = '';
    for (let row = 0; row < 6; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'grid-row';
        const playerCol = document.createElement('div');
        playerCol.className = 'player-col';
        const playerSelect = document.createElement('select');
        playerSelect.className = 'player-select';
        playerSelect.onchange = event => {
            selectedMemberIds[row] = event.target.value || null;
            validateRowJobs(row);
            saveBoardState();
            refreshBoard();
        };
        playerCol.appendChild(playerSelect);

        const jobsPreview = document.createElement('div');
        jobsPreview.className = 'player-jobs-preview';
        jobsPreview.id = `player-jobs-${row}`;
        playerCol.appendChild(jobsPreview);
        rowDiv.appendChild(playerCol);

        for (let col = 0; col < TOTAL_BATTLE_COUNT; col++) {
            const slot = document.createElement('div');
            slot.className = col === BONUS_COL ? 'job-slot bonus-slot' : 'job-slot';
            slot.id = `slot-${row}-${col}`;
            slot.onclick = () => handleSlotClick(row, col);
            slot.ondragover = event => event.preventDefault();
            slot.ondrop = event => {
                event.preventDefault();
                setJob(row, col, event.dataTransfer.getData('text'));
            };
            rowDiv.appendChild(slot);
        }
        grid.appendChild(rowDiv);
    }
}

function refreshBoard() {
    const selects = document.querySelectorAll('.player-select');
    selects.forEach((select, row) => {
        if (selectedMemberIds[row] && !getMemberById(selectedMemberIds[row])) selectedMemberIds[row] = null;
        const currentMemberId = selectedMemberIds[row];
        let html = `<option value="" ${currentMemberId ? '' : 'selected'}>${escapeAttr(t('form.select'))}</option>`;
        members.forEach(member => {
            const isSelectedElsewhere = selectedMemberIds.some((memberId, rowIndex) => rowIndex !== row && memberId === member.id);
            const disabledAttr = isSelectedElsewhere ? 'disabled style="color:#ccc"' : '';
            const nameLabel = `${member.displayName}${isSelectedElsewhere ? ` (${t('form.selected')})` : ''}`;
            html += `<option value="${member.id}" ${member.id === currentMemberId ? 'selected' : ''} ${disabledAttr}>${escapeAttr(nameLabel)}</option>`;
        });
        select.innerHTML = html;
        select.value = currentMemberId || '';

        const previewDiv = document.getElementById(`player-jobs-${row}`);
        const member = getMemberById(currentMemberId);
        if (member) {
            const mainJobs = formatPreviewJobGroup(member, 'main', 'job-star', '★');
            const okJobs = formatPreviewJobGroup(member, 'ok', 'job-norm', '☆');
            const fillJobs = formatPreviewJobGroup(member, 'fill', 'job-fill', '○');
            previewDiv.innerHTML = `${mainJobs}${okJobs}${fillJobs}`;
        } else {
            previewDiv.textContent = '';
        }
    });

    const usedJobs = new Set();
    boardState.forEach(row => row.slice(0, MAIN_FIGHT_COUNT).forEach(jobId => { if (jobId) usedJobs.add(jobId); }));
    const bonusUsedJobs = new Set();
    boardState.forEach(row => {
        if (row[BONUS_COL]) bonusUsedJobs.add(row[BONUS_COL]);
    });
    for (let row = 0; row < 6; row++) {
        const member = getMemberById(selectedMemberIds[row]);
        for (let col = 0; col < TOTAL_BATTLE_COUNT; col++) {
            const slot = document.getElementById(`slot-${row}-${col}`);
            const currentJob = boardState[row][col];
            slot.innerHTML = currentJob ? jobShort(currentJob) : '';
            slot.className = col === BONUS_COL ? 'job-slot bonus-slot' : 'job-slot';
            if (currentJob) {
                slot.classList.add('has-job');
                if (member) slot.innerHTML += `<span class="slot-mark-master">${availabilityLabel(member, currentJob)}</span>`;
            }
            if (!member) {
                slot.classList.add('disabled');
                continue;
            }
            if (selectedJob) {
                const isGlobalUsed = col === BONUS_COL
                    ? bonusUsedJobs.has(selectedJob) && currentJob !== selectedJob
                    : usedJobs.has(selectedJob) && currentJob !== selectedJob;
                const availability = member.jobs[selectedJob];
                if (!['main', 'ok', 'fill'].includes(availability) || isGlobalUsed) {
                    slot.classList.add('disabled');
                } else if (availability === 'main') {
                    slot.classList.add('target-master');
                } else if (availability === 'fill') {
                    slot.classList.add('target-fill');
                } else {
                    slot.classList.add('target-lv99');
                }
            }
        }
    }
    renderDeck(usedJobs);
    updateSharePreview();
}

function renderDeck(usedJobs = new Set()) {
    const container = document.getElementById('deck-grid');
    container.innerHTML = '';
    JOBS.forEach(job => {
        const button = document.createElement('div');
        button.className = 'job-chip';
        if (usedJobs.has(job.id)) button.classList.add('used');
        if (selectedJob === job.id) button.classList.add('selected');
        button.textContent = jobName(job.id);

        const executeAction = () => {
            if (document.getElementById('settings').classList.contains('active')) {
                return;
            }

            selectedJob = selectedJob === job.id ? null : job.id;
            refreshBoard();
            updateDeckMessage();
        };

        button.addEventListener('touchstart', event => {
            if (event.cancelable) event.preventDefault();
            executeAction();
        }, { passive: false });

        button.addEventListener('mousedown', event => {
            if (document.getElementById('settings').classList.contains('active')) {
                event.preventDefault();
            }
        });

        button.addEventListener('click', executeAction);
        button.draggable = true;
        button.ondragstart = event => {
            event.dataTransfer.setData('text', job.id);
            selectedJob = job.id;
            refreshBoard();
        };
        container.appendChild(button);
    });
}

function handleSlotClick(row, col) {
    if (!selectedMemberIds[row]) return;
    if (selectedJob) setJob(row, col, selectedJob);
    else if (boardState[row][col]) setJob(row, col, null);
}

function setJob(row, col, jobId) {
    const member = getMemberById(selectedMemberIds[row]);
    if (!member) return;
    if (!jobId) {
        boardState[row][col] = null;
        selectedJob = null;
        saveBoardState();
        refreshBoard();
        updateDeckMessage();
        return;
    }
    if (!isJobAvailable(member, jobId)) return;
    const isUsed = col === BONUS_COL
        ? boardState.some((jobs, rowIndex) => jobs[BONUS_COL] === jobId && rowIndex !== row)
        : boardState.some((jobs, rowIndex) => jobs.slice(0, MAIN_FIGHT_COUNT).some((usedJobId, colIndex) => usedJobId === jobId && !(rowIndex === row && colIndex === col)));
    if (isUsed) {
        alert(t('alert.jobUsed', { job: jobShort(jobId) }));
        return;
    }
    boardState[row][col] = jobId;
    selectedJob = null;
    saveBoardState();
    refreshBoard();
    updateDeckMessage();
}

function validateRowJobs(row) {
    const member = getMemberById(selectedMemberIds[row]);
    if (!member) {
        boardState[row] = Array(TOTAL_BATTLE_COUNT).fill(null);
        return;
    }
    for (let col = 0; col < TOTAL_BATTLE_COUNT; col++) {
        const jobId = boardState[row][col];
        if (jobId && !isJobAvailable(member, jobId)) boardState[row][col] = null;
    }
}

function autoFillBoard() {
    if (!confirm(t('confirm.autoFill'))) return;
    const usedJobs = new Set();
    boardState.forEach(row => row.slice(0, MAIN_FIGHT_COUNT).forEach(jobId => { if (jobId) usedJobs.add(jobId); }));

    const emptySlots = [];
    for (let row = 0; row < 6; row++) {
        if (!selectedMemberIds[row]) continue;
        const member = getMemberById(selectedMemberIds[row]);
        const jobCount = jobsByAvailability(member, 'main').length + jobsByAvailability(member, 'ok').length + jobsByAvailability(member, 'fill').length;
        for (let col = 0; col < MAIN_FIGHT_COUNT; col++) {
            if (!boardState[row][col]) emptySlots.push({ row, col, jobCount });
        }
    }

    emptySlots.sort((a, b) => (a.jobCount - b.jobCount) || (Math.random() - 0.5));
    emptySlots.forEach(slot => {
        const member = getMemberById(selectedMemberIds[slot.row]);
        const mainJobs = jobsByAvailability(member, 'main').filter(jobId => !usedJobs.has(jobId));
        const okJobs = jobsByAvailability(member, 'ok').filter(jobId => !usedJobs.has(jobId));
        const fillJobs = jobsByAvailability(member, 'fill').filter(jobId => !usedJobs.has(jobId));
        const pick = mainJobs[0] || okJobs[0] || fillJobs[0] || null;
        if (pick) {
            boardState[slot.row][slot.col] = pick;
            usedJobs.add(pick);
        }
    });
    saveBoardState();
    refreshBoard();
}

function updateBossWeakLabels() {
    document.querySelectorAll('.boss-select').forEach(select => {
        const label = document.getElementById(`${select.id}-weak`);
        if (!label) return;
        const boss = getBossById(select.value || null);
        label.textContent = bossWeak(boss);
    });
}

function resetBoardJobs() {
    if (!confirm(t('confirm.resetJobs'))) return;
    boardState = createEmptyBoard();
    selectedJob = null;
    saveBoardState();
    refreshBoard();
    updateDeckMessage();
}

