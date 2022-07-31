module.exports = new class SearchResultsPage {

    get productFromSearchResults(){

        return $$("//div[@data-component-type='s-search-result']//img")[12];
    }

    async clickOnFirstProductFromSearchResults(){

        let parentWindowId = await browser.getWindowHandle();//It will return parent windoe id
        await this.productFromSearchResults.click();
        return parentWindowId;
    }

}