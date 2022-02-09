# Changing data

## Renaming columns

```py
df.columns = ["name1", "name2"]
```

## Dropping data

dropping rows:

```py
sp500_new = sp500.drop(["1871-01-01", "1871-02-01"])
```

dropping columns:

```py
sp500_new = sp500.drop(columns=["Real Earnings", "PE10"])
```

## Converting data

converting types:

```py
titanic["Survived"] = titanic["Survived"].astype("bool")
```

replacing values:

```py
titanic["Female"] = titanic["Sex"].replace(
    {"female": True, "male": False}
)
```

## Computing derived data

Adding a new column:

```py
iris["sepal_ratio"] = iris["sepal_length"] / iris["sepal_width"]

iris["sepal_ratio"].mean()
iris["sepal_ratio"].std()

iris_setosa = iris.loc[
    iris["name"] == "Iris-setosa"
]

iris_setosa["sepal_ratio"].mean()
iris_setosa["sepal_ratio"].std()
```

## Computing derived data

Task:

Analyze the S&P 500 monthly data and determine the monthly gain / loss in percent for each month

hint: use the `.diff()` method to get the difference between the previous row and the current one

## Computing derived data

```py
sp500["Diff"] = sp500["SP500"].diff()
sp500["Gain"] = sp500["Diff"] / sp500["SP500"]
```

## Computing derived data via custom functions

```py
def classifier(age):
    if age < 18:
        return "youth"
    elif age < 60:
        return "adult"
    else:
        return "senior"

titanic["AgeCls"] = titanic["Age"].apply(classifier)
```

(more efficient alternative: `pd.cut()`)

## Setting data

```py
iris.iloc[0, 0] = 6

iris.loc[:, "sepal_ratio"] = float('nan')
```
