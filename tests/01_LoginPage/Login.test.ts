import { test, expect } from '@playwright/test';
import { loginToDashboard } from './loginValid';

// This is a setup step to run before each test.
test.beforeEach(async ({ browser, page }) => {
    browser.newContext,
    await page.goto('http://localhost:3000/', {
        waitUntil: 'domcontentloaded',
    });
});

test('Test Case 1.1: Login with Valid Credentials', async ({ page }) => {
    await loginToDashboard(page);
});

test('Test Case 1.2: Login with Invalid Credentials', async ({ page }) => {
    const loginPage = page.locator("//h2[text()='Login']");
    await expect(loginPage).toBeVisible();

    await page.fill("//input[@type='text']", 'test');
    await page.fill("//input[@type='password']", 'testovič');

    await page.click("//button[@type='submit']");

    const invalidCredentialsError = page.locator("//p[@class='error'][text()='Invalid credentials. Please try again.']");
    await expect(invalidCredentialsError).toBeVisible();
});

test('Test Case 1.3: Login with Missing Credentials', async ({ page }) => {
    const loginPage = page.locator("//h2[text()='Login']");
    await expect(loginPage).toBeVisible();

    await page.fill("//input[@type='text']", '');
    await page.fill("//input[@type='password']", '');

    await page.click("//button[@type='submit']");

    await expect(loginPage).toBeVisible();
});