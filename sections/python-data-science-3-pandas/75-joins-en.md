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

Exercise: country comparisons (scatter plots):

- GDP per capita from 2018
- COVID-19 vaccination rates from 2021-08

data sources:

- <https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv>
- <https://raw.githubusercontent.com/owid/owid-datasets/master/datasets/Maddison%20Project%20Database%202020%20(Bolt%20and%20van%20Zanden%20(2020))/Maddison%20Project%20Database%202020%20(Bolt%20and%20van%20Zanden%20(2020)).csv>

## Exercise

solution:

```py
gdp = pd.read_csv(
    "https://raw.githubusercontent.com/owid/owid-datasets/master/datasets/Maddison%20Project%20Database%202020%20(Bolt%20and%20van%20Zanden%20(2020))/Maddison%20Project%20Database%202020%20(Bolt%20and%20van%20Zanden%20(2020)).csv",
    index_col=["Entity", "Year"]
)
gdp_series = gdp["GDP per capita"]
gdp_2018 = gdp_series[:, 2018]

vac = pd.read_csv(
    "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv",
    index_col=["location", "date"]
)
vac_series = vac["total_vaccinations_per_hundred"]
vac_2021_08 = vac_series[:, "2021-08-01"]

data = pd.DataFrame({"gdp": gdp_2018, "vaccinations": vac_2021_08}).dropna()
data.plot.scatter(x="gdp", y="vaccinations")
```

## Joins

see also: https://jakevdp.github.io/PythonDataScienceHandbook/03.07-merge-and-join.html
