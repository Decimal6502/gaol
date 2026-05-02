# Codex Prompts

Use these prompts with local Codex app. Prefer one task per run.

## Prompt 1: Repository preparation and path audit

```text
このリポジトリはFFXI Odyssey Gaol向けのスマホファースト静的Webアプリです。
AGENTS.md と docs/ を読んで、まず現在の構成とパス前提を調査してください。

重要:
- 旧URLは https://decimal6502.github.io/ffxi/
- 新しい公開ゴールは https://decimal6502.github.io/gaol/
- /ffxi/ を前提にしたパスや文言があれば洗い出す
- 共有URLと閲覧専用ページは現在のプランから外す

出力:
- 現在の構成
- 問題になりそうな箇所
- 最初に変更すべきファイル
- 実装前の短い計画
```

## Prompt 2: Split HTML/CSS/JS

```text
AGENTS.md と docs/refactor-plan.md に従って、現在の単一HTML構成を分割してください。

目的:
- index.html は構造だけに近づける
- CSSを styles/ に分離
- JSを src/ に分離
- GitHub Pagesの /gaol/ サブパスで相対パスが壊れないようにする
- 動作は可能な限り現状維持

制約:
- ビルドステップは追加しない
- 外部ライブラリを追加しない
- 共有URLは実装しない
- 閲覧専用ページは実装しない
- 作業後に手動確認手順を書いてください
```

## Prompt 3: Data model v2

```text
docs/data-model-v2.md に従って、AppData v2 / ShareViewPlan / ExportData v2 を実装してください。

要件:
- localStorage key は gt_app_data_v2
- 既存localStorage移行は不要
- members / plans / templates / settings を分離
- 共有URL用の SharedPlan は作らない
- ShareViewPlan はテキスト出力とPNG出力用の一時データとしてだけ使う
- バックアップ処理は src/backup.js に分離
```

## Prompt 4: Member matrix UI

```text
メンバー設定画面を、文字列入力方式からジョブ可否マトリクス方式に変更してください。

状態:
- "-" = ng
- "◎" = main
- "○" = ok
- "△" = fill

操作:
- セルをクリック/タップするたびに - → ◎ → ○ → △ → - と切り替える
- スマホ幅390pxで使いやすくする
- 内部値は docs/data-model-v2.md の JobAvailability に合わせる
- 「メンバー名」ではなく「表示名」を使う
- 保存は localStorage の AppData v2 に行う
```

## Prompt 5: Planning board and validation

```text
3戦分の編成ボードを AppData v2 に対応させてください。

要件:
- 3つの bossId を選択できる
- 6人分の slot を表示できる
- 各slotに memberId と jobId を設定する
- 同一jobIdが3戦内で重複したら診断パネルに警告
- memberが出せないjobIdを割り当てたら警告
- main / ok / fill を見た目で区別
- 色だけでなく記号も使う
```

## Prompt 6: Text export

```text
テキストプレビューとクリップボードコピーを実装してください。

要件:
- ShareViewPlan を生成する
- 日本語/英語のテキストを出力できる
- デフォルトの共有名は A/B/C/D/E/F
- 登録表示名を使う場合は明示選択にする
- 出力には現在の編成のみを含める
- 全メンバーのジョブ可否表や過去プランは含めない
- clipboard API を使い、失敗時は手動コピーできるようにする
```

## Prompt 7: PNG export

```text
編成表プレビューとPNGダウンロードを実装してください。

要件:
- ShareViewPlan を元にCanvasへ直接描画する
- html2canvasなどの外部ライブラリは使わない
- PNGサイズは概ね 1200px 幅で見やすくする
- デフォルトの共有名は A/B/C/D/E/F
- 登録表示名を使う場合は明示選択にする
- 出力には現在の編成のみを含める
- PNGダウンロードボタンを追加する
```

## Prompt 8: JSON export/import

```text
JSON backup export/importを実装してください。

要件:
- ExportData v2形式で出力
- インポート時は「現在のデータを置換」方式でよい
- 不正JSONやversion不一致は分かりやすくエラー表示
- インポート後に画面を再描画
- エクスポート/インポート前に、表示名とジョブ可否情報が含まれる警告を表示
- スマホでも操作しやすいUIにする
```

## Prompt 9: PWA under /gaol/

```text
この静的WebアプリをPWA化してください。

要件:
- manifest.webmanifest を追加
- service-worker.js を追加
- GitHub Pagesの /gaol/ サブパスでも壊れない相対パス
- start_url と scope は ./ を基本にする
- 主要ファイルをキャッシュ
- アイコンが未作成の場合は assets/icons/README.md に必要サイズを書いてください
- PWA化後の確認手順を書いてください
```

## Prompt 10: Simple auto-planner

```text
簡易自動候補生成を追加してください。

最初は高機能にしすぎないでください。

要件:
- 現在の空欄slotを候補で埋める案を最大10件出す
- 同一jobIdの重複は禁止
- memberのavailabilityが ng のjobは使わない
- scoreは main > ok > fill
- 候補を選ぶと現在のplanへ反映
- ロジックは src/planner.js に分離
```
