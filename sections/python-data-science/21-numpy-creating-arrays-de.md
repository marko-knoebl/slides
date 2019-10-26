# Arrays erstellen

## Arrays erstellen

Ein Array der Größe 2x6, gefüllt mit Nullen:

```py
np.zeros((2, 6))
```

oder

```py
np.full((2, 6), 0)
```

Ein 3x3 Array mit Zufallswerten:

```py
np.random.random(3, 3)
```

## Arrays erstellen

Die Folge _0.0, 0.5, 1.0, 1.5_:

```py
# fixed step width (0.5)
a = np.arange(0, 2, 0.5)
# fixed number of entries (4)
b = np.linspace(0, 1.5, 4)
```
