# Roses (subplots)

Draw four rhodonea curves (roses) in a grid.

A rhodonea curve is given by its _x_ and _y_ coordinates:

```
x(t) = cos(n / d * t) * cos(t)
y(t) = cos(n / d * t) * sin(t)
```

Base the plots on this configuration:

```py
# n, d, max_t
roses = [
    (2, 1, 2*np.pi),
    (3, 1, 1*np.pi),
    (3, 2, 4*np.pi),
    (3, 4, 8*np.pi)
]
```
