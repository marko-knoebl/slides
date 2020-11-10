# Operations on arrays

## Operations on arrays

Selecting entries:

```py
a1d[0] # 1
a2d[0, 1] # 2
a2d[0, :] # [1, 2, 3]
a2d[:, 0] # [1, 4, 7]
```

with 2D arrays: _[row index, column index]_

in general:

- second to last index (if it exists): counts downwards
- last index: counts rightwards

## Operations on arrays

Selecting entries:

```py
a2d[0] # [1, 2, 3]
```

```py
a2d[1:, 1:] # [[5, 6], [8, 9]]
a2d[1, ::-1] # [6, 5, 4]
```

## Operations on arrays

Operators are applied element-wise:

```py
a = np.array([1, 2, 3])
b = np.array([2, 2, 2])

print(-a)
# np.array([-1, -2, -3])
print(a + b)
# np.array([3, 4, 5])
print(a * b)
# np.array([2, 4, 6])
```

## Operations on arrays

operations with single numbers (broadcasting):

```py
a = np.array([1, 2, 3])

print(a + 1)
# np.array([2, 3, 4])
```

Some constants are available directly in NumPy:

```py
print(a + np.pi)
print(a + np.e)
print(np.nan)
```

## Operations on arrays

element-wise comparison of arrays:

```py
a < b
# np.array([True, False, False])
a == b
# np.array([False, True, False])
```

Warning: `a == b` cannot be used reasonably in if statements - use `np.array_equal(a, b)`

## Operations on arrays

Filtering arrays (e.g. for restricting to positive entries):

```py
a = np.array([-1, 3, -2, 1])
a_is_pos = a > 0
# array([False, True, False, True])
a_pos = a[a_is_pos]
# array([3, 1])
```

short form:

```py
a_pos = a[a > 0]
```

## Operations on arrays

NumPy provides some mathematical functions that are applied element-wise:

```py
a = np.array([0, 1, 2, 3])

print(np.sin(a))
# [0.0, 0.84147098, 0.9... ]
print(np.sqrt(a))
# [0.0, 1.0, 1.414... ]
```

## Operations on arrays

element-wise functions:

- `abs`
- `sin`
- `cos`
- `sqrt`
- `exp`
- `log`
- `log10`
- ...

## Operations on arrays

_Aggregations_ compute scalar values for an entire array or for each of its rows / columns / ...

sum over all entries:

```py
np.sum(a2d)
```

sum over all rows:

```py
np.sum(a2d, axis=0)
```

sum over all columns:

```py
np.sum(a2d, axis=1)
```

## Operations on arrays

aggregations:

- `sum`
- `min`
- `max`
- `std`
- `percentile`

## Exercises

(see next slides)

- prices and amounts -> total price
- centroid of a triangle
- sine and cosine - value table

## Exercises

given an array of prices and an array of quantities, determine the total price:

```py
prices = np.array([3.99, 4.99, 3.99, 12.99])
# buying the first item 3 times and the last item 2 times
quantities = np.array([3, 0, 0, 2])

# solution: 37.95
```

## Exercises

given the coordinates of the vertices of a triangle (in 2D or 3D), determine its centroid

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
          [0.0, 0.0099998, 0.99995, ...],
          [1.0, 0.99995, 0.99980, ...]])
```

using this data, verify the following equation: _sin(x)^2 + cos(x)^2 = 1_
