# Built-in Headless Browser

If you need to interact with a website, you can use the built-in headless browser. 
This is useful for web scraping, testing, and more. 

`Puppeteer` is used as the headless browser engine

> Puppeteer is a JavaScript library which provides a high-level API to control Chrome or Firefox over the DevTools Protocol or WebDriver BiDi.

```javascript
import { B } from "@olton/easytest";

beforeAll(async () => {
    await B.create();
});

afterAll(async () => {
    await B.close();
});

describe("Google", () => {
    test("Search", async () => {
        await B.visit("https://example.com");
        const title = await B.document.title();
        expect(title).toBe("Example Domain");
    });
});
```

## Methods
- `B.create(options)` - Create a new browser instance.
- `B.bye()` - Close the browser instance.
- `B.visit(url, options)` - Visit a URL.
- `B.document.title()` - Get the title of the current page.
- `B.document.url()` - Get document url.
- `B.document.html()` - Get document html, include `doctype`.
- `B.document.cookies(urls[])` - Get document cookies.
- `B.$(selector)` - Finds elements that match the selector. If no element matches the selector, the return value resolves to [].
- `B.window(prop)` - Get specified window property.
- `B.screenshot(path)` - Take a screenshot of the current page.
- `B.click(selector)` - Click to an element specified by selector.
- `B.tap(selector)` - Tap to an element specified by selector.
- `B.$(selector)` - Finds the first element that matches the selector. If no element matches the selector, the return value resolves to null.
- `B.$$(selector)` - Finds elements on the page that match the selector. If no elements match the selector, the return value resolves to `[]`.
- `B.emulate(device)` - Emulates a given device's metrics and user agent.
- `B.devices` - Get supported emulated device's list.
- `B.addCss(options)` - Add CSS to the current page.
- `B.addJs(options)` - Add JS to the current page.
- `B.addFunction(name, fn)` - Add a function to the window object in current page.
- `B.pages()` - Get all pages.
- `B.pageCount()` - Get the number of pages.
- `B.page(index)` - Get the page instance by index.
- `B.newPage()` - Create a new page and set it as current.
- `B.setPage(page)` - Set the page as current.
- `B.closePage(page, runBeforeOnLoad)` - Close the page by index.
- `B.currentPage` - Get the current page instance.