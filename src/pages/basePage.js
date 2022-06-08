module.exports = new class BasePage{

    async navigateToUrl(){

        await browser.url('https://www.amazon.in/');
        browser.maximizeWindow();
    }
}