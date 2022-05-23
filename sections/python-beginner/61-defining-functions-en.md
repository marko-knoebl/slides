# Defining functions

## Defining functions

example:

```py
def average(a, b):
    m = (a + b) / 2
    return m
```

## Optional parameters and default parameters

This is how we define default values for parameters:

```py
def shout(phrase, end="!"):
    print(phrase.upper() + end)

shout("hello") # HELLO!
shout("hi", ".") # HI.
```

## Scope

A function definition creates a new _scope_, an area where variables are valid

In the following example there are two distinct variables named `m`:

```py
m = "Hello, world"

def average(a, b):
    m = (a + b) / 2
    return m
x = average(1, 2)

print(m) # prints "Hello, world"
```

## Scope

Inside a function, outer variables may be read but not overwritten

In other programming languages constructs like `if` or `for` usually also open a new scope - this is not the case in Python
