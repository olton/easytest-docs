# Built-in Headless Browser

If you need to interact with a website, you can use the built-in headless browser. 
This is useful for web scraping, testing, and more. 

`Puppeteer` is used as the headless browser engine

> Puppeteer is a JavaScript library which provides a high-level API to control Chrome or Firefox over the DevTools Protocol or WebDriver BiDi.

```javascript
import { browser } from "@olton/easytest";

beforeAll(async () => {
    await browser.create();
});

afterAll(async () => {
    await browser.close();
});

describe("Google", () => {
    test("Search", async () => {
        await browser.visit("https://example.com");
        const title = await browser.document.title();
        expect(title).toBe("Example Domain");
    });
});
```

## Methods
- `browser.create()` - Create a new browser instance.
- `browser.close()` - Close the browser instance.
- `browser.visit(url, options)` - Visit a URL.
- `browser.document.title()` - Get the title of the current page.
- `browser.$(selector)` - Finds the first element that matches the selector. If no element matches the selector, the return value resolves to null.
- `browser.$$(selector)` - Finds elements on the page that match the selector. If no elements match the selector, the return value resolves to `[]`.
- `browser.window(prop)` - Get specified window property.
- `browser.screenshot(path)` - Take a screenshot of the current page.
- `browser.click(selector)` - Click to an element specified by selector.
- `browser.page` - Get the current page instance.