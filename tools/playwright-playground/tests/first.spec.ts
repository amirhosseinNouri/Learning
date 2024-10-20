import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});

test('locator syntax', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Email' }).first().click();
  await page.locator('nb-card nb-radio :text-is("Option 1")').click();
});

test('parent locating', async ({ page }) => {
  await page.locator('nb-card', { hasText: 'Using the Grid' });
});

test('reusing locator', async ({ page }) => {
  const basicForm = await page
    .locator('nb-card')
    .filter({ hasText: 'Basic form' });

  const emailField = await basicForm.getByRole('textbox', { name: 'Email' });

  await basicForm.locator('nb-checkbox').click();
  await emailField.fill('test@gmail.com');
  await basicForm.getByRole('textbox', { name: 'Password' }).fill('12345');
  await basicForm.getByRole('button').click();

  await expect(emailField).toHaveValue('test@gmail.com');
});

test('extracting values', async ({ page }) => {
  const basicForm = await page
    .locator('nb-card')
    .filter({ hasText: 'Basic form' });

  const buttonText = await basicForm.getByRole('button').textContent();

  expect(buttonText).toBe('Submit');

  const allRadioButtonsLabels = await page
    .locator('nb-radio')
    .allTextContents();

  expect(allRadioButtonsLabels).toContain('Option 1');

  const emailField = await basicForm.getByRole('textbox', { name: 'Email' });
  await emailField.fill('test@gmail.com');
  expect(await emailField.inputValue()).toBe('test@gmail.com');

  const placeholderValue = await emailField.getAttribute('placeholder');
  expect(placeholderValue).toBe('Email');
});

test('assertions', async ({ page }) => {
  // general assertions
  const value = 5;
  expect(value).toBe(5);

  const button = await page
    .locator('nb-card')
    .filter({ hasText: 'Basic form' })
    .locator('button');

  const buttonText = await button.textContent();
  expect(buttonText).toBe('Submit');

  // locator assertions
  await expect(button).toHaveText('Submit');
});
