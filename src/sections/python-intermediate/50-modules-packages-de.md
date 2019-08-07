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

Typische Imports:

```py
import module1
import module2
from package3 import module3a, module3b
from module4 import object4a, object4b
from package5.module5 import object5a, object5b
```

Konkrete Beispiele:

```py
import os
import sys
from urllib import request, response
from math import sqrt, pi
from http.client import HTTPConnection, HTTPSConnection
```

## Abkürzungen bei Imports

Insbesondere in der interaktiven Konsole sinnvoll, wenn Tipparbeit gespart werden soll:

Kurznamen beim import:

```py
import numpy as np
import matplotlib.pyplot as plt
import tkinter as tk
```

Alles aus einem Modul importieren (eher nicht empfohlen):

```py
from math import *
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
