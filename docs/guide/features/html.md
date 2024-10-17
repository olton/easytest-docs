# Testing HTML Elements

EasyTest has a built-in `DOM` object that allows you to test `HTML elements` in your tests (we use `happy-dom` to create one).
For testing HTML elements, global objects such as window, document and corresponding global methods and interfaces are created.

To enable global DOM, you need to use parameter `--dom` in the command line,
or set `dom` to `true` in the configuration file.

```json title="package.json"
{
    "scripts": {
        "test": "easytest --dom"
    }
}
```

or

```json title="easytest.json"
{
    "dom": true
}
```

Also you can use `DOM.setup()` method to set up the DOM object manually.

```javascript
beforeAll(() => {
    DOM.setup({
        url: "http://localhost",
    })
})

afterAll(() => {
    DOM.bye()
})
```

In each test, you can use the `window` and `document` objects to test the HTML elements.

## Example of test with HTML elements.

```javascript
import '../lib/metro.js'

describe(`Accordion tests`, () => {
    beforeEach(() => {
        DOM.html(`
        <div id="accordion">
            <div class="frame">
                <div class="heading">Heading</div>
                <div class="content">Content</div>
            </div>
        </div>
    `)
    })

    it(`Create accordion`, async () => {
        const accordion = window
            .Metro
            .makePlugin("#accordion", 'accordion')[0]
        expect(accordion).hasClass('accordion')
    })
})
```

## DOM object

EasyTest exports the `DOM` object that contains methods and properties for working with the DOM.

```javascript
import {DOM} from '@olton/easytest'
```

## Properties & Methods

- `css` - scope, contains methods to load CSS files.
- `js` - scope, contains methods to load JavaScript.

### css
- `fromFile()` - loads CSS styles from file. This method creates a style tag with the content.
- `fromString()` - loads the CSS from string. This method creates a style tag with the content.
- `fromUrl()` - loads the CSS from URL. This method creates a link tag with the href attribute.
- `fromObject()` - create CSS from object.


Create tag style and put into `textContent` contents of `style.css` file.
```javascript
DOM.css.fromFile('style.css')
```

Create tag style and put into `textContent` string content
```javascript
DOM.css.fromString(`
    body {
        background-color: red;
    }
`)
```

Create tag link with href to URL
```javascript
DOM.css.fromUrl('https://example.com/style.css')
```

Create tag style and put into `textContent` object content
```javascript
DOM.css.fromObject({
    body: {
        backgroundColor: 'red'
    }
})
```


### js
- `fromFile()` - loads JavaScript from a file.
- `fromString()` - loads JavaScript from a string.
- `fromUrl()` - loads JavaScript from a URL.


Create tag script and put into script.js file content
```javascript
DOM.js.fromFile('script.js')
```

Create tag script and put into string content
```javascript
DOM.js.fromString(`
    function hello() {
        return "Hello"
    }
`)
```

Create tag script with src to URL
```javascript
DOM.js.fromUrl('https://example.com/script.js')
```

## Methods

- `setup(options)` - sets up the DOM object.
- `bye()` - removes the DOM object.
- `html(str)` - Set Document HTML.
- `eval()` - evaluates the JavaScript code.
- `$()` - synonym for `document.querySelector()`.
- `$$()` - synonym for `document.querySelectorAll()`.
- `flush()` - removes all elements from the document.

## Setup DOM
EasyTest automatically sets up the DOM object before each test. 
But you can set up the DOM object manually.

```javascript
DOM.setup({
    url: 'http://localhost:8000/',
})
```

All setup options are optional.
```javascript
DOM.setup({
    url: 'http://localhost:8000/',
    disableJavaScriptEvaluation: false,
    disableJavaScriptFileLoading: false,
    disableCSSFileLoading: false,
    disableComputedStyleRendering: false,
    handleDisabledFileLoadingAsSuccess: false,
    errorCapture: 'processLevel',
    navigation: {
        disableMainFrameNavigation: false,
        disableChildFrameNavigation: false,
        disableChildPageNavigation: false,
        disableFallbackToSetURL: false,
        crossOriginPolicy: 'no-cors'
    },
    navigator: {
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
        maxTouchPoints: 5
    },
    timer: { 
        maxTimeout: -1, 
        maxIntervalTime: -1, 
        maxIntervalIterations: -1 
    },
    device: { 
        prefersColorScheme: 'light', 
        mediaType: 'screen' 
    }
})
```
