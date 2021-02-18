# Python beginner

## Topics

- overview and comparison to other programming languages
- installation
- working with the interactive Python console
- variables and basic data types
- composite types: dict, list, tuple
- help and documentation
- builtins and the standard library
- control structures
  - if / else
  - loops (while, for)
- functions
- code quality and linting
- debugging

# Python: Overview

## Python

- dynamic programming language
- simple syntax, relatively easy to learn
- useful in many areas (science, web development, GUI programming)
- big standard library, many additional packages

## Python development and versions

Python 3: new minor version (e.g. 3.9) released every October

Python 2: support ended in 2019, [10% of developers](https://www.jetbrains.com/lp/python-developers-survey-2019/) were still using it by then

## Code examples

```py
# this is a comment

a = 3
b = 4
print(a * b)

if a * b > 10:
    print('greater')
```

# Installation on Windows

## Installation on Windows

Download from <https://python.org>

during installation, check the option "Add Python 3.x to PATH"

<!--
adding to path

program "environment variables" / "Umgebungsvariablen für dieses Konto bearbeiten"
add to PATH:

for Anaconda:
C:\Users\Marko\Anaconda3
C:\Users\Marko\Anaconda3\Scripts
-->

<!--
why not use windows store version?

- does not automatically resolve the maximum path limit (260 characters)
  manual fix: regedit: set `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem\LongPathsEnabled` to `1`
- does not put executables on PATH (instead of "flask" we have to run "python -m flask")
-->

## Installation on Windows

verify the installation:

`python --version` should display the version number

`pip install requests` should successfully download and install a small Python package named _requests_

## Installation on Windows

installation includes:

- Python _runtime_ for executing Python code
- interactive Python console
- IDLE: simple development environment
- PIP: package manager for installing extensions

# Interactive Python console

## Interactive Python console

options:

- local installation
- online notebooks (Jupyter)

## Local Python console

launching the Python console / shell:

- command `python` in the command prompt
- from the start menu (e.g. _Python 3.9_)

quitting:

```py
exit()
```

## Online Python consoles

simple:

<https://www.python.org/shell/>

<!-- dated -->

_Jupyter notebooks_:

- Binder (limited sessions): <https://jupyter.org/try>
- <https://www.kaggle.com/notebooks>
- <https://colab.research.google.com> (Google login required)

# Variables

## Variables

```py
birth_year = 1970
current_year = 2020
age = current_year - birth_year
```

Names of variables are usually written in lower case, separating words by underscores

Variable names may only consist of letters, digits and underscores

## Variables

Overwriting (reassigning) variables:

```py
name = "John"
name = "Jane"
a = 3
a = a + 1
```

# Basic (primitive) data types

## Basic (primitive) data types

- `int` (integer)
- `float` (floating point number)
- `str` (string): text
- `bool` (boolean): yes / no
- none: missing / unknown value

## int & float

example:

```py
(7 - 3) * 0.5 / 3.5
```

## str

A _string_ represents text

Strings can be enclosed in single or double quotes

```py
greeting = "Hello"
name = 'Tom'
```

## Building strings

```py
name = "Tom"
```

Inserting a variable (f-strings):

```py
message1 = f"Hello, {name}!"
```

Joining strings:

```py
message2 = "Hello, " + name + "!"
```

## Strings - escape sequences

Problem: how do we include characters like `"` in a string?

this is invalid:

```py
text = "He said: "hi!""
```

## Strings - escape sequences

solution:

```py
text = "He said: \"hi!\""
```

Python treats the sequence `\"` like a single `"`

## Strings - escape sequences

Line break: `\n`

```py
a = 'line 1\nline 2'
```

single Backslash: `\\`

```py
b = 'C:\\docs'
```

## bool

boolean value: yes/no

In Python: `True` or `False`

note the capitalization

## None

None represents a value that is unknown or missing

```py
first_name = "Mike"
middle_name = None
last_name = "Jones"
```

# Types and type conversions

## Types

Determining the type of a variable via `type`:

```py
a = 4 / 2

type(a)
```

## Type conversions

Objects may be converted to other types via `int()`, `float()`, `str()`, `bool()`, ...

```py
pi = 3.1415
pi_int = int(pi)
message = "Pi is approximately " + str(pi_int)
```

# Functions

## Functions

A _function_ is a "sub-program" that can perform a specific task

examples of predefined functions:

- `len()` can determine the length of a string (or of a list, ...)
- `id()` can determine the internal ID of an object
- `type()` can tell us the type of an object
- `print()` can write some output into the terminal
- ...

## Functions

A function can receive so-called _parameters_ and produce a result (a _return value_)

example: `len()` can take a string as a _parameter_ and produce an int as the _return value_

example: `print()` can take various objects as _parameters_; it does **not** have an explicit _return value_

## Methods

A _method_ is a function that belongs to a specific object type (e.g. to _str_)

examples of string methods:

- `first_name.upper()`
- `first_name.count("a")`
- `first_name.replace("a", "@")`

# Composite types: dict, list, tuple

## dict

Dicts (_dictionaries_) are mappings that contain "named" entries with associated values.

```py
person = {
    "first_name": "John",
    "last_name": "Doe",
    "nationality": "Canada",
    "birth_year": 1980
}
```

## dict

Retrieving and setting elements:

```py
person["first_name"]
```

```py
person["first_name"] = "Jane"
```

## dict

exercise:

create and modify dictionaries that represent various objects, e.g.:

- a calendar event
- a person
- a product in an online shop
- ...

## list

A list represents a sequence of objects

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]

