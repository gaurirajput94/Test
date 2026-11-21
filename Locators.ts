//Locators
import { Browser, BrowserContext, chromium, Page, Locator } from "@playwright/test";

async function locatorExample() : Promise<void> {
    
        let browser : Browser = await chromium.launch({
        headless: false
        });
        let context : BrowserContext = await browser.newContext();
        let page : Page = await context.newPage();
        //ID Locator: Locate an element using its ID attribute.
        //By default playwright uses the CSS Locator
      // const userNameTextBox : Locator = await page.locator("input[id='autosuggest']");
       //userNameTextBox.fill("Sopan");
        /*const userNameTextBox : Locator = await page.locator("input[id='login1]");
        userNameTextBox.fill("Sopan");*/

        //Class Locator
     /*  const userNameTextBox : Locator = await page.locator("input[class='inputs ui-autocomplete-input']");
       userNameTextBox.fill("Sopan");*/
        /*const userNameTextBox : Locator = await page.locator("input[class.email-input]");
        userNameTextBox.fill("Sopan");*/

        /*const userNameTextBox : Locator = await page.locator("input.email-input]");
        userNameTextBox.fill("Mayur");*/

        //getByText Locator
       /* await page.goto("https://www.letskodeit.com/practice");
        await page.getByText ('Open Window').click();*/

        //getByPlaceHolder Locator
        /*await page.goto("https://www.letskodeit.com/practice");
        await page.getByPlaceholder("Enter your name").fill("Gauri Rajput");*/

        //getByTitle
      //  await page.getByTitle('SIGN IN').click;
                
        //nth index: used when multiple 
       /* await page.goto("https://www.letskodeit.com/practice");
        await page.locator("input.inputs").nth(1).fill("Gauri Rajput");*/

        //first() locator: select the first matching element
       /* await page.goto("https://www.letskodeit.com/practice");
        await page.locator("input.inputs").first().fill("Gauri Rajput");*/

        //last() locator:
        //await page.goto("https://www.letskodeit.com/practice");
        //await page.locator("input.inputs").last().fill("Gauri Rajput");

        //hasText(): find element
        /*await page.goto("https://www.letskodeit.com/practice");
        await page.locator(" button:has-text('Open Window')").click();*/
       
        //and() locator:
        /*await page.goto("https://www.letskodeit.com/practice");
        await page.locator(" button:has-text('Open Window')").and(page.locator('#openwindow')).click();*/

        //OR() locator:
        /*await page.goto("https://www.letskodeit.com/practice");
        await page.locator(" button:has-text('Open Window')").or(page.locator('#openwindow')).click();*/

       // await browser.close();

        /*xPath():
        1. Absolute xPath:
        2. Relative xPath:
        Always starts with // double forward slash.
        It starts from middle of HTML DOM structure
        */
        
       /* await page.goto("https://www.letskodeit.com/practice");
        await page.locator("//input[@id='enabled-example-input']").fill('Gauri');
        await page.locator("//input[@id='displayed-text']").fill('Gauri');

       await page.goto("https://www.letskodeit.com/practice");
       await page.locator("//a[text()='Sign In']").click();

        //and() OR() xPath:
        await page.goto("https://www.letskodeit.com/practice");
        await page.locator("//input[@id='enabled-example-input' and @name='Enabled/Disabled Field']").fill('Gauri');*/

        //xPath starts-with function:
        /*await page.goto("https://ecommercepractice.letskodeit.com/");
        await page.locator("//a[starts-with(text(),'WOM')]").click();*/
        
        //xPath Contains():
        await page.goto("https://ecommercepractice.letskodeit.com/");
        await page.locator("//a[contains(text(),'WOM')]").click(); 

        //xPath axes:
        //following
        //ancestor 
        //child
        //Following-sibling
        //parent
        //descendants (childern and grand-childrens)
        //XPath text() Function: text() function is used to locate an element based on its visible text content. //tagname[text()='Exact Text']
//await page.goto("https://www.letskodeit.com/practice");

}
locatorExample();