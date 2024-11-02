import { expect, test } from '@playwright/test';

const mockPosts = [
  {
    userId: 1,
    id: 1,
    title: 'test 1',
    body: 'test 1 body',
  },
  {
    userId: 1,
    id: 2,
    title: 'test 2',
    body: 'test 2 body',
  },
  {
    userId: 1,
    id: 3,
    title: 'test 3',
    body: 'test 3 body',
  },
];

test.beforeEach(async ({ page }) => {
  await page.route('**/posts', (route) => {
    route.fulfill({ body: JSON.stringify(mockPosts) });
  });

  await page.route('**/posts', async (route) => {
    const response = await route.fetch();
    const json = await response.json();
    json[0].title = 'test 1';
    json[0].body = 'test 1 body';
    route.fulfill({ body: JSON.stringify(json) });
  });

  await page.goto('https://jsonplaceholder.typicode.com/posts');
});

test('shows posts page', async ({ page }) => {
  await expect(page.locator('pre')).toBeInViewport();
});

test('mock posts api', async ({ page }) => {});

test('modify posts API response', async ({ page }) => {
  await expect(page.locator('pre')).toContainText('test 1');
  await expect(page.locator('pre')).toContainText('test 1 body');
});
