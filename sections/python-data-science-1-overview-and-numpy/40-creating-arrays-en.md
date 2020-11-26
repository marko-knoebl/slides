# Creating arrays

## Creating arrays

creating a 2x6 array filled with 0:

```py
np.zeros((2, 6))
# or
np.full((2, 6), 0.0)
```

## Creating arrays

creating number sequences:

```py
np.linspace(0, 1.0, 11)
# [0.0, 0.1, ... 1.0]
```

```py
np.arange(0, 3.14, 0.1)
# [0.0, 0.1, ... 3.1]
```

## Creating arrays

creating a 2x2 array of random values:

```py
# create a random number generator
rng = np.random.default_rng(seed=1)

# floats between 0 and 1:
rng.random((2, 2))
# integers between 1 and 6:
rng.integers(1, 7, (2, 2))
```

older interface: `np.random.random()` and `np.random.randint()`
