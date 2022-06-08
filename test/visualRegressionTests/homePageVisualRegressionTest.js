describe('visual regression test',async()=>{


    beforeEach(async()=>{

        await browser.url('https://www.amazon.in');
        browser.maximizeWindow();
    });

    it('should be able to perfomr visual test om home Page',async()=>{


        expect(await browser.checkScreen('amazon-homepage',{})).toEqual(0);
    })

    it('should be able to perfomr visual test on search suggestions',async()=>{

        await $('#twotabsearchtextbox').setValue('tshirts');
       // await browser.pause(2000);
        expect(await browser.checkElement(await $('#nav-flyout-searchAjax'),'searchbar-suggestions',{})).toEqual(0);
    })

   




});