# Fehlende Daten

## Fehlende Daten

Werte, die fehlende Daten symbolisieren (ab pandas 1.0):

- für floats: `NaN` (wie allgemein in Python üblich)
- für andere Datentypen: `NA` (aus dem Pandas-Paket)

## Fehlende Daten

```py
titanic["Age"].shape
# (891,)
```

```py
titanic["Age"].count()
# 714
```

## Fehlende Daten

Anzeigen aller Zeilen mit fehlenden _age_-Einträgen:

```py
titanic[titanic["Age"].isna()]
```

## Fehlende Daten

Entfernen aller Zeilen mit fehlenden Daten:

```py
titanic = titanic.dropna()
```

Entfernen aller Zeilen mit fehlenden Daten in der Spalte _age_:

```py
titanic = titanic.dropna(subset=["Age"])
```

## Ersetzen fehlender Daten

Ersetzen fehlender Daten durch Nullen:

```py
titanic["Age"] = titanic["Age"].fillna(0)
```

Ersetzen fehlender Daten durch den _letzten_ gültigen Wert:

```py
titanic["Age"] = titanic["Age"].fillna(method="ffill")
```

Ersetzen fehlender Daten durch den _nächsten_ gültigen Wert:

```py
titanic["Age"] = titanic["Age"].fillna(method="bfill")
```

## Interpolieren von Werten

```py
data = pd.Series(
    [1, 2, 4, np.nan, 16, 32, np.nan, np.nan, 256]
)
```

```py
data.interpolate("nearest")
data.interpolate("linear") # default
data.interpolate("slinear")
data.interpolate("quadratic")
data.interpolate("cubic")
```

## Interpolieren von Werten

Übung:

Verwende die Daten aus _sp500_ und _euribor_, um die Entwicklungen der europäischen und amerikanischen Zinssätze einander gegenüberzustellen.

Bemerkung:

_sp500_ hat Daten für den ersten **Tag** jedes Monats, _euribor_ hat daten für den ersten **Arbeitstag** jedes Monats

## Interpolieren von Werten

Lösung:

```py
interest = pd.DataFrame({
    "us": sp500["Long Interest Rate"],
    "eu": euribor["rate"]
})

interest["eu"] = interest["eu"].interpolate("slinear")
interest = interest.dropna()
```
