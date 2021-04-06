# Eigene Module: fortgeschritten

## Eigene Module: fortgeschritten

Modul als Verzeichnis:

```
- foo/
  - __init__.py
```

```py
# __init__.py
a = 1
b = 2
```

## Eigene Module

Modul als Ordner mit separaten Definitionen:

```
- foo/
  - __init__.py
  - _a_mod.py
  - _b_mod.py
```

```py
# __init__.py
from foo._a_mod import a
from foo._b_mod import b
```

## Auflösen von Imports

Alle Pfade für Imports sehen wir via:

```py
import sys
print(sys.path)
```

## Kompilieren von Modulen

Importierte Module werden in kompilierter Form abgelegt, um später schneller eingelesen werden zu können.

Wir finden die kompilierten Versionen im Ordner `__pycache__`

## Modulname und Einstiegspunkt

in einem importierten Module bezieht sich die Variable `__name__` auf dessen Namen

wurde eine Python-Datei direkt ausgeführt und nicht importiert, ist deren `__name__` gleich `"__main__"`

```py
if __name__ == "__main__":
    print("this file was run directly (and not imported)")
```
