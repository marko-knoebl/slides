# Pandas: extras

()

`df.at["2009-01-02", "rate"]`: specific row and column (faster than `.loc`)
iat

`df.loc[:, 'col']` -> `df['col']` -> `df.col`

## Filtering entries

- `df[df >= 0]` (all negative entries will be set to `NaN`)

## composite index

```py
exchange_rates = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    index_col=("Date", "Country"))
```
