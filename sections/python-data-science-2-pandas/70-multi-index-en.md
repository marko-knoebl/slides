# Multi index

## Multi index

**index column**: column that uniquely identifies a row in a DataFrame

**multi index**: combination of multiple columns for unique identification

## Multi index

example: exchange rates

| Date       | Country   | Exchange rate |
| ---------- | --------- | ------------- |
| 1971-01-01 | Australia | 0.894         |
| 1971-02-01 | Australia | 0.890         |
| 1971-03-01 | Australia | 0.890         |

A row can be uniquely identified by a combination of _date_ and _country_

## Multi index

Importing with a multi index:

```py
exchange_rates = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    index_col=["Country", "Date"],
    parse_dates=["Date"])
```

## Multi index

in some cases, a multi index may allow for using a _Series_ instead of a _DataFrame_:

```py
exchange_rates_series = exchange_rates["Exchange rate"]
```

## Multi index

querying the first part of a multi index (will return a Series with only the remainder of the index):

```py
exchange_rates_series.loc["France"]
```

querying multiple parts of the index:

```py
exchange_rates_series.loc["France", "1971-01-01":"1971-12-31"]
```

## Multi index

Querying in a DataFrame:

```py
exchange_rates.loc[("France", "1990"), :]
exchange_rates.loc[(slice(None, None), "1990-01"), :]
```

Note: in Python `x[a:b]` is equivalent to `x[slice(a, b)]`

Note: the _Date_ column could be removed from the index via `reset_index`
