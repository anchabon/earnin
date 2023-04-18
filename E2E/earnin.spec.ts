import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13'],
});

test('test', async ({ page }) => {
  await test.setTimeout(120000);
  await page.goto('https://news.sky.com/', { waitUntil: 'networkidle' });  
  await page.frameLocator('iframe[title="SP Consent Message"]').getByRole('button', { name: 'Accept all' }).click();
  await page.getByTestId('site-header-hamburger').click();
  await page.getByRole('link', { name: 'Weather' }).click();
  await page.getByRole('link', { name: 'London' }).click();
  await page.getByPlaceholder('Type a city name').fill('manchester');
  await page.getByPlaceholder('Type a city name').press('Enter');
  await page.getByRole('link', { name: 'Manchester, Manchester, United Kingdom' }).click(); 
  await page.waitForTimeout(15000);
  await expect(page).toHaveScreenshot('weather.png',{maxDiffPixelRatio:0.00,clip: {x: 0,y: 0,width: 390,height: 600}});
});