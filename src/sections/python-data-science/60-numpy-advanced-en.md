# NumPy advanced

## Creating arrays

create a 2x6 array filled with 0.0:

```py
np.full((2, 6), 0.0)
```

create the sequence _0.0, 0.5, 1.0, 1.5_:

```py
# fixed step width (0.5)
a = np.arange(0, 2, 0.5)
# fixed number of entries (4)
b = np.linspace(0, 1.5, 4)
```

create a 3x3 array of random values:

```py
np.random.random(3, 3)
```

## Reshaping arrays

Turning a 2 x 2 array into a 2 x 2 x 1 array:

```py
array_2d = np.array([[1, 2], [3, 4]])

array_3d = array_2d[:, :, np.newaxis]

# [[[1], [2]], [[3], [4]]]
```