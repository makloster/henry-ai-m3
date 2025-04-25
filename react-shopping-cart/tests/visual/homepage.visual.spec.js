require('dotenv').config();

const { test, expect } = require('@playwright/test');
const {
  Eyes,
  VisualGridRunner,
  Target,
  Configuration,
  BrowserType,
  DeviceName,
} = require('@applitools/eyes-playwright');

test('Visual check - homepage', async ({ page }) => {
  const eyes = new Eyes(new VisualGridRunner({ testConcurrency: 5 }));

  const configuration = new Configuration();
  configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
  configuration.setAppName('React Shopping Cart');
  configuration.setTestName('Visual - Home Page');

  configuration.addBrowser(1200, 800, BrowserType.CHROME);
  configuration.addBrowser(1200, 800, BrowserType.FIREFOX);
  configuration.addDeviceEmulation(DeviceName.iPhone_X);

  eyes.setConfiguration(configuration);

  await eyes.open(page);

  await page.goto('http://localhost:3000');

  await eyes.check('Home Page', Target.window().fully());

  await eyes.close();
});
