# Extending Expectations

When you're writing tests, you often need to check that values meet certain conditions.
`expect` gives you access to a number of `matchers` that let you validate different things.

If you miss the built-in matchers, you can easily create your own by fattening up an instance of Expect.

```javascript
import {Expect} from "@olton/easytest";

class MyExpect extends Expect {
    toBeEven() {
        let received = this.received
        let result = received % 2 === 0
        if (!result) {
            this.message = `Expected ${received} to be even`
        }
    }
}

const expect = (received) => new MyExpect(received)

test(`Custom expect`, () => {
    expect(2).toBeEven()
})
```

