# NumPy advanced

## Reshaping arrays

```py
a3d.ravel() # 1d-array
a3d.reshape(8) # 1d-array
a3d.reshape(2, 4) # 2x4 array
a3d.reshape(2, -1) # automatic second dimension
a2d.T # transposed
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

concatenating along an axis (axis 0 by default):

```py
np.concatenate([a1d, a1d])
np.concatenate([a2d, a2d])
np.concatenate([a2d, a2d], axis=1)
```

## Matrix / array multiplication

via the binary Operator `@`

```py
a = np.array([1, 1])

m = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(a @ m)
# array([0.   , 1.414])
```

## Matrix multiplication

example: rotating several points by 45° (counterclockwise):

```py
points = np.array([[0, 0], [0, 1], [1, 1], [1, 0]])

m = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(points @ m)
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
