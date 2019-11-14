# Python Advanced

## Presentation and code

Presentations available at: https://karuga.eu/courses-presentations

Code available at: https://github.com/marko-knoebl/courses-code

## Your Trainer

Marko Knöbl

- Frontend Web-Development
  - JavaScript
  - React, Angular
- Programming
  - Python, JavaScript

## Introduction of Participants

- current projects
- prior knowledge
- expectations

## Organizational

- duration
- breaks
- lunch
- materials
- questions, feedback?

# QA & Testing

## Logging

## Logging

```py
import logging
logging.basicConfig(
    filename="sort.log",
    level=logging.DEBUG,
    filemode="w"
)

logging.debug("hello")
```

## Logging

Example: sorting algorithm

## assert

## Doctests

Code examples and unit tests in one - inside the doc string

## Doctests

```py
def add(a, b):
    """Add two numbers.

    >>> add(2, 3)
    5
    """
```

## Running doctests

```py
if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

## Doctests: long outputs

```py
"""
>>> bubblesort(list(range(10))) #doctest: +NORMALIZE_WHITESPACE
[0, 1, 2, 3, 4, 5,
6, 7, 8, 9]
>>> bubblesort(list(range(10))) #doctest: +ELLIPSIS
[0, 1, 2, ..., 8, 9]
"""
```

## Unit tests

Possibilities:

- unittest (standard library)
- pytest
- nose

## unittest

test_tictactoe.py

```py
import unittest
from tictactoe import has_won

class HasWon(unittest.TestCase):
    def test_has_won_first_row_x(self):
        board = [["X", "X", "X"],
                 [None, None, None],
                 [None, None, None]]
        w = has_won(board, "X")
        self.assertTrue(w)

if __name__ == "__main__":
    unittest.main()
```

## unittest

Running all tests in files that end in _test\*.py_:

```bash
python -m unittest
```

Search for a different pattern:

```bash
python -m unittest discover -p "*_test.py"
```

Note: in order to be discovered all packages must contain a file named _\_\_init\_\_.py_ (siehe https://bugs.python.org/issue35617)

## unittest - Assertions

assertions:

- `.assertEqual(a, 3)`
- `.assertTrue(b)`
- `.assertFalse(c)`
- `.assertIsNone(d)`
- `.assertIn(a, [2, 3, 4])`
- `.assertIsInstance(a, int)`
- `.assertRaises(TypeError, len)`
- ...

there are also contrary assertions, e.g. `.assertNotEqual(a, 3)`

## unittest - setUp and tearDown

Defining functions that are executed before / after each test:

```py
import unittest

class WidgetTestCase(unittest.TestCase):
    def setUp(self):
        self.widget = Widget('The widget')

    def tearDown(self):
        self.widget.dispose()
```

## unittest - test coverage

PIP package _coverage_

execution:

```bash
coverage run test_shorten.py
coverage report
```

Example output:

```
Name              Stmts   Miss  Cover
-------------------------------------
shorten.py            4      0   100%
test_shorten.py      11      0   100%
-------------------------------------
TOTAL                15      0   100%
```

# Docstrings

## displaying docstrings

from the interactive Python console:

```py
help(round)
import math
help(math)
help(math.floor)
```

from the terminal:

```bash
python -m pydoc round
python -m pydoc math
python -m pydoc math.floor
```

## Docstring format

PEP 257: https://www.python.org/dev/peps/pep-0257/

## Docstrig format

Docstring of a module: description, list of exported Functions with single-line summaries

Docstring of a class: description, list of methods

Docstring of a function: description, list of parameters

## Pydocstyle

Linter for validating docstrings

## reStructuredText and Sphinx

_reStructuredText (reST)_ = simple markup language (similar to _Markdown_), is used in Python docstrings

_Sphinx_ = tool that uses existing docstrings to generate documentation in HTML and similar formats

## reStructuredText

Example:

```rest
Heading
=======

- list item 1
- list item 2

Link to `Wikipedia`_.

.. _Wikipedia: https://www.wikipedia.org/

.. code:: python

   print("hello")
