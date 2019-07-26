# NumPy Fortgeschritten

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

## Dimension erhöhen

Hinzufügen einer extra Dimension der Länge 1 via `newaxis` - Verwandeln eines 2 x 2 Arrays in ein 2 x 2 x 1 Array:

```py
array_2d = np.array([[1, 2], [3, 4]])
array_3d = array_2d[:, :, np.newaxis]
# [[[1], [2]], [[3], [4]]]
```

## Slicen von Arrays

```py
a2d = np.array([[1, 2, 3], [2, 4, 6], [3, 6, 9]])

a2d[0] # [1, 2, 3]
a2d[0, :] # [1, 2, 3]
a2d[1:, 1:] # [[4, 6], [6, 9]]
a2d[:, ::-1] # [3, 2, 1]
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

```py
np.concatenate([a2d, a2d])

np.concatenate([a2d, a2n], axis=1)
```