products = [
    {"name": "IPhone 12", "price": 949},
    {"name": "Fairphone", "price": 419},
    {"name": "Pixel 5", "price": 799}
]
```

## list

Retrieving list elements via their index (starting at 0):

```py
users = ["Alice", "Bob", "Charlie"]

users[0]
users[1]
users[-1] # last element
```

## list

Overwriting a list element

```py
users[0] = "Andrew"
```

## list

Appending an element

```py
users.append("Dora")
```

## list

Removing the last element:

```py
users.pop()
```

Removing by index:

```py
users.pop(0)
```

## list

Determining the length

```py
len(users)
```

## list

exercise:

create and modify data consisting of _dicts_ and _lists_ that represents various objects, e.g.:

- calendar events
- products in an online shop / shopping basket
- transactions on a bank account
- data on a country (including neighboring countries)

## Tuple

```py
date = (1973, 10, 23)
```

- area of application: similar to dicts
- behavior: similar to lists

## Tuples

Area of application: similar to dicts:

```py
point_dict = {"x": 2, "y": 4}
point_tuple = (2, 4)

date_dict = {
  "year": 1973,
  "month": 10,
  "day": 23
}
date_tuple = (1973, 10, 23)
```

Each entry in a tuple has a specific meaning

## Tuples

Behavior: similar to lists:

```py
date_tuple[0] # 1973
len(date_tuple) # 3
```

Unlike lists, tuples are immutable (no `.append` / `.pop` / ...)

## Data types - exercises

create and modify data structures that include _dicts_, _lists_ and _tuples_

# Object references and mutations

## Object references and mutations

What will be the value of `a` after this code has run?

```py
a = [1, 2, 3]
b = a
b.append(4)
```

## Object references and mutations

An assignment (e.g. `b = a`) assigns a new (additional) name to an object.

The object in the background is the same.

## Object references and mutations

If the original should remain intact it may be copied or a derived version can be newly created based on it:

```py
a = [1, 2, 3]
# creating a new copy
b = a.copy()
# modifying b
b.append(4)
```

```py
a = [1, 2, 3]
# creating a new object b based on a
b = a + [4]
```

## Object references and mutations

Some objects can be mutated (changed) directly - e.g. via `.append()`, `.pop()`, ...

Examples: `list`, `dict`

Many simple objects are immutable after they have been created. However, they can be replaced by other objects.

Examples: `int`, `float`, `str`, `bool`, `tuple`

# Help and documentation

## Help and documentation

Interactive help on objects in the Python console:

```py
help(list)
```

(navigate through long outputs via _Enter_, exit via _Q_)

## Help and documentation

Documentation on built-ins and the standard library:

<https://docs.python.org/3/library/index.html>

Similar to the `help` function, but often has slightly more detailed descriptions

# Development environments

## Development environments

- _VS Code_ (open source)
- _PyCharm Community_ (open source)
- _PyCharm Professional_

## VS Code

See the presentation [VS Code](./vs-code-en.html)

# Our first Python program

## Our first Python program

We'll create a file called `greeting.py`

Our program will ask the user their name and greet them.

## Input and output of text

Output: via the `print()` function:

```py
print("Hello. What is your name?")
```

## Input and output of text

Input: via `input()`:

```py
name = input()
```

`input` will always return a string

## Input and output of text

writing the greeting

```py
print("Nice to meet you, " + name)
```

## Comments

Comments are a useful tool for developers to describe what the code is doing. They don't influence the program itself.

A comment starts with a `#` and extends to the line end.

