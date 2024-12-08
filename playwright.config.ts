import { defineConfig } from '@playwright/test';
import { cpus } from "os";

export default defineConfig({
    testDir: "./tests",
    workers: cpus().length, 
    use: {
        headless: false, 
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        screenshot: "on",
        trace: "on",
    },
    projects: [
        {
            name: "Chromium Desktop",
            use: {
                browserName: "chromium",
                headless: false,
            },
        },
    ],
    reporter: [
        ['list'], //výstup v konzoli
        ['json', { outputFile: 'test-results/test-results.json' }] //výstup ve file
    ],
});