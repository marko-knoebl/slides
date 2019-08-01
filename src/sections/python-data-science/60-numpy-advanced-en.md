# NumPy advanced

## Reshaping arrays

```py
array_1d = array_3d.reshape(8)
array_2d = array_3d.reshape(2, 4)
array_2d = array_3d.reshape(2, -1) # automatic second dimension
```

## Adding an extra dimension

Adding an extra dimension of length 1 via `newaxis` - turning a 2 x 2 array into a 2 x 2 x 1 array:

```py
array_2d = np.array([[1, 2], [3, 4]])

array_3d = array_2d[:, :, np.newaxis]

# [[[1], [2]], [[3], [4]]]
```

## Slicing arrays

```py
a2d = np.array([[1, 2, 3], [2, 4, 6], [3, 6, 9]])

a2d[0] # [1, 2, 3]
a2d[0, :] # [1, 2, 3]
a2d[1:, 1:] # [[4, 6], [6, 9]]
a2d[:, ::-1] # [3, 2, 1]
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

Arrays can be copied via `array.copy()`

## Concatenating arrays

```py
np.concatenate([a2d, a2d])

np.concatenate([a2d, a2n], axis=1)
```
