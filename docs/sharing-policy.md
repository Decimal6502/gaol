# Sharing and Export Policy

## Current decision

Share URLs and read-only viewer pages are removed from the current plan.

Required features:

```text
1. Text preview -> clipboard copy
2. Battle table preview -> PNG download
3. JSON backup -> manual save/import
```

## Not implemented in this phase

- share URL generation
- read-only viewer page
- `index.html?s=...`
- URL encode/decode of plan data
- remote storage
- login/account sync

## Text preview

The app should generate readable text from the current plan.

Default labels should be anonymized:

```text
A / B / C / D / E / F
```

Example Japanese output:

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

Example English output:

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

## PNG export

Use direct Canvas drawing, not a DOM screenshot library, unless explicitly requested.

Flow:

```text
ShareViewPlan
↓
draw to canvas
↓
canvas.toBlob()
↓
download PNG
```

Recommended output:

```text
width: 1200px
height: around 900px
format: PNG
background: white or light gray
filename: gaol-plan-YYYY-MM-DD.png
```

## JSON backup

JSON backup is for the user's own manual save/restore.

It may include full local data.

Before export/import, show a warning:

```text
This backup includes display names and job availability data.
Store it only in a trusted location.
```

## Privacy

Text and PNG exports must include only the current plan, not:

- full member job availability database
- past plans
- templates
- settings
- internal local IDs
