# Data Model v2

## Design summary

Use:

- `AppData v2`: local editable app data
- `ShareViewPlan`: generated view model for text/PNG output
- `ExportData v2`: manual JSON backup

Do not implement URL share data in this phase.

## Job IDs

Use stable English-like IDs internally and display Japanese labels separately.

Example:

```js
const JOBS = [
  { id: "WAR", shortJa: "戦", nameJa: "戦士", shortEn: "WAR", nameEn: "Warrior" },
  { id: "RUN", shortJa: "剣", nameJa: "魔導剣士", shortEn: "RUN", nameEn: "Rune Fencer" }
];
```

## AppData v2

Editable local app data.

```ts
type AppData = {
  version: 2;
  members: Member[];
  plans: Plan[];
  templates: BossTemplate[];
  settings: AppSettings;
  currentPlanId: string | null;
};

type Member = {
  id: string;
  displayName: string;
  jobs: Record<JobId, JobAvailability>;
};

type JobAvailability = "main" | "ok" | "fill" | "ng";

type Plan = {
  id: string;
  name: string;
  fights: [Fight, Fight, Fight];
  updatedAt: string;
};

type Fight = {
  bossId: BossId | null;
  slots: Slot[];
};

type Slot = {
  memberId: string | null;
  jobId: JobId | null;
  locked?: boolean;
};

type BossTemplate = {
  bossId: BossId;
  roles: RoleRequirement[];
};

type RoleRequirement = {
  role: RoleId;
  count: number;
  preferredJobs: JobId[];
};

type AppSettings = {
  language: "auto" | "ja" | "en";
  theme: "light" | "dark" | "system";
  jobLabelMode: "short" | "full";
  shareNameMode: "anonymous" | "display" | "custom";
};
```

## ShareViewPlan

Generated from `AppData` and the current `Plan`.

Used only for:
- text preview
- clipboard copy
- battle table preview
- PNG download

It is not stored in localStorage and is not encoded into URLs.

```ts
type ShareViewPlan = {
  title: string;
  language: "ja" | "en";
  nameMode: "anonymous" | "display" | "custom";
  fights: ShareFight[];
  diagnostics: ShareDiagnostics;
};

type ShareFight = {
  bossId: BossId | null;
  assignments: ShareAssignment[];
};

type ShareAssignment = {
  label: string;      // A/B/C/D/E/F or displayName/custom label
  jobId: JobId | null;
  grade?: "main" | "ok" | "fill";
};

type ShareDiagnostics = {
  duplicateJobs: JobId[];
  emptySlots: number;
  warnings: string[];
};
```

## ExportData v2

Manual JSON backup.

```ts
type ExportData = {
  version: 2;
  app: "Gaol Tactician";
  exportedAt: string;
  data: AppData;
};
```

## LocalStorage key

Use:

```text
gt_app_data_v2
```

No migration from old keys is required.

## Do not store

Do not store or ask for:

- real names
- email addresses
- phone numbers
- Discord IDs
- X/Twitter IDs
- LINE IDs
- addresses
- any contact information
