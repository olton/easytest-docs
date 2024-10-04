# Using Matchers

EasyTest uses `matchers` to let you test values in different ways. 
This document will introduce some commonly used matchers. 
For the full list, see the [Matchers](/guide/getting-started/matchers.md) page.

## Expect

When you're writing tests, you often need to check that values meet certain conditions. `expect` gives you access to a number of `matchers` that let you validate different things.

```javascript
import {expect, describe, it} from '@olton/easytest'

function hello() {
    return "Hello"
}

describe(`Common tests suite`, () => {
    it(`says hello`, () => {
        expect(hello()).toBe("Hello")
    })
})
```

You can use multiple expectations in one test, the test will be considered passed if all expectations are met without errors.

```javascript
import {expect, describe, it} from '@olton/easytest'

describe(`Common tests suite`, () => {
    it(`says hello`, () => {
        expect(true).toBeTrue()
        expect(false).toBeFalse()
    })
})
```
