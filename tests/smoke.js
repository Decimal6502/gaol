const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');
const { chromium } = require('playwright');

const repoRoot = path.resolve(__dirname, '..');
const servedRoot = path.dirname(repoRoot);
const servedRootPrefix = servedRoot.endsWith(path.sep) ? servedRoot : servedRoot + path.sep;
const routePrefix = `/${path.basename(repoRoot)}/`;
const targetUrl = process.env.SMOKE_URL;
const mimeTypes = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.md': 'text/markdown; charset=utf-8',
    '.png': 'image/png',
    '.webmanifest': 'application/manifest+json; charset=utf-8'
};

function createStaticServer() {
    return http.createServer((request, response) => {
        const url = new URL(request.url, 'http://127.0.0.1');
        let pathname = decodeURIComponent(url.pathname);
        if (pathname === routePrefix) pathname += 'index.html';
        const filePath = path.resolve(servedRoot, `.${pathname}`);
        if (!filePath.startsWith(servedRootPrefix)) {
            response.writeHead(403);
            response.end('Forbidden');
            return;
        }
        fs.readFile(filePath, (error, data) => {
            if (error) {
                response.writeHead(404);
                response.end('Not found');
                return;
            }
            response.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream' });
            response.end(data);
        });
    });
}

function listen(server) {
    return new Promise(resolve => {
        server.listen(0, '127.0.0.1', () => resolve(server.address().port));
    });
}

function jobMap(jobs) {
    return Object.fromEntries(jobs.map(job => [job, 'main']));
}

function completeFixture() {
    const jobs = ['WAR', 'MNK', 'WHM', 'BLM', 'RDM', 'THF', 'PLD', 'DRK', 'BST', 'BRD', 'RNG', 'SAM', 'NIN', 'DRG', 'SMN', 'BLU', 'COR', 'PUP', 'DNC', 'SCH', 'GEO', 'RUN'];
    const members = Array.from({ length: 6 }, (_, index) => ({
        id: `m${index + 1}`,
        displayName: `P${index + 1}`,
        jobs: jobMap(jobs)
    }));
    const slots = offset => Array.from({ length: 6 }, (_, index) => ({
        memberId: `m${index + 1}`,
        jobId: jobs[offset + index]
    }));
    return {
        version: 2,
        members,
        plans: [{
            id: 'current-plan',
            name: 'Smoke Plan',
            fights: [
                { bossId: 'ongo', slots: slots(0) },
                { bossId: 'kalunga', slots: slots(6) },
                { bossId: 'mboze', slots: slots(12) }
            ],
            bonusBattle: { bossId: 'bumba', slots: slots(0) },
            updatedAt: new Date().toISOString()
        }],
        templates: [],
        settings: {
            language: 'ja',
            theme: 'system',
            jobLabelMode: 'full',
            shareNameMode: 'anonymous'
        },
        currentPlanId: 'current-plan'
    };
}

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

(async () => {
    const server = targetUrl ? null : createStaticServer();
    const port = server ? await listen(server) : null;
    const url = targetUrl || `http://127.0.0.1:${port}${routePrefix}`;
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ acceptDownloads: true, viewport: { width: 390, height: 844 } });
    const origin = new URL(url).origin;
    await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin });
    const page = await context.newPage();
    const errors = [];
    const failedRequests = [];
    page.on('console', message => {
        if (['error', 'warning'].includes(message.type())) errors.push(`${message.type()}: ${message.text()}`);
    });
    page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
    page.on('requestfailed', request => failedRequests.push(`${request.url()} ${request.failure()?.errorText || ''}`));

    try {
        await page.goto(url, { waitUntil: 'networkidle' });
        assert(page.url().includes('/gaol/'), `Expected /gaol/ URL, got ${page.url()}`);
        assert(await page.title() === 'Gaol Tactician', 'Page title did not load');
        assert(await page.locator('button.btn-copy-text').count() === 1, 'App JS did not initialize expected controls');
        assert(await page.locator('.tabs').evaluate(element => getComputedStyle(element).position) === 'sticky', 'CSS did not apply');
        assert(!page.url().includes('/ffxi/'), 'Navigated to old /ffxi/ path');

        await page.evaluate(fixture => localStorage.setItem('gt_app_data_v2', JSON.stringify(fixture)), completeFixture());
        await page.reload({ waitUntil: 'networkidle' });

        await page.click('button.btn-copy-text');
        const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
        assert(clipboardText.includes('【Gaol Plan】'), 'Clipboard text was not copied');

        const pngDownloadPromise = page.waitForEvent('download');
        await page.click('button.btn-download');
        const pngDownload = await pngDownloadPromise;
        const pngPath = await pngDownload.path();
        const pngHeader = fs.readFileSync(pngPath).subarray(0, 8).toString('hex');
        assert(pngHeader === '89504e470d0a1a0a', 'PNG download is not a valid PNG');

        page.once('dialog', dialog => dialog.accept());
        const jsonDownloadPromise = page.waitForEvent('download');
        await page.click('button.btn-backup');
        const jsonDownload = await jsonDownloadPromise;
        const exportedJson = JSON.parse(fs.readFileSync(await jsonDownload.path(), 'utf8'));
        assert(exportedJson.version === 2, 'JSON export did not include version 2 data');

        const importPath = path.join(os.tmpdir(), 'gaol-smoke-import.json');
        exportedJson.members[0].displayName = 'ImportCheck';
        fs.writeFileSync(importPath, JSON.stringify(exportedJson, null, 2));
        page.once('dialog', dialog => dialog.accept());
        await page.setInputFiles('#json-import-input', importPath);
        await page.waitForTimeout(300);
        await page.click('text=メンバー');
        assert(await page.locator('input[value="ImportCheck"]').count() === 1, 'JSON import did not update display names');

        await page.click('text=診断');
        await page.waitForTimeout(300);
        const diagnostics = await page.locator('#diagnostics').innerText();
        assert(diagnostics.includes('このアプリは手入力用の外部メモツールです。'), 'Japanese external-tool notice is missing');
        assert(diagnostics.includes('13') && diagnostics.includes('OK'), 'Diagnostics did not report completed OK state');

        await page.evaluate(() => {
            const stored = JSON.parse(localStorage.getItem('gt_app_data_v2'));
            stored.settings.language = 'en';
            localStorage.setItem('gt_app_data_v2', JSON.stringify(stored));
        });
        await page.reload({ waitUntil: 'networkidle' });
        await page.click('text=Diagnostics');
        assert((await page.locator('#diagnostics').innerText()).includes('This app is an external memo tool for manual entry.'), 'English external-tool notice is missing');

        const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
        assert(!overflow, '390px viewport has horizontal overflow');
        assert(errors.length === 0, `Console errors/warnings found:\n${errors.join('\n')}`);
        assert(failedRequests.length === 0, `Failed requests found:\n${failedRequests.join('\n')}`);

        console.log(`Smoke OK: ${url}`);
    } finally {
        await browser.close();
        if (server) server.close();
    }
})().catch(error => {
    console.error(error);
    process.exit(1);
});
