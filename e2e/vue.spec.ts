import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
// test('visits the app root url', async ({ page }) => {
//   await page.goto('/')
//   await expect(page.locator('div.centered-text > h1')).toHaveText(
//     'What are you doing here? There is nothing to see there... yet...'
//   )
// })

test('#app present on root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#app')).toBeDefined()
})

test('#trailer present on root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#trailer')).toBeDefined()
})
