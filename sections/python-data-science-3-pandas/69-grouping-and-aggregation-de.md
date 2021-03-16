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

# 3    491
# 1    216
# 2    184
```

## Gruppierung und Aggregation

Mediane aller numerischen Werte der Passagiere je Klasse:

```py
titanic.groupby("pclass").median()
```

Median der Alter pro Klasse:

```py
titanic.groupby("pclass")["age"].median()

# 1    37.0
# 2    29.0
# 3    24.0
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

## Übungen - Lösungen

```py
iris.groupby("species").mean()
```

```py
er_90s = exchange_rates.loc[
    (exchange_rates["Date"] >= "1990-01-01") &
    (exchange_rates["Date"] <= "1999-12-31")
]

er_90s_means = er_90s.groupby("Country").mean()
```
