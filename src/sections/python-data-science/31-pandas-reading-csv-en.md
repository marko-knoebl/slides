# Reading CSV

## Reading CSV

Example: Euribor (interest rates of European bonds)

```py
euribor = pd.read_csv(
    "https://datahub.io/core/euribor/r/euribor-12m-monthly.csv",
    index_col="date")
```

Example: Iris Dataset

```py
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data",
    header=None,
    names=["sepal_length", "sepal_width", "petal_length",
           "petal_width", "name"],
)
```

## Reading CSV

Example: S&P 500 monthly prices

```py
sp500 = pd.read_csv(
    "https://datahub.io/core/s-and-p-500/r/data.csv",
    index_col="Date")
```

Example: exchange rates (multi index)

```py
exchange_rates = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    index_col=("Date", "Country"))
```
