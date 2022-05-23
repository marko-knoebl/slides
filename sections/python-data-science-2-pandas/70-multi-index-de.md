# Multi-Index

## Multi-Index

Index-Spalte: Spalte, anhand deren Einträge die Zeilen eindeutig identifiziert werden können

Multi-Index: Kombination aus mehreren Spalten zur eindeutigen Identifikation

## Multi-Index

Beispiel: Exchange rates

| Date       | Country   | Exchange rate |
| ---------- | --------- | ------------- |
| 1971-01-01 | Australia | 0.894         |
| 1971-02-01 | Australia | 0.890         |
| 1971-03-01 | Australia | 0.890         |

Eine Zeile kann durch Kombination von _date_ und _country_ eindeutig identifiziert werden.

## Multi-Index

Importieren mit Multi-Index:

```py
exchange_rates = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    index_col=["Country", "Date"],
    parse_dates=["Date"])
```

## Multi-Index

In manchen Fällen kann durch einen Multi-Index eine _Series_ anstatt eines _DataFrames_ verwendet werden:

```py
exchange_rates_series = exchange_rates["Exchange rate"]
```

## Multi-Index

Abfragen des ersten Teils eines Multi-Index (gitbt eine _Series_ mit nur dem restlichen Index zurück):

```py
exchange_rates_series.loc["France"]
```

Abfragen mehrerer Teile des Index:

```py
exchange_rates_series.loc["France", "1971-01-01":"1971-12-31"]
```

## Multi-Index

Abfragen in einem DataFrame:

```py
exchange_rates.loc[("Australia", "1990"), :]
exchange_rates.loc[(slice(None, None), "1990-01-01"), :]
```

Bemerkung: `x[a:b]` ist in Python äquivalent zu `x[slice(a, b)]`

Bemerkung: die _Date_-Spalte könnte aus dem Index via `reset_index` entfernt werden
