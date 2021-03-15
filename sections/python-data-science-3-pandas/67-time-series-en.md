# Time series

## Time series

creating date ranges (as index objects):

```py
every_day = pd.date_range("2000-01-01", "2000-12-31")
last_of_each_month = pd.date_range(
    "2000-01-01", "2000-12-31", freq="M"
)
first_of_each_month = pd.date_range(
    "2000-01-01", "2000-12-31", freq="MS"
)
every_10_days = pd.date_range(
    "2000-01-01", "2000-12-31", freq="10d"
)
```

## Time series

Checking if the first day of each month is present in the S&P 500 data:

```py
sp500.index.equals(
    pd.date_range(
        sp500.index[0], sp500.index[-1], freq="MS"
    )
)
# True
```

## Resampling

resampling to get values for the start of each year:

```py
sp500.resample("1ys").interpolate()
```

resampling to get values for each day:

```py
sp500.resample("1d").interpolate()
```
