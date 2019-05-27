# Pandas: Querying data

## Querying data (by row numbers / column numbers)

- `df.iloc[5]`: row 5 (returns a `Series` object)
- `df.iloc[:5]`: first 5 rows (returns a `DataFrame` object)
- `df.iloc[10:20]`: rows 10-19
- `df.iloc[5, 1]`: row 5, column 1
- `df.iloc[5, [0, 2]]`: row 5, column 0 und 2

## Querying data (by row names / column names)

- `df.index`: row names
- `df.columns`: column names

<!-- -->

- `df.loc["2009-01-02"]`: Row by index value
- `df.loc["2009-01-01":"2009-01-31"]`: Row in a specified range (both values included)
- `df.loc[:, "rate"]`: column `"rate"`
- `df["rate"]`: column `"rate"` (short version)
- `df.rate`: column `"rate"` (extra short version - only works with no special characters)
- `df.loc[:, ["rate", "maturity_level"]]`: two columns
- `df.loc["2009-01-02", "rate"]`: specific row and column

## Filtering rows

via _boolean indexing_:

- `df.loc[df.rate < 0]`
- `df.loc[df.name == "Iris-setosa"]`
- `df.loc[df.name.isin(["Iris-setosa", "Iris-virginica"])])]`

## Sorting rows

- `df.sort_index(ascending=False)`
- `df.sort_values(by="rate")`
- `df.loc["2009-01-02" : "2009-12-31"].sort_values(by="rate")`

## Exercises (Euribor)

- first entry
- last entry
- last 10 entries
- entry from 2009-01-02
- entries from the year 2009
- ...

## Solutions (Euribor)

- first entry: `euribor.iloc[0]`
- last entry: `euribor.iloc[-1]`
- last 10 entries: `euribor.iloc[-10:]`
- entry from 2009-01-02: `euribor.loc["2009-01-02"]`
- entries from the year 2009: `euribor.loc["2009-01-01": "2009-12-31"]`

## Exercises (Iris)

- maximum _petal length_ of _iris setosa_ (without using `.max`)
