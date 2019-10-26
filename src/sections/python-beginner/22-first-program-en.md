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

`input` will always return a string

## Input and output of text

writing the greeting

```py
print("Nice to meet you, " + name)
```

## Executing programs

on the command line via `python greeting.py`

in VS Code:

green _play_ button in the editor view

or

_Debug_ - _Start Without Debugging_ (Ctrl + F5)

## Exercise: age from birth year

Write a program called `age.py` which will ask the user for their birth year and will respond with the user's age in the year 2019.

## Exercise: length of the name

Write a program which asks the user for their name. It should respond with the number of letters in the user's name.

For this purpose use the function `len(...)` to determine the length of a string.

## Comments

Comments are a useful tool for developers to describe what the code is doing. They don't influence the program itself.

A comment starts with a `#` and extends to the line end.

Usually comments are placed _above_ the code they describe

```py
# determine the length of the name
name_length = len(name)
```
