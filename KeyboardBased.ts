import { Browser, BrowserContext, chromium, Page, Locator } from "@playwright/test";

async function KeyboardBasedActions() {
    let browser : Browser = await chromium.launch({
    headless: false
    });
    let context : BrowserContext = await browser.newContext();
    let page : Page = await context.newPage();
    await page.goto("https://www.letskodeit.com/practice");
    const autoSuggest: Locator = page.locator("#autosuggest");
    await page.locator('#autosuggest').nth(0).fill("Gauri rajput");

    //Ctrl+A
    await page.locator('#autosuggest').nth(0).click();
    await page.keyboard.press("Control+A");
    await page.waitForTimeout(2000);

    //Ctrl+C
    await page.keyboard.press("Control+C");
    await page.waitForTimeout(2000);

    //Ctrl+V
    await page.locator('.inputs').nth(2).click();
    await page.keyboard.press("Control+V");

   //Delete: Delete next character
    await page.waitForTimeout(2000);
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Delete");

    //Delete with backspace
    await page.waitForTimeout(2000);
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");

    //Focus: When we need Keyboard interaction
    await page.locator('.inputs').nth(0).focus();
    //Click
}

KeyboardBasedActions();

/*import {Browser, BrowserContext, chromium, Page, Locator} from "@playwright/test";

async function KeyboardBasedActions() {
const browser: Browser = await chromium.launch({
headless: false
});

const context: BrowserContext = await browser.newContext();
const page: Page = await context.newPage();
await page.goto("https://www.letskodeit.com/practice");
const autoSuggest: Locator = page.locator("#autosuggest");

// Enter text
await autoSuggest.fill("Gauri Rajput");
await page.waitForTimeout(2000);

// Select all text
await autoSuggest.click();
await page.keyboard.press("Control+A");
await page.waitForTimeout(2000);

// Copy selected text
await page.keyboard.press("Control+C");
await page.waitForTimeout(2000);

// Clear the textbox
await autoSuggest.clear();
await page.waitForTimeout(2000);

// Paste the copied text into the same textbox
await autoSuggest.click();
await page.keyboard.press("Control+V");
await page.waitForTimeout(2000);

// Delete the last character
await page.keyboard.press("Backspace");
await page.waitForTimeout(2000);
await browser.close();
}

KeyboardBasedActions();*/