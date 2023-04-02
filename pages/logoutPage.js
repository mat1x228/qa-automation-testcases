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






// const BasePage = require('./basePage');

// class LogoutPage extends BasePage {
//   constructor(page) {
//     super(page);
//   }

//   async logout() {
//     await this.page.waitForSelector('#react-burger-menu-btn');
//     await this.page.click('#react-burger-menu-btn');
//     await this.page.waitForTimeout(1000);
//     await this.page.waitForSelector('#logout_sidebar_link');
//     const logoutButton = await this.page.$('#logout_sidebar_link');
//     await logoutButton.click();
//   }
// }

// module.exports = LogoutPage;
