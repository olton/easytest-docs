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
  "coverage": false,
  "verbose": false,
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
- `--include=**/*.spec.{t,j}s` - include files for testing.
- `--exclude=node_modules/**` - exclude files from testing.
- `--test=test_name` - execute only tests whose name contains value.

```json title="package.json"
{
  "scripts": {
    "test": "easytest --coverage --verbose --include=**/core.spec.{t,j}s"
  }
}
```
