import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://jsonplaceholder.typicode.com/posts');
});

test('shows posts page', async ({ page }) => {
  await expect(
    page.locator('[class="json-formatter-container"]'),
  ).toBeInViewport();
});