Usually comments are placed _above_ the code they describe

```py
# determine the length of the name
name_length = len(name)
```

## Executing programs

on the command line via `python greeting.py`

in VS Code (Python extension must be installed):

green _play_ button in the editor view

or

_Run_ - _Run Without Debugging_ (Ctrl + F5)

## Exercise: age from birth year

Write a program called `age.py` which will ask the user for their birth year and will respond with the user's age in the year 2020.

## Exercise: length of the name

Write a program which asks the user for their name. It should respond with the number of letters in the user's name.

For this purpose use the function `len(...)` to determine the length of a string.

# Builtins, standard library

## Builtins, standard library

- _Builtins_: functions and objects that are used frequently and are available at all times
- _Standard library_: collections of additional modules and packages that can be imported

documentation: <https://docs.python.org/3/library/index.html>

## Builtins

amongst others:

- `print()`
- `input()`
- `len()`
- `max()`
- `min()`
- `open()`
- `range()`
- `round()`
- `sorted()`
- `sum()`
- `type()`

## Standard library

The _standard library_ contains additional modules that can be imported.

example:

```py
import math

print(math.floor(3.6))
```

or

```py
from math import floor

print(floor(3.6))
```

## Standard library

modules of interest:

- `pprint` (pretty printing)
- `random`
- `math`
- `datetime`
- `os` (operating system, file system)
- `urllib.request` (HTTP queries)
- `webbrowser` (simple web-browser controller)

## print and pprint

Printing multiple elements:

```py
print(1, 2, 3, sep=", ", end="\n\n")
```

```bash
1, 2, 3


```

## print and pprint

```py
import pprint

pprint.pprint(['Mercuy', 'Venus', 'Earth', 'Mars', 'Jupiter',
               'Saturn', 'Uranus', 'Neptune', 'Pluto'])
```

```txt
['Mercuy',
 'Venus',
 'Earth',
 'Mars',
 'Jupiter',
 'Saturn',
 'Uranus',
 'Neptune',
 'Pluto']
```

## open

opening a text file for writing:

```py
file = open("message.txt", "w", encoding="utf-8")
file.write("hello\n")
file.write("world\n)
file.close()
```

file does not have to exist beforehand

## random

```py
import random

print(random.randint(1, 6))
print(random.choice(["heads", "tails"]))
```

## urllib.request

Querying web contents

```py
from urllib.request import urlopen

content = urlopen("https://google.com").read()
print(content)
print(len(content))
```

## webbrowser

example:

```py
import webbrowser

webbrowser.open(
    "https://docs.python.org/3/library/os.html"
)
```

# Control structures

## Control structures

By using control structures we can execute some code repeatedly or only under certain circumstances.

## Control structures

most important control structures in programming languages:

- if / else
- loops
  - while loop
  - do while loop
  - for loop (counting loop)
  - foreach loop

## Control structures in Python

- `if ... else ...`
- loops:
  - `while`
  - `for ... in ...`
  - `for ... in range(...)`

