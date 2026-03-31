import { test, expect } from '@playwright/test';

test.describe('Playwright Assignment Submission', () => {

  // 🔹 TC01 - Valid Login
  test('TC01 - User Login (Valid)', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  // 🔹 TC02 - Search / Product Visibility
  test('TC02 - Product List Visible', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Check products are displayed
    const products = page.locator('.inventory_item');
    await expect(products).toHaveCount(6);
  });

  // 🔹 TC03 - Invalid Login (Replaced Case)
  test('TC03 - Invalid Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'wrong_user');
    await page.fill('#password', 'wrong_pass');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username and password do not match');
  });

  // 🔹 TC04 - API-like Check (UI based validation of login state)
  test('TC04 - Session Check (After Login)', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Check cart icon exists (means session active)
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
  });

  // 🔹 TC05 - Captcha Alternative (Locked User Scenario)
  test('TC05 - Locked User Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'locked_out_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]'))
      .toContainText('locked out');
  });

});