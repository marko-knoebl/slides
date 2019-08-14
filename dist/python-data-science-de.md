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

# Pakete

## Python Pakete für Data Science

- _Jupyter_ & _IPython_: interaktive Python Umgebungen
- _NumPy_: Bibliothek zum effizienten Verarbeiten numerischer Daten
- _Pandas_: Bibliothek zur Datenanalyse, basiert auf NumPy
- _Matplotlib_: Bibliothek zur Datenvisualisierung
- _Scikit-Learn_: Bibliothek für Machine Learning, basiert auf NumPy

## Anaconda

_Anaconda_ = Python Distribution, die viele vorinstallierte Pakete und Entwicklerwerkzeuge enthält

Benötigt ~3GB Platz auf der Festplatte

## Installation von Anaconda

Download von https://www.anaconda.com/distribution/

(Achte auf die Wahl des richtigen Betriebssystems)

Unter Windows sollte der Installationspfad keine Leerzeichen enthalten (Empfehlung: `C:/anaconda`) - siehe https://docs.anaconda.com/anaconda/user-guide/faq/#distribution-faq-windows-folder

## Conda

_Conda_ = Environment- und Paketmanager

Erlaubt das Installieren verschiedener Versionen von Python, von Python-Paketen und anderen Abhängigkeiten - insbesondere hilfreich für externe Libraries, die nicht in Python geschrieben sind und kompiliert werden müssen

## Pyodide

_Pyodide_ = Python Distribution, die direkt im Browser ausgeführt wird (via _WebAssembly_)

# Jupyter & IPython

## IPython

IPython = Fortgeschrittene interaktive Python Konsole, beinhaltet u.a. Autovervollständigung

## Jupyter Notebooks

Jupyter Notebook = Interaktive Python-Umgebung, beinhaltet IPython

Jupyter läuft Browser-basiert; das Backend kann auf dem lokalen Rechner oder auf einem Server laufen

## Jupyter Notebooks - online

Jupyter online ausprobieren:

### Google Colab (Google Account benötigt)

- Gehe zu https://colab.research.google.com
- Wähle _File_ - _New Python 3 Notebook_

### Binder (begrenzte Sessions)

- Gehe zu https://jupyter.org/try
- _Try Classic Notebook_ auswählen
- warten ...
- _File_ - _New Notebook_ - _Python 3_

## Jupyter Notebooks - lokal

Starten: Eintrag _Jupyter Notebook_ im Startmenü / Befeh `jupyter notebook` im Terminal

Stoppen: _Quit_ im rechten oberen Eck der Ordneransicht (üblicherweise unter http://localhost:8888/tree)

## Notebook Dateien

Anlegen neuer Notebook Dateien via _new_ - _Notebook: Python 3_

Speicherung unter _notebook.ipynb_

_Ipynb_: Dateiformat, das Python Code, Ausgaben und Dokumentation/Notizen beinhalten kann

## Code schreiben und ausführen

Code in eine Zelle schreiben, z.B.

```py
import time
time.sleep(3)
"hello"
```

dann _Shift_ + _Enter_ drücken

## Code schreiben und ausführen

In IPython gibt es nummerierte Eingaben, z.B. `In [1]`

Während eine Eingabe ausgewertet wird, wird `In [*]` angezeigt

Wenn das letzte Statement in einer Zelle einen Wert ergibt, wird dies als Ausgabe angezeigt

Um das Notebook neu zu starten und alle Zellen neu auszuwerten, drücke ⏩

## Code schreiben und ausführen

Auf die letzte Ausgabe zugreifen:

```py
print(_ * 3)
```

## Dokumentation via Markdown

Wir können Dokumentation über die standardisierte Sprache _Markdown_ hinzufügen:

Wir ändern das Dropdown von _Code_ auf _Markdown_ und versuchen den folgenden Code:

```md
# Heading

- item 1
- item 2
```

Zelle ausführen, um das Resultat anzuzeigen, doppelklicken zum erneuten Editieren

[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Dokumentation

Dokumentation zu Funktion / Klasse / Modul / ... in einer Python Konsole anzeigen:

```py
help(str)
```

(Navigieren durch lange Ausgaben via _Enter_, Beenden via _Q_)

Shortcut in IPython / Jupyter:

```ipython
str?
```

## Tab-Vervollständigung und Wildcard-Ausdrücke

```ipython
*Error?
```

## Terminal-Befehle ausführen

IPython beinhaltet direkten Zugriff auf viele Terminal-Befehle, z.B. `ls`, `cd`, ...

Wir können beliebige Terminal-Befehle ausführen, indem wir ein `!` davor setzen

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

# sehr schnell (da in C implementiert)
array_a + array_b
```

## Arrays

Jedes Array kann nur Daten eines Typs enthalten (z.B. nur 64-bit floats oder nur bytes)

## Arrays

Erstellen eines 2-dimensionalen Arrays:

```py
a2d = np.array([[1, 2, 3], [2, 4, 6], [3, 6, 9]])
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
a3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7,8]]])
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

