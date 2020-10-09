# NumPy advanced

## Reshaping arrays

```py
array_1d = array_3d.ravel()
array_1d = array_3d.reshape(8)
array_2d = array_3d.reshape(2, 4)
array_2d = array_3d.reshape(2, -1) # automatic second dimension
array_2d_transposed = array_2d.T
```

## Adding an extra dimension

Adding an extra dimension of length 1 via `newaxis` - turning a 2 x 2 array into a 2 x 2 x 1 array:

```py
array_2d = np.array([[1, 2], [3, 4]])
array_3d = array_2d[:, :, np.newaxis]
# [[[1], [2]], [[3], [4]]]
```

```py
array_3d = np.expand_dims(array_2d, 2)
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

concatenating horizontally:

```py
np.concatenate([a1d, a1d])
np.concatenate([a2d, a2d])
```

concatenating vertically:

```py
np.concatenate([a2d, a2d], axis=1)
```

## Matrix multiplication

via the binary Operator `@`

```py
a = np.array([1, 1])

M = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(a @ M)
# array([0.   , 1.414])
```

## Matrix multiplication

example: rotating several points by 45° (counterclockwise):

```py
points = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])

M = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(points @ M)
```

## Matrix multiplication

example:

known data: prices of various products, number of items in stock for different stores

```py
prices = np.array([3.99, 12.99, 5.90, 15])
quantities = np.array([[0, 80, 80, 100],
                       [100, 0, 0, 0],
                       [50, 0, 0, 50]])
```

wanted: total value for each of the three stores
