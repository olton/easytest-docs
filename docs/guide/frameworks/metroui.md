# Testing Metro UI

> [https://metroui.org.ua](https://metroui.org.ua)

Metro UI is a popular front-end framework for developing web applications. 
It is a set of styles and scripts that allow you to create a modern and beautiful interface. 
EasyTest allows you to test Metro UI components in a simple and clear way.

## Create a test file

```javascript title="metro.test.js"
import {
    beforeAll, 
    beforeEach, 
    describe, 
    it, 
    expect, 
    DOM
} from "@olton/easytest";

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
        const accordion = window.Metro.makePlugin("#accordion", 'accordion')[0]
        expect(accordion).hasClass('accordion')
    })
})
```