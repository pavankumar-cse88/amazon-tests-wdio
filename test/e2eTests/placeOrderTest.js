const homePage = require('../../src/pages/homePage');

describe('Place order journey', async()=>{

    it('should be able to search product and place order', async()=>{

        await browser.url('https://www.amazon.in/');
        await homePage.searchForGivenKeyword('Bean Bag');
        browser.pause(3000);
    })
})