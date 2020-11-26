# Arrays erstellen

## Arrays erstellen

Ein Array der Größe 2x6, gefüllt mit Nullen:

```py
np.zeros((2, 6))
# or
np.full((2, 6), 0.0)
```

## Arrays erstellen

Zahlenfolgen erstellen:

```py
np.linspace(0, 1.0, 11)
# [0.0, 0.1, ... 1.0]
```

```py
np.arange(0, 3.14, 0.1)
# [0.0, 0.1, ... 3.1]
```

## Arrays erstellen

Ein 2x2 Array mit Zufallswerten:

```py
# create a random number generator
rng = np.random.default_rng(seed=1)

# floats between 0 and 1:
rng.random((2, 2))
# integers between 1 and 6:
rng.integers(1, 7, (2, 2))
```

älteres Interface: `np.random.random()` und `np.random.randint()`
