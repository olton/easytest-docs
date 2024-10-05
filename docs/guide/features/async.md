# Testing Async Code

EasyTest allows you to test asynchronous code using the `async` and `await` keywords.

## Create a test file

Create test suite with async test.

```javascript title="async.test.js"
import {
    describe, 
    it, 
    expect
} from "@olton/easytest";

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 1000);
    });
}

describe(`Async tests`, () => {
    it(`fetchData returns peanut butter`, async () => {
        const data = await fetchData();
        expect(data).toBe('peanut butter');
    })
})
```

Create single async test.

```javascript title="async.test.js"
import { test, expect } from "@olton/easytest";

test(`Single test`, async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
})
```