```

# Static typing

## Static typing

Newer Python versions support optional type annotations

MyPy: type checker for Python that makes use of type annotations

https://mypy-lang.org

## Type declarations

Variables:

```py
i: int = 3
```

## Type declarations

Functions:

```py
def double(n: int) -> int:
    return 2 * n
```

## Type declarations

collections:

```py
from typing import Iterable

names: Iterable[str] = ...
```

## Type declarations

collections:

```py
from typing import List, Set, Dict, Tuple

names: List[int] = ['Anna', 'Bernd', 'Caro']
anna: Tuple[str, str, int] = ('Anna', 'Berger', 1990)
roman: Dict[int, str] = {1: 'I', 2: 'II', 3: 'III', 4: 'IV'}
```

## Mypy documentation

https://mypy.readthedocs.io

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

# Advanced object-oriented programming

## Advanced object-oriented programming

Example: class _Length_

```py
a = Length(130, "cm")
a.value # 130
a.unit # cm
a.unit = "in"
a.value # 51.18
str(a) # 51.18in
b = Length.from_string("12cm")
2 * b # 24cm
b + a # 142cm
```

# OOP: Properties

## Properties

Getters & setters (not common in Python):

```py
r = Rectangle(length=3, width=4)
print(r.get_area()) # 12
r.set_length(4)
print(r.get_area()) # 16
```

Using properties in Python:

```py
r = Rectangle(length=3, width=4)
print(r.area) # 12
r.length = 4
print(r.area) # 16
```

## Properties

Exercise: Implement a class called `Rectangle_gs` that uses getters and setters

## Properties

```py
class Rectangle_gs:
    def __init__(self, length, width):
        self._length = length
        self._width = width

    def get_length(self):
        return self._length

    def set_length(self, new_length):
        self._length = new_length

    def get_width(self):
        return self._width

    def set_width(self, new_width):
        self._width = new_width

    def get_area(self):
        return self._length * self._width
```

## Properties

With properties we can "redirect" reading and writing of attributes to a function - so accessing `r.area` can lead to the execution of a getter or setter function.

## Properties

```py
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def _get_area(self):
        return self.length * self.width
    
    area = property(_get_area)
```

`property` is a built-in, so it's always available

## Properties

Extension: Setter for _area_

```py
class Rectangle:
    ...

    def _set_area(self, new_area):
        # adjust the length
        self.length = new_area / self.width
    
    area = property(_get_area, _set_area)
```

## Properties

Alternative way to create Properties via decorators:

```py
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    @property
    def area(self):
        return self.length * self.width
    
    @area.setter
    def area(self, new_area):
        self.length = new_area / self.width
```

# OOP: Static attributes and methods

## Class attributes (static attributes)

_Class attributes_ are attributes that are only defined on the class (not on each instance) - all instances share these attributes.

## Class attributes (static attributes)

Example: `Money` class with a shared class attribute called `_currency_data`

```py
class Money:
    _currency_data = [
        {"code": "USD", "symbol": "$", "rate": 1.0},
        {"code": "EUR", "symbol": "€", "rate": 1.1},
        {"code": "GBP", "symbol": "£", "rate": 1.25},
        {"code": "JPY", "symbol": "¥", "rate": 0.01},
    ]

    def __init__(self, ...):
        ...
```

## Static methods

If a method does not have to access data of a specific instance it can be declared as a static Method.

```py
class Money:
    ...

    @staticmethod
    def _get_currency_data(code):
        for currency in Money._currency_data:
            if code == currency["code"]:
                return currency
        raise ValueError(f"unknown currency: {code}")
```

Note: A static method does not receive `self` as its first parameter - there is no reference to a specific instance.

## Static methods

There are two main applications for static methods:

- Creation of instances: e.g. `Money.from_string("23.40EUR")`
- Bundling of helper functions into a class: e.g. `_get_currency_data`

## Class methods

If we want to make the followng code more portable (especially for inheritance) it would make sense not to mention the class name (`Money`) in the method definition:

```py
class Money:
    ...

    @staticmethod
    def _get_currency_data(code):
        for currency in Money._currency_data:
            if code == currency["code"]:
                return currency
        raise ValueError(f"unknown currency: {code}")
