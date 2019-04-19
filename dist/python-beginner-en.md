# {{title}}

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

- Name
- Company
- Current Projects
- Prior Knowledge
- Expectations

## Organizational

- Duration
- Breaks
- Materials
- Questions, Feedback?

# Python: Overview

## Python

- dynamic programming language
- simple syntax, relatively easy to learn
- useful in many areas (science, web development, GUI programming)
- big standard library, many additional packages

## Python development and versions

- Python 3.7 (current)
- Python 3.2 (first useful version of Python 3): 2011
- Python 2.7 (last version of Python 2): 2010, supported until 2020

## Code examples

```py
# this is a comment

a = 3
b = 4
print(a * b)

if a * b > 10:
    print('hello')
```

# Python Installation

## Python Installation

on Windows: Download from https://python.org (Windows x86-64 web-based installer)

check the option "Add Python 3.7 to PATH"

## Python Installation

installation includes:

- Python _runtime_ for executing Python code
- interactive Python console
- IDLE: simple development environment
- PIP: package manager for installing extensions
- Python documentation

# The interactive Python shell

## The interactive Python shell

launching the Python shell:

- command `python` in the command prompt
- from the start menu (e.g. _Python 3.7 (64-bit)_)

## mathematical operators

```py
2 * 2 + 3 / 2
```

## simple (primitive) data types

Which kinds of data does a computer handle?

## simple (primitive) data types

- `int` (integer)
- `float` (floating point number)
- `str` (string): text
- `bool` (boolean): yes / no

## int

examples: `3`, `10`

## float

examples: `3.3`, `3.0`

## float

Be cautious of rounding errors: Some numbers cannot be represented as floating point numbers, they will always be rounded

e.g.: `1/3`

A computer is also unable to represent numbers like `0.1` or `0.2` exactly

example: `0.3 - 0.2 - 0.1`

## str

A _string_ represents text

```py
"Hello"
"Hello" + "Tom"
"Hello" * 3
```

## str

Strings can be enclosed in single or double quotes

```py
"Hello"
'Hello'
```

## str

multiline strings: in triple quotes

```py
"""Hello,
my name is
Andreas"""
```

## str

invalid operations:

```py
"Hello" - "Tim"
"Hello" * "Tim"
"Hello" * 3.0
```

## f-strings

Including values in strings:

```py
f"A year has {365 * 24} hours."
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

```py
print(len(text)) # 14
```

## Strings - escape sequences

```py
# including a line break: \n
a = 'line 1\nline 2'

# including a single backslash: \\
b = 'C:\\docs'
```

## bool

boolean value: yes/no

In Python: `True` or `False`

Note: capitalization is crucial!

## Variables

Data can be labeled with a name in Python - this is called a _variable_

```py
first_name = "John"
last_name = "Doe"
birth_year = 1978
```

## Variables

```py
full_name = f"{first_name} {last_name}"
age = 2019 - birth_year
```

## Variables

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

# Python programs

## Python programs

For writing entire Python programs we'll use an editor or development environment

## Installing VS Code

https://code.visualstudio.com/

## VS Code: Setup for Python

- Installing the Python extension for VS Code

- finding previously installed Python:
  - Ctrl + Shift + P
  - Search for "Python: choose interpreter"
  - Enter
  - wait...
  - choose Python 3.7

# VS Code

## VS Code

https://code.visualstudio.com

open source IDE

independent of _Visual Studio_ itself

## VS Code: saving

Unsaved files are marked with a circle instead of an "X" in the tab

Save via _Ctrl_ + _S_

or: _File_ - _Auto Save_

## VS Code: File explorer, split editor

## VS Code: Terminal

Open / close the terminal view via _ctrl_ + _`_

Open an additional terminal via the _+_ Symbol

Terminals will run in the currently open folder

## VS Code: Configuration

Via _File - Preferences - Settings_

Is split in _User Settings_ and _Workspace Settings_

## VS Code: Configuration options

Recommendations:

- Auto Save: _activate_
- Accept Suggestions on Commit Character (Autocomplete on other keys than _Enter_): _deactivate_
- Tab Size: _2_

Further Options:

- Format on Save
- Format on Paste
- EOL
- Workbench: Color Theme

## VS Code: Shortcuts

- _Ctrl_ + _F_: Search in File
- _Alt_ + _Shift_ + _F_: Auto-format file contents
- _Ctrl_ + _#_: comment / uncomment
- _F2_: rename variables
- _Alt_ + mouse click: Activate multiple text cursors

# Our first Python program

## Our first Python program

We'll create a file called `greeting.py`

Our program will ask the user their name and greet them.

