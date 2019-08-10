# Basic data types

## Basic data types

- `int` (integer)
- `float` (floating point number)
- `str` (string): text
- `bool` (boolean): yes / no
- none: missing / unknown value

## int & float

```py
(7 - 3) * 0.5 / 3.5
```

## float

Be cautious of rounding errors: Some numbers cannot be represented as floating point numbers, they will always be rounded

e.g.: `1/3`

A computer is also unable to represent numbers like `0.1` or `0.2` exactly

example: `0.3 - 0.2` evaluates to `0.09999999999999998`

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

Note: capitalization is crucial!

## None

None represents a value that is unknown or missing

```py
first_name = "Mike"
middle_name = None
last_name = "Jones"
```
