# Arrays erstellen

## Arrays erstellen

Ein Array der Größe 2x6, gefüllt mit Nullen:

```py
np.zeros((2, 6))
# or
np.full((2, 6), 0.0)
```

Ein 3x3 Array mit Zufallswerten:

```py
# floats between 0 and 1:
np.random.random((3, 3))
# integers between 1 and 6:
np.random.randint(1, 7, (3, 3))
```

## Arrays erstellen

Erstellen der Folge _0.0, 0.5, 1.0, 1.5_:

fixe Schrittweite (0.5):

```py
a = np.arange(0, 2, 0.5)
```

fixe Anzahl an Einträgen (4):

```py
b = np.linspace(0, 1.5, 4)
```
