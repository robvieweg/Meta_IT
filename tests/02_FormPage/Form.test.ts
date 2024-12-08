import { test, expect } from '@playwright/test';
import { loginToDashboard } from '../01_LoginPage/loginValid';

let formPage;
let savedDataForm;
let testName = 'Tester Testovič';
let testEmail = 'testmail@gmail.com';
let testMessage = 'Toto je testovací zpráva.';

test.beforeEach(async ({ browser, page }) => {
    browser.newContext,
    await page.goto('http://localhost:3000/', {
        waitUntil: 'domcontentloaded',
        
    });
    await loginToDashboard(page);

    await page.click("//button[text()='Go to Form Page']");

    formPage = page.locator("//div[@class='form-page']")
    await expect(formPage).toBeVisible();

    savedDataForm = page.locator('//div[@class="saved-data"]');
});

test('Test Case 2.1: Submit Form with Missing Data', async ({ page }) => {
    await page.click("//button[@type='submit']")
    await expect(savedDataForm).toContainText('No data saved yet');
});

test('Test Case 2.2: Submit Form with Valid Data', async ({ page }) => {
    await formPage.locator("//input[@type='text']").fill(testName);
    await formPage.locator("//input[@type='email']").fill(testEmail);
    await formPage.locator("//textarea[@id='message']").fill(testMessage);

    await page.click("//button[@type='submit']")

    await expect(savedDataForm).toContainText(testName);
    await expect(savedDataForm).toContainText(testEmail);
    await expect(savedDataForm).toContainText(testMessage);

});