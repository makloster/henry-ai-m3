require('dotenv').config();
const { test } = require('@playwright/test');
const {
  Eyes,
  VisualGridRunner,
  Target,
  Configuration,
  BrowserType,
} = require('@applitools/eyes-playwright');

test('Visual check - Filtered Products by Size', async ({ page }) => {
  const eyes = new Eyes(new VisualGridRunner({ testConcurrency: 5 }));

  const configuration = new Configuration();
  configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
  configuration.setAppName('React Shopping Cart');
  configuration.setTestName('Visual - Filter by Size');

  configuration.addBrowser(1200, 800, BrowserType.CHROME);

  eyes.setConfiguration(configuration);

  await eyes.open(page);

  await page.goto('http://localhost:3000');

  await page.click('text="M"');

  await eyes.check('Filtered Products', Target.window().fully());

  await eyes.close();
});
