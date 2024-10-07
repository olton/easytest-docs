# Code Coverage

Code coverage is a metric that measures the amount of code that is executed during the test suite. It is a useful metric to understand how much of your code is being tested and to identify areas that are not being tested.

`EasyTest` provides built-in support for code coverage. 
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

When the tests are run with the `--coverage` flag, `EasyTest` will generate a code coverage report in `LCOV` format in the `coverage` directory. The report will include information about which lines of code were executed during the test suite.

You can use this information to identify areas of your code that are not being tested and to improve the coverage of your test suite.

## Uploading Coverage Reports
EaseTest generate a report compatible with CODECOV. You can upload reports to the [codecov.io](https://about.codecov.io/) service to analyze coverage.

## Including Files to Coverage

TODO

## Excluding Files from Coverage

TODO