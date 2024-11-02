import { expect, test } from '@playwright/test';

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
    await emailField.pressSequentially('test@gmail.com', { delay: 200 });

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

test.describe('Modal toaster', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText('Modal & Overlays').click();
    await page.getByText('Toastr').click();
  });

  test('checkbox', async ({ page }) => {
    const checkbox = await page.getByRole('checkbox', {
      name: 'Hide on click',
    });

    await checkbox.check({ force: true });
    await expect(checkbox).toBeChecked();

    await checkbox.uncheck({ force: true });
    await expect(checkbox).not.toBeChecked();

    const allCheckboxes = await page.getByRole('checkbox');

    for (const box of await allCheckboxes.all()) {
      await box.check({ force: true });
      await expect(box).toBeChecked();
    }

    for (const box of await allCheckboxes.all()) {
      await box.uncheck({ force: true });
      await expect(box).not.toBeChecked();
    }
  });
});

test('list and dropdowns', async ({ page }) => {
  const dropdownMenu = await page.locator('ngx-header nb-select');
  await dropdownMenu.click();

  const options = await page.getByRole('list').locator('nb-option');
  await expect(options).toHaveCount(4);
  await expect(options).toHaveText(['Light', 'Dark', 'Cosmic', 'Corporate']);

  await options.filter({ hasText: 'Cosmic' }).click();

  const header = await page.locator('nb-layout-header');
  await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)');

  const colors = {
    Light: 'rgb(255, 255, 255)',
    Dark: 'rgb(34, 43, 69)',
    Cosmic: 'rgb(50, 50, 89)',
    Corporate: 'rgb(255, 255, 255)',
  };

  for (const color in colors) {
    await dropdownMenu.click();
    const option = await options.filter({ hasText: color });
    await option.click();
    await expect(header).toHaveCSS('background-color', colors[color]);
  }
});

test('tooltips', async ({ page }) => {
  await page.getByText('Modal & Overlays').click();
  await page.getByText('Tooltip').click();

  const tooltipCard = await page.locator('nb-card', {
    hasText: 'Tooltip Placements',
  });
  await tooltipCard.getByRole('button', { name: 'Top' }).hover();

  const tooltip = await page.locator('nb-tooltip').textContent();

  expect(tooltip).toEqual('This is a tooltip');
});

test('dialog boxes', async ({ page }) => {
  await page.getByText('Tables & Data').click();
  await page.getByText('Smart Table').click();

  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toEqual('Are you sure you want to delete?');
    await dialog.accept();
  });

  await page
    .getByRole('table')
    .locator('tr', { hasText: 'mdo@gmail.com' })
    .locator('.nb-trash')
    .click();

  await expect(page.locator('table tr').first()).not.toHaveText(
    'mdo@gmail.com',
  );
});

test('tables', async ({ page }) => {
  await page.getByText('Tables & Data').click();
  await page.getByText('Smart Table').click();

  const targetRow = await page
    .getByRole('table')
    .locator('tr', { hasText: 'twitter@outlook.com' });

  await targetRow.locator('.nb-edit').click();

  await page.locator('input-editor').getByPlaceholder('Age').clear();
  await page.locator('input-editor').getByPlaceholder('Age').fill('35');
  await page.locator('.nb-checkmark').click();

  await page.locator('.ng2-smart-pagination-nav').getByText('2').click();

  const targetRowById = await page
    .getByRole('row', { name: '11' })
    .filter({ has: page.locator('td').nth(1).getByText('11') });

  await targetRowById.locator('.nb-edit').click();

  await page.locator('input-editor').getByPlaceholder('E-mail').clear();
  await page
    .locator('input-editor')
    .getByPlaceholder('E-mail')
    .fill('test@gmail.com');
  await page.locator('.nb-checkmark').click();

  await expect(targetRowById.locator('td').nth(5)).toHaveText('test@gmail.com');

  const ages = ['20', '30', '40', '200'];

  for (const age of ages) {
    const ageInput = await page.locator('input-filter').getByPlaceholder('Age');
    await ageInput.clear();
    await ageInput.fill(age);

    await page.waitForTimeout(1000);

    const rows = await page.locator('tbody tr').all();

    for (let row of rows) {
      const value = await row.locator('td').last().textContent();

      if (Number(age) === 200) {
        expect(await page.getByRole('table').textContent()).toContain(
          'No data found',
        );
      } else {
        await expect(value).toEqual(age);
      }
    }
  }
});
