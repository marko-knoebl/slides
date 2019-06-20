# Builtins, Module

## Builtins, Module

- Builtins: Funktionen und Objekte, die oft verwendet werden und immer verfügbar sind
- Module: Sammlungen von zusätzlichen Objekten, die importiert werden können

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

## Module

Module beinhalten zusätzliche Objekte, die importiert werden können

z.B.:

```py
import math

# abrunden
print(math.floor(3.6))
```

## Module

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

Zufallsergebnisse

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
from urllib import request

content = request.urlopen("https://google.com").read()
print(content)
print(len(content))
```
