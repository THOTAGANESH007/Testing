const { test, expect } = require('@playwright/test');

test.describe('Recording Tests', () => {

    test('Add To Cart and Checkout', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.pause();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').dblclick();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('Ganesh');
        await page.locator('[data-test="lastName"]').click();
        await page.locator('[data-test="lastName"]').fill('Thota');
        await page.locator('[data-test="postalCode"]').click();
        await page.locator('[data-test="postalCode"]').fill('516330');
        await page.locator('[data-test="continue"]').click();
        await page.locator('[data-test="tax-label"]').click();
        await page.locator('[data-test="finish"]').click();
        await page.locator('[data-test="back-to-products"]').click();
    })


    test.only('Retries on Error', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.pause();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_saucer');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').dblclick();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('Ganesh');
        await page.locator('[data-test="lastName"]').click();
        await page.locator('[data-test="lastName"]').fill('Thota');
        await page.locator('[data-test="postalCode"]').click();
        await page.locator('[data-test="postalCode"]').fill('516330');
        await page.locator('[data-test="continue"]').click();
        await page.locator('[data-test="tax-label"]').click();
        await page.locator('[data-test="finish"]').click();
        await page.locator('[data-test="back-to-products"]').click();
    })
})