import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://uitestingplayground.com/ajax');
  await page.getByText('Button Triggering AJAX Request').click();
});

test('auto waiting', async ({ page }) => {
  const successButton = await page.locator('.bg-success');
  //   await successButton.click();

  await successButton.waitFor({ state: 'attached' });
  const text = await successButton.allTextContents();
  expect(text).toContain('Data loaded with AJAX get request.');
});

test('alternative syntax', async ({ page }) => {
  const successButton = await page.locator('.bg-success');

  //   wait for element
  //   await page.waitForSelector('.bg-success');

  //   wait for API response
  await page.waitForResponse('http://uitestingplayground.com/ajaxdata');
  const text = await successButton.allTextContents();
  expect(text).toContain('Data loaded with AJAX get request.');
});
