# Operations on arrays

## Operators

Operators are applied element-wise:

```py
a = np.array([0, 1, 2, 3])
b = np.array([2, 2, 2, 2])

-a
# np.array([0, -1, -2, -3])
a + b
# np.array([2, 3, 4, 5])
a * b
# np.array([0, 2, 4, 6])
```

## Operators

element-wise comparison of arrays:

```py
a < b
# np.array([True, True, False, False])
a == b
# np.array([False, False, True, False])
```

Warning: `a == b` cannot be used reasonably in if statements - use `np.array_equal(a, b)`

## Operators

operations with single numbers (broadcasting):

```py
print(a + 1)
# np.array([1, 2, 3, 4])
```

Some constants are available directly in NumPy:

```py
print(a + np.pi)
print(a + np.e)
print(np.nan)
```

## Element-wise functions

NumPy provides some mathematical functions that are applied element-wise:

```py
print(np.sin(a))
# [0.0, 0.84147098, 0.9... ]
print(np.sqrt(a))
# [0.0, 1.0, 1.414... ]
```

## Element-wise functions

- `abs`
- `sin`
- `cos`
- `sqrt`
- `exp`
- `log`
- `log10`
- `round`
- ...

## Aggregation functions

_Aggregations_ compute scalar values for an entire array or for each of its rows / columns / ...

sum over all entries:

```py
np.sum(a2d)
```

sum along axis 0 ("downwards"):

```py
np.sum(a2d, axis=0)
```

sum along axis 1 ("rightwards"):

```py
np.sum(a2d, axis=1)
```

## Aggregation functions

- `sum`
- `min`
- `max`
- `std`
- `percentile`

## Exercises

(see next slides)

- prices and amounts → total price
- kinetic energy
- centroid of a triangle
- sine and cosine - value table
- dice rolls

## Exercises

given an array of prices and an array of quantities, determine the total price:

```py
prices = np.array([3.99, 4.99, 3.99, 12.99])
# buying the first item 3 times and the last item 2 times
quantities = np.array([3, 0, 0, 2])

# solution: 37.95
```

## Exercise

given an array of masses and velocities of some bodies, determine the kinetic energy of every body and the total kinetic of all bodies together

```py
masses = np.array([1.2, 2.2, 1.5, 2.0])
velocities = np.array([12.0, 14.0, 14.0, 7.5])
```

formula: E = m\*v^2 / 2

## Exercises

given the coordinates of the vertices of a triangle, determine its centroid (arithmetic mean of its vertices)

```py
a = np.array([5, 1])
b = np.array([6, 8])
c = np.array([1, 3])

# solution: [4, 4]
```

## Exercises

create a "value table" for the sine and cosine functions in the interval between 0 and 2\*pi.

result:

```py
# x, sin(x), cos(x)
np.array([[0.0, 0.01, 0.02, ...],
          [0.0, 0.0099998, 0.0199999, ...],
          [1.0, 0.99995, 0.99980, ...]])
```

using this data, verify the following equation: _sin(x)^2 + cos(x)^2 = 1_

## Exercises

Simulate 1 million dice rolls with 10 dice each
