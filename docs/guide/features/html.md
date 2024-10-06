# Testing HTML Elements

EasyTest has a built-in `DOM` object that allows you to test `HTML elements` in your tests (we use `jsdom` to create one).
For testing HTML elements, global objects such as window, document and corresponding global methods and interfaces are created.

To enable global DOM, you need to use parameter `--dom` in the command line,
or set `dom` to `true` in the configuration file.
Also you can use `DOM.setup()` method to set up the DOM object manually.


In each test, you can use the `window` and `document` objects to test the HTML elements.

## Example of test with HTML elements.

```javascript
beforeAll(() => {
    DOM.flash()
    DOM.js.fromFile('./lib/metro.js')
})

beforeEach(() => {
    DOM.html.fromString(`
        <div id="accordion">
            <div class="frame">
                <div class="heading">Heading</div>
                <div class="content">Content</div>
            </div>
        </div>
    `)
})

describe(`Accordion tests`, () => {
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

### Properties

- `css` - contains methods to load CSS files.
- `js` - contains methods to load JavaScript.
- `html` - contains methods to load HTML files.

#### css
- `fromFile()` - loads CSS styles from a file.
- `fromString()` - loads the CSS from a string.
- `fromUrl()` - loads the CSS from a URL.

```javascript
// Create tag style and put into style.css file content
// File must exist in the file system
DOM.css.fromFile('style.css')
```

```javascript
// Create tag style and put into string content
DOM.css.fromString(`
    body {
        background-color: red;
    }
`)
```

```javascript
// Create tag link with href to URL
DOM.css.fromUrl('https://example.com/style.css')
```

#### js
- `fromFile()` - loads JavaScript from a file.
- `fromString()` - loads JavaScript from a string.
- `fromUrl()` - loads JavaScript from a URL.

```javascript
// Create tag script and put into script.js file content
DOM.js.fromFile('script.js')
```

```javascript
// Create tag script and put into string content
DOM.js.fromString(`
    function hello() {
        return "Hello"
    }
`)
```

```javascript
// Create tag script with src to URL
DOM.js.fromUrl('https://example.com/script.js')
```

#### html

Methods below are change `document.body.innerHTML` property.

- `fromFile()` - loads HTML from a file.
- `fromString()` - loads HTML from a string.
- `fromUrl()` - loads HTML from a URL.

```javascript
DOM.html.fromFile('index.html')
```


### Methods

- `setup` - sets up the DOM object.
- `clean` - removes the DOM object.
- `flash` - flashes the Document HTML.
- `eval` - evaluates the JavaScript code.

#### Setup DOM
EasyTest automatically sets up the DOM object before each test. But you can set up the DOM object manually.

```javascript
const html = `
    <div id="app">
        <h1>Hello</h1>
    </div>
`
DOM.setup(html, {
    runScripts: "dangerously",
    resources: "usable",
    url: "http://localhost",
    pretendToBeVisual: true,
})
```

#### Cleanup DOM
If you need to clean up the DOM object, you can use the `clean` method.

```javascript
DOM.clean()
```

#### Flash DOM
If you need to flash the Document HTML, you can use the `flash` method.

```javascript
DOM.flash()
```

#### Evaluate JavaScript
If you need to evaluate JavaScript code, you can use the `eval` method.

```javascript
DOM.eval(`console.log("Hello!")`)
```