## Array Typen

wichtige Typen:

- _bool_ / <em>bool\_</em> (Speicherverbrauch 8 Bit)
- _int8_, _int16_, _int32_, _int64_
- _uint8_, _uint16_, _uint32_, _uint64_
- _float16_, _float32_, _float64_

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

## Array Shape

Wir können folgendes abfragen:

- `a3d.ndim`: 3
- `a3d.shape`: (2, 2, 2)
- `a3d.size`: 8

## Operationen auf Arrays

Auswählen von Einträgen:

```py
a3d[0, 1, 0] # 3

a3d[0, :, 0] # [1, 3]
```

## Operationen auf Arrays

Operatoren werden elementweise angewendet:

```py
a = np.array([1, 2, 3])
b = np.array([2, 2, 2])

print(a + b)
# np.array([3, 4, 5])
print(a * b)
# np.array([2, 4, 6])
```

## Operationen auf Arrays

NumPy bietet spezielle Funktionen, die elementweise angewendet werden

```py
a = np.array([0, 1, 2, 3])

print(np.sin(a)) # [0.0, 0.84147098, 0.9... ]
print(np.sqrt(a)) # [0.0, 1.0, 1.414... ]
```

## Arrays erstellen

Ein Array der Größe 2x6, gefüllt mit Nullen:

```py
np.zeros((2, 6))
np.full((2, 6), 0)
```

Die Folge _0.0, 0.5, 1.0, 1.5_:

```py
# fixed step width (0.5)
a = np.arange(0, 2, 0.5)
# fixed number of entries (4)
b = np.linspace(0, 1.5, 4)
```

Ein 3x3 Array mit Zufallswerten:

```py
np.random.random(3, 3)
```

## Übungen

Gegeben sind ein Array von Preisen und ein Array von gekauften Mengen. Bestimme den Gesamtpreis:

```py
prices = np.array([3.99, 4.99, 3.99, 12.99])
# buying the first item 3 times and the last item 2 times
quantities = np.array([3, 0, 0, 2])

# solution: 37.95
```

Gegeben sind die Koordinaten von Eckpunkten eines Dreiecks (2D oder 3D). Bestimme den Schwerpunkt (arithmetisches Mittel der Eckpunkte).

```py
a = np.array([5, 1])
b = np.array([6, 8])
c = np.array([1, 3])

# solution: [4, 4]
```

## Übungen

Fortgeschritten: Lösen linearer Gleichungssysteme

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

Siehe auch: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html

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

- Monatliche Preise des US-Aktienindex _S&P 500_: https://datahub.io/core/s-and-p-500/r/data.csv
- Wechselkurse: https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv
- Iris Dataset (Statistiken zu Blütengrößen von Iris-Blumen): http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data (recherchiere passende Spaltennamen im Internet)

## CSV importieren

mögliche Lösungen:

```py
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data",
    header=None,
    names=["sepal_length", "sepal_width", "petal_length",
           "petal_width", "name"])
sp500 = pd.read_csv(
    "https://datahub.io/core/s-and-p-500/r/data.csv",
    index_col="Date",
    parse_dates=["Date"])
exchange_rates = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    parse_dates=["Date"])
```

## Daten importieren und exportieren

Excel:

```py
euribor.to_excel('euribor.xlsx')
euribor = pd.read_excel('euribor.xlsx', index_col=0)
```

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

## Daten auslesen (nach Zeilen- und Spaltennamen)

- `df.index`: Zeilennamen
- `df.columns`: Spaltennamen