## Input and output of text

Output: via `print()`:

```py
print("Hello. What is your name?")
```

Print is a so-called _function_.

## Input and output of text

Input: via `input()`:

```py
name = input()
```

## Input and output of text

writing the greeting

```py
print("Nice to meet you," + name)
```

## Executing programs

on the command line via `python greeting.py`

In VS Code via _F5_

## Type conversion

The `input` function will always return text (a string).

We can convert the string to an int:

```py
birth_year_string = input("when were you born?")
birth_year_int = int(birth_year_string)
```

This works similarly for other types: `str()`, `float()`, `bool()`

## Exercise: age from birth year

Write a program called `age.py` which will ask the user for their birth year and will respond with the user's age in the year 2018.

## Exercise: length of the name

Write a program which asks the user for their name. It should respond with the number of letters in the user's name.

For this purpose use the function `len(...)` to determine the length of a string.

## Comments

Comments are a useful tool for developers to describe what the code is doing. They don't influence the program itself.

A comment line starts with a `#`

```py
# determine the length of the name
name_length = len(name)
```

# control structures

## control structures

By using control structures we can let Python execute some code repeatedly or only under certain circumstances

## control structures

The two most essential control structures in every programming language are:

- if/else
- loops

## comparisons

In order to use basic control structures we have to be able to compare values:

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

## if / else

## if / else

example:

```py
age = 30
age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
else:
    print("You are older than 1 billion seconds")
```

## if / elif / else

```py
if age_seconds < 100000000:
    print("You are les than 100 million seconds old")
elif age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
elif age_seconds < 2000000000:
    print("You are less than 2 billion seconds old")
else:
    print("You are older than 2 billion seconds")
```

## if / elif / else

example: guess the number

## code blocks

code block = a group of lines that belong together - for example the code that gets executed when an if condition is true

In Python the line before the code block ends with a `:` and the code block is indented (usually by 4 spaces)

## while loops

An if clause will execute a code block _once_ if a criterion holds

A while clause will execute a code blok _as long as_ a criterion holds

example:

```py
a = 1

while a < 2000:
    print(a)
    a = a * 2
```

## while loop

examples:

- guess the number with multiple attempts
- a loop that prints the numbers 1 to 10
- a loop that prints the numbers 7, 14, 21, ..., 70
- exercise program for simple calculations

## combining comparisons

simple:

```py
if a == 3:
    print("a is 3")
```

more complex:

```py
if a == 3 and 4 < b < 10:
    print("a is 3 and b is between 4 and 10")
```

## combining comparisons

```py
# b is greater than 4 and less than 10 (chained comparison)
4 < b < 10

# longer version
b > 4 and b < 10

# c is not between 4 and 10
not 4 < c < 10

# alternative version:
c <= 4 or c >= 10
```

# Counting loops

## Counting loops

This is how we can count from 0 to 9 in Python:

```py
for i in range(10):
    print(i)
```

The function call `range(n)` returns the first `n` natural numbers (starting at 0)

## Counting loops

exercise: creating a "multiplication table"

```txt
1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
...
```

# control structures - examples

## control structures - examples

- leap year
- guess the number with multiple tries
- loop that prints the numbers 1 to 10
- loop that prints the sequence 7, 14, 21, ...
- guess the number with random numbers
- math trainer with random tasks
- babylonian method (for finding the square root)

## leap year

example: leap year

- a year is a leap year if it's divisible by for
- exception: it's _not_ a leap year if it's also divisible by 100
- exception from the exception: it _is_ a leap year if it's divisible by 400

Hint: "x is divisible by y" in Python: `x % y == 0`

## example: babylonian method

method for computing the square root of a number which was already in use 4000 years ago in mesopotamia

## example: babylonian method

```pseudocode
wanted: square root of 12345

n = 12345

Start with two approximations, e.g. a=1 and b=n

repeat the following until a nd b are almost equal:
new a = average of old a and old b
new b = n / a

=> a and b will approach the square root
```

## babylonian method: solution

```py
n = 12345
a = 1
b = n
for i in range(10):
    a = (a + b) / 2
    b = n / a
print(b)
```

# constituent parts of programs

## constituent parts of programs

- programs
  - code blocks
    - statements
      - expressions

## statements across multiple lines

If a statement should encompass multiple lines it is usually written in parentheses:

```py
a = (2 + 3 + 4 + 5 + 6 +
     7 + 8 + 9 + 10)
```

Alternative: _escaping_ newlines with `\`

```py
a = 2 + 3 + 4 + 5 + 6 + \
    7 + 8 + 9 + 10
