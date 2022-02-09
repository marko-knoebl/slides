# Daten auslesen: Fortgeschritten

## Daten auslesen

nach Zeile und Spalte auswählen:

- `df.loc["2009-01-02", "rate"]`
- `df.iloc[5, 1]`

## Zeilen sortieren

- `series.sort_values()`
- `df.sort_values("column_name")`
- `df.sort_values(["col1", "col2"])`
- `df.sort_index(ascending=False)`

## Zeilen auswählen

Grundlegende Methode:

```py
titanic[titanic["Pclass"] == 1]
```

```py
titanic[titanic["Age"] >= 70]
```

## Zeilen auswählen: fortgeschritten

männliche Passagiere in der zweiten oder dritten Klasse:

```py
titanic[(titanic["Pclass"] >= 2) & (titanic["Sex"] == "male")]
```

Passagiere, die in Southampton oder Queenstown an Bord gingen:

```py
titanic[titanic["Embarked"].isin(["S", "Q"])]
```

## Zeilen auswählen: fortgeschritten

```py
titanic.query("Pclass >= 2 and Sex == 'male'")
```

```py
titanic.query("Embarked in ['S', 'Q']")
```

## Übung: Titanic

- erwachsene (>= 18) Männer, sortiert nach Alter
- erwachsene Überlebende

## Lösungen: Titanic

erwachsene (>= 18) Männer, sortiert nach Alter:

```py
titanic[
    (titanic["Age"] >= 18) & (titanic["Sex"] = "male")
].sort_values("Age")
```

erwachsene Überlebende:

```py
titanic[(titanic["Age"] >= 18) & (titanic["Survived"] == 1)]
```

## Übungen: Iris-Blüten

- Iris-Blüten, sortiert nach _petal length_
- Iris Setosa, sortiert nach _petal length_

## Lösungen: Iris-Blüten

```py
iris.sort_values(by="petal_length")
```

```py
iris[iris["species"] == "Iris-setosa"].sort_values(
    by="petal_length"
)
```
