# Functions

## Functions

We already know some predefined functions, like `len()`, `range()` or `print()`

## Parameters and return values

functions can receive parameters and return a value

example: `len([1, 1, 1])` → `3`

parameter: `[1, 1, 1]`

return value: `3`

## Positional parameters and keyword parameters

Calling `open`:

with positional parameters:

```py
f = open("myfile.txt", "w", -1, "utf-8")
```

with keyword parameters:

```py
f = open("myfile.txt", encoding="utf-8", mode="w")
```

We can look up names of keyword parameters in the documentation (e.g. via `help(open)`)

## Optional parameters and default parameters

Some parameters of functions can be optional (they have a default value)

Example: For `open` only the first parameter is required, the others are optional

The values of default parameters can be looked up in the documentation
