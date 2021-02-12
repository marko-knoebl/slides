# Python Advanced

## Topics

- logging
- automated testing
- advanced object-oriented programming
  - properties
  - static attributes and methods
  - magic methods
  - inheritance
- iterators
- lambdas
- higher-order functions
- advanced data types: set, namedtuple, enum
- parallelization: threads and multiprocessing

# Logging

## Logging

long-running programs can document what they are doing in files

e.g.: long-running algorithms, web servers

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

Exercise: add logging to an existing function (e.g. to a sorting algorithm)

# Automated testing

## Automated testing

why:

- make sure the code works as intended
- more easily refactor / change code without breaking anything
- document expected behavior

## Testing tools

**pytest**: testing library with a simple interface

**doctest**: checks code examples in docstrings

**unittest**: testing library that is included in the standard library

## Example: code to be tested

code to be tested:

```py
# insertion_sort.py
def insertion_sort(unsorted):
    """Return a sorted version of a list."""
    sorted = []
    for new_item in unsorted:
        i = 0
        for sorted_item in sorted:
            if new_item >= sorted_item:
                i += 1
            else:
                break
        sorted.insert(i, new_item)
    return sorted
```

## assert

_assert_: keyword that makes sure some condition is met

```py
assert isinstance(a, int)
assert a > 0
```

If the condition is not met, it will throw an _assertion error_

## Example: manual tests with assert

```py
# insertion_sort_test.py
from insertion_sort import insertion_sort

assert insertion_sort([3, 2, 4, 1, 5]) == [1, 2, 3, 4, 5]
assert insertion_sort([1, 1, 1]) == [1, 1, 1]
assert insertion_sort([]) == []
```

the script should run without throwing errors

# Pytest

## Pytest

testing library with a simple interface, based on `assert`

```
pip install pytest
```

## Pytest

test file that works with pytest:

```py
# insertion_sort_test.py
from insertion_sort import insertion_sort

def test_insertion_sort():
    assert insertion_sort([3, 2, 4, 1, 5]) == [1, 2, 3, 4, 5]
    assert insertion_sort([1, 1, 1]) == [1, 1, 1]
    assert insertion_sort([]) == []
```

finding and running tests:

```bash
python -m pytest
```

## Report

```
=================== test session starts ===================
platform win32 -- Python 3.8.7, pytest-6.2.1, [...]
rootdir: C:\[...]
collected 1 item

insertion_sort_test.py .                             [100%]

==================== 1 passed in 0.19s ====================
```

## Test discovery

naming test files: `*_test.py` (or `test_*.py`)

naming test functions: `test*`

## Coverage reports

Determine how much of the code is covered by tests (what percentage of statements is executed during the tests):

```bash
pip install pytest-cov
```

```bash
python -m pytest -cov=.
```

example output:

```
Name                     Stmts   Miss  Cover
--------------------------------------------
insertion_sort.py           10      0   100%
insertion_sort_test.py       5      0   100%
--------------------------------------------
TOTAL                       15      0   100%
```

## Testing for exceptions

```py
import pytest

def test_no_argument_raises():
    with pytest.raises(TypeError):
        insertion_sort()
```

## Grouping

grouping tests via classes:

```py
class TestExceptions():
    def test_no_argument_raises():
        with pytest.raises(TypeError):
            insertion_sort()

    def test_different_types_raises():
        with pytest.raises(TypeError):
            insertion_sort(["a", 1])
```

## Fixtures

_fixtures_ can set up conditions before running a test

```py
def test_foo(tmp_path):
    # tmp_path is a path to a temporary directory
```

built-in fixtures:

