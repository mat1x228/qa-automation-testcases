 const { I } = inject();

module.exports = {
  url: 'https://www.saucedemo.com',
  fields: {
    username: '#user-name',
    password: '#password',
  },
  buttons: {
    loginBtn: '.btn_action',
  },
  messages: {
    error: '.error-message-container',
  },
  async openPage() {
    await I.amOnPage(this.url);
  },
   async verifyPage() {
    await I.seeElement(this.fields.username);
    await I.seeElement(this.fields.password);
    await I.seeElement(this.buttons.login);
  },

  async login(username, password) {
    await I.fillField(this.fields.username, username);
    await I.fillField(this.fields.password, password);
    await I.click(this.buttons.loginBtn);
  },
  async getTitle() {
    return await I.grabTitle();
  },
  async getErrorMessage() {
    return await I.grabTextFrom(this.messages.error);
  },
  async verifyPageUrl(url) {
    await I.seeInCurrentUrl(url);
  },
};


