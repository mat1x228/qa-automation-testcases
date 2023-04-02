const assert = require('assert');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const testProducts = require('./data/products');
const users = require('./data/users');
Feature('Inventory');

Before(async () => {
await LoginPage.openPage();
const username = users.valid.name
const password = users.valid.password;
await LoginPage.login(username, password);
});

Scenario('Add item to cart', async () => {
const itemToAdd = testProducts.products[0].name;

await InventoryPage.addToCart(itemToAdd);

const cartCount = await InventoryPage.getCartCount();
const shoppingCartBadge = await InventoryPage.getShoppingCartBadge();
assert.strictEqual(cartCount, shoppingCartBadge, 'Cart count does not match shopping cart badge count');

const buttonClass = await InventoryPage.getAddToCartButtonClass(itemToAdd);
assert.strictEqual(buttonClass, 'btn_secondary', 'Add to cart button was not changed to Remove');
});

After(async () => {
await InventoryPage.logout();
});


