# Python and Data Science 3: Pandas

# Pandas

## Pandas

_Pandas_ is a data analysis library; it is based on _NumPy_

```py
import pandas as pd
```

## Series and DataFrame

- **Series**: Collection of values for some keys (table column)
- **DataFrame**: Collection of associated series (table)

Example:

|    | Area | Population | Capital          |
| -- | ---: | ---------: | ---------------- |
| CN |  9.6 |       1386 | Beijing          |
| RU |   17 |        144 | Moscow           |
| US |  9.8 |        327 | Washington, D.C. |

## Creating a Series

```py
area = pd.Series({'CN': 9.6, 'RU': 17, 'US': 9.8})
population = pd.Series({'CN': 1386, 'RU': 144, 'US': 327})
```

```py
area = pd.Series([9.6, 17, 9.8], ["CN", "RU", "US"])
population = pd.Series([1386, 144, 327], ["CN", "RU", "US"])
```

## Reading values

```py
area[0] # 9.6

area['CN'] # 9.6
```

## Series

Each series has a specific data type

```py
area.dtype # float64
```

Manually setting the data type:

```py
area = pd.Series(
    {"CN": 9.6, "RU": 17, "US": 9.8}, dtype="float32"
)
```

## DataFrame

```py
countries = pd.DataFrame(
    {"area": area, "population": population}
)
```

# Importing and exporting data

## Importing and exporting data

data formats:

- CSV
- Excel
- JSON
- HDF5 (efficient binary format)
- SQL tables (via _SQLAlchemy_)

## Importing and exporting data

The following functions can import / export data from files. Imports may read files from online sources.

import: `pd.read_csv`, `pd.read_excel`, ...

export: `df.to_csv`, `df.to_excel`, ...

## Importing CSV

Example: Euribor (interest rates of European bonds)

```py
euribor = pd.read_csv(
    "https://datahub.io/core/euribor/r/euribor-12m-monthly.csv"
)
```

## Importing CSV

Possible keyword arguments for `read_csv`:

- `index_col`: identifies a column to be used as an index instead of a numerical index
- `header`: passing a value of `None` signifies that there is no header row
- `names`: column names to be used in the resulting `DataFrame`
- `sep`: for specifying other separators than a comma
- `usecols`: for importing only specific columns
- `parse_dates`: expects a list of column names
- ...

See also: <https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html>

## Importing CSV

Advanced Euribor example:

- parse the date
- use the date as the index
- only import the columns _date_ and _rate_

```py
euribor = pd.read_csv(
    "https://datahub.io/core/euribor/r/euribor-12m-monthly.csv",
    parse_dates=["date"],
    index_col="date",
    usecols=["date", "rate"]
)
```

## Importing CSV

Task: Import the following data sources, ensuring the data is formatted nicely:

- S&P 500 monthly prices (US stock index): <https://datahub.io/core/s-and-p-500/r/data.csv>
- Exchange rates: <https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv>
- Iris dataset (statistics of leaf sizes for iris flowers): <https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv>
- Titanic passenger data: <https://public.opendatasoft.com/explore/dataset/titanic-passengers/download>

## Importing CSV

possible solutions:

```py
sp500 = pd.read_csv(
    "https://datahub.io/core/s-and-p-500/r/data.csv",
    index_col="Date",
    parse_dates=["Date"],
)
exchange_rates = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    parse_dates=["Date"],
)
iris = pd.read_csv(
    "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
)
titanic = pd.read_csv(
    "https://public.opendatasoft.com/explore/dataset/titanic-passengers/download",
    sep=";",
)
```

## Importing and exporting Excel data

reading / writing a single Excel sheet:

- `pd.read_excel`
- `pd.to_excel`

reading / writing a complete documents (including formatting):

- `pd.ExcelFile`
- `pd.ExcelWriter`

