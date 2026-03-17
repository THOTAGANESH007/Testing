const { test, expect } = require('@playwright/test');

test.describe('Checkout Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');
  });

  test('TC10 - Checkout with valid details', async ({ page }) => {
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '500001');

    await page.click('[data-test="continue"]');
    await page.click('[data-test="finish"]');

    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

  test('TC11 - Checkout with missing info', async ({ page }) => {
    await page.fill('#first-name', '');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '500001');

    await page.click('[data-test="continue"]');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

});