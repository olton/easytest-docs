# Verbose 

EasyTest has a verbose mode that can be enabled by setting the `verbose` option to `true` in the `easytest.json` file. This mode is useful for debugging and understanding the test results. 

When verbose mode is enabled, EasyTest will print detailed information about the test results, including the test name, the expected and actual values, and any error messages. This can help you quickly identify the cause of test failures and make it easier to fix them.

## Enable verbose mode

To enable verbose mode, set the `verbose` option to `true` in the `easytest.json` file:

```json
{
  "verbose": true
}
```

or use the `--verbose` command-line option:

```bash
easytest --verbose
```

### Verbose disabled (by default)

![](/verbose-off.png)

### Verbose enabled

![](/verbose-on.png)
