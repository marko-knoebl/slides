# NumPy Fortgeschritten

## Form von Arrays ändern

```py
np.reshape(a3d, (8, )) # 1d array
np.reshape(a3d, (2, 4)) # 2d array
```

Automatische Größe entlang einer Achse:

```py
np.ravel(a3d) # 1d array
np.reshape(a3d, (-1, )) # 1d array
np.reshape(a3d, (2, -1)) # 2d array
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

## Transponieren

Umkehren der Achsenreihenfolge:

```py
np.transpose(a2d)

a2d.T
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

Arrays können via `np.copy()` kopiert werden

## Arrays aneinanderfügen

entlang einer Achse aneinanderfügen (standardmäßig Achse 0):

```py
np.concatenate([a1d, a1d])
np.concatenate([a2d, a2d])
np.concatenate([a2d, a2d], axis=1)
```
