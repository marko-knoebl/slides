# Node's JavaScript

## Node's JavaScript

The node JavaScript environment was taken from Chrome

There are some minor differences to the original environment. For example, `alert` does not exist and the global namespace is called `global` instead of `window`.

## Reading command line arguments

command line arguments are available via the global `process.argv`

example:

```bash
node program.js 1 2 3
```

will result in

```json
["node", "/path/to/your/program.js", "1", "2", "3"];
```

## Exercise

Implement a program that would work like this:

```bash
node sum.js 1 2 3

the sum is 6
```
