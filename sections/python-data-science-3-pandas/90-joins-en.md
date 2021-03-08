# Joins

## Joins

**Join**: Combining multiple `DataFrame`s or `Series` into a single `DataFrame`

## Joins

types:

- inner join
- outer join
- left join
- right join

## Joins

Joining `Series` objects by their indices:

outer join:

```py
interest_rates = pd.DataFrame({
    "usd": sp500["Long Interest Rate"],
    "eur": euribor["rate"]
})
```

inner join:

```py
interest_rates = pd.DataFrame({
    "usd": sp500["Long Interest Rate"],
    "eur": euribor["rate"]
}).dropna()
```

## Joins

joining `DataFrame` objects by their indices:

inner join:

```py
pd.merge(sp500, euribor, left_index=True, right_index=True)
```

outer join:

```py
pd.merge(sp500, euribor, left_index=True, right_index=True,
         how="outer")
```

## Joins

joining on specific columns (not on the index):

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

short form if the corresponding columns have the same name:

```py
pd.merge(sp500_no_index, euribor_no_index, on="date")
```

will result in one `date` column instead of two

## Exercise

Exercise: try some join operations on the following data:

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
    "sales_millions": [50, 33, 20]
})
```

## Joins

see also: https://jakevdp.github.io/PythonDataScienceHandbook/03.07-merge-and-join.html
