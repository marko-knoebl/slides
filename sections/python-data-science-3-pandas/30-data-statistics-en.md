# Data statistics

## Statistics on series

```py
countries["area"].describe()
```

```txt
count     3.000000
mean     12.133333
std       4.215843
min       9.600000
25%       9.700000
50%       9.800000
75%      13.400000
max      17.000000
dtype: float64
```

(see next slide for explanations)

## Statistics on series

```py
countries["area"].describe()
```

The above computes the following data:

- `area.count()`
- `area.mean()`
- `area.std()`
- `area.quantile(0)` or `area.min()`
- `area.quantile(0.25)`
- `area.quantile(0.5)` or `area.median()`
- `area.quantile(0.75)`
- `area.quantile(1)` or `area.max()`

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
