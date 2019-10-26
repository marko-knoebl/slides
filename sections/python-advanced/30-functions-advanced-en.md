# Functions - advanced

## Lambdas

## Memoisation

(example: fibonacci)

## Decorators

Decorators: Enable easily modifying a function to add to its behavior

The decorator is a function that takes a function as a parameter and returns a new, modified function

## Decorators

```py
@cache
def fib(n):
    ...
```

is equivalent to:

```py
def fib(n):
    ...

fib = cache(fib)
```

## Functools

## Functools - example

```py
from functools import partial
open_utf8 = partial(open, encoding='UTF-8')
```
