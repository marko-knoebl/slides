# Pandas: overview and demo

## Pandas

_Pandas_: library for data analysis, based on NumPy

## Pandas: overview and demo

load a data table (_DataFrame_) from a CSV file:

```py
import pandas as pd

titanic = pd.read_csv(
    "https://public.opendatasoft.com/" +
        "explore/dataset/titanic-passengers/download",
    delimiter=";",
)
```

## Pandas: overview and demo

display data:

```py
titanic
```

display one column (series):

```py
titanic["age"]
```

## Pandas: overview and demo

summarize all numeric data:

```py
titanic.describe()
```

summarize one column (series):

```py
titanic["age"].describe()
```

## Pandas: overview and demo

preparing data for machine learning exercise:

```py
titanic_ml = pd.DataFrame({
    "female": titanic["sex"].replace(
        {"female": True, "male": False}
    ),
    "pclass": titanic["pclass"],
    "age": titanic["age"],
    "sibsp": titanic["sibsp"],
    "survived": titanic["survived"].replace(
        {"Yes": True, "No": False}
    )
})

# remove rows with missing data
titanic_ml = titanic_ml.dropna()
```