# Comparisons

## Comparisons

In order to use `if` and `while` we have to compare values:

```py
a = 2
b = 5

print(a == b) # a is equal to b
print(a != b) # a not equal to b
print(a < b)  # a is smaller than b
print(a > b)
print(a <= b) # a is smaller than or equal to b
print(a >= b)
```

## Comparisons

The _result_ of a comparison is a _boolean value_ (`True` / `False`)

We can store the result in a variable:

```py
is_adult = age >= 18
```

## Combining comparisons with and, or, not

Examples:

```py
if age >= 18 and country == "de":
    print("may drink alcohol")

if temperature < -10 or temperature > 30:
    print("extreme weather")

if not value > 10:
    print("value not greater than 10")
```

# If / else

## If / else

example:

```py
age = 30
age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
else:
    print("You are older than 1 billion seconds")
```

## If / elif / else

```py
if age_seconds < 100000000:
    print("You are less than 100 million seconds old")
elif age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
elif age_seconds < 2000000000:
    print("You are less than 2 billion seconds old")
else:
    print("You are older than 2 billion seconds")
```

## Code blocks

code block = a group of lines that belong together - for example the code that gets executed when an if condition is true

In Python the line before the code block ends with a `:` and the code block is indented (usually by 4 spaces)

## Exercise: coin flip

Simulate a random coin flip via `random.choice(["heads", "tails"])`

Let the user guess the outcome and tell them if they were right

# For loops

## For loops

With for loops we can iterate over the contents of lists (and similar objects).

In some other programming languages this construct would be called _for-each_

## For loops

```py
names = ["Alice", "Bob", "Charlie"]

for name in names:
    print("Hello, " + name + "!")
```

## Exercise: for loops and if statements

start with a list of numbers, e.g. `[2, 5, -3, 8, 1, -5]`

print all positive entries, e.g. `2, 5, 8, 1`

print the biggest element, e.g. `8`

## Example: login system

<!-- might be too hard for programming beginners -->

```py
users = [
    {"name": "Alice", "password": "1234"},
    {"name": "Bob", "password": "password"},
    {"name": "Charlie", "password": "paris41"}
]
```

## Example: login system

example program run:

```txt
Enter your username:
lice
No such user.
Enter your username:
Alice
Enter your password:
123
Wrong password
Enter your password:
1234
Logged in as Alice!
```

# While loops

## While loops

An if clause will execute a code block _once_ if a criterion holds

A while clause will execute a code blok _as long as_ a criterion holds

example:

```py
a = 1

while a < 2000:
    print(a)
    a = a * 2
```

## While loops

exercises:

- guess the number with multiple attempts
- a loop that prints the numbers 1 to 10
- a loop that prints the numbers 7, 14, 21, ..., 70
- a loop that creates the list `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`
- exercise program for simple calculations
- shopping list

## While loops

Exercise: shopping list

Example interaction:

```txt
enter an item or "x" to quit:
milk
enter an item or "x" to quit:
bread
enter an item or "x" to quit:
apples
enter an item or "x" to quit:
x
your shopping list is:
["milk", "bread", "apples"]
```

## Continue & break

The keywords `continue` and `break` may be used to end the current iteration or the entire loop respectively.

In nested loops they refer to the innermost loop.

## Continue & break

example:

```py
a = 1

while True:
    a = a * 2
    print(a)
    if (a > 1000):
        break
```

# Counting loops

## Counting loops

This is how we can count from 0 to 9 in Python:

```py
for i in range(10):
    print(i)
```

The function call `range(10)` creates an object that behaves like the list `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`.

## Counting loops

exercise: creating a "multiplication table"

```txt
1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
...
```

# Parts of programs

## Parts of programs

- programs
  - code blocks
    - statements
      - expressions

## Empty code blocks

_empty_ code block via the `pass` statement:

```py
# TODO: warn the user if path doesn't exist

if not os.path.exists(my_path):
    pass
```

## Statements across multiple lines

a statement can span across multiple lines if we use parantheses:

```py
a = (2 + 3 + 4 + 5 + 6 +
     7 + 8 + 9 + 10)
```

Alternative: _escaping_ newlines with `\`

```py
a = 2 + 3 + 4 + 5 + 6 + \
    7 + 8 + 9 + 10
```

# Control structures - exercises

## Control structures - exercises

- guess the number
- laws by age
- math trainer (with random tasks)
- login system
- leap year
- babylonian method (for finding the square root)

see <https://github.com/marko-knoebl/slides/tree/master/exercises/python-beginner>

# Function parameters

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

We can look up names of keyword parameters in the documentation (e.g. via `help(open)`)

## Optional parameters and default parameters

Some parameters of functions can be optional (they have a default value)

Example: For `open` only the first parameter is required, the others are optional

The values of default parameters can be looked up in the documentation

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

# Functions: Exercises

## Functions: Exercises

- function that checks if a year is a leap year
- function that checks if a number is a prime number
- function that returns all prime numbers in an interval
- function that verifies a bar code check digit (GTIN check digit)
- function that computes the fibonacci numbers
- function that creates a list of lottery numbers
- function that can asks the user a yes/no question and returns either `True` or `False`

For bar codes / primes: use the % operator

see <https://github.com/marko-knoebl/slides/tree/master/exercises/python-beginner>

# Local modules

## Local modules

we can import local Python files as modules

example: local file _messages.py_

```py
import messages

print(messages.message1)
```

## Local modules

we can create so-called _packages_ as folders

example: folder _phrases/_, files _phrases/messages.py_ and _phrases/greetings.py_

```py
from phrases import greetings

print(greetings.greeting1)
```

## Resolving imports

Search order of imports:

- directory of the Python script that was originally executed
- standard library
- external libraries

Avoid name clashes with existing modules / packages!

# Code quality and linting

## Code quality and linting

aspects:

- general linting
- style conventions (PEP8)
- docstrings

## General linting: Pylint

Finding and displaying general errors

VS Code configuration via `python.linting.pylintEnabled` and `python.linting.pylintUseMinimalCheckers`

## PEP8

standard styleguide for Python code

official document: <https://www.python.org/dev/peps/pep-0008/>

cheatsheet: <https://gist.github.com/RichardBronosky/454964087739a449da04>

## Code formatters

- **black**
- autopep8
- yapf

In VS Code config: `"python.formatting.provider": "black"`

## Code formatters

input:

```py
a='Hello'; b="Have you read \"1984\"?"
c=a[0+1:3]
```

output via black:

```py
a = "Hello"
b = 'Have you read "1984"?'
c = a[0 + 1 : 3]
```

## Python philosophy, Zen of Python

Quotes from the _zen of Python_ (full text via `import this`):

- _Explicit is better than implicit._
- _Readability counts._
- _Special cases aren't special enough to break the rules._
- _There should be one-- and preferably only one --obvious way to do it._

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

# Debugging

## Debugging

Breakpoints can be set to pause execution at a certain point.

Possibilities to set breakpoints:

- in VS Code: click next to the line number
- directly in Python Code via `breakpoint()` (since Python 3.7)

Executing in VS Code via _Debug - Start Debugging_ or _F5_.

## Debugging

Continuing manually:

- proceed until the next breakpoint:
  - _Continue_ in VS Code
  - `c` for _continue_ in the Python debugger
- end debugging:
  - _Stop_ in VS Code
  - `q` for _quit_ in the Python debugger

## Debugging

Continuing manually:

- proceed to the next line:
  - _Step Over_ in VS Code
  - `n` for _next_ in the Python debugger
- proceed to the next line - potentially following function calls
  - _Step Into_ in VS Code
  - `s` for _step_ in the Python debugger
- run the current function to its end:
  - _Step Out_ in VS Code
  - `r` for _return_ in the Python debugger

## Debugging

Examining values in VS Code:

- local variables in the _variables_ widget
- watch custom expressions in the _watch_ widget

Printing values in the Python debugger via `p`:

```py
p mylist
p mylist[0]
```
