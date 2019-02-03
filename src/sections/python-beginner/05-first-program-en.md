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
