# Python Versionen

## Python Versionen

Python 2 vs Python 3

## Strings und Bytes

Tiefgreifende Änderung in Python 3:

Strikte Trennung von Text (strings) und Binärdaten (bytes)

in Python 2: Datentypen `bytes`, `str` und `unicode`

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

in Python 2: `range()` liefert Liste zurück, `xrange()` liefert speicherschonendes Objekt

in Python 3: `range()` liefert speicherschonendes Objekt

## input

in Python 2: `input()` wertet die Eingabe aus, `raw_input()` gibt String zurück

in Python 3: `input()` gibt String zurück

## \_\_future\_\_ imports

Verhalten von Python 3 in Python 2 übernehmen:

```py
from __future__ import print_function
from __future__ import unicode_literals
from __future__ import division
```

## Python-Future

Kompatibilitätsschicht zwischen Python 2 und Python 3

Unterstützung von Python 2 und Python 3 aus der gleichen Codebase
