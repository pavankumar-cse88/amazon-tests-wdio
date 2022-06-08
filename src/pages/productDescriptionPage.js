module.exports = new class ProductDescriptionPage{


    get productPrice(){

        return $("//div[@id='corePrice_feature_div']//span[@class='a-price-whole']");
    }

    get addToCartButton(){
        return $('#add-to-cart-button');
    }

    get goToCartButton(){
        return $('#sw-gtc');
    }

    
    async  addProductTocartAndReturnThePrice(parentWindowId){

       let allWindowHandles = await browser.getWindowHandles();
       for(let i =0; i<allWindowHandles.lenght;i++){
            if(allWindowHandles[i]!=parentWindowId){
                await browser.switchToWindow(allWindowHandles[i]);
                break;
            }

       }

       let price = await this.productPrice.getText();
       await this.addToCartButton.click();
       return price;

    }

    async navigateToCartPage(){
        await this.goToCartButton.click();
    } 
}