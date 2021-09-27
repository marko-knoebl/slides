# NumPy advanced

## Views

Several operations in numpy will produce _views_ of the data - multiple numpy arrays can refer to the same data in the background (for efficiency)

## Views

comparison: creating a _copy_ of a list, creating a _view_ of an array

```py
list = [1, 2, 3]
list_copy = list[:]
list_copy[0] = 10 # does NOT change list

array = np.array([1, 2, 3])
array_view = array[:]
array_view[0] = 10 # DOES change array
```

## Copying arrays

Arrays can be copied via `np.copy()`

## Reshaping arrays

```py
np.reshape(a3d, (8, )) # 1d array
np.reshape(a3d, (2, 4)) # 2d array
```

automatic sizing for one axis:

```py
np.ravel(a3d) # 1d array
np.reshape(a3d, (-1, )) # 1d array
np.reshape(a3d, (2, -1)) # 2d array
```

these operations will create _views_

## Transposing

reversing order of axes (flipping axes in 2D):

```py
np.transpose(a2d)

a2d.T
```

## Concatenating arrays

concatenating along an existing axis (axis 0 by default):

```py
np.concatenate([a1d, a1d])
np.concatenate([a2d, a2d])
np.concatenate([a2d, a2d], axis=1)
```

concatenating along a new axis:

```py
np.stack([a1d, a1d])
```
