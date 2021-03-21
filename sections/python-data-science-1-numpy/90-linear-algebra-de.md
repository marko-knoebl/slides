# Lineare Algebra

## Lineare Algebra

```py
np.transpose(m)
np.linalg.inv(m)
np.eye(2) # unit matrix
```

## Array-Multiplikation

mittels des binären Operators `@`

Beispiel: Rotation verschiedener Punkte um 45° bzw 90° (gegen den Uhrzeigersinn):

```py
points = np.array([[0, 0], [0, 1], [1, 1], [1, 0]])

m = np.array([[np.sqrt(0.5), np.sqrt(0.5)],
              [-np.sqrt(0.5), np.sqrt(0.5)]])

print(points @ m)
print(points @ m @ m)
```

## Array-Multiplikation

Beispiel:

bekannt: Preise verschiedener Produkte, derent Bestände in verschiedenen Lagern

```py
prices = np.array([3.99, 12.99, 5.90, 15])
quantities = np.array([[0, 80, 80, 100],
                       [100, 0, 0, 0],
                       [50, 0, 0, 50]])
```

Gesucht: Warenwert pro Lager
