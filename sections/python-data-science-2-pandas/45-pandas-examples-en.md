# Example: exchange rates

## Exchange rates

https://datahub.io/core/exchange-rates/r/daily.csv

Daily Exchange rates between USD and other countries

We will read exchange rate data, transform it so it only contains data for EUR-USD exchange rates and use the dates as the index

## Exchange rates

Solution:

```py
er = pd.read_csv(
    "https://datahub.io/core/exchange-rates/r/daily.csv",
    parse_dates=[1])

# only select euro
er_eur_full = er.loc[er.Country=="Euro"]

# now we can set the date as the index
er_eur_dateindex = er_eur_full.set_index('Date')

# we can drop the country information
er_eur = er_eur_dateindex.loc[:, 'Value']
```
