# Querying data: basics

## Column names and index values

- `df.index`: row index values
- `df.columns`: column names

## Selecting columns

accessing a column (as a Series):

```py
titanic["age"]
```

accessing multiple columns (as a DataFrame):

```py
titanic[["name", "age"]]
```

## Selecting columns

short notation (does not work for all column names):

```py
titanic.age
```

cases where the short notation cannot be used:

```py
df["first name"]  # space in name
df["class"]       # reserved word
df["mean"]        # existing method
```

## Selecting rows by index value

single row as a Series:

```py
sp500.loc["1872-01-01"]
```

multiple rows as a DataFrame (both limits inclusive):

```py
sp500.loc["1872-01-01" : "1872-12-31"]
```

## Selecting rows by row number

single row as a Series:

```py
sp500.iloc[0]
```

multiple rows as a DataFrame:

```py
sp500.iloc[0 : 10]
```

## Selecting rows

```py
titanic[titanic["pclass"] == 1]
```

```py
titanic[titanic["age"] >= 70]
```

## Sampling data

- `df.sample()` - random entry
- `df.sample(5)` - five entries
- `df.sample(frac=0.1)` - 10% of all entries

## Exercises: Euribor

- first entry
- last entry
- last 10 entries
- entry from 2009-01-02
- entries from the year 2009
- entries with a negative interest rates
- ...

## Solutions: Euribor

- first entry: `euribor.iloc[0]`
- last entry: `euribor.iloc[-1]`
- last 10 entries: `euribor.iloc[-10:]`
- entry from 2009-01-02: `euribor.loc["2009-01-02"]`
- entries from the year 2009: `euribor.loc["2009-01-01": "2009-12-31"]`
- entries with a negative interest rate: `euribor[euribor["rate"] < 0]`

## Exercises: Titanic

- all survivors
- all 60-year-olds

## Solutions: Titanic

- all survivors: `titanic[titanic["survived"] == "Yes"]`
- all 60-year-olds: `titanic[titanic["age"] == 60]`

## Exercise: Exchange rates

- _date_ and _exchange rate_ between _USD_ (base currency) and _EUR_ (country: "Euro")

## Solution: Exchange rates

```py
euro_exchange_rates = exchange_rates[
    exchange_rates.Country == "Euro"
]
euro_exchange_rates[["Date", "Exchange rate"]]
```

## Exercise: S&P 500

When was the S&P 500 at its highest value? (compute the maximum, then get the corresponding row in the DataFrame)

## Solution: S&P 500

```py
sp500_max = sp500["SP500"].max()
# returns a DataFrame
sp500_max_row = sp500[sp500["SP500"] == sp500_max]
```

shorter alternative (using `.idxmax()`):

```py
# returns a Series
sp500_max_row = sp500.loc[sp500["SP500"].idxmax()]
```
