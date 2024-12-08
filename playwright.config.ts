import { defineConfig } from '@playwright/test';
import { cpus } from "os";

export default defineConfig({
    testDir: "./tests", // Path to the test directory
    workers: cpus().length, // Number of workers based on CPU cores
    use: {
        headless: false, 
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        screenshot: "on", // Enable screenshots
        trace: "on", // Enable trace for debugging
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
        ['list'], // Console output
        ['json', { outputFile: 'test-results/test-results.json' }]
    ],
});