<!-- -->

- `df.loc["2009-01-02"]`: Zeile mit bestimmtem Indexwert
- `df.loc["2009-01-01" : "2009-01-31"]`: Zeile in bestimmtem Bereich (beide Grenzen inklusive)
- `df.loc[:, "rate"]`: Spalte `"rate"`
- `df["rate"]`: Spalte `"rate"` (Kurzschreibweise)
- `df.rate`: Spalte `"rate"` (kürzere Version - klappt nicht mit Sonderzeichen)
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
- Einträge aus dem Jahr 2009

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

# Fehlende Daten

## Fehlende Daten

In den Wechselkursdaten fehlen manche Einträge:

- manche Tage sind nicht eingetragen (Wochenenden)
- manche Tage sind als `NaN`s eingetragen

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

Mit _joins_ können mehrere _DataFrames_ zusammengeführt werden.

https://jakevdp.github.io/PythonDataScienceHandbook/03.07-merge-and-join.html

# Plotting

### Grafische Darstellung von Daten

## Plotting

Grundlegende (low-level) Library für Plotting: _matplotlib_

Abstrahierende Interfaces zu grundlegenden matplotlib Funktionen:

- _pyplot_ (enthalten in matplotlib, ähnlich zum matlab Plotinterface)
- _pandas_ Plotfunktionen
- _seaborn_

## Einfacher Plot mit pyplot

```py
import numpy as np
import matplotlib.pyplot as plt

x = np.array([0, 1, 2, 3])

y1 = x*2
y2 = x**2

plt.plot(x, y1)
plt.plot(x, y2)

# plt.show is not needed in Jupyter
plt.show()
```

## Einfacher Plot mit pandas

```py
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

x = np.array([0, 1, 2, 3])

data = pd.DataFrame({
    "y1": x*2,
    "y2": x**2
})

data.plot.line()

# plt.show is not needed in Jupyter
plt.show()
```

## Übung

Erstelle einen Plot, der die Sinus- und Kosinusfunktion im Intervall von _0_ bis _2π_ zeigt.

## Übung

```py
x = np.linspace(0, 2*3.1415, 200)

plt.plot(x, np.sin(x))
plt.plot(x, np.cos(x))
```

```py
x = np.linspace(0, 2*3.1415, 200)

df = pd.DataFrame({"sin": np.sin(x), "cos": np.cos(x)}, index=x)

df.plot.line()
```

# Figure Objekte

## Figure Objekte

Jede Zeichnung in _pyplot_ erfolgt mittels eines _Figure_-Objekts (wird beim plotten meist automatisch erzeugt).

Manuelles Erstellen einer Figure mit Größe 800 x 600 px (bei 100 dpi):

```py
fig = plt.figure(
    figsize=(8, 6),
    facecolor="#eeeeee"
)
```

Dies wird automatisch zur aktiven Figure.

## Figure Objekte

Exportieren einer Figure:

```py
fig.savefig("myplot.png")
fig.savefig("myplot.svg")
```

## Figure Objekte

Aufgabe: Skript, das eine PNG-Datei eines Graphen der aktuellen CPU-Last erstellt und jede Sekunde aktuelisiert. (verwende hierzu das PIP-Paket _psutil_)

# Konfiguration und Styling

## Stile

Vorgefertigte Stylesheets verwendbar mittels:

```py
plt.style.use("stylename")
```

Für Demos verfügbarer Stile siehe:

https://matplotlib.org/3.1.0/gallery/style_sheets/style_sheets_reference.html

## Stile von Graphen

Kurzform:

```py
plt.plot(x, y, "g--")
```

Langform:

```py
plt.plot(x, y, color="green", linestyle="dashed")
```

In der Langform sind genauere Farb- und Größenangaben möglich

## Stile von Graphen



## Achsenlabel



# Plotting

## Grundlegende Plots

- funktionaler Zusammenhang (x-y)
  - Graph
  - Bar Chart
- Datenpunkte mit zwei Merkmalen
  - Scatter Plot
- Dichte / Lage einer Verteilung
  - Histogram
  - Box Plot

## Graph

Pyplot: `plt.plot(x, y)`

Pandas: `df.plot()` / `df.plot.line()`

## Säulendiagramm

