module.exports = new class ProductDescriptionPage{


    get productPrice(){

        return $("//div[@id='corePrice_feature_div']//span/span");
    }

    get addToCartButton(){
        return $('#add-to-cart-button');
    }

    get goToCartButton(){
       
        return $("//span[@id='sw-gtc']/span[@class='a-button-inner']");
    }

    
    async  addProductTocartAndReturnThePrice(parentWindowId){

       var allWindowHandles = await browser.getWindowHandles();

       for(var i = 0; i<allWindowHandles.length;i++){
            if(allWindowHandles[i] != parentWindowId){
                await browser.switchToWindow(allWindowHandles[i]);
                break;
            }

       }
       await browser.pause(2000);
       let price = await this.productPrice.getText();
       await this.addToCartButton.click();
       return price;

    }

    async navigateToCartPage(){
        await this.goToCartButton.click();
    } 
}