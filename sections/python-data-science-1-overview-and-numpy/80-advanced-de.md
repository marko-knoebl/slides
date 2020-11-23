# NumPy Fortgeschritten

## Form von Arrays ändern

```py
a3d.ravel() # 1d-array
a3d.reshape(8) # 1d-array
a3d.reshape(2, 4) # 2x4 array
a3d.reshape(2, -1) # automatic second dimension
a2d.T # transposed
```

## Dimensionalität erhöhen

Hinzufügen einer extra Dimension der Länge 1: Verwandeln eines 2 x 2 Arrays in ein 2 x 2 x 1 Array:

```py
np.expand_dims(a2d, 2)
# [[[1], [2], [3]],
#  [[4], [5], [6]],
#  [[7], [8], [9]]]
```

Alternative:

```
a2d[:, :, np.newaxis]
```

## Slices als Views

In Python können wir eine flache Kopie einer Liste erstellen, indem wir sie slicen - dies ist in NumPy nicht so (um die Effizienz zu steigern):

```py
list = [1, 2, 3]
list_copy = list[:]
list_copy[0] = 10 # does NOT change list

array = np.array([1, 2, 3])
array_view = array[:]
array_view[0] = 10 # DOES change array
```

## Arrays kopieren

Arrays können via `array.copy()` kopiert werden

## Arrays aneinanderfügen

entlang einer Achse aneinanderfügen (standardmäßig Achse 0):

```py
np.concatenate([a1d, a1d])
np.concatenate([a2d, a2d])
np.concatenate([a2d, a2d], axis=1)
```

## Matrix-Multiplikation / Array-Multiplikation

mittels des binären Operators `@`

```py
a = np.array([1, 1])

m = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(a @ m)
# array([0.   , 1.414])
```

## Matrix-Multiplikation

Rotation verschiedener Punkte um 45° gegen den Uhrzeigersinn:

```py
points = np.array([[0, 0], [0, 1], [1, 1], [1, 0]])

m = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(points @ m)
```

## Matrix-Multiplikation

Beispiel:

bekannt: Preise verschiedener Produkte, derent Bestände in verschiedenen Lagern

```py
prices = np.array([3.99, 12.99, 5.90, 15])
quantities = np.array([[0, 80, 80, 100],
                       [100, 0, 0, 0],
                       [50, 0, 0, 50]])
```

Gesucht: Warenwert pro Lager
