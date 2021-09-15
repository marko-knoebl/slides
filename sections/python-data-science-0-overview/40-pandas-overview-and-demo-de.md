# Pandas: Überblick und Demo

## Pandas

_Pandas_: Library für Datenanalyse, basiert auf NumPy

## Pandas: Überblick und Demo

Laden einer Tabelle (_DataFrame_) aus einer CSV-Datei:

```py
import pandas as pd

titanic = pd.read_csv(
    "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv",
    index_col="PassengerId",
)
```

## Pandas: Überblick und Demo

Anzeigen von Daten:

```py
titanic
```

Anzeigen einer Spalte ("Series"):

```py
titanic["Age"]
```

## Pandas: Überblick und Demo

Zusammenfassung aller numerischen Daten:

```py
titanic.describe()
```

Zusammenfassung einer Spalte ("Series"):

```py
titanic["Age"].describe()
```

Durchschnitt einer Spalte ("Series"):

```py
titanic["Age"].mean()
```

## Pandas: Überblick und Demo

kategorische Daten:

```py
titanic["Pclass"].value_counts()
```

## Pandas: Überblick und Demo

Abfragen von Daten: Passagiere jünger als 1 Jahr

```py
titanic[titanic["Age"] < 1]
```

## Pandas: Überblick und Demo

Vorbereiten der Daten für eine Machine Learning Übung:

```py
# column with a numeric value
titanic["Female"] = titanic["Sex"].replace(
    {"female": 1, "male": 0}
)

# remove rows with missing age
titanic = titanic.dropna(subset=["Age"])
```