```

# Lists

## Lists

Lists are a data type that represents a sequence of other objects

## Creating lists

with square brackets:

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]
```

## retrieving list elements

via a list index (starting at 0)

```py
users = ["Alice", "Bob", "Charlie"]

print(users[0])
print(users[2])
print(users[-1])

print(len(users))
```

## operations on lists

- overwriting an element: `users[0] = "Andrew"`
- appending an element: `users.append("Dan")`
- removing the last element: `users.pop()`
- removing an element by index: `users.pop(2)`
- length: `len(users)`
- concatenating lists: `primes + users`
- checking whether an element is included in a list: `if "Andrew" in users:`

## Exercise: shopping list

Example:

```text
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

## Mutating objects

In Python lists can be changed - e.g. by appending a new entry

Many other objects - e.g. str, int, float - cannot be modified. However it's always possible to create new, modified objects based on existing ones

## Mutating objects

```py
a = [1, 2, 3]
# creating a new object
a = a + [4]

a = [1, 2, 3]
# a is modified directly
a.append(4)
```

## Mutating objects

What will be the output of the following program?

```py
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```

## Mutating objects

An assignment (`b = ...`) will attach a new (additional) name to an existing object.

Behind the scenes there's still only one object

# For loops

## For loops

With for loops we can iterate over the contents of lists (and similar objects).

In other programming languages this construct is called _for-each_

## For loops

```py
names = ["Alice", "Bob", "Charlie"]

for name in names:
    print("Hello, " + name + "!")
```

## Example: login system

```py
# users and passwords
users = [
  ["Alice", "1234"],
  ["Bob", "password"],
  ["Charlie", "paris41"]]
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

## counting with for loops

Remember: In order to count we may use the function `range`

The function call `range(5)` creates an Object that behaves like the list `[0, 1, 2, 3, 4]`.

Example use:

```py
for i in range(5):
    print(i)
```

# Builtins, Modules

## Builtins, Modules

- Builtins: functions and objects that are used frequently and available at all times
- Modules: collections of more functions etc that can be imported

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

## Modules

Modules contain additional objects that can be imported

e.g.:

```py
import math

print(math.floor(3.6))
```

or

```py
from math import floor

print(floor(3.6))
```

## Modules

modules of interest:

- `random`
- `math`
- `datetime`
- `os` (operating system, file system)
- `sys` (python environment)
- `pprint` (pretty printing)

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

## sys

Command line arguments can be read via `sys.argv`

```py
# hello.py
import sys
print(sys.argv)
```

```bash
python hello.py one two three
```

```bash
['hello.py', 'one', 'two', 'three']
```

# Exercises

## Exercises

- todo list
- lottery generator
- hangman

## todo list

Interactive interface that allows a user to create a list of todos which will be printed in the end

Python topics: list, while, for, input

## todo list

```py
todolist = []
proceed = True
while proceed:
    new_todo = input("enter new todo:")
    todolist.append(new_todo)
    proceed_input = input("add another todo? (y/N)")
    proceed = proceed_input == 'y'

for todo in todolist:
    print('-', todo)
```

# Functions

## Functions

We already know some predefined functions, like `len()`, `range()` or `print()`

## Parameters and return values

functions can receive parameters and return values

example: `len([1, 1, 1])` → `3`

parameter: `[1, 1, 1]`

return value: `3`

## optional parameters

Let's experiment: How does the function `range` behave if we pass it 1, 2 or 3 parameters?

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

# Defining custom functions

## Defining custom functions

example:

```py
def average(a, b):
    m = (a + b) / 2
    return m
```

## Exercise: function lottery()

Write a function named `lottery` which creates a list of lottery numbers

`lottery()` → `[2, 35, 19, 27, 10]`

## Exercise: isprime()

Write a function named `isprime` which tests whether a number is prime

`isprime(59)` → `True`

## Aufgabe: ask_yes_no()

Write a function named `ask_yes_no`, which asks the user a yes/no question and returns either `True` or `False`

# Reading and writing text files

## Reading and writing text files

Many file formats are nothing but sequences of characters - e.g. the formats `.txt`, `.html`, `.csv` or `.py`.

These can be represented as strings in Python and can be easily read and written.

## Writing a text file

```py
# open for writing (w = write)
# open as a utf-8 file
file = open("message.txt", "w", encoding="utf-8")
file.write("hello world")
file.close()
```

## Reading a text file

```py
# default mode = open for reading
file = open("message.txt", encoding="utf-8")
content = file.read()
file.close()
print(content)
```

## Encoding

Recommendation: _always_ use utf-8 as the encoding for text files (best support for special characters)

## Exercise

- program that gets a list of todos from a user and saves them to a file

