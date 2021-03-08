# Joins

## Joins

**Join**: Zusammenführen von mehreren Datenquellen

## Joins

Typen:

- inner join
- outer join
- left join
- right join

## Joins

Joins anhand des Index bei `Series`-Objekten:

outer Join:

```py
interest_rates = pd.DataFrame({
    "usd": sp500["Long Interest Rate"],
    "eur": euribor["rate"]
})
```

inner Join:

```py
interest_rates = pd.DataFrame({
    "usd": sp500["Long Interest Rate"],
    "eur": euribor["rate"]
}).dropna()
```

## Joins

Joins anhand des Index bei _DataFrame_-Objekten:

inner Join:

```py
pd.merge(sp500, euribor, left_index=True, right_index=True)
```

outer Join:

```py
pd.merge(sp500, euribor, left_index=True, right_index=True,
         how="outer")
```

## Joins

Join anhand bestimmter Spalten (nicht anhand des Index):

```py
sp500_no_index = pd.read_csv(
    "https://datahub.io/core/s-and-p-500/r/data.csv",
    parse_dates=["Date"],
)
euribor_no_index = pd.read_csv(
    "https://datahub.io/core/euribor/r/euribor-12m-monthly.csv",
    parse_dates=["date"],
    usecols=["date", "rate"]
)

pd.merge(sp500_no_index, euribor_no_index, left_on="Date",
         right_on="date")
```

## Joins

Beispiel: Musiker und Lieder

```py
artists = pd.DataFrame({
    "name": ["The Beatles", "Elvis Presley",
             "Michael Jackson", "Elton John"],
    "country": ["UK", "US", "US", "UK"]
})
```

```py
songs = pd.DataFrame({
    "title": ["White Christmas", "Candle in the Wind",
              "It's Now or Never"],
    "artist": ["Bing Crosby", "Elton John",
               "Elvis Presley"],
    "sales": [50, 33, 20]
})
```

## Joins

siehe auch: https://jakevdp.github.io/PythonDataScienceHandbook/03.07-merge-and-join.html
