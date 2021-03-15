# Python und Data Science 3: Pandas

# Pandas

## Pandas

_Pandas_ ist eine Datenanalysebibliothek; sie beruht auf _NumPy_

```py
import pandas as pd
```

## Series und DataFrame

- **Series**: Sammlung von gleichartigen Einträgen zu bestimmten Schlüsseln (Tabellenspalte)
- **DataFrame**: Sammlung von zusammengehörenden _Series_-Objekten (ganze Tabelle)

Beispiel:

|    | Area | Population | Capital          |
| -- | ---: | ---------: | ---------------- |
| CN |  9.6 |       1386 | Beijing          |
| RU |   17 |        144 | Moscow           |
| US |  9.8 |        327 | Washington, D.C. |

## Series erstellen

```py
area = pd.Series({'CN': 9.6, 'RU': 17, 'US': 9.8})
population = pd.Series({'CN': 1386, 'RU': 144, 'US': 327})
```

```py
area = pd.Series([9.6, 17, 9.8], ["CN", "RU", "US"])
population = pd.Series([1386, 144, 327], ["CN", "RU", "US"])
```

## Werte auslesen

```py
area[0] # 9.6

area['CN'] # 9.6
```

## Datentypen

Jede series hat einen bestimmten Datentyp

```py
area.dtype # float64
```

manuelles Setzen des Datentyps:

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

# Daten importieren und exportieren

## Daten importieren und exportieren

Datenformate:

- CSV
- Excel
- JSON
- HDF5 (effizientes Binärformat)
- SQL tables (via _SQLAlchemy_)

## Daten importieren und exportieren

Die folgenden Funktionen können Daten importieren / exportieren. Beim Importieren können Daten auch aus dem Internet gelesen werden.

Import: `pd.read_csv`, `pd.read_excel`, ...

Export: `df.to_csv`, `df.to_excel`, ...

## CSV importieren

Beispiel: Euribor (Zinsen für europäische Anleihen)

```py
euribor = pd.read_csv(
    "https://datahub.io/core/euribor/r/euribor-12m-monthly.csv"
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
- ...

Siehe auch: <https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html>

## CSV importieren

Fortgeschrittenes Euribor-Beispiel:

- Parsen des Datums
- Datum als Index verwenden
- Nur die Spalten _date_ und _rate_ importieren

```py
euribor = pd.read_csv(
    "https://datahub.io/core/euribor/r/euribor-12m-monthly.csv",
    parse_dates=["date"],
    index_col="date",
    usecols=["date", "rate"]
)
```

## CSV importieren

Aufgabe: Importiere die folgenden Datenquellen und achte dabei auf passendes Format:

- Monatliche Preise des US-Aktienindex _S&P 500_: <https://datahub.io/core/s-and-p-500/r/data.csv>
- Wechselkurse: <https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv>
- Iris Dataset (Statistiken zu Blütengrößen von Iris-Blumen): <https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv>
- Passagierdaten der Titanic: <https://public.opendatasoft.com/explore/dataset/titanic-passengers/download>

## CSV importieren

mögliche Lösungen:

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

## Importieren und Exportieren von Excel-Dateien

lesen / schreiben eines einzelnen Excel-Sheets:

- `pd.read_excel`
- `pd.to_excel`

lesen / schreiben eines ganzen Dokuments (inklusive Formatierung):

- `pd.ExcelFile`
- `pd.ExcelWriter`

siehe: [Dataquest: Tutorial Using Excel with Python and Pandas](https://www.dataquest.io/blog/excel-and-pandas/)

## Importieren und Exportieren von HDF5-Daten

benötigt _PyTables_ (verfügbar in der Anaconda-Distribution)

```py
euribor.to_hdf("data.hdf5", "euribor")
sp500.to_hdf("data.hdf5", "sp500")

