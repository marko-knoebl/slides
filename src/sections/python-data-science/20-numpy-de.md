# NumPy

## NumPy

Library zur effizienten Datenverarbeitung

Daten sind in mehrdimensionalen Arrays von Zahlen gespeichert, die resourcenschonend umgesetzt sind

Daten können z.B. Bilder, Tondateien, Messwerte und vieles anderes repräsentieren

## Importieren von NumPy

oft verkürzt als:

```python
import numpy as np
```

## NumPy

NumPy Arrays vs Python Listen:

Arrays sind im Hintergrund in C implementiert, die numerischen Einträge (z.B. Integer) sind keine Python-Objekte und damit resourcenschonender.

## NumPy

NumPy Arrays vs Python Listen:

```py
# Python - Listen (mit Verweisen auf andere Integer)
list_a = [1, 2]
list_b = [3, 4]

# NumPy - Array -
# Daten sind hierin enthalten, ohne auf Python-Integer
# zu verweisen
array_a = numpy.array(list_a)
array_b = numpy.array(list_b)

# sehr schnell (da in C implementiert)
array_a + array_b
```

## Arrays

Jedes Array kann nur Daten eines Typs enthalten (z.B. nur 64-bit floats oder nur bytes)

## Arrays

Erstellen eines 2-dimensionalen Arrays:

```py
a2d = np.array([[1, 2, 3], [2, 4, 6], [3, 6, 9]])
```

Ausgabe:

```py
array([[1, 2, 3],
       [2, 4, 6],
       [3, 6, 9]])
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

## Array Typen

Jedes Array hat einen vorgegebenen Datentyp für alle Einträge

```py
a = np.array([1])
a.dtype # int32
b = np.array([1.0])
b.dtype # float64
c = np.array(['abc'])
c.dtype # <U3
d = np.array([b'abc'])
d.dtype # |S3
```

## Array Typen

Typen können explizit angegeben werden:

```py
a = np.array([1], dtype='int64')
b = np.array([1], dtype='uint8')
```

Typen werden wenn möglich automatisch umgewandelt:

```py
c = a + b
c.dtype # int64
```

## Array Typen

wichtige Typen:

- _bool_ / <em>bool\_</em> (Speicherverbrauch 8 Bit)
- _int8_, _int16_, _int32_, _int64_
- _uint8_, _uint16_, _uint32_, _uint64_
- _float16_, _float32_, _float64_

## Overflow

Achtung bei zu großen / zu kleinen Werten

Der Typ `int8` erlaubt nur Werte im Bereich `-128` bis `+127`

```py
np.array([127, 128, 129], dtype="int8")
```

Output:

```py
array([127, -128, -127])
```

## Array Shape

Wir können folgendes abfragen:

- `a3d.ndim`: 3
- `a3d.shape`: (2, 2, 2)
- `a3d.size`: 8

## Operationen auf Arrays

Auswählen von Einträgen:

```py
a3d[0, 1, 0] # 3

a3d[0, :, 0] # [1, 3]
```

## Operationen auf Arrays

Operatoren werden elementweise angewendet:

```py
a = np.array([1, 2, 3])
b = np.array([2, 2, 2])

print(a + b)
# np.array([3, 4, 5])
print(a * b)
# np.array([2, 4, 6])
```

## Operationen auf Arrays

NumPy bietet spezielle Funktionen, die elementweise angewendet werden

```py
a = np.array([0, 1, 2, 3])

print(np.sin(a)) # [0.0, 0.84147098, 0.9... ]
print(np.sqrt(a)) # [0.0, 1.0, 1.414... ]
```

## Arrays erstellen

Ein Array der Größe 2x6, gefüllt mit Nullen:

```py
np.zeros((2, 6))
np.full((2, 6), 0)
```

Die Folge _0.0, 0.5, 1.0, 1.5_:

```py
# fixed step width (0.5)
a = np.arange(0, 2, 0.5)
# fixed number of entries (4)
b = np.linspace(0, 1.5, 4)
```

Ein 3x3 Array mit Zufallswerten:

```py
np.random.random(3, 3)
```

## Übungen

Gegeben sind ein Array von Preisen und ein Array von gekauften Mengen. Bestimme den Gesamtpreis:

```py
prices = np.array([3.99, 4.99, 3.99, 12.99])
# buying the first item 3 times and the last item 2 times
quantities = np.array([3, 0, 0, 2])

# solution: 37.95
```

Gegeben sind die Koordinaten von Eckpunkten eines Dreiecks (2D oder 3D). Bestimme den Schwerpunkt (arithmetisches Mittel der Eckpunkte).

```py
a = np.array([5, 1])
b = np.array([6, 8])
c = np.array([1, 3])

# solution: [4, 4]
```

## Übungen

Fortgeschritten: Lösen linearer Gleichungssysteme
