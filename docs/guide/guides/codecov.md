# Upload Report to Codecov

EasyTest has a built-in coverage tool.

With the `--coverage` option enabled, EasyTest creates a report in `LCOV` format. 
You can download this report to a third-party code coverage analysis server, such as [CODECOV](https://about.codecov.io/).

## Upload workflow

```yaml
name: Run tests and upload coverage

on:
  push

jobs:
  test:
    name: Run tests and collect coverage
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [ '22.x' ]
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: node ./path_to/easytest --coverage'

      - name: Upload results to Codecov
        uses: codecov/codecov-action@v4
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
```