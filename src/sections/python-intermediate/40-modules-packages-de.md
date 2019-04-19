# Module und Pakete

## Module und Pakete

- Modul = Python-Datei, aus der Objekte importiert werden können
- Paket = Verzeichnis, in dem Python-Module abgelegt sind

## Beispiele für imports

```py
import module1
import package1.module2

from package1 import module2
from package1.module2 import myobject

from package1.module2 import *
```

## Beispiele für imports: urllib

- `urllib` = Paket
- `urllib.request` = Modul
- `urllib.request.urlopen` = Funktion

## Kompilieren von Modulen

Importierte Module werden in kompilierter Form abgelegt, um später schneller eingelesen werden zu können.

Wir finden die kompilierten Versionen im Ordner `__pycache__`

## Achtung: circular imports vermeiden
