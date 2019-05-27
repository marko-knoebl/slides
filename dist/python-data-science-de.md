# {{title}}

## Präsentation und Code

Präsentationen verfügbar unter: https://karuga.eu/courses-presentations

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

## Vorstellung der Teilnehmer

- Name
- Firma
- Aktuelle Projekte
- Grund der Schulung
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

# Conda

## Conda

Conda = Environment- und Paketmanager

Erlaubt das Installieren verschiedener Versionen von Python, von Python-Paketen und anderen Abhängigkeiten - insbesondere hilfreich für externe Libraries, die nicht in Python geschrieben sind und kompiliert werden müssen

## Anaconda & Miniconda

Anaconda und Miniconda sind Distributionen von Conda und vielen vorinstallierten Paketen.

Miniconda: ca 250 MB, beinhaltet Python und Conda

Anaconda: ca 3 GB, beinhaltet Python, Conda, viele vorinstallierte Pakete und Entwicklertools

## Anaconda prompt

Eintrag im Startmenü: Anaconda prompt - Zugriff auf _conda_, _ipython_, _jupyter_, ...

## Paketinstallation mit Conda

Via _Anaconda Prompt_:

```bash
conda install numpy
```

## Pakete

- _Jupyter_ & _IPython_: interaktive Python Umgebungen
- _NumPy_: Bibliothek zum effizienten Verarbeiten numerischer Daten
- _pandas_: Bibliothek zur Datenanalyse, basiert auf NumPy
- _matplotlib_: Bibliothek zur Datenvisualisierung

# Jupyter & IPython

## Jupyter & IPython

IPython = Fortgeschrittene interaktive Python Konsole, beinhaltet u.a. Autovervollständigung

Jupyter Notebook = Interaktive Python-Umgebung, beinhaltet IPython

# NumPy

## NumPy

Library zur effizienten Datenverarbeitung

Daten sind in mehrdimensionalen Arrays von Zahlen gespeichert, die resourcenschonend umgesetzt sind

Daten können z.B. Bilder, Tondateien, Messwerte und vieles anderes repräsentieren

## Importieren von NumPy

oft verkürzt als:

```python
import numpy as np
```

## NumPy

NumPy Arrays vs Python Listen:

Arrays sind im Hintergrund in C implementiert, die numerischen Einträge (z.B. Integer) sind keine Python-Objekte und damit resourcenschonender.

## NumPy

NumPy Arrays vs Python Listen:

```py
# Python - Listen (mit Verweisen auf andere Integer)
list_a = [1, 2]
list_b = [3, 4]

# NumPy - Array -
# Daten sind hierin enthalten, ohne auf Python-Integer
# zu verweisen
array_a = numpy.array(list_a)
array_b = numpy.array(list_b)

array_a + array_b # sehr schnell (da in C implementiert)
```

## Arrays

Jedes Array kann nur Daten eines Typs enthalten (z.B. nur 64-bit floats oder nur bytes)

## Arrays

Erstellen eines 2-dimensionalen Arrays:

```py
np.array([[1, 2, 3], [2, 4, 6], [3, 6, 9]])
```

Ausgabe:

```py
array([[1, 2, 3],
       [2, 4, 6],
       [3, 6, 9]])
```

## Arrays

Erstellen eines 3-dimensionalen Arrays:

```py
np.array([[[1, 2], [3, 4]], [[5, 6], [7,8]]])
```

Ausgabe:

```py
array([[[1, 2],
        [3, 4]],

       [[5, 6],
        [7, 8]]])
```

## Array Typen

Jedes Array hat einen vorgegebenen Datentyp für alle Einträge

```py
a = np.array([1])
a.dtype # int32
b = np.array([1.0])
b.dtype # float64
c = np.array(['abc'])
c.dtype # <U3
d = np.array([b'abc'])
d.dtype # |S3
```

## Array Typen

Typen können explizit angegeben werden:

```py
a = np.array([1], dtype='int64')
b = np.array([1], dtype='uint8')
```

Typen werden wenn möglich automatisch umgewandelt:

```py
c = a + b
c.dtype # int64
```

## Overflow

Achtung bei zu großen / zu kleinen Werten

Der Typ `int8` erlaubt nur Werte im Bereich `-128` bis `+127`

```py
np.array([127, 128, 129], dtype="int8")
```

Output:

```py
array([127, -128, -127])
```

## NumPy

Kapitel 30

- Rechnen mit Matrizen
- Darstellung von Daten (matplotlib): Graphen, Histogramme

Übungen:

- 10 mio mal Würfeln (mit 10 Würfeln)
- Gleichungslösung (Klassen, doctests, numpy)
- Lagerbestand von Produkten (2d-array) & preisliste (1d-array); gesucht: Warenwert pro Lager

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

|     | Area | Population | Capital          |
| --- | ---: | ---------: | ---------------- |
| CN  |  9.6 |       1386 | Beijing          |
| RU  |   17 |        144 | Moscow           |
| US  |  9.8 |        327 | Washington, D.C. |

## Series

