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
    await B.bye();
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
- `B.type(selector, text, options)` - Type text to an element specified by selector.
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
- `B.setPageNyIndex(index)` - Set the page as current.
- `B.close(runBeforeOnLoad)` - Close the current page by index.
- `B.closePage(page, runBeforeOnLoad)` - Close the page by Page index or Puppeteer page object.
- `B.closeAll(runBeforeOnLoad)` - Close all pages.
- `B.exec(js, ...args)` - Execute JavaScript in the current page.
- `B.startCoverage(options?)` - Start code coverage.
- `B.stopCoverage()` - Stop code coverage.
- `B.currentPage` - Get the current page instance.
- `B.browser` - Get the browser instance.

## Example
In example below we test the `accordion.html` file for Metro UI.

```javascript
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/easytest";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("accordion.html tests", () => {
    it("accordion.html", async () => {
        await B.visit(`${getFileUrl(`./__html__/accordion.html`)}`)
        if (B.error) {
            await delay(1000)
            await B.screenshot('./screenshots/accordion.html.png', {
                fullPage: true
            })
        }
        expect(B.error).toBeNull(B.error)
    })
})
```