const assert = require('assert');
const LoginPage = require('../pages/loginPage');
const users = require('./data/users');

Feature('Login');

Before(async () => {
  await LoginPage.openPage();
});

Scenario('Login with correct log&pass', async () => {
  const username = users.valid.name;
  const password = users.valid.password;

  await LoginPage.login(username, password);
  const inventoryPageTitle = await LoginPage.getTitle();

  assert.strictEqual(inventoryPageTitle, 'Swag Labs');
});

Scenario('Login with incorrect login||pass', async () => {
  const username = users.invalid.name;
  const password = users.invalid.password;

  await LoginPage.login(username, password);

  const errorMessage = await LoginPage.getErrorMessage();
  assert.strictEqual(errorMessage, 'Epic sadface: Username and password do not match any user in this service');
});

Scenario('Empty log&pass', async () => {
  const username = users.empty.name;
  const password = users.empty.password;

  await LoginPage.login(username, password);

  const errorMessage = await LoginPage.getErrorMessage();
  assert.strictEqual(errorMessage, 'Epic sadface: Username is required');
});



