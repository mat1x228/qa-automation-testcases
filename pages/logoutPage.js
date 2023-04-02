const { I } = inject();

module.exports = {
  url: 'https://www.saucedemo.com',

  buttons: {
    burgerMenuBtn: '#react-burger-menu-btn',
    logoutBtn: '#logout_sidebar_link',
  },

  async verifyPage() {
    await I.seeInCurrentUrl(this.url);
    await I.seeElement(this.buttons.burgerMenuBtn);
  },

  async logout() {
    await I.click(this.buttons.burgerMenuBtn);
    await I.click(this.buttons.logoutBtn);
  },
};

