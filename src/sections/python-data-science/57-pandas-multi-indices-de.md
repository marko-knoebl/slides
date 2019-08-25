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
    index_col=["Country", "Date"]
    parse_dates=["Date"])
```
