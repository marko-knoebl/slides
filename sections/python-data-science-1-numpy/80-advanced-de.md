# NumPy Fortgeschritten

## Views

Mehrere Operationen in NumPy erstellen _views_ der Daten - mehrere arrays können im Hintergund auf die gleichen Daten verweisen (für bessere Effizienz)

## Views

Beispiel: Erstellen einer _Kopie_ einer Liste, Erstellen eines _Views_ eines Arrays

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

diese Operationen erstellen _Views_

## Transponieren

Umkehren der Achsenreihenfolge:

```py
np.transpose(a2d)

a2d.T
```

## Arrays aneinanderfügen

entlang einer bestehenden Achse aneinanderfügen (standardmäßig Achse 0):

```py
np.concatenate([a1d, a1d])
np.concatenate([a2d, a2d])
np.concatenate([a2d, a2d], axis=1)
```

entlang einer neuen Achse aneinanderfügen:

```py
np.stack([a1d, a1d])
```
