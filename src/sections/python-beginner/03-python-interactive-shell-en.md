# The interactive Python shell

---

## The interactive Python shell

launching the Python shell:

- command `python` in the command prompt
- from the start menu (e.g. _Python 3.7 (64-bit)_)

---

## expressions and operators

```py
2 + 2
```

---

## mathematical operators

```py
2 * 2 + 3 / 2
```

---

## simple (primitive) data types

Which kinds of data does a computer handle?

---

## simple (primitive) data types

- `int` (integer)
- `float` (floating point number)
- `str` (string): text
- `bool` (boolean): yes / no

---

## int

examples: `3`, `10`

---

## float

examples: `3.3`, `3.0`

---

## float

Be cautious of rounding errors: Some numbers cannot be represented as floating point numbers, they will always be rounded

e.g.: `1/3`

A computer is also unable to represent numbers like `0.1` or `0.2` exactly

???

example: 0.3 - 0.2 - 0.1

---

## str

A _string_ represents text

```py
"Hello"
"Hello" + "Tom"
"Hello" * 3
```

---

## str

Strings can be enclosed in single or double quotes

```py
"Hello"
'Hello'
```

---

## str

multiline strings: in triple quotes

```py
"""Hello,
my name is
Andreas"""
```

---

## str

invalid operations:

```py
"Hello" - "Tim"
"Hello" * "Tim"
"Hello" * 3.0
```

---

## f-strings

Including values in strings:

```py
f"A year has {365 * 24} hours."
```

---

## Strings - escape sequences

Problem: how do we include characters like `"` in a string?

this is invalid:

```py
text = "He said: "hi!""
```

---

## Strings - escape sequences

solution:

```py
text = "He said: \"hi!\""
```

Python treats the sequence `\"` like a single `"`

```py
print(len(text)) # 14
```

---

## Strings - escape sequences

```py
# including a line break: \n
a = 'line 1\nline 2'

# including a single backslash: \\
b = 'C:\\docs'
```

---

## bool

boolean value: yes/no

In Python: `True` or `False`

---

## Variables

Data can be labeled with a name in Python - this is called a _variable_

```py
first_name = "John"
last_name = "Doe"
birth_year = 1978
```

---

## Variables

```py
full_name = f"{first_name} {last_name}"
age = 2018 - birth_year
```

---

## Variables

Names of variables are usually written in lower case, separating words by underscores

Variable names may only consist of letters, digits and underscores

---

## Variables

Overwriting (reassigning) variables:

```py
name = "John"
name = "Jane"
a = 3
a = a + 1
```
