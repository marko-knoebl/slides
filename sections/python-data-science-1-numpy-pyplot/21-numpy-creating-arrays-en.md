# Creating arrays

## Creating arrays

creating a 2x6 array filled with 0:

```py
np.zeros((2, 6))
# or
np.full((2, 6), 0.0)
```

creating a 3x3 array of random values

```py
# floats between 0 and 1:
np.random.random((3, 3))
# integers between 1 and 6:
np.random.randint(1, 7, (3, 3))
```

## Creating arrays

creating the sequence _0.0, 0.5, 1.0, 1.5_:

fixed step width (0.5):

```py
a = np.arange(0, 2, 0.5)
```

fixed number of entries (4):

```py
b = np.linspace(0, 1.5, 4)
```
