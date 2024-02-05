// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
    await page.getByPlaceholder('Search Amazon').fill('macbook');
    await page.getByPlaceholder('Search Amazon').press('Enter');
    await page.pause();
});

