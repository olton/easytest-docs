# Setup and Teardown

Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run. 
EasyTest provides helper functions to handle this.

- `beforeAll` - runs before all tests in a suite.
- `afterAll` - runs after all tests in a suite.
- `beforeEach` - runs before each test in a suite.
- `afterEach` - runs after each test in a suite.

Jest executes all describe handlers in a test file before it executes any of the actual tests. 
This is another reason to do setup and teardown inside `before*` and `after*` handlers rather than inside the `describe` blocks. 
Once the `describe` blocks are complete, by default EasyTest runs all the tests serially in the order they were encountered in the collection phase, waiting for each to finish and be tidied up before moving on.

## General Advice

If a test is failing, one of the first things to check should be whether the test is failing when it's the only test that runs. 
To run only one test with EasyTest, use the `--test=name` option to match the name of the test you want to run.

```bash
npx easytest --test="test name"
```