# Counts and cross tabulation

## Counts

```py
titanic["class"].value_counts()
```

```
Third     491
First     216
Second    184
```

## Cross tabulation

A _cross tabulation_ shows the number of corresponding entries across multiple properties

## Cross tabulation

```py
pd.crosstab(titanic["class"], titanic["survived"])
```

```
survived    0    1
class
First      80  136
Second     97   87
Third     372  119
```
