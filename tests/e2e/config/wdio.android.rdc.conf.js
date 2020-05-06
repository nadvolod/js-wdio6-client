const { argv } = require('yargs');
const { config } = require('./wdio.rdc.shared');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
commonCapabilities: [{
  automationName: 'UiAutomator2', //automationName should always be provided for android,
}],

config.capabilities = [
  {
    //samsung galaxy note
    deviceName: 'Samsung Galaxy S9',
    automationName: 'UiAutomator2', //automationName should always be provided for android
    // The api key that has a reference to the app-project in the TO cloud
    testobject_api_key: process.env.SAUCE_RDC_US_HILTON_ANDROID,
    // The name of the test for in the cloud
    testobject_test_name: 'Samsung Galaxy S9',
    // Some default settings
    // You can find more info in the TO Appium Basic Setup section
    //appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    platformName: 'Android',
    phoneOnly: 'true',
    idleTimeout: 180,
    //noReset: true,
    orientation: 'PORTRAIT',
    newCommandTimeout: 30,
    // language: argv.language || 'en',
    // locale: argv.language || 'en',
  },
  {
    deviceName: 'Samsung Galaxy Note 8',
    automationName: 'UiAutomator2', //automationName should always be provided for android
    // The api key that has a reference to the app-project in the TO cloud
    testobject_api_key: process.env.SAUCE_RDC_US_HILTON_ANDROID,
    // The name of the test for in the cloud
    testobject_test_name: 'Google Pixel 3',
    platformName: 'Android',
    phoneOnly: 'true',
    idleTimeout: 180,
    orientation: 'PORTRAIT',
    newCommandTimeout: 30,
  }
];

exports.config = config;
