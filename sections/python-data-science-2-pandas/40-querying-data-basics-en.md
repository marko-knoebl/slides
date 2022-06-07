# Querying data: basics

## Column names and index values

- `df.index`: row index values
- `df.columns`: column names

## Selecting columns

accessing a column (as a Series):

```py
titanic["Age"]
```

accessing multiple columns (as a DataFrame):

```py
titanic[["Name", "Age"]]
```

## Selecting columns

short notation (does not work for all column names):

```py
titanic.Age
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

## Selecting rows by index value

if the index column was parsed as dates:

```py
sp500.loc["2009"]
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
titanic[titanic["Pclass"] == 1]
```

```py
titanic[titanic["Age"] >= 70]
```

## Sampling data

- `df.sample()` - random entry
- `df.sample(5)` - five entries
- `df.sample(frac=0.1)` - 10% of all entries

## Exercises: S&P 500

- first entry
- last entry
- last 10 entries
- 10 random entries
- entry from 2009-01-01
- entries from the year 2009
- entries where the long interest rate was greater than 14
- ...

## Solutions: S&P 500

- first entry: `sp500.iloc[0]`
- last entry: `sp500.iloc[-1]`
- last 10 entries: `sp500.iloc[-10:]`
- 10 random entries: `sp500.sample(10)`
- entry from 2009-01-01: `sp500.loc["2009-01-01"]`
- entries from the year 2009: `sp500.loc["2009-01-01": "2009-12-31"]`
- entries where the long interest rate was greater than 14: `sp500[sp500["Long Interest Rate"] > 14]`

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

## Exercises: Titanic

- all survivors
- all 60-year-olds
- number of survivors and non-survivors
- number of survivors and non-survivors in first class

## Solutions: Titanic

- all survivors: `titanic[titanic["Survived"] == 0]`
- all 60-year-olds: `titanic[titanic["Age"] == 60]`
- number of survivors and non-survivors: `titanic["Survived"].value_counts()`
- number of survivors and non-survivors in first class: `titanic[titanic["Pclass"] == 1]["Survived"].value_counts()`
