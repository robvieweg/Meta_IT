import { test, expect } from '@playwright/test';
import { loginToDashboard } from '../01_LoginPage/loginValid';

let checkboxPage;
let switchButton;
let switchIsOff;
let switchIsOn;

test.beforeEach(async ({ browser, page }) => {
    browser.newContext,
    await page.goto('http://localhost:3000/', {
        waitUntil: 'domcontentloaded',
        
    });
    await loginToDashboard(page);

    await page.click("//button[text()='Go to CheckBox Interaction']");

    checkboxPage = page.locator("//h2[text()='Switch Interaction']");
    switchButton = page.locator("//input[@type='checkbox']");
    switchIsOff = page.locator("//p[text()='The switch is OFF!']");
    switchIsOn = page.locator("//p[text()='The switch is ON!']");
});

test('Test Case 4.1: Checkbox Toggling', async ({ page }) => {
    await expect(checkboxPage).toBeVisible();

    for (let i = 0; i < 2; i++) {
        await switchButton.click();
        await expect(switchIsOn).toBeVisible();

        await switchButton.click();
        await expect(switchIsOff).toBeVisible();
    }
});