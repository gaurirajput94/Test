/*Browser: A Browser represents an actual browser instance (Chrome, Edge, Chromium, Firefox, WebKit).
When Playwright launches Chromium, it opens a new browser process.

BrowserContext: A BrowserContext is like a separate, isolated browser profile.
Page: A Page represents a single browser tab or web page.


import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
async function myFirstPlaywrightScript() {

    //This represent browser Instance: This starts Chromium in the background.
    let browser : Browser = await chromium.launch({
    headless: false
    });

    //to open incognito mode: creates a fresh isolated environment similar to Incognito Mode.
    let context : BrowserContext = await browser.newContext();

    //Page is an object of the page class provided by Playwright. This opens a new tab.
    let page : Page = await context.newPage();

    //Open application
    await page.goto("https://playwright.dev");

    //close browser
    await browser.close();

}

myFirstPlaywrightScript();*/



let b1: Array<string> = ["Gauri", "Mayur", "Rohini", "Ram", "Shree", "Mohini"];
console.log(b1.slice(1, 4));



