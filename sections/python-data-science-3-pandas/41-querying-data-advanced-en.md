# Querying data: advanced

## Querying data

querying by row and column:

- `df.loc["2009-01-02", "rate"]`
- `df.iloc[5, 1]`

## Sorting rows

- `series.sort_values()`
- `df.sort_values(by="rate")`
- `df.loc["2009-01-02" : "2009-12-31"].sort_values(by="rate")`
- `df.sort_index(ascending=False)`

## Selecting rows

basic method:

```py
titanic[titanic["Pclass"] == 1]
```

```py
titanic[titanic["Age"] >= 70]
```

## Selecting rows: advanced

male passengers in second or third class:

```py
titanic[(titanic["Pclass"] >= 2) & (titanic["Sex"] == "male")]
```

passengers who embarked in Southampton or Queenstown:

```py
titanic[titanic["Embarked"].isin(["S", "Q"])]
```

## Selecting rows: advanced

```py
titanic.query("Pclass >= 2 and Sex == 'male'")
```

```py
titanic.query("Embarked in ['S', 'Q']")
```

## Exercises: Titanic

- adult (>= 18) males, sorted by age
- adult survivors

## Solutions: Titanic

adult (>= 18) males, sorted by age:

```py
titanic[
    (titanic["Age"] >= 18) & (titanic["Sex"] = "male")
].sort_values(by="age")
```

adult survivors

```py
titanic[(titanic["Age"] >= 18) & (titanic["Survived"] == "Yes")]
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