Pyplot: `plt.bar(x, y)`

Pandas: `df.plot.bar()`

## Scatter Plot

Pyplot: `plt.scatter(x, y)`

Pandas: `df.plot.scatter(x="name1", y="name2")`

## Histogramm

Pyplot: `plt.hist(x)`

Pandas: `df.plot.hist()`

## Graph

Pandas:

```py
series.plot()
dataframe.plot()
```

Matplotlib / Pyplot:

```py
plt.plot(data)
```

## Graph (x / y)

Matplotlib / Pyplot:

```py
plt.plot(x, y)
```

## Bar Chart

Pandas:

```py
df.plot.bar()
```

Matplotlib / Pyplot:

```py
plt.bar(x=[0, 1, 2, 3], height=y)
```

Seaborn

```py
sns.barplot(x=[0, 1, 2, 3], y=y)
```
# Subplots

# NumPy Fortgeschritten

## Form von Arrays ändern

```py
array_1d = array_3d.reshape(8)
array_2d = array_3d.reshape(2, 4)
array_2d = array_3d.reshape(2, -1) # automatic second dimension
```

## Dimensionalität erhöhen

Hinzufügen einer extra Dimension der Länge 1 via `newaxis` - Verwandeln eines 2 x 2 Arrays in ein 2 x 2 x 1 Array:

```py
array_2d = np.array([[1, 2], [3, 4]])
array_3d = array_2d[:, :, np.newaxis]
# [[[1], [2]], [[3], [4]]]
```

## Slicen von Arrays

```py
a2d = np.array([[1, 2, 3], [2, 4, 6], [3, 6, 9]])

a2d[0] # [1, 2, 3]
a2d[0, :] # [1, 2, 3]
a2d[1:, 1:] # [[4, 6], [6, 9]]
a2d[:, ::-1] # [3, 2, 1]
```

## Slices als Views

In Python können wir eine flache Kopie einer Liste erstellen, indem wir sie slicen - dies ist in NumPy nicht so (um die Effizienz zu steigern):

```py
list = [1, 2, 3]
list_copy = list[:]
list_copy[0] = 10 # does NOT change list

array = np.array([1, 2, 3])
array_view = array[:]
array_view[0] = 10 # DOES change array
```

## Arrays kopieren

Arrays können via `array.copy()` kopiert werden

## Arrays aneinanderfügen

```py
np.concatenate([a2d, a2d])

np.concatenate([a2d, a2n], axis=1)
```

# Machine learning

## Kategorien von Methoden

- Supervised learning (Überwachtes Lernen)
- Unsupervised learning
- Reinforcement learning

## Beispiele für Aufgaben

- Regression
- Klassifizierung
- Clustering
- Dimensionsreduktion

## Beispiele für Aufgaben

### Regression

Zuweisung von numerischen Werten zu numerischen Eingabedaten

Beispiele:

- Schätzung der Entfernung einer Galaxie basierend auf der Rotverschiebung
- Schätzung der Kursentwicklung einer Aktie

## Beispiele für Aufgaben

### Klassifikation

Zuweisung von Klassen zu numerischen Eingabedaten

Beispiele:

- Spam-Filterung basierend auf einer Anzahl an Wörtern / Phrasen (2x "nigerian prince", 1x "viagra")
- Erkennen von Objekten / Personen / Zeichen auf Bildern

## Beispiele für Aufgaben

### Clustering

Erkennen von Gruppierungen / Clustern bei numerischen Eingabedaten

Beispiele:

- Erkennen wiederkehrender Elemente in Bildern

# Regression - Grundlagen

## Lineare Regression

## Lineare Regression

Beispiel: Wir betrachten verschiedene Einkäufe bei verschiedenen Supermärkten:

- 1 l Milch, 1 kg Brot: 4.58€
- 2 l Milch, 3 kg Brot: 13.50€
- 3 l Milch, 2 kg Brot: 11.98€
- (0 l Milch, 0 kg Brot: 0€)

Was wäre eine passende Schätzung für den Preis von 1 Liter Milch / 1 kg Brot? Wenn wir bei einem Supermarkt 2 Liter Milch und 2 kg Brot kaufen, welcher Preis wäre in etwa zu erwarten?

Diese Aufgabe kann mit Hilfe von linearer Regression beantwortet werden.

