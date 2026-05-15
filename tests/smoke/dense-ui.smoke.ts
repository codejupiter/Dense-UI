import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  await expect(page.getByTestId('docs-shell')).toBeVisible()
})

test('renders the product docs and live component preview', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Components for data-heavy interfaces.' })).toBeVisible()
  await expect(page.getByTestId('live-preview')).toBeVisible()
  await expect(page.getByText('Spend review')).toBeVisible()
  await expect(page.getByRole('table')).toBeVisible()
  await expect(page.getByText('npm install dense-ui')).toBeVisible()
  await expect(page.getByRole('link', { name: 'SpendBoard' })).toHaveAttribute(
    'href',
    'https://github.com/codejupiter/Spendboard',
  )
})

test('exercises overlay primitives without breaking focus-driven workflows', async ({ page }) => {
  await page.getByRole('button', { name: 'Dialog' }).click()
  await expect(page.getByRole('heading', { name: 'Approve spend' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('heading', { name: 'Approve spend' })).toBeHidden()

  await page.getByRole('button', { name: 'Command palette' }).click()
  await expect(page.getByPlaceholder('Search commands')).toBeVisible()
  await page.getByPlaceholder('Search commands').fill('save')
  await page.getByText('Save current view').click()
  await expect(page.locator('.dui-toast-title').filter({ hasText: 'View saved' })).toBeVisible()
})

test('keeps the dense documentation layout responsive', async ({ page }) => {
  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  )

  expect(hasHorizontalOverflow).toBe(false)
})
