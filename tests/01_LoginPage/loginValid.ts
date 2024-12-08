import { expect, Page } from '@playwright/test';

export async function loginToDashboard(page: Page) {
    const loginPage = page.locator("//h2[text()='Login']");
    await expect(loginPage).toBeVisible();

    await page.fill("//input[@type='text']", 'admin');
    await page.fill("//input[@type='password']", 'admin321');

    await page.click("//button[@type='submit']");

    const dashboardPage = page.locator("//h2[text()='Here is your dashboard']");
    await expect(dashboardPage).toBeVisible();
}