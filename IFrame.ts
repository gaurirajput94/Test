import { Browser, BrowserContext, chromium, Page, Locator } from "@playwright/test";

async function IFrame() {
    let browser : Browser = await chromium.launch({
    headless: false
    });
    let context : BrowserContext = await browser.newContext();
    let page : Page = await context.newPage();
    await page.goto("https://jqueryui.com/datepicker/");

    //Select frame by locator
    //1. Frame Locator
    /*const frame = page.frameLocator(".demo-frame");
    await frame.locator('.hasDatepicker').click();*/

    //2. name

   // 3. Locate frame by URL
    /*const frame = page.frame({
        url: "https://jqueryui.com/resources/demos/datepicker/default.html";
    });

    await frame?.locator(".hasDatepicker").click();*/

    //Get all available frames
    /*const f = page.frames();
    console.log(f.length);*/
}

IFrame();