```

## Class methods

Class methods are special static methods which enable referencing the class by a generic name (conventionally `cls`):

```py
class Money:
    ...

    @classmethod
    def _get_currency_data(cls, code):
        for currency in cls._currency_data:
            if code == currency["code"]:
                return currency
        raise ValueError(f"unknown currency: {code}")
```

# OOP: Magic Methods

## Magic Methods

Magic methods are special methods that influence the behavior of a class.

They begin and end with two underscores, e.g. `__init__`

List of magic methods: https://docs.python.org/3/reference/datamodel.html#special-method-names

## Magic Methods

Methods for converting to strings:

- `__repr__`: default representation, ideally readable / interpretable by Python
- `__str__`: "nice" representation for humans, falls back to `__repr__` if not overwritten

Example:

```py
from datetime import time
a = time(23, 45)
repr(a) # 'datetime.time(23, 45)'
str(a) # '23:45:00'
```

## Magic Methods

Methods for mathematical operators:

- `__add__`
- `__mul__`
- `__rmul__`
- ...

## Magic Methods

- `__call__`
- `__getitem__`

# OOP: Inheritance

## Subclasses and order of inheritance

## super()

Proxy for parent classes

## super()

without super:

```py
class Child(A, B):
    def __init__(self, x, y):
        A.__init__(self, x, y)
        B.__init__(self, x, y)
```

## super()

with super:

```py
class Child(A, B):
    def __init__(self, x, y):
        super().__init__(x, y)
```

# OOP: In depth

## Class decoration

```py
@logattraccess
class Foo():
    def __init__(self):
        self.a = 3

f = Foo()

f.a # prints: "get property 'a'"
f.b = 3 # prints: "set propery 'b'"
```

## Instance attributes and slots

In general we can assign any attributes

```py
a.value = 3
```

In order to reduce memory consumption we can define so-called _slots_ in a class:

```py
class Money():
    __slots__ = ['currency', 'amount']
```

## Exercises

- class "Vector"
- class "BankAccount"
- class "Dictionary" (thesaurus)

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

print(primes_iterator_iterator == primes_iterator) # True
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

# Loops

## for ... else

A for loop can have an optional else clause

It will be executed if the loop finishes normally - i.e. if Python does not encounter a `break` or `return` statement

## for ... else

This functionality is not present in any other widespread language

Many Python developers don't know it either

Quote from Python's inventor:

> I would not have the feature at all if I had to do it over.

## Exercises

- `is_prime()` with loops and `for ... else`

# Advanced data types

## Advanced data types

- set / frozenset
- NamedTuple
- enum

# set & frozenset

## set & frozenset

Set: Unordered collection of elements with no duplicates

Frozenset: immutable set

```py
ingredients = {"flour", "water", "salt", "yeast"}
ingredients = set(["flour", "water", "salt", "yeast"])
ingredients = frozenset(["flour", "water", "salt", "yeast"])
```

## set

Sets can be an alternative for Lists if the order is not relevant.

```py
ingredients1 = {"flour", "water", "salt", "yeast"}
ingredients2 = {"water", "salt", "flour", "yeast"}
ingredients1 == ingredients2 # True
```

## set

Take care: An empty set must always be created via `set()`

Why does `{}` not produce an empty set?

## Operations on sets

```py
x = set('abc')
y = set('aeiou')
x | y
x & y
x - y
x <= y
```

## Example: Neighboring countries in North America

```py
countries = {
    "Canada", "USA", "Mexico", "Guatemala", "Belize",
    "El Salvador", "Honduras", "Nicaragua", "Costa Rica",
    "Panama"}

neighbors = [
    {"Canada", "USA"},
    {"USA", "Mexico"},
    {"Mexico", "Guatemala"},
    {"Mexico", "Belize"},
    {"Guatemala", "Belize"},
    {"Guatemala", "El Salvador"},
    {"Guatemala", "Honduras"},
    {"Honduras", "Nicaragua"},
    {"Nicaragua", "Costa Rica"},
    {"Costa Rica", "Panama"}
]
```

## Task: Find the "route" from any country to another

# namedtuple

## namedtuple

Example:

```py
from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])

