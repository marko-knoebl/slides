# Module und Pakete

## Module und Pakete

- Modul = Python-Datei, aus der Objekte importiert werden können
- Paket = Verzeichnis, in dem Python-Module abgelegt sind

## Beispiele für Imports

- `urllib` = Paket
- `urllib.request` = Modul
- `urllib.request.urlopen` = Funktion

<!-- list separator -->

- `sys` = Modul
- `sys.path` = Objekt

## Beispiele für Imports

```py
import module1
import package1.module2

from package1 import module2
from package1.module2 import myobject

from package1.module2 import *
```

mit neuen Namen:

```py
import numpy as np
import matplotlib.pyplot as plt
```

## Konventionen für Imports

- alle imports _sollten_ am Anfang einer Python-Datei stehen
- die imports _sollten_ in drei Gruppen geteilt werden:
  - standard Library
  - andere Libraries
  - projektinterne Module

## Auflösen von Imports

Suchreihenfolge:

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

## Achtung: circular imports vermeiden
