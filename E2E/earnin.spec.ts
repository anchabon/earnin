import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://news.sky.com/');
  await page.frameLocator('iframe[title="SP Consent Message"]').getByRole('button', { name: 'Accept all' }).click();
  await page.getByTestId('site-header-more-nav-button').click();
  await page.getByTestId('site-header-more-nav').getByText('Weather').click();
  await page.getByRole('link', { name: 'London' }).click();
  await page.getByPlaceholder('Type a city name').fill('manchester');
  await page.getByPlaceholder('Type a city name').press('Enter');
  await page.getByRole('link', { name: 'Manchester, Manchester, United Kingdom' }).click();
//   await page.getByText('5pm').click();
//   await page.getByText('9°C').nth(2).click();
});