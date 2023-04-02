/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "tests/*_test.js",
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js', 
    loginPage: './pages/loginPage.js'
  },
  name: 'codeceptjs-test-proj'
};