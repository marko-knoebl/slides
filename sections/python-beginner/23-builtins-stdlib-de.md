# Builtins, Standard Library

## Builtins, Standard Library

- _Builtins_: Funktionen und Objekte, die oft verwendet werden und immer verfügbar sind
- _Standard Library_: Sammlungen von zusätzlichen Modulen und Paketen, die importiert werden können

Dokumentation: https://docs.python.org/3/library/index.html

## Builtins

unter anderem:

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

## Standard Library

Die _Standard Library_ bietet zusätzliche Module, die importiert werden können.

Beispiel (abrunden):

```py
import math

print(math.floor(3.6))
```

oder

```py
from math import floor

print(floor(3.6))
```

## Standard Library

interessante Module:

- `pprint` (formatierte Ausgabe)
- `random`
- `math`
- `datetime`
- `os` (Betriebssystem, Dateisystem)
- `sys` (Python Umgebung)
- `urllib.request` (HTTP-Anfragen)

## print und pprint

Ausgabe mehrerer Elemente:

```py
print(1, 2, 3, sep=", ", end="\n\n")
```

```bash
1, 2, 3


```

## print und pprint

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

Kommandozeilenparameter sind auslesbar über `sys.argv`

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

Abfrage von Web-Inhalten

```py
from urllib.request import urlopen

content = urlopen("https://google.com").read()
print(content)
print(len(content))
```
