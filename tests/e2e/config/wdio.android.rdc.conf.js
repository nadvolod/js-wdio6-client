const { argv } = require('yargs');
const { config } = require('./wdio.rdc.shared');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
const commonCapabilities = {
  //automationName should always be provided for android
  automationName: 'UiAutomator2',
  // The api key that has a reference to the app-project in the TO cloud
  testobject_api_key: process.env.SAUCE_RDC_US_HILTON_ANDROID,
  platformName: 'Android',
};

config.capabilities = [
  {
    ...commonCapabilities,
    deviceName: 'Samsung Galaxy S9',
    // The name of the test for in the cloud
    testobject_test_name: 'Samsung Galaxy S9',
    // Some default settings
    // You can find more info in the TO Appium Basic Setup section
    phoneOnly: 'true',
    idleTimeout: 180,
    orientation: 'PORTRAIT',
    newCommandTimeout: 30,
},
  {
    ...commonCapabilities,
    deviceName: 'Samsung Galaxy Note 8',
    // The name of the test for in the cloud
    testobject_test_name: 'Google Pixel 3',
    phoneOnly: 'true',
    idleTimeout: 180,
    orientation: 'PORTRAIT',
    newCommandTimeout: 30,
  }
];

exports.config = config;
