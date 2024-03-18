# Importing and exporting data

## Importing and exporting data

data formats:

- CSV
- Excel
- JSON
- HDF5 (efficient binary format)
- Parquet (from _Apache Hadoop_)
- SQL tables (via _SQLAlchemy_)

## Importing and exporting data

The following functions can import / export data from files. Imports may read files from online sources.

import: `pd.read_csv`, `pd.read_excel`, ...

export: `df.to_csv`, `df.to_excel`, ...

## Importing CSV

Example: Euribor (interest rates of European bonds)

```py
euribor = pd.read_csv(
    "https://raw.githubusercontent.com/datasets/euribor/master/data/euribor-12m-monthly.csv"
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
- `dtype`: may be a dictionary that specifies data types for certain columns
- ...

See also: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html

## Importing CSV

Advanced Euribor example:

- parse the date
- use the date as the index
- only import the columns _date_ and _rate_

```py
euribor = pd.read_csv(
    "https://raw.githubusercontent.com/datasets/euribor/master/data/euribor-12m-monthly.csv",
    parse_dates=["date"],
    index_col="date",
    usecols=["date", "rate"]
)
```

## Importing CSV

Task: Import the following data sources, ensuring the data is formatted nicely:

- S&P 500 monthly prices (US stock index): https://raw.githubusercontent.com/datasets/s-and-p-500/main/data/data.csv
- Iris dataset (statistics of leaf sizes for iris flowers): http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data
- Titanic passenger data: https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv

## Importing CSV

possible solutions:

```py
sp500 = pd.read_csv(
    "https://raw.githubusercontent.com/datasets/s-and-p-500/main/data/data.csv",
    index_col="Date",
    parse_dates=["Date"],
)
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data",
    header=None,
    names=["sepal_length", "sepal_width", "petal_length",
           "petal_width", "species"],
)
titanic = pd.read_csv(
    "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv",
    index_col="PassengerId",
)
```

## Importing and exporting Excel data

requires package _openpyxl_

reading / writing a single Excel sheet:

- `pd.read_excel`
- `df.to_excel`

reading / writing a complete documents (including formatting):

- `pd.ExcelFile`
- `pd.ExcelWriter`

see: [Dataquest: Tutorial Using Excel with Python and Pandas](https://www.dataquest.io/blog/excel-and-pandas/)

## Importing and exporting HDF5 data

requires _PyTables_ (package name: _tables_)

```py
euribor.to_hdf("data.hdf5", "euribor")
sp500.to_hdf("data.hdf5", "sp500")

euribor = pd.read_hdf("data.hdf5", "euribor")
```
