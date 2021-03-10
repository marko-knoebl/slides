# Daten manipulieren

## Spalten umbenennen

```py
df.columns = ["name1", "name2"]
```

## Daten entfernen

Zeilen entfernen:

```py
df2 = df1.drop(["CN", "US"])
```

Spalten entfernen:

```py
df2 = df1.drop(columns=["pop"])
```

## Konvertieren von Daten

Konvertieren von Typen:

```py
titanic["survived"] = titanic["survived"].astype("bool")
```

Ersetzen von Werten:

```py
titanic["alive"] = titanic["alive"].replace(
    {"yes": True, "no": False}
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

## Abgeleitete Werte berechnen mittels NumPy

Aufgabe:

- Analysiere die monatlichen S&P 500 Daten und berechne den monatlichen Gewinn / Verlust
- Was war der größte Gewinn / Verlust in einem Monat?

## Abgeleitete Werte berechnen mittels NumPy

Umwandeln in ein NumPy-Array:

```py
values_np = sp500["SP500"].to_numpy()
```

Differenz aufeinanderfolgender Monate:

```py
diffs = values_np[1:] - values_np[:-1]
# add a single NaN to the front
diffs = np.concatenate([
    np.array([float('nan')]), diffs])
```

Hinzufügen zu Daten:

```py
sp500["Diff"] = diffs
sp500["Gain"] = sp500["Diff"] / sp500["SP500"]
```

## Abgeleitete Werte berechnen mittels eigenen Funktionen

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

## Einzelne Daten setzen

```py
iris.iloc[0, 0] = 6

iris.loc[:, "sepal_ratio"] = float('nan')
```
