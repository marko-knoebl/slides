# Iterators

## Iterators

Superficially: An iterator is a special object over which we can iterate over via `for o in my_iterator`

Iterators can be created in various ways

## Iterators

Specific background: An iterator is a special object that has a method named `__next__`

## Iterators - example: count

```py
from itertools import count

for i in count():
    print(i)
```

## Iterators - example: count

```py
from itertools import count

c = count()

c.__next__()
c.__next__()
```

## Iterators - example: count

```py
from itertools import count

c = count()

next(c)
next(c)
```

## Iterators - example: repeat

```py
from itertools import repeat

r = repeat('a', 5)

next(r)
...
```

## Iterators - example: repeat

If the iterator is "used up":

`StopIteration` exception

## Creating iterators

possibilities:

- functions from `itertools`
- custom class with `__next__` (and `__iter__`)
- generator expression
- function with `yield`

## itertools

https://docs.python.org/3/library/itertools.html

## Custom class

exercise:

```py
for i in random():
    ...
```

or

```py
for number in roulette():
    print(number, end=" ")

4 0 29 7 13 19
```

## Generator expressions

Similar to list comprehensions

```py
# list comprehension
mylist = [i*i for i in range(3)]

# generator
mygenerator = (i*i for i in range(3))
```

## Generator expressions

Generator expressions are slightly different from list comprehensions:

- lighter on resources (memory, ...)
- can be iterated over only once and in sequence

## yield

A function can contain a `yield` statement instead of a `return` statement - this makes it a generator

```py
# custom count generator
def count():
    i = 0
    while True:
        yield i
        i += i
```

## Iterable and \_\_iter\_\_

Iterable = Object that can be iterated over

An iterator defines a method named `__iter__`

Examples: lists, iterators
