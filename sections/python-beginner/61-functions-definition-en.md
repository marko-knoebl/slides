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

print(m)
```

## Scope

Inside a function, outer variables may be read but not overwritten

In other programming languages constructs like `if` or `for` usually also open a new scope - this is not the case in Python

## Docstrings

Docstrings = Strings that describe functions / classes / modules in more detail

comments in a function: help programmers who develop that function

docstring of a function: help programmers who use that function

## Docstrings

Example:

```py
def fib(n):
    """Compute the n-th fibonacci number.

    n must be a nonnegative integer
    """
    ...
```

## Viewing docstrings

```py
help(fib)
help(round)
```

## Exercise: function lottery()

Write a function named `lottery` which creates a list of lottery numbers

`lottery()` → `[2, 35, 19, 27, 10]`

## Exercise: isprime()

Write a function named `isprime` which tests whether a number is prime

`isprime(59)` → `True`

## Exercise: ask_yes_no()

Write a function named `ask_yes_no`, which asks the user a yes/no question and returns either `True` or `False`
