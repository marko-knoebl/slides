# NumPy Fortgeschritten

## Form von Arrays ändern

```py
array_1d = array_3d.reshape(8)
array_2d = array_3d.reshape(2, 4)
array_2d = array_3d.reshape(2, -1) # automatic second dimension
```

## Dimensionalität erhöhen

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