see: [Dataquest: Tutorial Using Excel with Python and Pandas](https://www.dataquest.io/blog/excel-and-pandas/)

## Importing and exporting HDF5 data

requires _PyTables_ (available in the Anaconda distribution)

```py
euribor.to_hdf("data.hdf5", "euribor")
sp500.to_hdf("data.hdf5", "sp500")

euribor = pd.read_hdf("data.hdf5", "euribor")
```

# Example data sources

## Example data sources

- <https://datahub.io>
- [seaborn data sets](https://github.com/mwaskom/seaborn-data) (click on a file and then on the _raw_ button)
- [pandas-datareader](https://pydata.github.io/pandas-datareader)

# Data statistics

## Statistics on series

```py
countries["area"].describe()
```

```txt
count     3.000000
mean     12.133333
std       4.215843
min       9.600000
25%       9.700000
50%       9.800000
75%      13.400000
max      17.000000
dtype: float64
```

(see next slide for explanations)

## Statistics on series

```py
countries["area"].describe()
```

The above computes the following data:

- `area.count()`
- `area.mean()`
- `area.std()`
- `area.quantile(0)` or `area.min()`
- `area.quantile(0.25)`
- `area.quantile(0.5)` or `area.median()`
- `area.quantile(0.75)`
- `area.quantile(1)` or `area.max()`

## Statistical quantities

- _std_: _Standard deviation_
- _median_: half of the values are less and half are greater than the median
- _min_: all values are greater than the minimum
- _25%-quantile_: 25% of all values are less

# Querying data

## Querying data (by row numbers / column numbers)

- `df.iloc[5]`: row 5 (returns a `Series` object)
- `df.iloc[:5]`: first 5 rows (returns a `DataFrame` object)
- `df.iloc[10:20]`: rows 10-19
- `df.iloc[5, 1]`: row 5, column 1
- `df.iloc[5, [0, 2]]`: row 5, columns 0 and 2

## Querying data (by index values / column names)

- `df.index`: row index values
- `df.columns`: column names

<!-- list separator -->

- `df.loc["2009-01-02"]`: Row by index value
- `df.loc["2009-01-01":"2009-01-31"]`: Rows in a specified range (both values included)
- `df.loc[:, "rate"]`: column `"rate"`
- `df["rate"]`: column `"rate"` (short version)
- `df.rate`: column `"rate"` (extra short version - only works with no special characters)
- `df.loc[:, ["rate", "maturity_level"]]`: two columns
- `df.loc["2009-01-02", "rate"]`: specific row and column

## Sorting rows

- `df.sort_values(by="rate")`
- `df.loc["2009-01-02" : "2009-12-31"].sort_values(by="rate")`
- `df.sort_index(ascending=False)`

## Sampling data

- `df.sample()` - random entry
- `df.sample(5)` - five entries
- `df.sample(frac=0.1)` - 10% of all entries

## Filtering entries

All values that don't fulfill the criterion are set to _NaN_ or _NA_.

```py
iris[iris > 0]
```

## Filtering rows

via _boolean indexing_ - which is applied by rows:

- `df[df.rate < 0]`
- `df[df.length < 0] = np.nan`
- `df[df.name == "Iris-setosa"]`
- `df[df.name.isin(["Iris-setosa", "Iris-virginica"])])]`

## Filtering rows

SQL template:

```sql
SELECT * FROM df
WHERE a < b AND b < c
```

Pandas:

```py
df[(df.a < df.b) & (df.b < df.c)]
```

or

```py
df.query("a < b < c")
```

## Exercises (Euribor)

- first entry
- last entry
- last 10 entries
- entry from 2009-01-02
- entries from the year 2009
- ...

## Solutions (Euribor)

- first entry: `euribor.iloc[0]`
- last entry: `euribor.iloc[-1]`
- last 10 entries: `euribor.iloc[-10:]`
- entry from 2009-01-02: `euribor.loc["2009-01-02"]`
- entries from the year 2009: `euribor.loc["2009-01-01": "2009-12-31"]`

## Exercises (Iris)

- maximum _petal length_ of _iris setosa_ (without using `.max`)

## Exercises (Titanic)

- percentage of survivors
- percentage of survivors amongst males
- percentage of survivors amongst children

## Exercises (Exchange rates)

- display _date_ and _exchange rate_ for USD-EUR

## Solutions (Exchange rates)

```py
euro_exchange_rates = exchange_rates[
    exchange_rates.Country == "Euro"
]
euro_exchange_rates.loc[:, ["Date", "Exchange rate"]]
```

## Exercises (S&P 500)

- when was the S&P 500 at its highest value? (compute the maximum, then get the corresponding row in the DataFrame)

## Solution (S&P 500)

```py
sp500_max = sp500["SP500"].max()
# returns a DataFrame
sp500_max_row = sp500.loc[sp500["SP500"] == sp500_max]
```

shorter alternative (using `.idxmax()`):

```py
# returns a Series
sp500_max_row = sp500.loc[sp500["SP500"].idxmax()]
```

# Changing data

## Renaming columns

```py
df.columns = ["name1", "name2"]
```

## Dropping data

dropping rows:

```py
df2 = df1.drop(["CN", "US"])
```

dropping columns:

```py
df2 = df1.drop(columns=["pop"])
```

## Converting data

converting types:

```py
titanic["survived"] = titanic["survived"].astype("bool")
```

replacing values:

```py
titanic["alive"] = titanic["alive"].replace(
    {"yes": True, "no": False}
)
```

## Computing derived data

Adding a new column:

```py
iris["sepal_ratio"] = iris["sepal_length"] / iris["sepal_width"]

iris["sepal_ratio"].mean()
iris["sepal_ratio"].std()

iris_setosa = iris.loc[
    iris["name"] == "Iris-setosa"
]

iris_setosa["sepal_ratio"].mean()
iris_setosa["sepal_ratio"].std()
```

## Computing derived data via NumPy

Task:

- Analyze the S&P 500 monthly data and determine the monthly gain / loss in percent for each month

## Computing derived data via NumPy

converting to NumPy array:

```py
values_np = sp500["SP500"].to_numpy()
```

differences of sequential months:

```py
diffs = values_np[1:] - values_np[:-1]
# add a single NaN to the front
diffs = np.concatenate([
    np.array([float('nan')]), diffs])
```

adding to pandas data:

```py
sp500["Diff"] = diffs
sp500["Gain"] = sp500["Diff"] / sp500["SP500"]
```

## Computing derived data via custom functions

```py
def classifier(value):
    if value < 2:
        return 0
    elif value < 10:
        return 1
    else:
        return 2

df["class"] = df["value"].apply(classifier)
```

## Setting data

```py
iris.iloc[0, 0] = 6

iris.loc[:, "sepal_ratio"] = float('nan')
```

# Missing data

## Missing data

Values that represent missing data (since pandas 1.0):

- for floats: `NaN` (as usual in Python)
- for other data types: `NA` (from the pandas package)

## Missing data

```py
titanic["age"].shape
# (891,)
```

```py
titanic["age"].count()
# 714
```

## Missing data

show all rows with missing _age_ entries:

```py
titanic.loc[titanic["age"].isna()]
```

## Removing rows

removing any rows with missing data in any location:

```py
titanic = titanic.dropna()
```

removing any rows with missing data in the age column:

```py
titanic = titanic.dropna(subset=["age"])
```

## Filling values

Filling missing data with zeros:

```py
titanic["age"] = titanic["age"].fillna(0)
```

Filling missing data by using the _last_ valid datapoint:

```py
titanic["age"] = titanic["age"].fillna(method="ffill")
```

Filling missing data by using the _next_ valid datapoint:

```py
titanic["age"] = titanic["age"].fillna(method="bfill")
```

## Interpolating values

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

## Interpolating values

Exercise:

Use the data from _sp500_ and _euribor_ to compare the development of American and European interest rates

Note:

The _sp500_ has data for the first **day** of each month, the _euribor_ has data for the first **workday** of each month

## Interpolating values

solution:

```py
interest = pd.DataFrame({
    "us": sp500["Long Interest Rate"],
    "eu": euribor["rate"]
})

interest = interest.interpolate("slinear")
interest = interest.dropna()
```

# Plotting

## Plotting

wrappers for _pyplot_ functions that exist on _Series_ and _DataFrame_ objects:

- `data.plot()` or `data.plot.line()`
- `data.plot.bar()`
- `data.plot.scatter()`
- `data.plot.hist()`
- `data.plot.box()`
- `data.plot.pie()`

## Plotting

interface of the pandas plot functions:

similar to _pyplot_ - except data doesn't have to be passed explicitly:

```py
# pyplot
plt.plot(data, color="C0", marker="o", linestyle="--")
```

```py
# pandas
data.plot(color="C0", marker="o", linestyle="--")
```

## Plotting

For a DataFrame, we can pass lists of configurations for individual graphs (only works for some of the options):

```py
df.plot(color=["C0", "C1"], style=["o--", "X--"])
```

## Plotting

If we are not in a Jupyter notebook we still have to call:

```py
import matplotlib.pyplot as plt

plt.show()
```

# Plotting: examples and exercises

## Basic example

```py
import numpy as np
import pandas as pd

x = np.array([0, 1, 2, 3])

data = pd.DataFrame({
    "y1": x*2,
    "y2": x**2
})

data.plot()
```

## Graph

examples:

```py
euribor.plot.line()
sp500["SP500"].plot.line()
```

## Bar chart

example:

```py
euribor.iloc[-36:].plot.bar()
```

Exercise: Visualize the median of _sepal-width_ and _sepal-length_ for all three types of flowers

## Scatter plot

```py
iris.plot.scatter(
    x="sepal_length"
    y="sepal_width",
    s="petal_length",
    c="petal_width"
)
```

Exercise: scatter plot for _iris setosa_

## Histogram

Exercise: histogram of the _sepal length_

## Box plot

Exercise: box plots of all iris measurements

## Pie chart

Example:

```py
surface = pd.Series({"land": 0.29, "water": 0.71})

surface.plot.pie(ylabel="Surface of the earth")
```

# Plotting: scatter matrix

## Scatter matrix

Extra function in _pandas_: scatter matrix

creates several scatter plots in a grid

if there are 4 data series it will create 4x4=16 plots (scatter plots and histograms)

```py
from pandas.plotting import scatter_matrix

scatter_matrix(iris)
```

# Time series

## Time series

creating date ranges (as index objects):

```py
every_day = pd.date_range("2000-01-01", "2000-12-31")
last_of_each_month = pd.date_range(
    "2000-01-01", "2000-12-31", freq="M"
)
first_of_each_month = pd.date_range(
    "2000-01-01", "2000-12-31", freq="MS"
)
every_10_days = pd.date_range(
    "2000-01-01", "2000-12-31", freq="10d"
)
```

## Time series

Checking if the first day of each month is present in the S&P 500 data:

```py
sp500.index.equals(
    pd.date_range(
        sp500.index[0], sp500.index[-1], freq="MS"
    )
)
# True
```

## Resampling

resampling to get values for the start of each year:

```py
sp500.resample("1ys").interpolate()
```

resampling to get values for each day:

```py
sp500.resample("1d").interpolate()
```

# Grouping and aggregation

## Grouping and aggregation

examples related to Titanic passenger data:

- number of passengers by class
- average age of passengers by class
- number of passengers by class _and_ sex
- average age of passengers by class _and_ sex

## Grouping and aggregation

_Aggregation_: Computing a derived value based on multiple data entries in a series / data frame (e.g. number of entries, average, median)

## Grouping and aggregation

functions and methods:

- `series.value_counts()`
- `series.groupby()` / `df.groupby()`
- `pd.crosstab()`
- `pd.pivot_table()`

## Grouping and aggregation

number of passengers in each class:

```py
titanic["pclass"].value_counts()

# 3    491
# 1    216
# 2    184
```

## Grouping and aggregation

median numeric values of passengers in each class:

```py
titanic.groupby("pclass").median()
```

median age of passengers in each class:

```py
titanic.groupby("pclass")["age"].median()

# 1    37.0
# 2    29.0
# 3    24.0
```

## Grouping and aggregation

number of passengers by class and sex (_frequency table_):

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

## Grouping and aggregation

average age by class and sex:

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

## Exercises

- mean values for each of the four iris measurements within each type of flower
- mean USD exchange rates for each currency in the 90s

## Exercises - Solutions

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

# Multi index

## Multi index

**index column**: column that uniquely identifies a row in a DataFrame

**multi index**: combination of multiple columns for unique identification

## Multi index

example: exchange rates

| Date       | Country   | Exchange rate |
| ---------- | --------- | ------------- |
| 1971-01-01 | Australia | 0.894         |
| 1971-02-01 | Australia | 0.890         |
| 1971-03-01 | Australia | 0.890         |

A row can be uniquely identified by a combination of _date_ and _country_

## Multi index

Importing with a multi-index:

```py
exchange_rates = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    index_col=["Country", "Date"]
    parse_dates=["Date"])
```

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

see also: <https://jakevdp.github.io/PythonDataScienceHandbook/03.07-merge-and-join.html>
