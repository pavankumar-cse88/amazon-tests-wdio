describe('Amazon home page test',async()=>{

    it('should be able to launch amazon home page',async()=>{

        await browser.url("https://www.amazon.in");
        await expect(browser).toHaveUrl("https://www.amazon.in/");
        await expect(browser).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
        console.log(await browser.getTitle());

    
    });
});