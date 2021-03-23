# Pandas: Überblick und Demo

## Pandas

_Pandas_: Library für Datenanalyse, basiert auf NumPy

## Pandas: Überblick und Demo

Laden einer Tabelle (_DataFrame_) aus einer CSV-Datei:

```py
import pandas as pd

titanic = pd.read_csv(
    "https://public.opendatasoft.com/" +
        "explore/dataset/titanic-passengers/download",
    delimiter=";",
)
```

## Pandas: Überblick und Demo

Anzeigen von Daten:

```py
titanic
```

Anzeigen einer Spalte ("Series"):

```py
titanic["age"]
```

## Pandas: Überblick und Demo

Zusammenfassung aller numerischen Daten:

```py
titanic.describe()
```

Zusammenfassung einer Spalte ("Series"):

```py
titanic["age"].describe()
```

Durchschnitt einer Spalte ("Series"):

```py
titanic["age"].mean()
```

## Pandas: Überblick und Demo

Abfragen von Daten: Passagiere jünger als 1 Jahr

```py
titanic[titanic["age"] < 1]
```

## Pandas: Überblick und Demo

Vorbereiten der Daten für eine Machine Learning Übung:

```py
titanic_ml = pd.DataFrame({
    "female": titanic["sex"].replace(
        {"female": True, "male": False}
    ),
    "pclass": titanic["pclass"],
    "age": titanic["age"],
    "sibsp": titanic["sibsp"],
    "survived": titanic["survived"].replace(
        {"Yes": True, "No": False}
    )
})

# remove rows with missing data
titanic_ml = titanic_ml.dropna()
```