euribor = pd.read_hdf("data.hdf5", "euribor")
```

# Quellen für Beispieldaten

## Quellen für Beispieldaten

- <https://datahub.io>
- [seaborn data sets](https://github.com/mwaskom/seaborn-data) (klicke auf eine Datei und dann auf den _raw_ Button)
- [pandas-datareader](https://pydata.github.io/pandas-datareader)

# Statistische Grundwerte

## Statistische Grundwerte

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

(Siehe nächste Folie für Erklärungen)

## Statistik einer Series

```py
countries["area"].describe()
```

berechnet die folgenden Daten:

- `area.count()`
- `area.mean()`
- `area.std()`
- `area.quantile(0)` oder `area.min()`
- `area.quantile(0.25)`
- `area.quantile(0.5)` oder `area.median()`
- `area.quantile(0.75)`
- `area.quantile(1)` oder `area.max()`

## Statistische Werte

- _std_: _Standardabweichung (Standard deviation)_
- _median_: Hälfte der Werte liegt darüber, Hälfte liegt darunter
- _min_: alle Werte sind größer als das Minimum
- _25%-Quantil_: 25% aller Werte sind kleiner

# Daten auslesen

## Daten auslesen (nach Zeilen- und Spaltennummern)

- `df.iloc[5]`: Zeile 5 (gibt `Series`-Objekt zurück)
- `df.iloc[:5]`: erste 5 Zeilen (gibt `DataFrame`-Objekt zurück)
- `df.iloc[10:20]`: Zeilen 10-19
- `df.iloc[5, 1]`: Zeile 5, Spalte 1
- `df.iloc[5, [0, 2]]`: Zeile 5, Spalten 0 und 2

## Daten auslesen (nach Indexwerten und Spaltennamen)

- `df.index`: Indexwerte der Zeilen
- `df.columns`: Spaltennamen

<!-- list separator -->

- `df.loc["2009-01-02"]`: Zeile mit bestimmtem Indexwert
- `df.loc["2009-01-01" : "2009-01-31"]`: Zeilen in bestimmtem Bereich (beide Grenzen inklusive)
- `df.loc[:, "rate"]`: Spalte `"rate"`
- `df["rate"]`: Spalte `"rate"` (Kurzschreibweise)
- `df.rate`: Spalte `"rate"` (kürzere Version - klappt nicht mit Sonderzeichen)
- `df.loc[:, ["rate", "maturity_level"]]`: zwei Spalten
- `df.loc["2009-01-02", "rate"]`: Bestimmte Zeile und Spalte

## Zeilen sortieren

- `df.sort_values(by="rate")`
- `df.loc["2009-01-02" : "2009-12-31"].sort_values(by="rate")`
- `df.sort_index(ascending=False)`

## Zufällig Daten auswählen

- `df.sample()` - ein zufälliger Eintrag)
- `df.sample(5)` - fünf Einträge
- `df.sample(frac=0.1)` - 10% aller Einträge

## Einträge filtern

Alle Werte, die das Kriterium nicht erfüllen werden zu _NaN_ bzw _NA_.

```py
iris[iris > 0]
```

## Zeilen filtern

Zeilenweise filtern (ein zeilenweise gefilterter _DataFrame_ wird zurückgegeben):

- `df[df.rate < 0]`
- `df[df.length < 0] = np.nan`
- `df[df.name == "Iris-setosa"]`
- `df[df.name.isin(["Iris-setosa", "Iris-virginica"])])]`

## Zeilen suchen

SQL Vorlage:

```sql
SELECT * FROM df
WHERE a < b AND b < c
```

Pandas:

```py
df[(df.a < df.b) & (df.b < df.c)]
```

oder

```py
df.query("a < b < c")
```

## Aufgaben (Euribor)

- erster Eintrag
- letzter Eintrag
- letzte 10 Einträge
- Eintrag vom 2.1.2009
- Einträge aus dem Jahr 2009
- ...

## Lösungen (Euribor)

- erster Eintrag: `euribor.iloc[0]`
- letzter Eintrag: `euribor.iloc[-1]`
- letzte 10 Einträge: `euribor.iloc[-10:]`
- Eintrag vom 2.1.2009: `euribor.loc["2009-01-02"]`
- Einträge vom 1.1.2009 bis 31.12.2009: `euribor.loc["2009-01-01": "2009-12-31"]`

## Aufgaben (Iris)

- Maximale _petal length_ von _iris setosa_ (ohne `.max`)

## Aufgaben (Titanic)

- Prozentsatz an Überlebenden
- Prozentsatz an Überlebenden unter männlichen Passagieren
- Prozentsatz an Überlebenden unter Kindern

## Aufgaben (Wechselkurs)

- zeige _date_ und _exchange rate_ für den USD-EUR-Kurs an

## Lösungen (Wechselkurs)

```py
euro_exchange_rates = exchange_rates[
    exchange_rates.Country == "Euro"
]
euro_exchange_rates.loc[:, ["Date", "Exchange rate"]]
```

## Aufgaben (S&P 500)

- wann war der S&P 500 am höchsten Wert? (Bestimme das Maximum, dann suche die zugehörige Zeile im DataFrame)

## Lösung (S&P 500)

```py
sp500_max = sp500["SP500"].max()
# returns a DataFrame
sp500_max_row = sp500.loc[sp500["SP500"] == sp500_max]
```

kürzere Alternative: (via `.idxmax()`):

```py
# returns a Series
sp500_max_row = sp500.loc[sp500["SP500"].idxmax()]
```

# Daten manipulieren

## Spalten umbenennen

```py
df.columns = ["name1", "name2"]
```

## Daten entfernen

Zeilen entfernen:

```py
df2 = df1.drop(["CN", "US"])
```

Spalten entfernen:

```py
df2 = df1.drop(columns=["pop"])
```

## Konvertieren von Daten

Konvertieren von Typen:

```py
titanic["survived"] = titanic["survived"].astype("bool")
```

Ersetzen von Werten:

```py
titanic["alive"] = titanic["alive"].replace(
    {"yes": True, "no": False}
)
```

## Abgeleitete Werte berechnen

Hinzufügen einer neuen Spalte:

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

## Abgeleitete Werte berechnen mittels NumPy

Aufgabe:

- Analysiere die monatlichen S&P 500 Daten und berechne den monatlichen Gewinn / Verlust

## Abgeleitete Werte berechnen mittels NumPy

Umwandeln in ein NumPy-Array:

```py
values_np = sp500["SP500"].to_numpy()
```

Differenz aufeinanderfolgender Monate:

```py
diffs = values_np[1:] - values_np[:-1]
# add a single NaN to the front
diffs = np.concatenate([
    np.array([float('nan')]), diffs])
