# Boolean Indexing

## Boolean Indexing (Langform)

```py
a = np.array([4.1, 2.7, -1, 3.8, -1])

a_valid = a > 0
# array([True, True, False, True, False])
a_filtered = a[a_valid]
# array([4.1, 2.7, 3.8])

a_invalid = a < 0
a_with_nans = np.copy(a)
a_with_nans[a_invalid] = np.nan
# array([4.1, 2.7, nan, 3.8, nan])
```

## Boolean Indexing (Kurzform)

```py
a = np.array([4.1, 2.7, -1, 3.8, -1])

a_filtered = a[a >= 0]

a_with_nans = np.copy(a)
a_with_nans[a_with_nans < 0] = np.nan
```
