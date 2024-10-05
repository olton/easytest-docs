# Globals

In your test files, EasyTest puts each of these methods and objects into the global environment. 
You don't have to require or import anything to use them. 
However, if you prefer explicit imports, you can do import:

```javascript
import {
    describe, 
    expect, 
    test, 
    it, 
    beforeAll, 
    afterAll, 
    beforeEach, 
    afterEach
} from '@olton/easytest'
```

## Functions

### Setup and teardown
- `beforeAll` - runs before all tests in a suite.
- `afterAll` - runs after all tests in a suite.
- `beforeEach` - runs before each test in a suite.
- `afterEach` - runs after each test in a suite.

### Tests
- `describe` - creates a test suite.
- `expect` - creates an expectation.
- `test` - creates a test.
- `it` - creates a test.

## References

### beforeAll()

`beforeAll` - Runs a function before any of the tests in this file run. 
If the function returns a promise or is a generator, EasyTest waits for that promise to resolve before running tests.

This is often useful if you want to set up some global state that will be used by many tests.

```javascript
import {
    beforeAll, 
    describe, 
    it, 
    expect, 
    DOM
} from "@olton/easytest";

beforeAll(() => {
    DOM.flash()
    DOM.js.fromFile('./lib/metro.js')
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

If `beforeAll` is inside a `describe` block, it runs at the beginning of the `describe` block.

### afterAll()
`afterAll` Runs a function after all the tests in this file have completed. 
If the function returns a promise or is a generator, EasyTest waits for that promise to resolve before continuing.

This is often useful if you want to clean up some global setup state that is shared across tests.

```javascript
import {
    beforeAll, 
    describe, 
    it, 
    expect, 
    DOM
} from "@olton/easytest";

afterAll(() => {
    DOM.flash()
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

If `afterAll` is inside a `describe` block, it runs at the end of the `describe` block.

### beforeEach()

Runs a function before each of the tests in this file runs. 
If the function returns a promise or is a generator, EasyTest waits for that promise to resolve before running the test.

This is often useful if you want to set up some state before each test runs.

```javascript
beforeEach(() => {
    ...
})

describe(`Accordion tests`, () => {
    beforeEach(() => {
        ...
    })

    it(`Create accordion`, async () => {
    ...    
    })
})
```

If `beforeEach` is inside a `describe` block, it runs for each test in the `describe` block.

### afterEach()

Runs a function after each one of the tests in this file completes. 
If the function returns a promise or is a generator, EasyTest waits for that promise to resolve before continuing.

This is often useful if you want to clean up some state after each test runs.

```javascript
afterEach(() => {
    ...
})

describe(`Accordion tests`, () => {
    afterEach(() => {
        ...
    })

    it(`Create accordion`, async () => {
    ...    
    })
})
```

### describe
`describe(name, fn)` creates a block that groups together several related tests.

```javascript
describe(`Common tests suite`, () => {
    // tests
    it(...)
    it(...)
    it(...)
})
```

This isn't required - you can write the test blocks directly at the top level with `test()` function. 
But this can be handy if you prefer your tests to be organized into groups.

### test()

This isn't required - you can write the test blocks directly at the top level with `test()` function.

```javascript
import {test, expect} from '@olton/easytest'

function hello() {
    return "Hello"
}

test(`says hello`, () => {
    expect(hello()).toBe("Hello")
})  
```

### it()

Create test inside `describe` block.

```javascript
import {describe, it, expect} from '@olton/easytest'

function hello() {
    return "Hello"
}

describe(`Common tests suite`, () => {
    it(`says hello`, () => {
        expect(hello()).toBe("Hello")
    })
})
```

### expect()

`expect(value)` creates an expectation for a value.

The `expect` function is used every time you want to test a value. 
The `expect` returns an `expectation` object with `matchers`.

You can use multiple expect calls in a single test

```javascript
import {describe, it, expect} from '@olton/easytest'

function hello() {
    return "Hello"
}

describe(`Common tests suite`, () => {
    it(`says hello`, () => {
        expect(hello()).toBe("Hello")
        expect(hello()).toBeNot("World")
    })
})
```