const percySnapshot = require('@percy/webdriverio');

describe('visual test with percy', () => {
  it('should be able to validate title and compare Home Page', async () => {
    await browser.url("https://www.amazon.in");
    await expect(browser).toHaveUrl("https://www.amazon.in/");
    await expect(browser).toHaveTitleContaining("Online Shopping site in India");
        
    await percySnapshot('amazon home page');
  });
});