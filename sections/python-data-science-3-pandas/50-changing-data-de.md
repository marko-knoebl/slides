# Daten manipulieren

## Spalten umbenennen

```py
df.columns = ["name1", "name2"]
```

## Daten entfernen

Zeilen entfernen:

```py
sp500_new = sp500.drop(["1871-01-01", "1871-02-01"])
```

Spalten entfernen:

```py
sp500_new = sp500.drop(columns=["Real Earnings", "PE10"])
```

## Konvertieren von Daten

Konvertieren von Typen:

```py
titanic["Survived"] = titanic["Survived"].astype("bool")
```

Ersetzen von Werten:

```py
titanic["Female"] = titanic["Sex"].replace(
    {"female": True, "male": False}
)
```

## Abgeleitete Werte berechnen

Hinzufügen einer neuen Spalte:

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

## Abgeleitete Werte berechnen

Aufgabe:

Analysiere die monatlichen S&P 500 Daten und berechne den monatlichen Gewinn / Verlust

Hinweis: Verwende die Methode `.diff()`, um die Differenz zwischen der vorherigen und der aktuellen Zeile zu berechnen

## Abgeleitete Werte berechnen

```py
sp500["Diff"] = sp500["SP500"].diff()
sp500["Gain"] = sp500["Diff"] / sp500["SP500"]
```

## Abgeleitete Werte berechnen mittels eigenen Funktionen

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

(effizientere Alternative: `pd.cut()`)

## Einzelne Daten setzen

```py
iris.iloc[0, 0] = 6

iris.loc[:, "sepal_ratio"] = float('nan')
```
