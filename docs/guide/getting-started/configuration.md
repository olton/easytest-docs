# Configuration

EasyTest created as a config-free testing framework. But you can configure it to your needs.

## Default configuration

By default, EasyTest use next configuration:

```json
{
  "include": [
    "**/*.spec.{t,j}s", 
    "**/*.spec.{t,j}sx", 
    "**/*.test.{t,j}s", 
    "**/*.test.{t,j}sx"
  ],
  "exclude": ["node_modules/**"],
  "test": [],
  "skip": [],
  "coverage": false,
  "verbose": false,
  "dom": false,
  "report": {
    "type": "lcov",
    "dir": "coverage"
  }
}
```

## Configuration file

To change the configuration, you need to create a `easytest.json` file in the root of your project.

You can create a `easytest.json` file in free path, but in this case you must use argument `--config=file_name.json` in order to tell EasyTest where the configuration file is located.

```json title="package.json"
{
  "scripts": {
    "test": "easytest --config=tests/easytest.json"
  }
}
```

## Available options
- `--config=file_name.json` - path to the configuration file.
- `--coverage` - enable coverage tool.
- `--verbose` - enable verbose mode.
- `--include=**/*.spec.js,**/*.test.js` - include files for testing.
- `--exclude=node_modules/**` - exclude files from testing.
- `--test=name1,name2` - execute only tests whose name contains value.
- `--skip=name1,name2` - skip tests whose name contains value.
- `--dom` - enable global DOM.

```json title="package.json"
{
  "scripts": {
    "test": "easytest --coverage --verbose --include=**/core.spec.js"
  }
}
```
