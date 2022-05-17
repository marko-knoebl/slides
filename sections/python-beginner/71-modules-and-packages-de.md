# Module und Pakete

## Module und Pakete

- Modul = Sammlung von Python-Objekten, die importiert werden können
- Paket = Sammlung von Modulen

(Pakete sind eigenlich eine besondere Form von Modulen)

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
from package2 import module2a, module2b
from module3 import object3a, object3b
from package4.module4 import object4a, object4b
```

Konkrete Beispiele:

```py
import os
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

## Automatischer Import von Untermodulen

Beim Import _mancher_ Pakete werden automatisch auch Untermodule importiert.

Beispiele:

```py
import os
import numpy as np

os.path.join(...)
np.random.randint(10)
```

Gegenbeispiel - schlägt fehl:

```py
import urllib

urllib.request.urlopen(...)
```

## Konventionen für Imports

- alle imports _sollten_ am Anfang einer Python-Datei stehen
- die imports _sollten_ in drei Gruppen geteilt werden:
  - standard Library
  - andere Libraries
  - projektinterne Module