## Lineare Regression

Beispiel:

```py
from sklearn.linear_model import LinearRegression

X = [[1, 1], [2, 3], [3, 2], [0, 0]]
y = [4.58, 14.50, 11.98, 0.0]

model = LinearRegression()
model.fit(X, y)

yfit = model.predict([[1, 0], [0, 1], [2, 2]])
print(yfit)
```

## Lineare Regression - Beispiel

Iris-Datensatz: Abschätzen der _sepal width_ basierend auf der _sepal length_

## Beispiele

- Radverkehr

# Klassifizierung - Grundlagen

## Klassifizierung

Aufgabe: Klassifizierung von Iris-Pflanzen basierend auf ihren Maßen

Gegeben ist eine Reihe von Daten mit bekannten Maßen und bekannten Spezies. Baiserend darauf: Trainieren eines Algorithmus, um später die Spezies anderer Pflanzen zu bestimmen.

## Klassifizierung

In diesem Fall verwenden wir einen _K-nearest-neighbors-Klassifikator_ als Algorithmus, andere Algorithmen wären genauso denkbar.

## Klassifizierung

Vorbereiten der Daten:

```py
from sklearn import datasets

iris = datasets.load_iris()

X = iris.data
y = iris.target

test_data = [
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
]
```

## Klassifizierung

Durchführen der Klassifizierung

```py
from sklearn.neighbors import KNeighborsClassifier

model = KNeighborsClassifier()
model.fit(X, y)

y_pred = model.predict(test_data)
print(y_pred)
```

## Klassifizierung

Weitere Aufgaben:

Wir verwenden andere Klassifikatoren, wie etwa:

- `SVC`
- `DecisionTreeClassifier`
- `GaussianNB`

# Validierung

## Train-Test Split

Um zu validieren, ob ein Verfahren ein passendes Ergebnis liefert:

Die Daten (X, y) werden in Trainingsdaten und Testdaten unterteilt. Die Testdaten dienen zur Validierung

## Train-Test Split

Frage: wie gut approximiert unsere lineare Regression die Iris Daten?

```py
from sklearn.model_selection import train_test_split
from sklearn import metrics

X_train, X_test, y_train, y_test = train_test_split(X, y)

...

print(metrics.r2_score(y_prediction, y_test))
```

Wir können einen Parameter `test_size` angeben, dessen Standardwert `0.25` ist (d.h. 25% der Daten werden zur Validierung verwendet)

## Kreuzvalidierung

Bei der cross-validation werden die Daten wiederholt in unterschiedliche Trainings- und Testdaten unterteilt, sodass jeder Eintrag einmal in den Testdaten vorkommt

```py
from sklearn.model_selection import cross_validate

...

test_results = cross_validate(model, X, y, cv=5, scoring="r2")
test_scores = test_results["test_score"]
print(test_scores)
# [ 0.61840428  0.72569954 -1.1742135   0.44294841  0.50589789]
print(test_scores.mean())
```

## Validierung

Regression:

- R2 score
- mean squared error

Klassifizierung:

- Accuracy (Anteil an richtig klassifizierten Einträgen)
- Confusion Matrix (Anteil an richtig / falsch klassifizierten Einträgen für jede Klasse)

Siehe https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics

## Validierung

Aufgabe: Validierung der Iris-Klassifizierung mittels eines einfachen Train-Test Splits

## ROC

_ROC_ = _Receiver Operating Characteristic_

Ist eine Metrik, die bei einer ja/nein-Entscheidung zu einer Klassenzugehörigkeit ins Spiel kommt. Sie beschäftigt sich mit _true positives_ und _false positives_

## ROC

Beispiel: Die Erkennung der Klasse _iris versicolor_ kann z.B. folgendermaßen fein eingestellt werden (Daten sind erfunden):

- Option 1: 60% der _iris versicolor_ werden richtig als solche erkannt
- Option 2: 80% der _iris versicolor_ werden richtig als solche erkannt (aber auch 10% der _iris virginica_ werden fälschlicherweise als solche klassifiziert)
- Option 3: 90% der _iris versicolor_ werden richtig als solche erkannt (aber auch 25% der _iris virginica_ werden fälschlicherweise als solche klassifiziert)

