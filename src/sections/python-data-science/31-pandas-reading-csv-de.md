# CSV lesen

## CSV lesen

Beispiel: Euribor (Zinsen europäischer Staatsanleihen)

```py
euribor = pd.read_csv(
    "https://datahub.io/core/euribor/r/euribor-12m-monthly.csv",
    index_col="date")
```

Beispiel: Iris Dataset

```py
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data",
    header=None,
    names=["sepal_length", "sepal_width", "petal_length",
           "petal_width", "name"],
)
```

## CSV lesen

Beispiel: Wechselkurse (Multiindex)

```py
exchange_rates = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    index_col=("Date", "Country"))
```
