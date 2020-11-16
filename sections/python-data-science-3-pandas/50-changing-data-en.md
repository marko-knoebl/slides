# Changing data

## Renaming columns

```py
df.columns = ["name1", "name2"]
```

## Dropping data

dropping rows:

```py
df2 = df1.drop(["CN", "US"])
```

dropping columns:

```py
df2 = df1.drop(columns=["pop"])
```

## Converting data

converting types:

```py
titanic["survived"] = titanic["survived"].astype("bool")
```

replacing values:

```py
titanic["alive"] = titanic["alive"].replace(
    {"yes": True, "no": False}
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

## Computing derived data via NumPy

Task:

- Analyze the S&P 500 monthly data and determine the monthly gain / loss in percent for each month
- What was the biggest loss / gain in a month?

## Computing derived data via NumPy

converting to NumPy array:

```py
values_np = sp500["SP500"].to_numpy()
```

differences of sequential months:

```py
diffs = values_np[1:] - values_np[:-1]
# add a single NaN to the front
diffs = np.concatenate([
    np.array([float('nan')]), diffs])
```

adding to pandas data:

```py
sp500["Diff"] = diffs
sp500["Gain"] = sp500["Diff"] / sp500["SP500"]
```

## Computing derived data via custom functions

```py
def classifier(value):
    if value < 2:
        return 0
    elif value < 10:
        return 1
    else:
        return 2

df["class"] = df["value"].apply(classifier)
```

## Setting data

```py
iris.iloc[0, 0] = 6

iris.loc[:, "sepal_ratio"] = float('nan')
```
