# Higher-order functions

## Higher-order functions

A higher-order function is a function that can receive and/or return other functions

remember: in Python, "everything is an object" - and so are functions

## Functools

_functools_ module: collection of some higher-order functions

examples:

- `functools.lru_cache`
- `functools.cache` (Python 3.9)
- `functools.partial`
- `functools.reduce`

## Functools: partial

```py
from functools import partial
open_utf8 = partial(open, encoding='utf-8')
```

## Functools: memoization / caching

**memoization**: strategy for performance optimization

return values of previous function calls are cached and used on subsequent function calls with the same arguments

```py
def fibonacci(n):
    if n in [0, 1]:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# make faster by caching
fibonacci = lru_cache(fibonacci)
```

## Decorator syntax

Decorator syntax: simple way of applying higher-order functions to function definitions

## Decorator syntax

```py
@lru_cache  # Python >= 3.8
def fibonacci(n):
    ...
```

is equivalent to:

```py
def fibonacci(n):
    ...

fibonacci = lru_cache(fibonacci)
```
