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

## Python Pakete for data science

- _Jupyter_ & _IPython_: interaktive Python Umgebungen
- _NumPy_: Bibliothek zum effizienten Verarbeiten numerischer Daten
- _Pandas_: Bibliothek zur Datenanalyse, basiert auf NumPy
- _Matplotlib_: Bibliothek zur Datenvisualisierung
- _Scikit-Learn_: Bibliothek für Machine Learning, basiert auf NumPy

## Anaconda

Anaconda = Python Distribution, die viele vorinstallierte Pakete und Entwicklerwerkzeuge enthält

Benötigt ~3GB Platz auf der Festplatte

## Conda

Conda = Environment- und Paketmanager

Erlaubt das Installieren verschiedener Versionen von Python, von Python-Paketen und anderen Abhängigkeiten - insbesondere hilfreich für externe Libraries, die nicht in Python geschrieben sind und kompiliert werden müssen

## Miniconda

_Miniconda_ = Distribution, die nur Python und Conda enthält, weitere Pakete müssen über Conda installiert werden

Benötigt anfangs ~250 MB Speicherplatz

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
- _Try Jupyter with Python_ auswählen
- warten ...
- _File_ - _New Notebook_ - _Python 3_

## Jupyter Notebooks - lokal

Starten: Eintrag _Jupyter Notebook_ im Startmenü

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

## Importing CSV

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

# Plotting

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
# NumPy Fortgeschritten

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

## Dimension erhöhen

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

## Beispielhafte Aufgaben

- Regression
- Klassifizierung
- Clustering
- Dimensionsreduktion

# Regression

## Lineare Regression

Bedeutet: Festlegen einer linearen Funktion, die die Datenpunkte bestmöglich approximiert (kleinste Quadratsumme).

## Lineare Regression

Beispiel:

```py
from sklearn.linear_model import LinearRegression

x = np.array([0, 1, 1, 2, 3])
y = np.array([3, 4.5, 5, 5, 4.5])
X = x[:, np.newaxis]

model = LinearRegression
model.fit(X, y)

yfit = model.predict(X)
```

## Beispiele

- Umlaufzeit der Planeten -> Mittlerer Sonnenabstand (oder andere Richtung)
- Rechnungsbetrag -> Trinkgeld
- Radverkehr

# Resources

Pandas website: https://pandas.pydata.org/

Python Data Science Handbook: https://jakevdp.github.io/PythonDataScienceHandbook/

<!-- https://github.com/jakevdp/PythonDataScienceHandbook -->

