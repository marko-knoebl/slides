# Zeitreihen

## Zeitreihen

erstellen von Datumsfolgen (als Index-Objekte):

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

## Zeitreihen

Überprüfen, ob der erste Tag jedes Monats in den S&P 500 Daten vorhanden ist:

```py
sp500.index.equals(
    pd.date_range(
        sp500.index[0], sp500.index[-1], freq="MS"
    )
)
# True
```

## Resampling

Resampling, um Werte für den Beginn jedes Jahres zu erhalten:

```py
sp500.resample("1ys").interpolate()
```

Resampling, um Werte für jeden Tag zu erhalten:

```py
sp500.resample("1d").interpolate()
```