- `tmp_path`
- `capsys` (capture output to _stdout_ and _stderr_)
- ... ([see documentation](https://docs.pytest.org/en/stable/fixture.html))

## Resources

- [pytest: Installation and Getting Started](https://docs.pytest.org/en/stable/getting-started.html#run-multiple-tests)
- [documentation](https://docs.pytest.org/)

# Doctests

## Doctests

Code examples may be included in docstrings and may be used for testing

## Doctests

simple doctest:

```py
# insertion_sort.py
def insertion_sort(unsorted):
    """Return a sorted version of a list.

    >>> insertion_sort([3, 2, 4, 1, 5])
    [1, 2, 3, 4, 5]
    """

    # code here
```

## Running Doctests

running doctests from pytest:

```bash
python -m pytest --doctest-modules
```

## Long outputs

```py
"""
>>> insertion_sort(range(10)) #doctest: +NORMALIZE_WHITESPACE
[0, 1, 2, 3, 4, 5,
6, 7, 8, 9]
>>> insertion_sort(range(10)) #doctest: +ELLIPSIS
[0, 1, 2, ..., 8, 9]
"""
```

# Unittest

## Unittest

_unittest_: testing package inside the standard library

often, _pytest_ is recommended over _unittest_

## Test discovery

```bash
python -m unittest
```

looks for files matching `test_*.py*`

Note: in order to be discovered all packages must contain a file named _\_\_init\_\_.py_ (see <https://bugs.python.org/issue35617>)

specifying a different pattern:

```bash
python -m unittest discover -p "*_test.py"
```

## Writing tests

```py
# insertion_sort_test.py
import unittest

import insertion_sort

class InsertionSort(unittest.TestCase):
    def test_five_items(self):
        input = [3, 2, 4, 1, 5]
        expected = [1, 2, 3, 4, 5]
        actual = insertion_sort.insertion_sort(input)
        self.assertEqual(actual, expected)

    def test_empty(self):
        actual = insertion_sort.insertion_sort([])
        self.assertEqual(actual, [])
```

## Assertions

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

## setUp and tearDown

Defining functions that are executed before / after each test:

```py
import unittest

class WidgetTestCase(unittest.TestCase):
    def setUp(self):
        self.widget = Widget('The widget')

    def tearDown(self):
        self.widget.dispose()
```

## test coverage

PIP package _coverage_

execution:

```bash
python -m coverage run test_shorten.py
python -m coverage report
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

## Running doctests

```py
# insertion_sort_test.py
import doctest

import insertion_sort

def load_tests(loader, tests, ignore):
    tests.addTests(doctest.DocTestSuite(insertion_sort))
    return tests
```

# Docstrings

## Displaying docstrings

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

PEP 257: <https://www.python.org/dev/peps/pep-0257/>

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

# Type hints

## Type hints

Newer Python versions support optional type hints

Type hints can support the IDE - e.g. by providing additional errors

## Type checkers

- pyright (used by VS Code extension _pylance_)
- mypy

## Type hints

Variables:

```py
i: int = 3
```

## Functions

Functions:

```py
def double(n: int) -> int:
    return 2 * n
```

## Collections

```py
from typing import List, Set, Dict, Tuple

names: List[str] = ['Anna', 'Bernd', 'Caro']
person: Tuple[str, str, int] = ('Anna', 'Berger', 1990)
roman_numerals: Dict[int, str] = {1: 'I', 2: 'II', 3: 'III', 4: 'IV'}
```

```py
from typing import Iterable

names: Iterable[str] = ...
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

## Static attributes and methods

_static attributes_ and _static methods_ are associated with a class, but not with any specific instance of it

example: _static attributes_ and _static methods_ of the _datetime_ class:

- `datetime.today()`
- `datetime.fromisoformat()`
- `datetime.resolution`

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

List of magic methods: <https://docs.python.org/3/reference/datamodel.html#special-method-names>

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

# Iterators

## Iterables and iterators

_iterable_: an object that can be iterated over via `for element in my_iterable`

_iterator_: an lightweight iterable

## Iterables and iterators

examples of iterables:

- lists
- dicts
- range objects
- iterators

## Iterators

An _iterator_ is a lightweight iterable

possible advantages of iterators over lists:

- only create / access resources on demand
- keep memory consumption low (only one generated object is ever in memory)

## Iterators

example: `open()` returns an iterator of lines in a file

```py
with open("./wikipedia_complete.txt", encoding="utf-8") as f:
    for line in f:
        print line
```

The file could be gigabytes in size and this would still work

## Iterators

example functions:

Loads all files in _foo/_ at the same time, then iterates over them:

```py
for text in read_textfiles_as_list("./foo/"):
    print(text[:5])
```

Loads and prints text files individually - keeping memory consumption low:

```py
for text in read_textfiles_as_iterator("./foo/"):
    print(text[:5])
```

## Iterators

calls that return iterators:

- `enumerate()`
- `reversed()`
- `open()`
- `os.walk()`
- `os.scandir()`
- `map()`
- `filter()`
- functions in _itertools_
- most database cursors (PEP 249)
- ...

note: `range` does not return an iterator (but a similar object)

## Itertools

[itertools](https://docs.python.org/3/library/itertools.html): module for creating iterators

- `itertools.count`
- `itertools.repeat`
- `itertools.product`
- ...

```py
from itertools import count

for i in count():
    print(i)
    if i >= 5:
        break

# 0 1 2 3 4 5
```

# Generator functions and generator expressions

## Generator functions and generator expressions

_Generator functions_ and _generator expressions_ are two ways to define custom iterators

## Generator functions

A function can contain a `yield` statement instead of a `return` statement - this makes it a generator

```py
def count():
    i = 0
    while True:
        yield i
        i += i
```

A generator function can be repeatedly exited (via `yield`) and entered again (by requesting the next value)

## Exercise: reading text files in a folder

create an iterator that returns the string contents of all UTF-8 text files in a directory

usage:

```py
for content in read_textfiles("."):
    print(content[:10])
```

## Exercise: reading text files in a folder

solution:

```py
def read_textfiles(path="."):
    for file in os.listdir(path):
        try:
            with open(path + "/" + file) as fobj:
                yield fobj.read()
            except:
                pass
```

## Generator expressions

Generator _expressions_ are similar to list comprehensions

list comprehension:

```py
mylist = [i*i for i in range(3)]
```

generator expression:

```py
mygenerator = (i*i for i in range(3))
```

## Generator expressions

summing all numbers from 1 to 10 million:

via a list comprehension - will use hundreds of megabytes in memory (see task manager):

```py
sum([a for a in range(1, 10_000_001)])
```

via a generator expression:

```py
sum((a for a in range(1, 10_000_001)))
```

# Iterators: internals

## Iterators: internals

In Python every for loop happens via an _iterator_.

When iterating over an _iterable_, an _iterator_ is created for that iteration.

Every iterable has an `__iter__` method which returns an iterator

## Iterators: internals

An iterator has a method called `__next__`

`__next__()` either returns the next value of the iteration or raises a `StopIteration` exception

An iterator is actually _also_ an iterable (it has an `__iter__` method which returns itself)

## Iterators: internals

Iterator of a list:

```py
numbers = [1, 2, 3, 4]

numbers_iterator = numbers.__iter__()
```

## Iterators: internals

Iterators have a method named `__next__` which will return the next object of an iteration.

Example:

```py
numbers = [1, 2, 3]

numbers_iterator = numbers.__iter__()

print(numbers_iterator.__next__()) # 1
print(numbers_iterator.__next__()) # 2
```

## Iterators: internals

When an iterator is used up a `StopIteration` exception is raised.

```py
print(numbers_iterator.__next__()) # 1
print(numbers_iterator.__next__()) # 2
print(numbers_iterator.__next__()) # 3
print(numbers_iterator.__next__()) # StopIteration
```

## Iterators: internals

The global function `next()` is equivalent to calling `.__next__()`

```py
next(numbers_iterator)
```

```py
numbers_iterator.__next__()
```

## Iterators: internals

exercise: create custom iterables from a class by implementing `__iter__` and `__next__`

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

# For ... else

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

# Lambdas

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

# Parallelization

## Threads and multiprocessing - why?

Threads:

- waiting for input / output (I/O)
- dividing resources of a single processor core across various tasks

Multiprocessing:

- using multiple processor cores

Advantages of threads: simpler, variables may be modified directly

## Threads and multiprocessing

general mechanism: we instruct Python to run multiple functions in separate threads / processes, e.g.:

Run `download_xkcd_comic(i)` in parallel threads for i = 100 - 120

Run `is_prime(i)` in parallel processes for several numbers and collect the boolean results in a list

## Threads and multiprocessing

Threads: Python will repeatedly switch between parallel threads so they are seemingly running concurrently; however at any point in time only one thread is active (Global interpreter lock - GIL)

Multiprocessing: Python will start multiple processes (visible in the task manager); it can be harder to share values between processes

## Python Interfaces

high-level:

- `concurrent.futures.ThreadPoolExecutor`
- `concurrent.futures.ProcessPoolExecutor`

low-level:

- `threading.Thread`
- `multiprocessing.Process`

## ThreadPoolExecutor

```py
from concurrent.futures import ThreadPoolExecutor

def print_multiple(text, n):
    for i in range(n):
        print(text, end="")

with ThreadPoolExecutor() as executor:
    executor.submit(print_multiple, ".", 200)
    executor.submit(print_multiple, "o", 200)

print("completed all tasks")
```

## Exercise: iterations in a thread

We'll write a program that executes two threads (a and b). The two threads contain loops that count how often they were called

example output:

```bash
797 iterations in thread a
799 iterations in thread b
1750 iterations in thread a
20254 iterations in thread b
829 iterations in thread a
```

## Exercise: HTML page download via threads

Exercise: concurrently download Python package documentation pages for these topics:

```json
["os", "sys", "urllib", "pprint", "math", "time"]
```

example URL: <https://docs.python.org/3/library/os.html>

The downloads should be saved to a separate _downloads_ folder

## ProcessPoolExecutor

The program must be a Python file that only "runs" its main part if it is executed directly - and not imported (via `__name__ == "__main__"`)

```py
from concurrent.futures.process import ProcessPoolExecutor

def print_multiple(text, n):
    for i in range(n):
        print(text, end="")

if __name__ == "__main__":
    with ProcessPoolExecutor() as executor:
        executor.submit(print_multiple, ".", 200)
        executor.submit(print_multiple, "o", 200)
```

## Map

May be used for parallel processing of multiple input data entries to generate output data

example: process every entry in the list `[2, 3, 4, 5, 6]` and determine wheter they are prime numbers → `[True, True, False, True, False]`

```py
with ProcessPoolExecutor() as executor:
    prime_indicators = executor.map(is_prime, [2, 3, 4, 5, 6])
```

## Map

Exercise: write a function that creates a list of prime numbers in a specific range:

```py
prime_range(100_000_000_000_000, 100_000_000_000_100)
# [100000000000031, 100000000000067,
#  100000000000097, 100000000000099]
```

Make use of a `ProcessPoolExecutor` and use this function:

```py
def is_prime(n):
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
```
