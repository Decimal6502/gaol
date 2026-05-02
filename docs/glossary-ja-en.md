# Gaol Tactician 日英用語対照表 / JA-EN Glossary

This document is for Japanese/English UI implementation.

## Basic policy

- Initial UI languages: Japanese and English only.
- Internal IDs must be ASCII/English-like.
- Do not use localized strings in stored data.
- Do not use official FFXI images or icons.
- Use `display name` / `表示名`, not `member name` / `メンバー名`, in privacy-sensitive UI.

## Core UI

| Key | 日本語 | English |
|---|---|---|
| `app.title` | Gaol Tactician | Gaol Tactician |
| `app.subtitle` | シェオル ジェール編成支援 | Odyssey Gaol Planner |
| `tab.plan` | 編成 | Plan |
| `tab.members` | メンバー | Members |
| `tab.share` | 共有 | Share |
| `tab.settings` | 設定 | Settings |
| `common.copy` | コピー | Copy |
| `common.copied` | コピーしました | Copied |
| `common.reset` | リセット | Reset |
| `common.delete` | 削除 | Delete |
| `common.clear` | クリア | Clear |
| `common.save` | 保存 | Save |
| `common.edit` | 編集 | Edit |
| `common.preview` | プレビュー | Preview |
| `common.download` | ダウンロード | Download |
| `common.warning` | 警告 | Warning |
| `common.error` | エラー | Error |

## FFXI / Odyssey terms

| Key | 日本語 | English | Internal |
|---|---|---|---|
| `content.odyssey` | オデシー | Odyssey | `odyssey` |
| `content.sheolGaol` | シェオル ジェール | Sheol: Gaol | `sheol_gaol` |
| `content.gaol` | ジェール | Gaol | `gaol` |
| `content.atonement` | アトーンメント | Atonement | `atonement` |
| `content.vengeance` | Veng | Vengeance | `vengeance` |
| `content.veng` | Veng | Veng | `veng` |
| `content.rp` | RP | RP | `rp` |
| `content.moogleSegments` | モグセグメント | Moogle Segments | `moogle_segments` |
| `content.moglophoneII` | モグパケットII | Moglophone II | `moglophone_ii` |
| `content.supportJobDisabled` | サポートジョブ無効 | Support Job Disabled | `support_job_disabled` |
| `content.trust` | フェイス | Trust | `trust` |
| `content.level99` | Lv99 | Lv. 99 | `level_99` |
| `content.master` | マスター | Master | `master` |

## Jobs

| jobId | 日本語短縮 | 日本語正式名 | English Abbrev. | English Full Name |
|---|---:|---|---|---|
| `WAR` | 戦 | 戦士 | WAR | Warrior |
| `MNK` | モ | モンク | MNK | Monk |
| `WHM` | 白 | 白魔道士 | WHM | White Mage |
| `BLM` | 黒 | 黒魔道士 | BLM | Black Mage |
| `RDM` | 赤 | 赤魔道士 | RDM | Red Mage |
| `THF` | シ | シーフ | THF | Thief |
| `PLD` | ナ | ナイト | PLD | Paladin |
| `DRK` | 暗 | 暗黒騎士 | DRK | Dark Knight |
| `BST` | 獣 | 獣使い | BST | Beastmaster |
| `BRD` | 詩 | 吟遊詩人 | BRD | Bard |
| `RNG` | 狩 | 狩人 | RNG | Ranger |
| `SAM` | 侍 | 侍 | SAM | Samurai |
| `NIN` | 忍 | 忍者 | NIN | Ninja |
| `DRG` | 竜 | 竜騎士 | DRG | Dragoon |
| `SMN` | 召 | 召喚士 | SMN | Summoner |
| `BLU` | 青 | 青魔道士 | BLU | Blue Mage |
| `COR` | コ | コルセア | COR | Corsair |
| `PUP` | か | からくり士 | PUP | Puppetmaster |
| `DNC` | 踊 | 踊り子 | DNC | Dancer |
| `SCH` | 学 | 学者 | SCH | Scholar |
| `GEO` | 風 | 風水士 | GEO | Geomancer |
| `RUN` | 剣 | 魔導剣士 | RUN | Rune Fencer |

## Job availability

| Value | Mark | 日本語 | English |
|---|---:|---|---|
| `ng` | - | 不可 | Unavailable |
| `main` | ◎ | 主力 | Main |
| `ok` | ○ | 可 | Usable |
| `fill` | △ | ルール用 | Filler |

## Roles

| roleId | 日本語 | English |
|---|---|---|
| `tank` | 盾 | Tank |
| `healer` | 回復 | Healer |
| `support` | 支援 | Support |
| `melee` | 近接 | Melee |
| `ranged` | 遠隔 | Ranged |
| `magic` | 魔法 | Magic |
| `nuker` | 精霊 | Nuker |
| `debuffer` | 弱体 | Debuffer |
| `buffer` | 強化 | Buffer |
| `dd` | 火力 | Damage Dealer |
| `wildcard` | 自由枠 | Flex |

