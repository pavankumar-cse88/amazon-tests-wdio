const homePage = require('../../src/pages/homePage');
const basePage = require('../../src/pages/basePage');
const searchResultsPage = require('../../src/pages/searchResultsPage');
const productDescriptionPage = require('../../src/pages/productDescriptionPage');



describe('Place order journey', async()=>{

    it('should be able to search product and place order', async()=>{

        await basePage.navigateToUrl();
        await homePage.searchForGivenKeyword('Bean bag');
        let parentWindowId = await searchResultsPage.clickOnFirstProductFromSearchResults();
        productDescriptionPage.addProductTocartAndReturnThePrice(parentWindowId);
        productDescriptionPage.navigateToCartPage();


        
   
    })
})
