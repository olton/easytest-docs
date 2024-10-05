# Mocking

Mock functions enable you to test the connections between code by replacing the actual implementation of a function.
Calling mock function, recording calls to the function and the parameters passed in those calls.

## Using Mocks

You can create a mock function with `mocker()`. 

Let's imagine we're testing an implementation of a function forEach, which invokes a callback for each item in a supplied array.

```javascript title="forEach.js"
export function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}
```

To test this function, we can use a mock function, and inspect the mock's state to ensure the callback is invoked as expected.

```javascript title="forEach.test.js"
import {mocker, test, expect} from '@olton/easytest';
import forEach from './forEach'

const mockCallback = mocker(x => 42 + x);

test('forEach calls callback', () => {
  forEach([0, 1], mockCallback);

  // The mock function is called twice
  expect(mockCallback).toHaveBeenCalledTimes(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback).toHaveBeenCalledWith(0);
});

```