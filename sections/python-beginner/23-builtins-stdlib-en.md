# Builtins, standard library

## Builtins, standard library

- _Builtins_: functions and objects that are used frequently and are available at all times
- _Standard library_: collections of additional modules and packages that can be imported

documentation: https://docs.python.org/3/library/index.html

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
- `sys` (python environment)
- `urllib.request` (HTTP queries)

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

## random

```py
import random

print(random.randint(1, 6))
print(random.choice(["heads", "tails"]))
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

## urllib.request

Querying web contents

```py
from urllib.request import urlopen

content = urlopen("https://google.com").read()
print(content)
print(len(content))
```
