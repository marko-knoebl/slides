# Pandas: overview and demo

## Pandas

_Pandas_: library for data analysis, based on NumPy

## Pandas: overview and demo

load a data table (_DataFrame_) from a CSV file:

```py
import pandas as pd

titanic = pd.read_csv(
    "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv",
    index_col="PassengerId",
)
```

## Pandas: overview and demo

display data:

```py
titanic
```

display one column (series):

```py
titanic["Age"]
```

## Pandas: overview and demo

summarize all numeric data:

```py
titanic.describe()
```

summarize one column (series):

```py
titanic["Age"].describe()
```

mean value of one column (series):

```py
titanic["Age"].mean()
```

## Pandas: overview and demo

categorical data:

```py
titanic["Pclass"].value_counts()
```

## Pandas: overview and demo

querying data: passengers younger than 1 year

```py
titanic[titanic["Age"] < 1]
```

## Pandas: overview and demo

preparing data for a machine learning exercise:

```py
# column with a numeric value
titanic["Female"] = titanic["Sex"].replace(
    {"female": 1, "male": 0}
)

# remove rows with missing age
titanic = titanic.dropna(subset=["Age"])
```
