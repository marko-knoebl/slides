# Missing data

## Missing data

Values that represent missing data (since pandas 1.0):

- for floats: `NaN` (as usual in Python)
- for other data types: `NA` (from the pandas package)

## Missing data

```py
titanic["Age"].shape
# (891,)
```

```py
titanic["Age"].count()
# 714
```

## Missing data

show all rows with missing _age_ entries:

```py
titanic[titanic["Age"].isna()]
```

## Removing rows

removing any rows with missing data in any location:

```py
titanic = titanic.dropna()
```

removing any rows with missing data in the age column:

```py
titanic = titanic.dropna(subset=["Age"])
```

## Filling values

Filling missing data with zeros:

```py
titanic["Age"] = titanic["Age"].fillna(0)
```

Filling missing data by using the _last_ valid datapoint:

```py
titanic["Age"] = titanic["Age"].fillna(method="ffill")
```

Filling missing data by using the _next_ valid datapoint:

```py
titanic["Age"] = titanic["Age"].fillna(method="bfill")
```

## Interpolating values

```py
data = pd.Series(
    [1, 2, 4, np.nan, 16, 32, np.nan, np.nan, 256]
)
```

```py
data.interpolate("nearest")
data.interpolate("linear") # default
data.interpolate("slinear")
data.interpolate("quadratic")
data.interpolate("cubic")
```

## Interpolating values

Exercise:

Use the data from _sp500_ and _euribor_ to compare the development of American and European interest rates

Note:

The _sp500_ has data for the first **day** of each month, the _euribor_ has data for the first **workday** of each month

## Interpolating values

solution:

```py
interest = pd.DataFrame({
    "us": sp500["Long Interest Rate"],
    "eu": euribor["rate"]
})

interest["eu"] = interest["eu"].interpolate("slinear")
interest = interest.dropna()
```
