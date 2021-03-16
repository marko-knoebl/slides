# Grouping and aggregation

## Grouping and aggregation

examples related to Titanic passenger data:

- number of passengers by class
- average age of passengers by class
- number of passengers by class _and_ sex
- average age of passengers by class _and_ sex

## Grouping and aggregation

_Aggregation_: Computing a derived value based on multiple data entries in a series / data frame (e.g. number of entries, average, median)

## Grouping and aggregation

functions and methods:

- `series.value_counts()`
- `series.groupby()` / `df.groupby()`
- `pd.crosstab()`
- `pd.pivot_table()`

## Grouping and aggregation

number of passengers in each class:

```py
titanic["pclass"].value_counts()

# 3    491
# 1    216
# 2    184
```

## Grouping and aggregation

median numeric values of passengers in each class:

```py
titanic.groupby("pclass").median()
```

median age of passengers in each class:

```py
titanic.groupby("pclass")["age"].median()

# 1    37.0
# 2    29.0
# 3    24.0
```

## Grouping and aggregation

number of passengers by class and sex (_frequency table_):

```py
pd.crosstab(titanic["pclass"], titanic["sex"])
```

```txt
sex     female  male
pclass
1           94   122
2           76   108
3          144   347
```

## Grouping and aggregation

average age by class and sex:

```py
pd.crosstab(
    index=titanic["pclass"],
    columns=titanic["sex"],
    values=titanic["age"],
    aggfunc=np.mean)
```

```py
pd.pivot_table(
    data=titanic,
    values="age",
    index=["pclass"],
    columns=["sex"],
    aggfunc=np.mean)
```

## Exercises

- mean values for each of the four iris measurements within each type of flower
- mean USD exchange rates for each currency in the 90s

## Exercises - Solutions

```py
iris.groupby("species").mean()
```

```py
er_90s = exchange_rates.loc[
    (exchange_rates["Date"] >= "1990-01-01") &
    (exchange_rates["Date"] <= "1999-12-31")
]

er_90s_means = er_90s.groupby("Country").mean()
```
