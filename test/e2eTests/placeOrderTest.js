const homePage = require('../../src/pages/homePage');
const basePage = require('../../src/pages/basePage');
const searchResultsPage = require('../../src/pages/searchResultsPage');
const productDescriptionPage = require('../../src/pages/productDescriptionPage');
const cartPage = require('../../src/pages/cartPage');
const allureReporter = require('@wdio/allure-reporter').default

describe('Place order journey', async()=>{

    it('should be able to search product and place order', async()=>{

        allureReporter.addFeature("Place order and confirm");
        allureReporter.addStory("user-story-5368");
        allureReporter.addSeverity("critical");
        await basePage.navigateToUrl();
        await homePage.searchForGivenKeyword('Bean bag');
        let parentWindowId = await searchResultsPage.clickOnFirstProductFromSearchResults();
        let price = await productDescriptionPage.addProductTocartAndReturnThePrice(parentWindowId);
        await productDescriptionPage.navigateToCartPage();
        await cartPage.validatePriceFromCart(price);
        
    })
})











