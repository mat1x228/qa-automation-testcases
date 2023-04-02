const assert = require('assert');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const LogoutPage = require('../pages/logoutPage');
const users = require('./data/users');

Feature('Logout');

Before(async () => {
  await LoginPage.openPage();
  const username = users.valid.name
  const password = users.valid.password;
  await LoginPage.login(username, password);
});

Scenario('Logout from inventory page', async () => {
  await LogoutPage.logout();
  const loginPageTitle = await LoginPage.getTitle();
  assert.strictEqual(loginPageTitle, 'Swag Labs');
});

Scenario('Unauthorized user cannot access inventory page', async ({ I }) => {
  await LogoutPage.logout();
  await I.amOnPage(InventoryPage.url);
  const loginPageTitle = await LoginPage.getTitle();
  assert.strictEqual(loginPageTitle, 'Swag Labs');
});

