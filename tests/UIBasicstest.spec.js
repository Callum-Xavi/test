const {test} = require('@playwright/test');


//Here we create anon function arrow function that take a playwright fixture ('browser') as a parameter
//because we are executing stuff that is outside our control time-wise, we must use await after every step within the function
// so this means we must also state that the function as a whole will require asynchronous programming
test('First Playwright test', async ({browser})=>
{
//playwright code-

    //chrome - plugins/ cookies
    // newContext() takes arguments to set your fresh browser instance with cookies / plugins from your installed Chrome browser
    // when a new browser is opened it is an incognito browser. Incognito browsers, unlike normal chrome browser do not open a page on launch
    const context = await browser.newContext();

    //because it is a new context browser we need to add a page
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

});