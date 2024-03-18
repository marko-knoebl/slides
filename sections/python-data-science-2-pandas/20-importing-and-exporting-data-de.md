# Daten importieren und exportieren

## Daten importieren und exportieren

Datenformate:

- CSV
- Excel
- JSON
- HDF5 (effizientes Binärformat)
- Parquet (aus _Apache Hadoop_)
- SQL tables (via _SQLAlchemy_)

## Daten importieren und exportieren

Die folgenden Funktionen können Daten importieren / exportieren. Beim Importieren können Daten auch aus dem Internet gelesen werden.

Import: `pd.read_csv`, `pd.read_excel`, ...

Export: `df.to_csv`, `df.to_excel`, ...

## CSV importieren

Beispiel: Euribor (Zinsen für europäische Anleihen)

```py
euribor = pd.read_csv(
    "https://raw.githubusercontent.com/datasets/euribor/master/data/euribor-12m-monthly.csv"
)
```

## CSV importieren

Mögliche Schlüsselwortargumente für `read_csv`:

- `index_col`: identifiziert eine Spalte, die als Index verwendet werden soll
- `header`: übergeben des Werts `None` zeigt an, dass es keine Header-Zeile gibt
- `names`: Spaltennamen zur Verwendung im neuen `DataFrame`
- `sep`: Angeben anderer Trennzeichen als ein Komma
- `usecols`: um nur bestimmte Spalten zu importieren
- `parse_dates`: erwartet eine Liste von Spaltennamen
- `dtype`: kann ein Dictionary sein, das Datentypen für bestimmte Spalten spezifiziert
- ...

Siehe auch: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html

## CSV importieren

Fortgeschrittenes Euribor-Beispiel:

- Parsen des Datums
- Datum als Index verwenden
- Nur die Spalten _date_ und _rate_ importieren

```py
euribor = pd.read_csv(
    "https://raw.githubusercontent.com/datasets/euribor/master/data/euribor-12m-monthly.csv",
    parse_dates=["date"],
    index_col="date",
    usecols=["date", "rate"]
)
```

## CSV importieren

Aufgabe: Importiere die folgenden Datenquellen und achte dabei auf passendes Format:

- Monatliche Preise des US-Aktienindex _S&P 500_: https://raw.githubusercontent.com/datasets/s-and-p-500/main/data/data.csv
- Wechselkurse: https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv
- Iris Dataset (Statistiken zu Blütengrößen von Iris-Blumen): http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data
- Passagierdaten der Titanic: https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv

## CSV importieren

mögliche Lösungen:

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

## Importieren und Exportieren von Excel-Dateien

benötigt das Paket _openpyxl_

lesen / schreiben eines einzelnen Excel-Sheets:

- `pd.read_excel`
- `df.to_excel`

lesen / schreiben eines ganzen Dokuments (inklusive Formatierung):

- `pd.ExcelFile`
- `pd.ExcelWriter`

siehe: [Dataquest: Tutorial Using Excel with Python and Pandas](https://www.dataquest.io/blog/excel-and-pandas/)

## Importieren und Exportieren von HDF5-Daten

benötigt _PyTables_ (Name des Pakets: _tables_)

```py
euribor.to_hdf("data.hdf5", "euribor")
sp500.to_hdf("data.hdf5", "sp500")

euribor = pd.read_hdf("data.hdf5", "euribor")
```