```py
area = pd.Series({'CN': 9.6, 'RU': 17, 'US': 9.8})
population = pd.Series({'CN': 1386, 'RU': 144, 'US': 327})

area[0] # 9.6

area['CN'] # 9.6
```

## DataFrame

```py
countries = pd.DataFrame({
    'area': area,
    'population': population})
```

# CSV lesen

## CSV lesen

Beispiel: Euribor (Zinsen europäischer Staatsanleihen)

```py
euribor = pd.read_csv(
    "https://datahub.io/core/euribor/r/euribor-12m-monthly.csv",
    index_col="date")
```

Beispiel: Iris Dataset

```py
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data",
    header=None,
    names=["sepal_length", "sepal_width", "petal_length",
           "petal_width", "name"],
)
```

## CSV lesen

Beispiel: Wechselkurse (Multiindex)

```py
exchange_rates = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    index_col=("Date", "Country"))
```

# Pandas: Daten auslesen

## Daten auslesen (nach Zeilen- und Spaltennummern)

- `df.iloc[5]`: Zeile 5 (gibt `Series`-Objekt zurück)
- `df.iloc[:5]`: erste 5 Zeilen (gibt `DataFrame`-Objekt zurück)
- `df.iloc[10:20]`: Zeilen 10-19
- `df.iloc[5, 1]`: Zeile 5, Spalte 1
- `df.iloc[5, [0, 2]]`: Zeile 5, Spalten 0 und 2

## Daten auslesen (nach Zeilen- und Spaltennamen)

- `df.index`: Zeilennamen
- `df.columns`: Spaltennamen

<!-- -->

- `df.loc["2009-01-02"]`: Zeile mit bestimmtem Indexwert
- `df.loc["2009-01-01" : "2009-01-31"]`: Zeile in bestimmtem Bereich (beide Grenzen inklusive)
- `df.loc[:, "rate"]`: Spalte `"rate"`
- `df["rate"]`: Spalte `"rate"` (Kurzschreibweise)
- `df["rate"]`: Spalte `"rate"` (kürzere Version - klappt nicht mit Sonderzeichen)
- `df.loc[:, ["rate", "maturity_level"]]`: zwei Spalten
- `df.loc["2009-01-02", "rate"]`: Bestimmte Zeile und Spalte

## Zeilen suchen

- `df.loc[df.rate < 0]`
- `df.loc[df.name == "Iris-setosa"]`
- `df.loc[df.name.isin(["Iris-setosa", "Iris-virginica"])])]`

## Zeilen sortieren

- `df.sort_index(ascending=False)`
- `df.sort_values(by="rate")`
- `df.loc["2009-01-02" : "2009-12-31"].sort_values(by="rate")`

## Aufgaben (Euribor)

- erster Eintrag
- letzter Eintrag
- letzte 10 Einträge
- Eintrag vom 2.1.2009
- Einträge vom 1.1.2009 bis 31.12.2009
- ...

## Lösungen (Euribor)

- erster Eintrag: `euribor.iloc[0]`
- letzter Eintrag: `euribor.iloc[-1]`
- letzte 10 Einträge: `euribor.iloc[-10:]`
- Eintrag vom 2.1.2009: `euribor.loc["2009-01-02"]`
- Einträge vom 1.1.2009 bis 31.12.2009: `euribor.loc["2009-01-01": "2009-12-31"]`

## Aufgaben (Iris)

- Maximale _petal length_ von _iris setosa_ (ohne `.max`)

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
- `area.quantile(0)` / `area.min()`
- `area.quantile(0.25)`
- `area.quantile(0.5)` / `area.median()`
- `area.quantile(0.75)`
- `area.quantile(1)` / `ara.max()`

## Statistische Werte

- _std_: _Standardabweichung (Standard deviation)_
- _median_: Hälfte der Werte liegt darüber, Hälfte liegt darunter
- _min_: alle Werte sind größer als das Minimum
- _25%-Quantil_: 25% aller Werte sind kleiner

# Beispiel

## Wechselkurse

https://datahub.io/core/exchange-rates/r/daily.csv

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

# Pandas: Daten setzen

## Abgeleitete Werte berechnen

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

## Daten setzen

```py
iris.iloc[0, 0] = 6

iris.loc[:, "sepal_ratio"] = float('nan')
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

Import: `pd.read_csv`, `pd.read_excel`, ...

Export: `df.to_csv`, `df.to_excel`, ...

## Daten importieren und exportieren

```py
df.to_excel('iris.xlsx')
```

```py
data = pd.read_excel('iris.xlsx', index_col=0)
```

## Daten importieren und exportieren

HDF5:

- via _pytables_ (muss installiert sein)

```py
df.to_hdf('data.hdf5', 'iris')
```

```py
pd.read_hdf('data.hdf5', 'iris')
```

# Fehlende Daten

## Fehlende Daten

In den Wechselkursdaten fehlen manche Einträge:

- manche Tage sind nicht eingetragen (Wochenenden)
- manche Tage sind asl `NaN`s eingetragen

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

# Resources

https://jakevdp.github.io/PythonDataScienceHandbook/

<!-- https://github.com/devakar/deep-learning-books -->

