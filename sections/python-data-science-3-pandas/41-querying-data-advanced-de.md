# Daten auslesen: Fortgeschritten

## Daten auslesen

nach Zeile und Spalte auswählen:

- `df.loc["2009-01-02", "rate"]`
- `df.iloc[5, 1]`

## Zeilen sortieren

- `df.sort_values(by="rate")`
- `df.loc["2009-01-02" : "2009-12-31"].sort_values(by="rate")`
- `df.sort_index(ascending=False)`

## Zeilen auswählen

Grundlegende Methode:

```py
titanic[titanic["pclass"] == 1]
```

```py
titanic[titanic["age"] >= 70]
```

## Zeilen auswählen: fortgeschritten

männliche Passagiere in der ersten Klasse:

```py
titanic.query("pclass > 1 and sex == 'male'")
```

Passagiere, die in Southampton oder Queenstown an Bord gingen:

```py
titanic.query("embarked in ['S', 'Q']")
```

## Zeilen auswählen: fortgeschritten

```py
titanic[(titanic["pclass"] > 1) & (titanic["sex"] == "male")]
```

```py
titanic[titanic["embarked"].isin(["S", "Q"])]
```

## Übung: Titanic

- erwachsene (>= 18) Männer, sortiert nach Alter
- erwachsene Überlebende

## Lösungen: Titanic

erwachsene (>= 18) Männer, sortiert nach Alter:

```py
titanic[titanic["age"] >= 18].sort_values(by="age")
titanic.query("age >= 18").sort_values(by="age")
```

erwachsene Überlebende:

```py
titanic.query("age >= 18 and survived=='Yes'")
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
