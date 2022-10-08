const expectChai = require('chai').expect;
module.exports = new class CartPage{

    get tottalPriceFromCart(){
        return $("//div[@data-name='Subtotals']//span[@id='sc-subtotal-amount-buybox']");
    }

    async validatePriceFromCart(priceFromPdp){

       // expectChai(await this.tottalPriceFromCart.getText().trim()).to.equal("  "+priceFromPdp+".00");

    }

}
