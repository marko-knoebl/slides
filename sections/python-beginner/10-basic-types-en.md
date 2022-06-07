# Basic (primitive) data types

## Basic (primitive) data types

- `int` (integer)
- `float` (floating point number)
- `str` (string): text
- `bool` (boolean): yes / no
- none: missing / unknown value

## int and float

example:

```py
(7 - 3) * 0.5 / 3.5
```

## str

A _string_ represents text

Strings can be enclosed in single or double quotes

```py
greeting = "Hello"
name = 'John'
```

## Building strings

```py
name = "John"
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
first_name = "John"
middle_name = None
last_name = "Doe"
```
