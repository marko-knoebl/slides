# Functions

## Functions

We already know some predefined functions, like `len()`, `range()` or `print()`

## Parameters and return values

functions can receive parameters and return values

example: `len([1, 1, 1])` → `3`

parameter: `[1, 1, 1]`

return value: `3`

## optional parameters

Let's experiment: How does the function `range` behave if we pass it 1, 2 or 3 parameters?

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
