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
file.write("world\n")
file.close()
```

file does not have to exist beforehand

## urllib.request

Querying web contents (and saving to a file)

```py
import urllib.request

# make a HTTP request
req = urllib.request.urlopen("https://en.wikipedia.org")
# read content as utf-8 string
content = req.read().decode("utf-8")

# save to file
file = open("wikipedia.html", mode="w", encoding="utf-8")
file.write(content)
file.close()
```

## random

```py
import random

print(random.randint(1, 6))
print(random.choice(["heads", "tails"]))
```
