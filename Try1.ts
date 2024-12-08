import {test, expect} from '@playwright/test'; //to import playwright

test ('E2E - Registration - error message', async ({page})) => {
    await.page.goto('https://www.veeam.com/');
    await.expect(page).
}

//check that the page has loaded - accepting cookies not necessary
await.page.expect('//span[text()='©2024 Veeam® Software']');

await.page.locator('//a[@class='main-navigation__item-title'][contains(text(), 'Support')]').hover();

await.page.goto('//a[@class='main-navigation__item-title'][contains(text(), 'Support')]');

pak v tom otevřeném menu jít daál