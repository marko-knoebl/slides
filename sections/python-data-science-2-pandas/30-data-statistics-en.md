# Data statistics

## Statistics on series

```py
titanic["Age"].describe()
```

```txt
count    714.000000
mean      29.699118
std       14.526497
min        0.420000
25%       20.125000
50%       28.000000
75%       38.000000
max       80.000000
Name: Age, dtype: float64
```

(see next slide for explanations)

## Statistics on series

```py
titanic["Age"].describe()
```

The above computes the following data:

- `.count()`
- `.mean()`
- `.std()`
- `.quantile(0)` or `.min()`
- `.quantile(0.25)`
- `.quantile(0.5)` or `.median()`
- `.quantile(0.75)`
- `.quantile(1)` or `.max()`

## Statistical quantities

- _std_: _Standard deviation_
- _median_: half of the values are less and half are greater than the median
- _min_: all values are greater than the minimum
- _25%-quantile_: 25% of all values are less

## Statistics on series

get a list of unique values:

```py
titanic["Pclass"].unique()
```

```txt
[2, 3, 1]
```

count occurences:

```py
titanic["Pclass"].value_counts()
```

```txt
3    491
1    216
2    184
```
