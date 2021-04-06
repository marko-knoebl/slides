# Querying data: advanced

## Querying data

querying by row and column:

- `df.loc["2009-01-02", "rate"]`
- `df.iloc[5, 1]`

## Sorting rows

- `df.sort_values(by="rate")`
- `df.loc["2009-01-02" : "2009-12-31"].sort_values(by="rate")`
- `df.sort_index(ascending=False)`

## Selecting rows

basic method:

```py
titanic[titanic["pclass"] == 1]
```

```py
titanic[titanic["age"] >= 70]
```

## Selecting rows: advanced

male passengers in first class:

```py
titanic[(titanic["pclass"] > 1) & (titanic["sex"] == "male")]
```

passengers who embarked in Southampton or Queenstown:

```py
titanic[titanic["embarked"].isin(["S", "Q"])]
```

## Selecting rows: advanced

```py
titanic.query("pclass > 1 and sex == 'male'")
```

```py
titanic.query("embarked in ['S', 'Q']")
```

## Exercises: Titanic

- adult (>= 18) males, sorted by age
- adult survivors

## Solutions: Titanic

adult (>= 18) males, sorted by age:

```py
titanic[
    (titanic["age"] >= 18) & (titanic["sex"] = "male")
].sort_values(by="age")
```

adult survivors

```py
titanic[(titanic["age"] >= 18) & (titanic["survived"] == "Yes")]
```

## Exercises: Iris flowers

- iris flowers, sorted by _petal length_
- iris setosa, sorted by _petal length_

## Solutions: Iris flowers

```py
iris.sort_values(by="petal_length")
```

```py
iris[iris["species"] == "Iris-setosa"].sort_values(
    by="petal_length"
)
```
