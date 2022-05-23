# Time series

## Time series

data types:

- _time stamp_: a specific moment in time (e.g. 1955-11-12, 10:04)
- _time period_: a specific period in time (e.g. November 1955)
- _time delta_: a difference in time (e.g. 1 hour)

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

converting between _time stamps_ and _time periods_:

- `.to_period()`
- `.to_timestamp()`

(works on index objects and on Series / DataFrame objects)

## Resampling

resampling: getting derived data for different time intervals

example: based on **monthly** data:

- get **yearly** data (e.g. average over months)
- get **daily** data (e.g. via interpolation)

## Resampling

```py
sp500.resample("Y").mean()
sp500.resample("D").interpolate()
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
