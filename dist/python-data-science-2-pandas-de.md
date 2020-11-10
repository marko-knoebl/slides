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
- Passagierdaten der Titanic: <https://raw.githubusercontent.com/mwaskom/seaborn-data/master/titanic.csv>

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
    "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/titanic.csv"
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

## Daten importieren und exportieren

HDF5 (_pytables_ muss installiert sein):

```py
euribor.to_hdf("data.hdf5", "euribor")
euribor = read_hdf("data.hdf5", "euribor")
```

# Pandas: Daten auslesen

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

# Statistische Grundwerte

## Statistische Grundwerte

```py
df.describe()
```

## Statistische Grundwerte

```py
countries.area.describe()
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
countries.area.describe()
```

berechnet die folgenden Daten:

- `area.count()`
- `area.mean()`
- `area.std()`
- `area.quantile(0)` or `area.min()`
- `area.quantile(0.25)`
- `area.quantile(0.5)` or `area.median()`
- `area.quantile(0.75)`
- `area.quantile(1)` or `area.max()`

## Statistische Werte

- _std_: _Standardabweichung (Standard deviation)_
- _median_: Hälfte der Werte liegt darüber, Hälfte liegt darunter
- _min_: alle Werte sind größer als das Minimum
- _25%-Quantil_: 25% aller Werte sind kleiner

# Beispiel

## Wechselkurse

<https://datahub.io/core/exchange-rates/r/daily.csv>

Tägliche Wechselkurse zwischen USD und anderen Währungen

Wir lesen die Daten ein und wandeln sie so um, dass sie eine Zuordnung von Kalenderdaten zu täglichen EUR-USD Kursen darstellen

## Wechselkurse

Lösung:

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

# Pandas: Daten manipulieren

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

- Analysieren der monatlichen S&P 500 Daten und berechnen des monatlichen Gewinns / Verlusts für jedes Monat
- Was war der größte Gewinn / Verlust in einem Monat?

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

In den Wechselkursdaten fehlen manche Einträge:

- manche Tage sind nicht eingetragen (Wochenenden)
- zu manchen Tage sind Werte als `NaN`s eingetragen

## Fehlende Daten

Werte, die fehlende Daten symbolisieren (ab pandas 1.0):

- für floats: `NaN` (wie allgemein in Python üblich)
- für andere Datentypen: `NA` (aus dem Pandas-Paket)

## Fehlende Daten

Entfernen aller Zeilen mit fehlenden Daten:

```py
er = er.dropna()
```

Ersetzen aller fehlender Daten mit Nullen:

```py
er = er.fillna(0)
```

Ersetzen aller fehlernder Daten mit Werten der Reihe zuvor:

```py
er = er.fillna(method="backfill")
```

## Fehlende Daten

Daten interpolieren:

```py
er = er.intepolate()
er = er.interpolate(method="spline")
```

Beispiel:

```py
url = 'https://datahub.io/core/interest-rates-gb/r/data.csv'

ir_uk = pd.read_csv(url, index_col="date",
                    parse_dates=True)

ir_uk_weekly = ir_uk.resample('7d').interpolate()
```

## Übung

Nutze die Daten aus _sp500_ und _euribor_, um die Entwicklungen der europäischen und amerikanischen Zinssätze einander gegenüberzustellen.

# Grundlegende Plots in Pandas

## Grundlegende Plots in Pandas

allgemeines Plotten:

In Jupyter:

```py
data_frame.plot()
```

Im Terminal:

```py
import matplotlib.pyplot as plt

data_frame.plot()

# show all figures that were created since the last
# call of .show()
plt.show()
```

## Grundlegende Plots in Pandas

- Graph: `df.plot.line()` / `df.plot()`
- Säulendiagramm: `df.plot.bar()`
- Scatter Plot: `df.plot.scatter(x="name1", y="name2")`
- Histogramm: `df.plot.hist()`
- Box Plot: `df.plot.box()`
- Tortendiagramm: `df.pie()`

## Graph

Mittels `df.plot.line()` oder `df.plot()`

```py
euribor.plot.line()
```

```py
sp500["SP500"].plot.line(figsize=(9, 6))
```

## Säulendiagramm

```py
euribor.iloc[-36:].plot.bar()
```

Übung: Median der _sepal-width_ und _sepal-length_ für alle drei Arten von Blumen darstellen

## Scatter Plot

```py
iris.plot.scatter(x="sepal_length", y="sepal_width")
```

Aufgabe: Scatter Plot von _Iris-setosa_

## Histogramm

```py
iris.sepal_length.plot.hist()
```

```py
iris.sepal_length.plot.hist(bins=30)
```

## Histogramm

Übung:

Wir simulieren 10 Millionen Würfe mit je 10 Würfeln und stellen die Verteilung der Augensumme als Histogramm dar

## Box Plot

```py
iris.plot.box()
```

## Tortendiagramm

```py
df.pie()
```

## Scatter Matrix

Erstellt mehrere Scatter Plots - bei 4 Series-Einträgen enstehen 4x4 Plots (Scatter Plots und Histogramme)

```py
from pandas.plotting import scatter_matrix

scatter_matrix(iris)
```

# Grundlegende Plots in Pandas und Pyplot

## Graph

Pyplot:

```py
plt.plot(x, y)
plt.plot(y)
```

Pandas:

```py
df.plot.line()
df.plot()
```

## Säulendiagramm

Pyplot:

```py
plt.bar(x, y)
```

Pandas:

```py
df.plot.bar()
```

## Scatter Plot

Pyplot:

```py
plt.plot(x, y, ".")
plt.scatter(x, y, 2, "red")
```

Pandas:

```py
df.plot.scatter(x="name1", y="name2")
```

## Histogramm

Pyplot:

```py
plt.hist(x)
```

Pandas:

```py
df.plot.hist()
```

## Histogramm

Pyplot:

```py
plt.hist(
  iris[:, 2],
  bins=[1, 2, 4, 5, 6],
  density=True)
```

Pandas:

```py
iris.sepal_length.plot.hist(bins=5)
```

## Box Plot

Pyplot:

```py
plt.boxplot(data)
```

Pandas:

```py
df.plot.box()
```

## Tortendiagramm

Pyplot:

```py
plt.pie(x, labels=[...])
```

Pandas:

```py
df.plot.pie()
```

# Kontingenztabelle

## Kontingenztabelle

Eine _Kontingenztabelle_ oder _Kreuztabelle_ gibt Anzahlen über mehrere Merkmale hinweg an.

## Kontingenztabelle

Beispiel:

```py
pd.crosstab(titanic.pclass, titanic.survived)
```

Ausgabe:

```
survived  False  True 
pclass                
1            80    136
2            97     87
3           372    119
```

# Gruppierung

## Gruppierung

Einteilung der Daten in Gruppen / Kategorien und berechnen von Werten auf deren Basis

## Gruppierung

Beispiel: Durchschnittswerte der Iris-Daten basierend auf dem Namen der Art

```py
iris.groupby(iris.name).mean()
```

```
                 sepal_length  sepal_width  petal_length  petal_width
name
Iris-setosa             5.006        3.418         1.464        0.244
Iris-versicolor         5.936        2.770         4.260        1.326
Iris-virginica          6.588        2.974         5.552        2.026
```

## Gruppierung

Aufgabe: Durchschnittliche USD-Wechselkurse für jede Währung in den 90ern

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
