# Iterables & Iterators

## Iterable

An iterable is an object that can be iterated over bia `for o in my_iterable`

Examples of iterables:

- list
- dict
- range objects
- iterators

## Iterators

Iterating over objects is always done via so-called _iterators_.

An iterator can be created via `my_iterable.__iter__()`.

## Iterators

Iterator of a list:

```py
primes = [2, 3, 5, 7]

primes_iterator = primes.__iter__()
```

An Iterator can also provide an iterator (itself):

```py
primes_iterator_iterator = primes_iterator.__iter__()

print(primes_iterator_iterator == primes iterator) # True
```

## Iterators

Iterators have a method named `__next__` which will return the next object of an iteration.

Example:

```py
numbers = [1, 2, 3]

numbers_iterator = numbers.__iter__()

print(numbers_iterator.__next__()) # 1
print(numbers_iterator.__next__()) # 2
```

## Iterators

When an iterator is used up a `StopIteration` exception is raised.

```py
print(numbers_iterator.__next__()) # 1
print(numbers_iterator.__next__()) # 2
print(numbers_iterator.__next__()) # 3
print(numbers_iterator.__next__()) # StopIteration
```

## Creating iterators

We've seen:

- creation from iterables (e.g. _list_, _range_, _custom classes_) via `__iter__`

Other possibilities:

- Functions from the `itertools` module
- Generator expressions
- Functions with `yield`

## Itertools

Module for creating iterators

- `itertools.count`
- `itertools.repeat`
- `itertools.product`

https://docs.python.org/3/library/itertools.html

## Itertools - example: count

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
