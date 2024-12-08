import { test, expect } from '@playwright/test';
import { loginToDashboard } from '../01_LoginPage/loginValid';

let buttonPage;
let pressMeButtonBlue;
let pressMeButtonGreen;
let pressedButtonText;

test.beforeEach(async ({ browser, page }) => {
    browser.newContext,
    await page.goto('http://localhost:3000/', {
        waitUntil: 'domcontentloaded',
        
    });
    await loginToDashboard(page);

    await page.click("//button[text()='Go to Button Interaction']");

    buttonPage = page.locator("//h2[text()='Button Interaction']");
    pressMeButtonBlue = page.locator("//button[text()='Press Me' and contains(@style, 'background-color: blue')]")
    pressMeButtonGreen = page.locator("//button[text()='Press Me' and contains(@style, 'background-color: green')]")
    pressedButtonText = page.locator("//p[text()='Button has been pressed']")
});

test('Test Case 3.1: Button Color Changes After Click', async ({ page }) => {
    await expect(buttonPage).toBeVisible();

    for (let i = 0; i < 2; i++) {
        await pressMeButtonBlue.click();
        await expect(pressMeButtonGreen).toBeVisible();
        await expect(pressedButtonText).toBeVisible();

        await pressMeButtonGreen.click();
        await expect(pressMeButtonBlue).toBeVisible();
        await expect(pressedButtonText).toBeVisible();
    }
});