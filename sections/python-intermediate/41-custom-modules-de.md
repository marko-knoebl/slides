# Eigene Module

## Eigene Module

Ziel: Erstellen eines lokalen eigenen Moduls, das wie folgt verwendet werden kann:

```py
from .foo import a, b
```

## Eigene Module

Einfaches Modul as Python-Datei:

```py
# foo.py
a = 1
b = 2
```

## Eigene Module

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

Module as a directory with separated defintions:

```
- foo/
  - __init__.py
  - _a_mod.py
  - _b_mod.py
```

```py
# __init__.py
from _a_mod import a
from _b_mod import b
```

## Eigene Pakete

Ziel: Erstellen eines eigenen Pakets, das wie folgt verwendet werden kann:

```py
from .foo import bar

print(bar.a)
print(bar.b)
```

## Eigene Pakete

```
- foo/
  - bar.py
```

## Auflösen von Imports

Suchreihenfolge von absoluten Imports:

- Verzeichnis, in dem das ursprünglich ausgeführte Python Skript liegt
- Standardlibrary
- externe Libraries

Vermeide Namensgleichheit mit existierenden Modulen / Paketen!

## Auflösen von Imports

Alle Pfade für Imports sehen wir via:

```py
import sys
print(sys.path)
```

## Kompilieren von Modulen

Importierte Module werden in kompilierter Form abgelegt, um später schneller eingelesen werden zu können.

Wir finden die kompilierten Versionen im Ordner `__pycache__`
