import {test, expect} from '@playwright/test'; //to import playwright

test ('E2E - Registration - error message', async ({page})) => {
    await page.goto('https://www.veeam.com/');

//check that the page has loaded - accepting cookies not necessary
await page.expect(companyName).toBeVisible;

await page.locator('//a[@class='main-navigation__item-title'][contains(text(), 'Support')]').hover(); //možná k těm xpathům musíš nějak escapovat lomítka

await page.goto('//a[@class='div[@class='main-navigation__submenu']a[text()='R&D Forums']');

await page.expect('//div[@class='site-description']/h1[text()='R&D Forums']');

await page.goto('//span[text()='Login']');



}





