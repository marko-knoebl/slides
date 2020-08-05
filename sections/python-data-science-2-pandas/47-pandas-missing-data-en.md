# Missing data

## Missing data

In the exchange rate data there are some missing entries:

- some days are not present (weekends)
- for some days the values are `NaN`s

## Missing data

Values that represent missing data (since pandas 1.0):

- for floats: `NaN` (as usual in Python)
- for other data types: `NA` (from the pandas package)

## Missing data

removing any rows with missing data:

```py
er = er.dropna()
```

filling any rows with missing data with zeros:

```py
er = er.fillna(0)
```

filling any missing data with the value from the previous row:

```py
er = er.fillna(method="backfill")
```

## Missing data

interpolating data:

```py
er = er.intepolate()
er = er.interpolate(method="spline")
```

interpolating example:

```py
url = 'https://datahub.io/core/interest-rates-gb/r/data.csv'

ir_uk = pd.read_csv(url, index_col="date",
                    parse_dates=True)

ir_uk_weekly = ir_uk.resample('7d').interpolate()
```

## Exercise

Use the data from _sp500_ and euribor to compare the development of american and european interest rates
