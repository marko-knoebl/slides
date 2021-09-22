# Linear algebra

## Linear algebra

```py
np.transpose(m)
np.linalg.inv(m)
np.eye(2) # unit matrix
```

## Array multiplication

via the binary operator `@`

example: rotating several points by 45° / 90° (counterclockwise):

```py
points = np.array([[0, 0], [0, 1], [1, 1], [1, 0]])

m = np.array([[np.sqrt(0.5), np.sqrt(0.5)],
              [-np.sqrt(0.5), np.sqrt(0.5)]])

print(points @ m)
print(points @ m @ m)
```

## Array multiplication

example:

known data: prices of various products, number of items in stock for different stores

```py
prices = np.array([3.99, 12.99, 5.90, 15])
quantities = np.array([[0, 80, 80, 100],
                       [100, 0, 0, 0],
                       [50, 0, 0, 50]])
```

wanted: total value for each of the three stores
