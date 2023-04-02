const { I } = inject();

module.exports = {
  url: '/inventory.html',

  buttons: {
    cart: '.shopping_cart_link',
  },
  locators: {
    cartCount: '.shopping_cart_badge'
  },

  async verifyPage() {
    await I.seeInCurrentUrl(this.url);
    await I.seeElement(this.buttons.cart);
  },

  async addToCart(itemName) {
    const item = `//*[text()="${itemName}"]/ancestor::div[@class="inventory_item"]//button[contains(@class,"btn_inventory")]`;
    await I.click(item);
  },

  async clickCartButton() {
    await I.click(this.buttons.cart);
  },

  async logout() {
    const menuButton = '#react-burger-menu-btn';
    const logoutButton = '#logout_sidebar_link';
    await I.click(menuButton);
    await I.click(logoutButton);
  },

  async getCartCount() {
    const cartCount = await I.grabTextFrom(this.locators.cartCount);
    return parseInt(cartCount);
  },

  async getShoppingCartBadge() {
    const shoppingCartBadge = await I.grabTextFrom('.shopping_cart_badge');
    return parseInt(shoppingCartBadge);
  },

  async getAddToCartButtonClass(itemName) {
    const item = `//*[text()="${itemName}"]/ancestor::div[@class="inventory_item"]//button[contains(@class,"btn_inventory")]`;
    const classAttribute = await I.grabAttributeFrom(item, 'class');
    return classAttribute.split(' ')[1];
  },  
};
