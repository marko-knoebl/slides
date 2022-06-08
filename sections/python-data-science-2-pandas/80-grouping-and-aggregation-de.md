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
titanic["Pclass"].value_counts()

# 3    491
# 1    216
# 2    184
```

## Gruppierung und Aggregation

Mediane aller numerischen Werte der Passagiere je Klasse:

```py
titanic.groupby("Pclass").median()
```

Median der Alter pro Klasse:

```py
titanic.groupby("Pclass")["Age"].median()

# 1    37.0
# 2    29.0
# 3    24.0
```

## Gruppierung und Aggregation

Anzahl der Passagiere nach Klasse und Geschlecht (_Kontingenztabelle_ oder _Kreuztabelle_)

```py
pd.crosstab(titanic["Pclass"], titanic["Sex"])
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
    index=titanic["Pclass"],
    columns=titanic["Sex"],
    values=titanic["Age"],
    aggfunc=np.mean)
```

```py
pd.pivot_table(
    data=titanic,
    values="Age",
    index=["Pclass"],
    columns=["Sex"],
    aggfunc=np.mean)
```

## Übungen

Durchschnittswerte der Iris-Daten basierend auf dem Namen der Art

Durchschnittliche USD-Wechselkurse für jede Währung in den 90ern basierend auf den folgenden Daten:

```py
exchange_rates = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    index_col=["Country", "Date"],
    parse_dates=["Date"])
```

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

## Übung: Movielens

Basierend auf dem Movielens-Datensatz, finde die top-bewerteten Filme, die von zumindest 10 Nutzern bewertet wurden

```py
ratings = pd.read_csv(
    "https://files.grouplens.org/datasets/movielens/ml-100k/u.data",
    sep="\t",
    header=None,
    usecols=[0, 1, 2],
    names=["user_id", "movie_id", "rating"],
)
movie_titles = pd.read_csv(
    "https://files.grouplens.org/datasets/movielens/ml-100k/u.item",
    sep="|",
    header=None,
    encoding="latin1",
    usecols=[0, 1],
    names=["movie_id", "title"],
)
```

## Übung: Movielens - Lösung

```py
movie_names = movie_titles.groupby("movie_id")["title"].first()
movie_mean_ratings = ratings.groupby("movie_id")["rating"].mean()
movie_num_ratings = ratings.groupby("movie_id")["rating"].count()

movie_ratings = pd.DataFrame({
  "name": movie_names,
  "mean_rating": movie_mean_ratings,
  "num_ratings": movie_num_ratings
})

movie_ratings.query(
    "num_ratings >= 10 and 4.2 < mean_rating"
).sort_values(by="mean_rating", ascending=False)
```
