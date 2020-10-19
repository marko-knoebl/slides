# Functions - advanced

## Lambdas

defining a lambda function (anonymous function):

```py
multiply = lambda a, b: a * b
```

## Lambdas

using a lambda for sorting:

```py
pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
pairs.sort(key=lambda pair: pair[1])
```

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

## Memoisation

strategy for performance optimization

return values of previous function calls are cached and used on subsequent function calls with the same arguments

(example: fibonacci)
