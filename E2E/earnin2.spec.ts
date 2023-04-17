import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {
  await page.goto('https://news.sky.com/');
  await page.frameLocator('iframe[title="SP Consent Message"]').getByRole('button', { name: 'Accept all' }).click();
  await page.getByTestId('site-header-hamburger').click();
  await page.getByRole('link', { name: 'Weather' }).click();
  await page.getByRole('link', { name: 'London' }).click();
  await page.getByPlaceholder('Type a city name').fill('manchester');
  await page.getByPlaceholder('Type a city name').press('Enter');
  await page.getByRole('link', { name: 'Manchester, Manchester, United Kingdom' }).click();
  await expect(page).toHaveScreenshot();
  //await page.screenshot({ path: 'screenshot.png' });
});

