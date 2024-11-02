import { test as setup } from '@playwright/test';

const authFile = '.auth/user.json';

setup('Authentication setup', async ({ page, request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
  );
  const data = await response.json();

  await page.context().storageState({ path: authFile });
});