```

Hinzufügen zu Daten:

```py
sp500["Diff"] = diffs
sp500["Gain"] = sp500["Diff"] / sp500["SP500"]
```

## Abgeleitete Werte berechnen mittels eigenen Funktionen

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

## Einzelne Daten setzen

```py
iris.iloc[0, 0] = 6

iris.loc[:, "sepal_ratio"] = float('nan')
```

# Fehlende Daten

## Fehlende Daten

Werte, die fehlende Daten symbolisieren (ab pandas 1.0):

- für floats: `NaN` (wie allgemein in Python üblich)
- für andere Datentypen: `NA` (aus dem Pandas-Paket)

## Fehlende Daten

```py
titanic["age"].shape
# (891,)
```

```py
titanic["age"].count()
# 714
```

## Fehlende Daten

Anzeigen aller Zeilen mit fehlenden _age_-Einträgen:

```py
titanic.loc[titanic["age"].isna()]
```

## Fehlende Daten

Entfernen aller Zeilen mit fehlenden Daten:

```py
titanic = titanic.dropna()
```

Entfernen aller Zeilen mit fehlenden Daten in der Spalte _age_:

```py
titanic = titanic.dropna(subset=["age"])
```

## Ersetzen fehlender Daten

Ersetzen fehlender Daten durch Nullen:

```py
titanic["age"] = titanic["age"].fillna(0)
```

Ersetzen fehlender Daten durch den _letzten_ gültigen Wert:

```py
titanic["age"] = titanic["age"].fillna(method="ffill")
```

Ersetzen fehlender Daten durch den _nächsten_ gültigen Wert:

```py
titanic["age"] = titanic["age"].fillna(method="bfill")
```

## Interpolieren von Werten

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

## Interpolieren von Werten

Übung:

Verwende die Daten aus _sp500_ und _euribor_, um die Entwicklungen der europäischen und amerikanischen Zinssätze einander gegenüberzustellen.

Bemerkung:

_sp500_ hat Daten für den ersten **Tag** jedes Monats, _euribor_ hat daten für den ersten **Arbeitstag** jedes Monats

## Interpolieren von Werten

Lösung:

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

Wrapper für _pyplot_-Funktionen, die auf _Series_- und _DataFrame_-Objekten existieren:

- `data.plot()` oder `data.plot.line()`
- `data.plot.bar()`
- `data.plot.scatter()`
- `data.plot.hist()`
- `data.plot.box()`
- `data.plot.pie()`

## Plotting

Interface von Pandas Plotfunktionen:

ähnlich wie in _pyplot_ - nur müssen Daten nicht explizit übergeben werden:

```py
# pyplot
plt.plot(data, color="C0", marker="o", linestyle="--")
```

```py
# pandas
data.plot(color="C0", marker="o", linestyle="--")
```

## Plotting

Für ein _DataFrame_: übergeben einer Liste von Konfigurationen (klappt nur für manche der Optionen):

```py
df.plot(color=["C0", "C1"], style=["o--", "X--"])
```

## Plotting

Außerhalb eines Jupyter-Notebooks müssen wir nach wie vor aufrufen:

```py
import matplotlib.pyplot as plt