Die ROC beschreibt den Zusammenhang von _true positives_ und _false positives_ und kann als Kurve dargestellt werden. Je größer die Fläche unter der Kurve (AUC), umso besser die Klassifizierung. 

## ROC

Zeichnen der ROC

```py
false_positive_rates, true_positive_rates, thresholds = metrics.roc_curve(
    y_test,
    classifier.predict_proba(X_test)[: 1]
)

plt.plot(false_positive_rate, true_positive_rate)
```

Bestimmen der Fläche unter der Kurve:

```py
auc = metrics.auc(false_positive_rates, true_positive_rates)
```

## ROC

Aufgabe: Zeichne eine ROC für die Klassifikation von _iris setosa_

# Daten vorbereiten

## Daten vorbereiten

üblicherweise:

- `X`: zweidimensionales Array mit Eingangsdaten
- `y`: eindimensionales Array mit Resultaten

Die Arrays `X` und `y` sollten numerische Daten enthalten

## Fehlende Daten

Fehlende Daten werden häufig in der Form von `NaN`s auftreten.

Mögliche Behandlungen:

- Löschen aller Zeilen, die an irgendeiner Stelle undefinierte Werte enthalten
- Interpolieren der fehlenden Werte durch andere Daten

## Skalieren von Werten

Welche dieser beiden Sterne ist der Sonne am ähnlichsten?

```py
# data: radius (km), mass (kg), temparature (K)
sun =    [7.0e7, 2.0e30, 5.8e3]

star_a = [6.5e7, 3.0e30, 5.2e3]
star_b = [7.0e8, 2.5e30, 8.1e3]
```

Machine Learning Algorithmen wie z.B. k-Nearest-Neighbor betrachten Absolutwerte. Hier würde vom Algorithmus im wesentlichen nur die Masse herangezogen worden, da alle anderen Werte im Vergleich verschwindend gering sind.

## Skalieren von Werten

Lösung: Die Werte werden zentriert und skaliert, sodass ihr Mittelwert 0 und die Standardabweichung 1 ist

```py
from sklearn import preprocessing
import numpy as np
X_train = np.array([[ 7.0e7, 2.0e30, 5.8e3],
                    [ 6.5e7, 3.0e30, 5.2e3],
                    [ 7.0e9, 2.5e30, 3.1e3]])
X_scaled = preprocessing.scale(X_train)
```

Resultat:

```py
array([[-0.70634165, -1.22474487,  0.95025527],
       [-0.70787163,  1.22474487,  0.43193421],
       [ 1.41421329,  0.        , -1.38218948]])
```

## Kategoriedaten

Manchmal sind Kategorien als Daten angegeben - z.B. `iris setosa`, `iris virginica`, `iris versicolor`

## Textdaten

## Pipelines

- `Imputer`
- `StandardScaler`
- (`PolynomialFeatures` - mehr dazu später)

# Regression

## Lineare Regression

Bedeutet: Festlegen einer linearen Funktion, die die Datenpunkte bestmöglich approximiert (kleinste Quadratsumme)

## Lineare Regression - Beispiele

- [Radverkehr](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html)
- Diabetes Verhersage
- Hauspreise in Boston

## Polynomiale Regression

Manche Daten passen nicht in das Schema eines linearen Zusammenhangs `y = a*x + b`.

Wir können z.B. versuchen, sie durch einen polynomialen Zusammenhang `y = a*x^2 + b*x + c` darzustellen.

## Polynomiale Regression

In scikit-learn können wir eine polynomiale Regression durch einen _Preprocessor_ namens `PolynomialFeatures` durchführen.

## Polynomiale Regression

Als Beispieldaten verwenden wir den Datensatz _II_ aus den sogenannten Anscombe Daten:

```py
import seaborn as sns

anscombe = sns.load_dataset("anscombe")
anscombe_2 = anscombe[anscombe.dataset == "II"]
```

## Polynomiale Regression

Wir nähern die Daten mit einer Polynomfunktion vom Grad 3 an:

```py
poly_model = make_pipeline(
    PolynomialFeatures(3),
    linear_model.LinearRegression()
)

poly_model.fit(X, y)
```

Aufgabe: Vergleiche die Ergebnisse einer einfachen Linearen Regression mit der polynomialen Regression.

