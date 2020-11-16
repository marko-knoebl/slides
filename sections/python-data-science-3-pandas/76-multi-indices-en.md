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

Importing with a multi-index:

```py
exchange_rates = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    index_col=["Country", "Date"]
    parse_dates=["Date"])
```