## Bosses

| bossId | Display | Atonement |
|---|---|---:|
| `dealan_dhe` | Dealan-dhe | 1 |
| `sgili` | Sgili | 1 |
| `u_bnai` | U Bnai | 1 |
| `gogmagog` | Gogmagog | 2 |
| `aristaeus` | Aristaeus | 2 |
| `marmorkrebs` | Marmorkrebs | 2 |
| `gigelorum` | Gigelorum | 2 |
| `procne` | Procne | 3 |
| `henwen` | Henwen | 3 |
| `xevioso` | Xevioso | 3 |
| `ngai` | Ngai | 3 |
| `kalunga` | Kalunga | 3 |
| `ongo` | Ongo | 3 |
| `mboze` | Mboze | 3 |
| `arebati` | Arebati | 3 |
| `bumba` | Bumba | 4 |

## Planning board

| Key | 日本語 | English |
|---|---|---|
| `plan.title` | 編成プラン | Battle Plan |
| `plan.fight1` | 1戦目 | Fight 1 |
| `plan.fight2` | 2戦目 | Fight 2 |
| `plan.fight3` | 3戦目 | Fight 3 |
| `plan.boss` | ボス | Boss |
| `plan.selectBoss` | ボスを選択 | Select Boss |
| `plan.displayName` | 表示名 | Display Name |
| `plan.job` | ジョブ | Job |
| `plan.emptySlot` | 未設定 | Empty |
| `plan.lockSlot` | 固定 | Lock |
| `plan.clearSlot` | 枠をクリア | Clear Slot |
| `plan.resetPlan` | 編成をリセット | Reset Plan |
| `plan.generateCandidates` | 候補を生成 | Generate Candidates |

## Share/export UI

| Key | 日本語 | English |
|---|---|---|
| `share.title` | 共有 | Share |
| `share.nameMode` | 共有名 | Share Names |
| `share.nameModeAnonymous` | A/B/C形式 | A/B/C |
| `share.nameModeDisplay` | 登録表示名 | Display Names |
| `share.nameModeCustom` | 共有用表示名 | Custom Share Names |
| `share.textPreview` | テキストプレビュー | Text Preview |
| `share.copyText` | テキストをコピー | Copy Text |
| `share.imagePreview` | 編成表プレビュー | Battle Table Preview |
| `share.downloadPng` | PNGダウンロード | Download PNG |
| `share.noShareUrl` | 共有URLは使用しません | Share URLs are not used |

## Backup

| Key | 日本語 | English |
|---|---|---|
| `backup.title` | バックアップ | Backup |
| `backup.exportJson` | JSONバックアップを出力 | Export JSON Backup |
| `backup.importJson` | JSONバックアップを読み込み | Import JSON Backup |
| `backup.replaceData` | 現在のデータを置き換える | Replace Current Data |
| `backup.containsPrivateData` | このバックアップには表示名とジョブ可否情報が含まれます | This backup includes display names and job availability data |
| `backup.keepSafe` | 信頼できる場所にのみ保存してください | Store it only in a trusted location |
| `backup.invalidJson` | JSON形式が正しくありません | Invalid JSON |
| `backup.versionMismatch` | 対応していないバックアップ形式です | Unsupported backup version |

## Diagnostics

| Key | 日本語 | English |
|---|---|---|
| `diagnostics.title` | 診断 | Diagnostics |
| `diagnostics.noIssues` | 問題は見つかりません | No issues found |
| `diagnostics.duplicateJob` | ジョブが重複しています | Duplicate job detected |
| `diagnostics.jobUnavailable` | この表示名では選択できないジョブです | This job is unavailable for this display name |
| `diagnostics.emptySlot` | 未設定の枠があります | There are empty slots |
| `diagnostics.noBoss` | ボスが未設定です | Boss is not selected |
| `diagnostics.insufficientJobs` | 使用可能ジョブが不足しています | Not enough available jobs |

## Share text examples

### Japanese

```text
【Gaol Plan】
表示: 匿名

1戦目: Ongo
A: 剣
B: 白
C: 黒
D: 学
E: 風
F: コ

2戦目: Kalunga
A: ナ
B: 赤
C: 戦
D: 詩
E: 竜
F: 青

3戦目: Mboze
A: 忍
B: 召
C: 暗
D: 狩
E: 踊
F: モ

重複ジョブ: なし
```

### English

```text
[Gaol Plan]
Names: Anonymous

Fight 1: Ongo
A: RUN
B: WHM
C: BLM
D: SCH
E: GEO
F: COR

Fight 2: Kalunga
A: PLD
B: RDM
C: WAR
D: BRD
E: DRG
F: BLU

Fight 3: Mboze
A: NIN
B: SMN
C: DRK
D: RNG
E: DNC
F: MNK

Duplicate jobs: none
```

## Codex notes

- Do not hardcode UI strings in HTML.
- A `locales.js` approach is enough initially.
- Do not use Japanese labels as internal IDs.
- Do not implement share URL in the current phase.
- Do not include full member job data in text/PNG exports.