## Overfitting

# Klassifizierung

## Klassifizierungsalgorithmen

- K-Nearest-Neighbors
- Logistische Regression
- Naive Bayes
- Support Vector Machine
- Entscheidungsbäume und Random Forests

Siehe auch: [classifier comparison von scikit-learn](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html)

## K-Nearest-Neighbors

Ein neuer Datenpunkt wird klassifiziert, indem seine nächsten Nachbarn betrachtet werden. Die bei den Nachbarn am häufigsten vorkommende Klasse wird auch für den Datenpunkt festgesetzt.

Die Anzahl `k` der betrachteten Nachbarn kann festgesetzt werden (Standardwert = 5)

Siehe auch: https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html#sklearn.neighbors.KNeighborsClassifier

## Logistische Regression

An einer Grenze zwischen zwei Klassen wird mit Hilfe einer _logistischen Funktion_ angegeben, wie groß die Wahrscheinlichkeit ist, dass der Datenpunkt zu der einen (bzw zu der anderen) Klasse gehört. Je nachdem, welche der Wahrscheinlichkeiten größer als 50% ist, wird die entsprechende Klasse zugewiesen.

Die logistische Funktion selbst wird intern mittels Regression bestimmt (daher der Name).

Beispiel: https://scikit-learn.org/stable/auto_examples/linear_model/plot_logistic.html#sphx-glr-auto-examples-linear-model-plot-logistic-py

## Naive Bayes

Für die bekannten Klassen werden Wahrscheinlichkeitsverteilungen angenommen (z.B. Normalverteilung, Multinomialverteilung). Diese Verteilungen werden aus den Trainingsdaten hergeleitet.

Für einen neuen Datenpunkt wird dann errechnet, unter welcher der Verteilungen er am ehesten auftreten würde.

Zwei wichtige Verteilungen sind die Normalverteilung (Gauß'sche Verteilung) für kontinuierliche Werte und die Multinomialverteilung für diskrete Werte (Ganzzahlen).

## Support Vector Machines

Einfachster Fall: Trennung von Klassen durch Geraden / Ebenen / Hyperebenen - diese Trenner sollen von den getrennten Punkten maximalen Abstand haben.

Durch Kernelfunktionen können die Grenzen auch andere Formen annehmen, z.B. die von Kegelschnitten für polynomiale Kernel vom Grad 2 oder anderen Kurven.

Siehe auch: https://scikit-learn.org/stable/modules/svm.html

## Entscheidungsbäume (Decision Trees)

Machine Learning Bibliotheken können sogenannte Entscheidungsbäume auf Basis von Trainingsdaten generieren.

Beispiel für einen Entscheidungsbaum für die Iris-Klassifizierung:

- Ist die _petal length_ kleiner oder gleich 2.4?
  - ja: **setosa**
  - nein: Ist die _petal width_ kleiner oder gleich 1.7?
    - ja: Ist die _petal length_ kleiner oder gleich 5.0?
      - ja: **versicolor**
      - nein: **virginica**
    - nein: **virginica**

## Random Forests

Basierend auf Decision Trees: Die Daten werden in verschiedene Untermengen zerlegt. Mittels jeder Untermenge wird ein einzelner Decision Tree erstellt. Die Gesamtheit der Decision Trees wird zu einem sogenannten _Random Forest_ zusammengeführt.

## Beispiele zur Klassifizierung

- Erkennen von Ziffern

# Modellauswahl und Hyperparameter

siehe [Python Data Science Handbook → Hyperparameters and Model Validation → Selecting the Best Model](https://jakevdp.github.io/PythonDataScienceHandbook/05.03-hyperparameters-and-model-validation.html#Selecting-the-Best-Model)

# Clustering

## Clustering

Beim Clustering handelt es sich um _unsupervised learning_. Solche Algorithmen haben keine Zieldaten (_y_), sondern suchen nur in den Ausgangsdaten nach einer bestimmten Struktur.

## Clustering

- _k-Means Clustering_
- _Gaussian Mixture Models_

# Resources

Pandas website: https://pandas.pydata.org/

Python Data Science Handbook: https://jakevdp.github.io/PythonDataScienceHandbook/

<!-- https://github.com/jakevdp/PythonDataScienceHandbook -->