p = Point(11, y=22)

print(p[0])
print(p.x)
```

# Enum

## Enum

Enum = collection of symbolic names that can be used instead of specific strings

Using a string:

```py
a = Button(position="left")
```

Using an enum named _Position_:

```py
a = Button(position=Position.LEFT)
```

Enums can prevent typos and help with autocompletion.

## Enum

Defining an enum:

```py
from enum import Enum

class Position(Enum):
    UP = 1
    RIGHT = 2
    DOWN = 3
    LEFT = 4
```

# Parallelization: threads & multiprocessing

## Threads & multiprocessing - why?

Threads:

- dividing resources of a single processor core across various tasks
- waiting for I/O

Multiprocessing:

- using multiple processor cores

Advantages of threads: simpler, variables may be modified directly

## Threads

Python will repeatedly switch between parallel threads so they are seemingly running concurrently  
However at any point in time only one thread is active (Global interpreter lock - GIL)

Two threads may access the same data

## Starting a new thread

```py
from threading import Thread

my_thread = Thread(target=print, args=('hello', ), kwargs={end: ""})
my_thread.start()
```

## Waiting for a thread to end

```py
my_thread.join()
```

## Example: repeated printing

```py
def print_multiple(text, n):
    for i in range(n):
        print(text, end="")

thread_a = Thread(target=print_multiple, args=("a", 20))
thread_b = Thread(target=print_multiple, args=("b", 20))
thread_a.start()
thread_b.start()
thread_a.join()
thread_b.join()
```

## Exercise: iterations in a thread

We'll write a program that executes two threads (a and b)

The two threads contain loops that count how often they were called

example output:

```bash
797 iterations in thread a
799 iterations in thread b
1750 iterations in thread a
20254 iterations in thread b
829 iterations in thread a
```

## Locks

Limiting execution to a single thread for some time (e.g. to print multiple things)

Other threads are blocked during this time

## Locks

In the entire program there should only be one lock object

```py
from threading import Lock

l = Lock()
```

## Locks

```py
def print_multiple_locked(text, n):
    with l:
        for i in range(n):
            print(text, end="")
```

## Threads - Example

```py
threads = []

for i in range(1000000000000, 1000000000064):
    prime_thread = Thread(target=print_is_prime, args=(i,))
    prime_thread.start()
    threads.append(prime_thread)

for thread in threads:
    thread.join()
print('all threads finished')
```

## Threads and xkcd download

Task: download xkcd comics 100-109 - once in sequence and once in parallel

## Multiprocessing

## Running functions in separate processes

Multiprocessing enables running a function inside a separate process

```py
from multiprocessing import Process

if __name__ == "__main__":
    p = Process(target=hello)
    p.start()
```

## Running functions in separate processes

```py
from multiprocessing import Process

if __name__ == "__main__":
    processes = []
    for i in range(30, 40):
        p = Process(target=print_fib, args=(i,))
        processes.append(p)
        p.start()
    for process in processes:
        process.join()
```

## Pools

My be used for concurrent processing of multiple data points which is started concurrently

Example: processing all images inside a folder

## Pools

Task: compute fibonacci numbers via map() (1 process)

input: `[0, 1, 2, 3, 4, 5, 6, ...]`

return value: `[0, 1, 1, 2, 3, 5, 8, ...]`

## Pools

```py
with Pool(processes=4) as pool:
    print(pool.map(fib, range(1000, 1100)))
```

## Data exchange: shared memory

Integers and floats (and arrays of these types) may be shared across processes

```py
from multiprocessing import Value, Array, Process

a = Array('i', [2, 4, 13])
p = Process(target=f, args=(a,))
p.start()
...
```

## Other possibilities: Pipes & Queues

_Pipe_: Messaging between processes in two directions - e.g. 1 background process which receives tasks from time to time and idles in the meantime

_Queue_: Messaging in one direction from various producers to various consumers (slower than pipes)

