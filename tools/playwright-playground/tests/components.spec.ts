import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

test.describe('Form layout page', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
  });

  test('input fields', async ({ page }) => {
    const usingTheGridCard = await page.locator('nb-card').filter({
      hasText: 'Using the Grid',
    });
    const emailField = await usingTheGridCard.getByRole('textbox', {
      name: 'Email',
    });

    await emailField.fill('test@gmail.com');
    await emailField.clear();
    await emailField.pressSequentially('test@gmail.com', { delay: 500 });

    // Generic assertion
    const inputValue = await emailField.inputValue();
    expect(inputValue).toBe('test@gmail.com');

    // Locator assertion
    await expect(emailField).toHaveValue('test@gmail.com');
  });

  test('radio buttons', async ({ page }) => {
    const usingTheGridCard = await page.locator('nb-card').filter({
      hasText: 'Using the Grid',
    });

    const firstRadioOption = await usingTheGridCard.getByLabel('Option 1');
    const secondRadioOption = await usingTheGridCard.getByLabel('Option 2');

    await firstRadioOption.check({ force: true });

    await expect(firstRadioOption.isChecked()).toBeTruthy();

    await secondRadioOption.check({ force: true });

    expect(await firstRadioOption.isChecked()).toBe(false);
    expect(await secondRadioOption.isChecked()).toBe(true);
    await expect(firstRadioOption).not.toBeChecked();
  });
});
