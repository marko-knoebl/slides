# Gruppierung und Aggregation

## Gruppierung und Aggregation

Beispiele zu den Titanic-Daten:

- Anzahl der Passagiere nach Klasse
- Durchschnittliches Alter nach Klasse
- Anzahl der Passagiere nach Klasse _und_ Geschlecht
- Durchschnittliches Alter nach Klasse _und_ Geschlecht

## Gruppierung und Aggregation

_Aggregation_: Berechnung abgeleiteter Werte basierend auf mehreren Einträgen

## Gruppierung und Aggregation

Funktionen und Methoden:

- `series.value_counts()`
- `series.groupby()` / `df.groupby()`
- `pd.crosstab()`
- `pd.pivot_table()`

## Gruppierung und Aggregation

Anzahl von Passagieren pro Klasse:

```py
titanic["pclass"].value_counts()

# 491, 216, 184
```

## Gruppierung und Aggregation

Median der Alter pro Klasse:

```py
titanic["age"].groupby(titanic["pclass"]).median()

# 37, 29, 24
```

## Gruppierung und Aggregation

Anzahl der Passagiere nach Klasse und Geschlecht (_Kontingenztabelle_ oder _Kreuztabelle_)

```py
pd.crosstab(titanic["pclass"], titanic["sex"])
```

```txt
sex     female  male
pclass
1           94   122
2           76   108
3          144   347
```

## Gruppierung und Aggregation

Durchschnittliches Alter nach Geschlecht und Klasse:

```py
pd.crosstab(
    index=titanic["pclass"],
    columns=titanic["sex"],
    values=titanic["age"],
    aggfunc=np.mean)
```

```py
pd.pivot_table(
    data=titanic,
    values="age",
    index=["pclass"],
    columns=["sex"],
    aggfunc=np.mean)
```

## Übungen

- Durchschnittswerte der Iris-Daten basierend auf dem Namen der Art
- Durchschnittliche USD-Wechselkurse für jede Währung in den 90ern
