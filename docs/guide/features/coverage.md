# Code Coverage

Code coverage is a metric that measures the amount of code that is executed during the test suite. It is a useful metric to understand how much of your code is being tested and to identify areas that are not being tested.

`EasyTest` provides built-in support for code coverage.

## Generate Report
To generate a code coverage report, you can use the `--coverage` flag when running the tests:

```json
{
    "scripts": {
        "test": "easytest --coverage"
    }
}
```

or set the `coverage` option in the easytest configuration file:

```json
{
    "coverage": true
}
```

## Coverage options

You can set additional options for coverage:

```json
{
    "coverage": false,
    "report": {
        "type": "lcov",
        "dir": "coverage"
    }
}
```

> Currently only `LCOV` format is supported.

## Coverage imported files
EasyTest automatically generates a coverage report for all imported project files.

## Coverage tests with Browser
EasyTest automatically generates a coverage report for all tests that use the browser.
In this case, you can set additional options for coverage:

```javascript
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/easytest";

beforeAll(async () => {
    await B.create({
        coverage: {
            filter: 'lib/metro.js', // include only this file
            reportFileName: 'lcov-browser.info',
            includeRawScriptCoverage: true,
            reportAnonymousScripts: true,
            resetOnNavigation: true,
            useBlockCoverage: true,
        }
    })
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


## LCOV Format

When the tests are run with the `--coverage` flag, `EasyTest` will generate a code coverage report in `LCOV` format in the `coverage` directory. The report will include information about which lines of code were executed during the test suite.

You can use this information to identify areas of your code that are not being tested and to improve the coverage of your test suite.

## Uploading Coverage Reports
EaseTest generate a report compatible with CODECOV. You can upload reports to the [codecov.io](https://about.codecov.io/) service to analyze coverage.

## Including Files to Coverage

TODO

## Excluding Files from Coverage

TODO