# NumPy

## NumPy

Library zur effizienten Datenverarbeitung

Daten sind in mehrdimensionalen Arrays von Zahlen gespeichert, die resourcenschonend umgesetzt sind:

- kleinerer Speicherverbrauch als z.B. Listen von Zahlen in Python
- deutlich schnelleres Ausführen von z.B. elementweiser Addition zweier Arrays

Daten können z.B. Bilder, Tondateien, Messwerte und vieles anderes repräsentieren

## Importieren von NumPy

oft verkürzt als:

```python
import numpy as np
```

## Arrays

Erstellen eines 1-dimensionalen Arrays:

```py
a1d = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

## Arrays

Erstellen eines 2-dimensionalen Arrays:

```py
a2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
```

Ausgabe:

```py
array([[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]])
```

## Arrays

Erstellen eines 3-dimensionalen Arrays:

```py
a3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7,8]]])
```

Ausgabe:

```py
array([[[1, 2],
        [3, 4]],

       [[5, 6],
        [7, 8]]])
```

## NumPy Arrays vs Python Listen

Arrays sind im Hintergrund in C implementiert, die numerischen Einträge (z.B. Integer) sind keine Python-Objekte und damit resourcenschonender.

## NumPy Arrays vs Python Listen

Python-Liste (referenziert Integer-Objekte):

```py
list_a = [1, 2, 3, 4]
```

NumPy Array (Daten sind im Array enthalten ohne auf externe Objekte zu verweisen):

```py
array_a = np.array(list_a)
```

Schnelle elementweise Operation (in C implementiert):

```py
array_a * array_a
```

## NumPy Arrays vs Python Listen

Übung:

Vergleiche die Ausführungszeit einer Operation in reinem Python und in NumPy mittels `time.perf_counter()`

z.B. berechne die Quadratwurzeln aller Zahlen von 0 bis 1 000 000

## Array Shape

Wir können folgendes abfragen:

- `a3d.shape`: (2, 2, 2)
- `a3d.ndim`: 3
- `a3d.size`: 8
