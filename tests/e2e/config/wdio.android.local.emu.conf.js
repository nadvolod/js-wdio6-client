const { join } = require('path');
const { argv } = require('yargs');
const config = require('./wdio.shared.conf').config;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
	{
		// The defaults you need to have in your config
		automationName: 'UiAutomator2',
		deviceName: 'Pixel_8.1',
		platformName: 'Android',
		platformVersion: '8.1',
		orientation: 'PORTRAIT',
		app: join(process.cwd(), './apps/Android.SauceLabs.Mobile.Sample.app.2.2.1.apk'),
		appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
		// Read the reset strategies very well, they differ per platform, see
		// http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
		noReset: true,
		newCommandTimeout: 240,
		maxInstances: 1,
		language: argv.language || 'en',
		locale: argv.language || 'en',
	},
];

// ======
// Appium
// ======
config.services = config.services.concat('appium');
config.appium = {
	command: 'appium',
};
// Tell Appium which port to use
config.port = 4723;

exports.config = config;
