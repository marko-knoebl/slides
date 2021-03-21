# NumPy advanced

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

## Adding an extra dimension

Adding an extra dimension of length 1: turning a 2 x 2 array into a 2 x 2 x 1 array:

```py
np.expand_dims(a2d, 2)
# [[[1], [2], [3]],
#  [[4], [5], [6]],
#  [[7], [8], [9]]]
```

alternative:

```py
a2d[:, :, np.newaxis]
```

## Transposing

reversing order of axes (flipping axes in 2D):

```py
np.transpose(a2d)

a2d.T
```

## Slices as views

In ordinary Python we can make a shallow copy of a list by slicing it - this works differently in NumPy (in order to improve efficiency):

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