# Exercises

## Exercises

- program that verifies a credit card number / ISBN / IBAN
- Tic-Tac-Toe with text-based graphic output
- prime numbers within an interval
- fibonacci numbers

## Luhn algorithm (checksum)

The Luhn algorithm is used to prevent errors in identification numers, such as credit card numbers

The last digit of these numbers is a check digit which is computed from the other digits

Example: the sequence `7992739871` has a check digit of `3`, so the entire number would be `79927398713`

## Luhn algorithm

Computing the check digit:

starting from the right, replace every _other_ digit based on this schema:

0 → 0, 1 → 2, 2 → 4, 3 → 6, 4 → 8,  
5 → 1, 6 → 3, 7 → 5, 8 → 7, 9 → 9

(For example `7992739871` will become `7994769772`)

sum all digits

(For example `7994769772` will sum to 67)

the check digit is the number that's missing from the next full 10

(in this case, it's 3)

## ISBN

International Standard Book Number = 10-digit book number with a check digit at its end

computing the check digit:

(1st digit + 2\* 2nd digit + 3 \* 3rd digit ... + 9 \* 9th digit) modulo 11

task:

```py
check_isbn("3826604237") # True or False
```

## ISBN

```py
isbn = "3826604237"
expected = 7

def check_isbn(isbn, checksum):
    return isbn_checksum(isbn) == checksum


def isbn_checksum(isbn):
    sum = 0
    for i in range(9):
        sum += int(isbn[i]) * (i + 1)

    return sum % 11

print(check_isbn(isbn, expected))
```

## IBAN

# VS Code - Setup für Python

## VS Code - Setup for Python

File - Settings - Preferences

recommendations:

- `python.linting.pylintEnabled`: `true`
- `python.linting.flake8Enabled`: `true`
- `python.formatting.provider`: `black`

# Code quality and linting

## Code quality and linting

aspects:

- general linting
- style conventions (PEP8)
- docstrings

## general linting: Pylint

Finding and displaying general errors

VS Code configuration via `python.linting.pylintEnabled` and `python.linting.pylintUseMinimalCheckers`

## PEP8

standard styleguide for Python code

official document: https://www.python.org/dev/peps/pep-0008/

cheatsheet: https://gist.github.com/RichardBronosky/454964087739a449da04

## PEP8 & code formatting tools

- autopep8
- yapf
- _black_

In VS Code config: `"python.formatting.provider": "black"`

## PEP8 & code formatting tools

```py
# input:
a='hello'; b="bye";

# autopep8:
a = 'hello'
b = "bye"

# yapf:
a = 'hello'
b = "bye"

# black:
a = "hello"
b = "bye"
```

## PEP8 and code formatting tools

```py
# input:
a[0+3:1]

# autopep8:
a[0+3:1]

# yapf:
a[0 + 3:1]

# black:
a[0 + 3 : 1]
```

## Docstrings

Documentation that describes a function / class / module in more detail

## Docstrings

example:

```py
def fib(n):
    """Compute the n-th fibonacci number.

    n must be a nonnegative integer
    """
    ...
```

## displaying docstrings

```bash
python -m pydoc math
python -m pydoc math.floor
```

## Docstring structure

PEP 257: https://www.python.org/dev/peps/pep-0257/

## Docstrig structure

docstring of a module: description, list of exported functions with single-line summaries

docstring of a class: description, ist of its methods

docstring of a function: description, list of its parameters

## Pydocstyle

linter for validating docstrings

## Python philosophy, PEP20

## import this

## one way to do it

# Python versions

## Python versions

Python 2 vs Python 3

## Strings and Bytes

major change in Python 3:

strict separation of text (strings) and binary data (bytes)

in Python 2: data types `bytes`, `str` and `unicode`

## Print

Python 2:

```py
print "a",
```

Python 3:

```py
print("a", end="")
```

## Division

Python 2:

```py
10 / 3    # 3
```

## range

in Python 2: `range()` returns a list, `xrange()` returns an object that saves on memory

in Python 3: `range()` returns an object that saves on memory

## input

in Python 2: `input()` will evaluate / execute the input, `raw_input()` returns a string

in Python 3: `input()` returns a string

## \_\_future\_\_ imports

Getting some of the behavior of Python 3 in Python 2:

```py
from __future__ import print_function
from __future__ import unicode_literals
from __future__ import division
```

## Python-Future

Compatibility layer between Python 2 and Python 3

Enables supporting both Python 2 and Python 3 from the same codebase

# Cheatsheet

ehmatthes.github.io/pcc#cheatsheets

(missing topics: break, None, comments)