plt.show()
```

# Plotting: Beispiele und Übungen

## Grundlegendes Beispiel

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

Beispiele:

```py
euribor.plot.line()
sp500["SP500"].plot.line()
```

## Säulendiagramm

Beispiel:

```py
euribor.iloc[-36:].plot.bar()
```

Übung: Median der _sepal-width_ und _sepal-length_ für alle drei Arten von Blumen darstellen

## Scatter Plot

```py
iris.plot.scatter(
    x="sepal_length"
    y="sepal_width",
    s="petal_length",
    c="petal_width"
)
```

Übung: Scatter plot für _iris setosa_

## Histogramm

Übung: Histogramm der _sepal length_

## Box Plot

Übung: Box Plots aller Iris-Abmessungen

## Tortendiagramm

Beispiel:

```py
surface = pd.Series([0.29, 0.71], index=["land", "water"])

surface.plot.pie(ylabel="Surface of the earth")
```

# Plotting: Scatter Matrix

## Scatter Matrix

Zusätzliche Plot-Funktion in _pandas_: Scatter Matrix

Erstelle mehrere Scatter Plots in einem Raster

Bei 4 Datenserien werden 4x4=16 Plots erstellt (Scatter Plots und Histogramme)

```py
from pandas.plotting import scatter_matrix

scatter_matrix(iris)
```

# Zeitreihen

## Zeitreihen

erstellen von Datumsfolgen (als Index-Objekte):

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

## Zeitreihen

Überprüfen, ob der erste Tag jedes Monats in den S&P 500 Daten vorhanden ist:

```py
sp500.index.equals(
    pd.date_range(
        sp500.index[0], sp500.index[-1], freq="MS"
    )
)
# True
```

## Resampling

Resampling, um Werte für den Beginn jedes Jahres zu erhalten:

```py
sp500.resample("1ys").interpolate()
```

Resampling, um Werte für jeden Tag zu erhalten:

```py
sp500.resample("1d").interpolate()
```

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

Median der Alter pro Klasse:

```py
titanic["age"].groupby(titanic["pclass"]).median()

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
iris.groupby(iris["species"]).mean()
```

```py
er_90s = exchange_rates.loc[
    (exchange_rates["Date"] >= "1990-01-01") &
    (exchange_rates["Date"] <= "1999-12-31")
]

er_90s_means = er_90s.groupby("Country").mean()
```

# Multi-Index

## Multi-Index

Index-Spalte: Spalte, anhand deren Einträge die Zeilen eindeutig identifiziert werden können

Multi-Index: Kombination aus mehreren Spalten zur eindeutigen Identifikation

## Multi-Index

Beispiel: Exchange rates

| Date       | Country   | Exchange rate |
| ---------- | --------- | ------------- |
| 1971-01-01 | Australia | 0.894         |
| 1971-02-01 | Australia | 0.890         |
| 1971-03-01 | Australia | 0.890         |

Eine Zeile kann durch Kombination von _date_ und _country_ eindeutig identifiziert werden.

## Multi-Index

Importieren mit Multi-Index:

```py
exchange_rates = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    index_col=["Country", "Date"]
    parse_dates=["Date"])
```

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

Kurzform, wenn zugehörige Spalten gleiche Namen haben:

```py
pd.merge(sp500_no_index, euribor_no_index, on="date")
```

Resultat hat eine `date`-Spalte statt zwei

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

siehe auch: <https://jakevdp.github.io/PythonDataScienceHandbook/03.07-merge-and-join.html>
