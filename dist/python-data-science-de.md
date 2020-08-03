# Python & Data Science

## Präsentationen

<https://marko-knoebl.github.io/slides/>

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

## Vorstellung der Teilnehmer

- Aktuelle Projekte
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

## Code

Code verfügbar unter: <https://github.com/marko-knoebl/courses-code>

# Pakete

## Python Pakete für Data Science

- _Jupyter_ & _IPython_: interaktive Python Umgebungen
- _NumPy_: Bibliothek zum effizienten Verarbeiten numerischer Daten
- _Pandas_: Bibliothek zur Datenanalyse, basiert auf NumPy
- _Matplotlib_: Bibliothek zur Datenvisualisierung
- _Scikit-Learn_: Bibliothek für Machine Learning, basiert auf NumPy
- _Keras_: Bibliothek für Deep Learning

## Anaconda

_Anaconda_ = Python Distribution, die viele vorinstallierte Pakete und Entwicklerwerkzeuge enthält

Benötigt ~3GB Platz auf der Festplatte

## Installation von Anaconda

Download von <https://www.anaconda.com/distribution/>

(Achte auf die Wahl des richtigen Betriebssystems)

Unter Windows sollte der Installationspfad keine Leerzeichen enthalten (Empfehlung: `C:/anaconda`) - siehe <https://docs.anaconda.com/anaconda/user-guide/faq/#distribution-faq-windows-folder>

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

- Gehe zu <https://colab.research.google.com>
- Wähle _File_ - _New Python 3 Notebook_

### Binder (begrenzte Sessions)

- Gehe zu <https://jupyter.org/try>
- _Try Classic Notebook_ auswählen
- warten ...
- _File_ - _New Notebook_ - _Python 3_

## Jupyter Notebooks - lokal

Starten: Eintrag _Jupyter Notebook_ im Startmenü / Befehl `jupyter notebook` im Terminal

Stoppen: _Quit_ im rechten oberen Eck der Ordneransicht (üblicherweise unter http&#x3A;//localhost:8888/tree)

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

Daten sind in mehrdimensionalen Arrays von Zahlen gespeichert, die resourcenschonend umgesetzt sind:

- kleinerer Speicherverbrauch als z.B. Listen von Zahlen in Python
- deutlich schnelleres Ausführen von z.B. elementweiser Addition zweier Arrays

Daten können z.B. Bilder, Tondateien, Messwerte und vieles anderes repräsentieren

## Importieren von NumPy

oft verkürzt als:

```python
import numpy as np
```

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

## NumPy Arrays vs Python Listen

Arrays sind im Hintergrund in C implementiert, die numerischen Einträge (z.B. Integer) sind keine Python-Objekte und damit resourcenschonender.

## NumPy Arrays vs Python Listen

Python-Liste (referenziert Integer-Objekte):

```py
list_a = [1, 2, 3, 4]
```

NumPy Array (Daten sind im Array enthalten ohne auf externe Objekte zu verweisen):

```py
array_a = np.array(list_a)
```

Schnelle elementweise Operation (in C implementiert):

```py
array_a * array_a
```

## Array Shape

Wir können folgendes abfragen:

- `a3d.ndim`: 3
- `a3d.shape`: (2, 2, 2)
- `a3d.size`: 8

# Arrays erstellen

## Arrays erstellen

Ein Array der Größe 2x6, gefüllt mit Nullen:

```py
np.zeros((2, 6))
```

oder

```py
np.full((2, 6), 0)
```

Ein 3x3 Array mit Zufallswerten:

```py
np.random.random(3, 3)
```

## Arrays erstellen

Erstellen der Folge _0.0, 0.5, 1.0, 1.5_:

fixe Schrittweite (0.5):

```py
a = np.arange(0, 2, 0.5)
```

fixe Anzahl an Einträgen (4):

```py
b = np.linspace(0, 1.5, 4)
```

# Operationen auf Arrays

## Operationen auf Arrays

Auswählen von Einträgen:

```py
a2d[0] # [1, 2, 3]
a2d[0, 1] # 2
a2d[0, :] # [1, 2, 3]
a2d[:, 0] # [1, 2, 3]
```

## Operationen auf Arrays

Auswählen von Einträgen:

```py
a2d[1:, 1:] # [[4, 6], [6, 9]]
a2d[1, ::-1] # [3, 2, 1]
```

## Operationen auf Arrays

Operatoren werden elementweise angewendet:

```py
a = np.array([1, 2, 3])
b = np.array([2, 2, 2])

print(-a)
# np.array([-1, -2, -3])
print(a + b)
# np.array([3, 4, 5])
print(a * b)
# np.array([2, 4, 6])
```

## Operationen auf Arrays

Auch mit einzelnen Zahlen möglich (broadcasting):

```py
a = np.array([1, 2, 3])

print(a + 1)
# np.array([2, 3, 4])
```

Einige Konstanten sind direkt in NumPy verfügbar:

```py
print(a + np.pi)
print(a + np.e)
```

## Operationen auf Arrays

Elementweises Vergleichen von Arrays:

```py
a < b
# np.array([True, False, False])
a == b
# np.array([False, True, False])
```

Achtung: `a == b` kann nicht sinnvoll in if-Abfragen verwendet werden - verwende `np.array_equal(a, b)`.

## Operationen auf Arrays

Filtern von Arrays (z.B. beschränken auf positive Einträge):

```py
a = np.array([[-1, 3], [-2, 1]])
a_is_pos = a > 0
# array([[False, True], [False, True]])
a_pos = a[a_is_pos]
# array([3, 1])
```

Kurzform:

```py
a_pos = a[a > 0]
```

## Operationen auf Arrays

NumPy bietet spezielle Funktionen, die elementweise angewendet werden:

```py
a = np.array([0, 1, 2, 3])

print(np.sin(a))
# [0.0, 0.84147098, 0.9... ]
print(np.sqrt(a))
# [0.0, 1.0, 1.414... ]
```

## Operationen auf Arrays

Elementweise Funktionen:

- `abs`
- `sin`
- `cos`
- `sqrt`
- `exp`
- `log`
- `log10`
- ...

## Operationen auf Arrays

_Aggregationen_ berechnen beispielsweise Werte zu jeder Zeile / jeder Spalte oder zu einem ganzen Array

Gesamtsumme:

```py
np.sum(a2d)
```

Summe über alle Zeilen:

```py
np.sum(a2d, axis=0)
```

Summe über alle Spalten:

```py
np.sum(a2d, axis=1)
```

## Operationen auf Arrays

Aggregationen:

- `sum`
- `min`
- `max`
- `std`
- `percentile`

## Übungen

(siehe nächste Slides)

- Preise und Mengen -> Gesamtpreis
- Schwerpunkt eines Dreiecks
- Sinus- und Kosinusfunktion - Wertetabelle

## Übungen

Gegeben sind ein Array von Preisen und ein Array von gekauften Mengen. Bestimme den Gesamtpreis:

```py
prices = np.array([3.99, 4.99, 3.99, 12.99])
# buying the first item 3 times and the last item 2 times
quantities = np.array([3, 0, 0, 2])

# solution: 37.95
```

## Übungen

Gegeben sind die Koordinaten von Eckpunkten eines Dreiecks (2D oder 3D). Bestimme den Schwerpunkt (arithmetisches Mittel der Eckpunkte).

```py
a = np.array([5, 1])
b = np.array([6, 8])
c = np.array([1, 3])

# solution: [4, 4]
```

## Übungen

Erstelle eine Wertetabelle für Sinus- und Kosinusfunktion im Intervall von 0 bis 2\*pi.

Resultat:

```py
# x, sin(x), cos(x)
np.array([[0.0, 0.01, 0.02, ...],
          [0.0, 0.0099998, 0.99995, ...],
          [1.0, 0.99995, 0.99980, ...]])
```

Überprüfe anhand der Daten, ob näherungsweise gilt: _sin(x)^2 + cos(x)^2 = 1_

# Array Typen

## Array Typen

Jedes Array kann nur Daten eines Typs enthalten (z.B. nur 64-bit floats oder nur bytes)

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

# Plotting

### Datenvisualisierung

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

Lösung mittels pyplot:

```py
x = np.linspace(0, 2*3.1415, 200)

plt.plot(x, np.sin(x))
plt.plot(x, np.cos(x))
```

Lösung mittels pandas:

```py
x = np.linspace(0, 2*3.1415, 200)

df = pd.DataFrame({"sin": np.sin(x), "cos": np.cos(x)}, index=x)

df.plot.line()
```

## Übungen

Zeichne eine Gauß'sche Glockenkurve

# Pyplot: Konfiguration und Styling

## Stile

Vorgefertigte Stylesheets verwendbar mittels:

```py
plt.style.use("stylename")
```

[Referenz verfügbarer Stile](https://matplotlib.org/3.3.0/gallery/style_sheets/style_sheets_reference.html)

## Stile von Graphen

Kurzformen:

```py
plt.plot(x, y, "gx--")
```

Langform:

```py
plt.plot(x, y, color="green", linestyle="dashed", marker="x")
```

In der Langform sind genauere Farb- und Größenangaben möglich

## Stile von Graphen

mögliche Farbangaben:

- Farbname (`green` / `lighblue` / ...)
- Kurzname (`r` / `g` / `b` / `c` / `m` / `y` / `k`)
- Hex-Code (z.B. `#FFAA00`)
- RGB-Tupel (z.B. `(1, 0.7, 0)`)

## Stile von Graphen

mögliche Lininenstile:

- `""` (_none_)
- `"-"` (_solid_)
- `"--"` (_dashed_)
- `":"` (_dotted_)
- `"-."` (_dashdot_)

## Stile von Graphen

mögliche Marker:

- `""` (keine)
- `","` (kleiner Punkt)
- `"."` (mittelgroßer Punkt)
- `"o"` (großer Punkt)
- `"s"` (Quadrat)
- `"x"`
- `"+"`
- ...

## Stile von Graphen

wichtige Parameter:

- `color`
- `linestyle`
- `linewidth`
- `marker`
- `markersize`

## Label

- `plt.title("Trigonometric functions")`
- `plt.xlabel("x (radians)")`
- `plt.ylabel("y")`

## Label

Label für verschiedene Graphen:

```py
plt.plot(x, np.sin(x), label='sin(x)')
plt.plot(x, np.cos(x), label='cos(x)')

plt.legend()
```

## Achsen

Achsen ausblenden:

```py
plt.axis("off")
```

## Achsenlimits

Ansicht einpassen (ohne Abstand zum Rand):

```py
plt.axis("tight")
```

Bestimmten Ausschnitt anzeigen:

```py
plt.axis([-1, 1, -1, 1])
```

Bestimmten Ausschnitt für einzelne Achse:

```py
plt.xlim(-1, 1)
```

## Achsenskalierung

Gleiche Einheitengröße auf beiden Achsen:

```py
plt.axis("equal")
```

Gleiche Einheitengrößen und Beschränkung der Achsenmarkierungen auf verwendete Datenbereiche:

```py
plt.axis("scaled")
```

## Gitter

```py
plt.grid(True)
```

## Achsenmarkierungen

```py
plt.yticks([-1, 0, 1])
plt.xticks(np.linspace(0, 2*np.pi, 5))
```

## Übungen

- Sinus und Kosinus mit erweiterten Optionen
- n-te Primzahl und Approximation via _n \* ln(n)_
- Schätzung von Pi durch zufällige Punkte

# Pyplot: Gundlegende Plots

## Grundlegende Plots

- Graph
- Säulendiagramm
- Scatter Plot
- Histogramm
- Box Plot
- Tortendiagramm

## Grundlegende Plots

- Graph: `plt.plot(x, y)` / `plt.plot(y)`
- Säulen- und Balkendiagramm: `plt.bar(x, y)`
- Scatter Plot: `plt.plot(x, y, ".")` / `plt.scatter(x, y, size, color)`
- Histogramm: `plt.hist(x)`
- Box Plot: `plt.boxplot(x)`
- Tortendiagramm: `plt.pie(x, labels=...)`

## Graph

Graph zusammengehöriger x- und y-Werte:

```py
plt.plot(x, y)
```

Graph mit automatischem x (0, 1, ...):

```py
plt.plot(y)
```

## Graph

Mehrere Datensätze:

```py
x = [1, 2, 3, 4]

y1 = [1, 2, 3, 4]
y2 = [3, 0 , 1, 0]

plt.plot(x, [y1, y2])
```

## Säulen- und Balkendiagramm

```py
plt.bar(x, y, width=0.6)
plt.bar(x, y, width=1, align="edge")

plt.bar(
    [0, 1, 2],
    [9.6, 17, 9.8],
    tick_label=["China", "Russia", "USA"]
)

plt.barh([0, 1, 2], [9.6, 17, 9.8])
```

## Scatter Plot

Erstellt Datenpunkte mit zwei (oder mehr) zugehörigen Werten - einer auf der x- und einer auf der y-Achse

Einfach:

```py
plt.plot(x, y, ".")
```

Fortgeschritten:

```py
plt.scatter(x, y, size, color)
```

## Histogramm

Zählt die Häufigkeit von bestimmten Werten / Wertebereichen

```py
plt.hist(
    body_heights_men,
    bins=[150, 160, 170, 180, 190, 200]
)
```

```py
plt.hist(
    body_heights_men,
    bins=[150, 170, 180, 200],
    density=True
)
```

## Box Plot

Visualisierung von statistischen Daten in einem Diagramm (Minimum, Median, Maximum, ...)

```py
plt.boxplot(
    [body_heights_men, body_heights_women],
    labels=["men", "women"]
)
```

## Tortendiagramm

```py
plt.pie([3, 10, 17, 9], labels=["a", "b", "c", "d"])

plt.pie([3, 10, 17, 9], explode=[0, 0, 0, 0.1])
```

# Figure, Axes & Subplots

## Figure & Axes

Figure = ganze Zeichnung

Axes = Koordinatensystem, in das Daten eingetragen werden

Eine Figure kann mehrere Axes-Objekte (nebeneinander, untereinander, ...) enthalten

## Figure

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

Aufgabe: Skript, das eine PNG-Datei eines Graphen der aktuellen CPU-Last erstellt und jede Sekunde aktualisiert. (verwende hierzu das PIP-Paket _psutil_)

## Axes Objekte

Das aktive _Axes_-Objekt abfragen:

```py
ax = plt.gca() # get current axes
```

Die schon bekannten Methoden von `plt` verwenden im Hintergrund Methoden des aktiven _Axes_ Objekts:

```py
ax.plot(...)
ax.set_title(...)
ax.set_xlabel(...)
ax.legend()
ax.set_aspect("equal")
```

## Axes Objekte

Aufgabe: Erstellen des Sinus- und Kosinusplots via _Axes_

## Axis und Axes

Achtung unglückliche Namensvergabe:

- `plt.axis`: z.B. zum Einstellen der Skalierung
- `plt.axes`: zum Erstellen eines neuen Koordinatensystems

Eigentliche Bedeutungen aus dem Lateinischen / Englischen: _axis_ = Achse, _axes_ = Achsen

## Subplots

Erstellen mehrerer Axes-Objekte in einem Raster (hier: 2 Zeilen, 3 Spalten):

```py
fig, ax = plt.subplots(2, 3)

ax0 = ax[0, 0]
ax1 = ax[0, 1]
ax5 = ax[1, 2]
```

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
area = pd.Series({"CN": 9.6, "RU": 17, "US": 9.8},
                 dtype="float32")
```

## DataFrame

```py
countries = pd.DataFrame({
    'area': area,
    'population': population
})
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
- Iris Dataset (Statistiken zu Blütengrößen von Iris-Blumen): <http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data> (recherchiere passende Spaltennamen im Internet)

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
iris.sepal_lenght.plot.hist()
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

# Erweiterte Arten von Plots

## Erweiterte Arten von Plots

- Datenpunkte mit mehr als 2 Features
  - Erweiterter Scatter Plot (Größe, Farbe)
  - Scatter Matrix
- Plotten von z = f(x, y)
  - Contour Plots
  - 3D Plots
- Dichte einer Verteilung
  - (Histogramm)
  - KDE
  - Violin Plot
- Dichte einer Verteilung (2D)
  - 2D Histogramm (hist2d, hexbin)
  - KDE

# Kontingenztabelle

## Kontingenztabelle

Eine _Kontingenztabelle_ oder _Kreuztabelle_ gibt Anzahlen über mehrere Merkmale hinweg an.

## Kontingenztabelle

Beispiel:

```py
import seaborn as sns
import pandas as pd
titanic = sns.load_dataset("titanic")
pd.crosstab(titanic.survived, titanic.sex)
```

Ausgabe:

```
sex       female  male
survived
0             81   468
1            233   109
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

# NumPy Fortgeschritten

## Form von Arrays ändern

```py
array_1d = array_3d.ravel()
array_1d = array_3d.reshape(8)
array_2d = array_3d.reshape(2, 4)
array_2d = array_3d.reshape(2, -1) # automatic second dimension
array_2d_transposed = array_2d.T
```

## Dimensionalität erhöhen

Hinzufügen einer extra Dimension der Länge 1 via `newaxis` - Verwandeln eines 2 x 2 Arrays in ein 2 x 2 x 1 Array:

```py
array_2d = np.array([[1, 2], [3, 4]])
array_3d = array_2d[:, :, np.newaxis]
# [[[1], [2]], [[3], [4]]]
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

nebeineinander anfügen:

```py
np.concatenate([a1d, a1d])
np.concatenate([a2d, a2d])
```

untereinander anfügen:

```py
np.concatenate([a2d, a2d], axis=1)
```

## Matrix-Multiplikation

Matrix-Multiplikation kann durch den binären Operator `@` durchgeführt werden

```py
a = np.array([1, 1])

M = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(a @ M)
# array([0.   , 1.414])
```

## Matrix-Multiplikation

Rotation verschiedener Punkte um 45° gegen den Uhrzeigersinn:

```py
points = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])

M = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(points @ M)
```

## Matrix-Multiplikation

Beispiel:

bekannt: Preise verschiedener Produkte, derent Bestände in verschiedenen Lagern

```py
prices = np.array([3.99, 12.99, 5.90, 15])
quantities = np.array([[0, 80, 80, 100],
                       [100, 0, 0, 0],
                       [50, 0, 0, 50]])
```

Gesucht: Warenwert pro Lager

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

```py
from sklearn import datasets
iris = datasets.load_iris()
```

## Lineare Regression - erlernte Koeffizienten

- `model.coef_`
- `model.intercept_`

# Klassifizierung - Grundlagen

## Klassifizierung

Aufgabe: Klassifizierung von Iris-Pflanzen basierend auf ihren Maßen

Gegeben ist eine Reihe von Daten mit bekannten Maßen und bekannten Spezies. Baiserend darauf: Trainieren eines Algorithmus, um später die Spezies anderer Pflanzen zu bestimmen.

## Klassifizierung

In diesem Fall verwenden wir einen _K-nearest-neighbors-Klassifikator_ als Algorithmus, andere Algorithmen wären genauso denkbar.

## Klassifizierung

Trainieren des Algorithmus:

```py
from sklearn.neighbors import KNeighborsClassifier
from sklearn import datasets

iris = datasets.load_iris()

X = iris.data
y = iris.target

model = KNeighborsClassifier()
model.fit(X, y)
```

## Klassifizierung

Durchführen der Klassifizierung

```py
test_data = [
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
]

y_pred = model.predict(test_data)
print(y_pred)
```

## Klassifizierung

Weitere Aufgaben:

Wir verwenden andere Klassifikatoren, wie etwa:

- `SVC`
- `DecisionTreeClassifier`
- `GaussianNB`

## Klassifizierung

Bei vielen Klassifizierungsalgorithmen können auch Wahrscheinlichkeiten für die einzelnen Klassen angezeigt werden:

```py
model.predict_proba(test_data)
```

```py
array([[1. , 0. , 0. ],
       [0. , 0.8, 0.2],
       [0. , 0.6, 0.4]])
```

Der erste Eintrag gehört sicher zur ersten Klasse, der letzte Eintrag gehört mit 60-prozentiger Sicherheit zur zweiten Klasse.

# Regression und Klassifikation: Verfahren

## Regression und Klassifikation: Verfahren

- Instanziierung einer Algorithmenklasse, z.B. `LinerRegression`, `KNeighborsClassifier`, `DecisionTreeClassifier`, ...
- Erstellen einer Eingangsmatrix `X` und eines Zielvektors `y`
- "Lernen" mittels `model.fit(X, y)`
- Voraussagen weiterer Ergebnisse mittels `model.predict(...)`

# Validierung

## Train-Test Split

Um zu validieren, ob ein Verfahren ein passendes Ergebnis liefert:

Die Daten (X, y) werden in Trainingsdaten und Testdaten unterteilt. Die Testdaten dienen zur Validierung.

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

## Validierungsmetriken

Regression:

- `metrics.mean_squared_error(y_true, y_pred)` (mittlere quadratische Abweichung)
- `metrics.r2_score(y_true, y_pred)` (R², Bestimmtheitsmaß)

Klassifizierung:

- `metrics.accuracy_score(y_true, y_pred)` (Anteil an richtig klassifizierten Einträgen)
- `metrics.confusion_matrix(y_true, y_pred)` (Anteil an richtig / falsch klassifizierten Einträgen für jede Klasse)
- `metrics.precision_recall_fscore_support(y_true, y_pred)` (Zusammenfassung wichtiger Metriken)

Siehe auch <https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics>

## Validierungsmetriken: Bestimmtheitsmaß

Das Bestimmtheitsmaß (R²) gibt an, wie nahe die Interpolation an den Testdaten liegt:

- R²=1 - perfekte Interpolation
- R²=0 - Interpolation nicht besser als der einfache Durchschnitt
- R²&lt;0 - schlechter als der einfache Durchschnitt 

## Validierung

Aufgaben:

- Validierung der Iris-Regression
- Validierung der Iris-Klassifizierung

## Kreuzvalidierung

Bei der Kreuzvalidierung (cross-validation) werden die Daten wiederholt in unterschiedliche Trainings- und Testdaten unterteilt, sodass jeder Eintrag einmal in den Testdaten vorkommt.

```py
from sklearn.model_selection import cross_validate

...

test_results = cross_validate(model, X, y, cv=5, scoring="r2")
test_scores = test_results["test_score"]
print(test_scores)
# [ 0.61840428  0.72569954 -1.1742135   0.44294841  0.50589789]
```

# Daten vorbereiten

## Daten vorbereiten

üblicherweise:

- `X`: zweidimensionales Array mit Eingangsdaten
- `y`: eindimensionales Array mit Resultaten

Die Arrays `X` und `y` sollten numerische Daten enthalten

## Daten vorbereiten

Aufgaben:

- Fehlende Daten ergänzen
- Skalieren von Werten
- Kategoriedaten in numerische Daten umwandeln
- Textdaten in numerische Daten umwandeln

## Daten vorbereiten

Klassen zum vorbereiten der Daten besitzen folgende Methoden:

- `.fit`: erlernt anhand vorgegebener Eingangsdaten (`X1`) eine passende Umwandlung für das Modell
- `.transform`: wandelt gegebene Eingangsdaten (`X2`) anhand des gelernten in die neue Form um
- `.fit_transform`: beides in einem Schritt (für die gleichen Daten)

## Fehlende Daten

Fehlende Daten werden häufig in der Form von `NaN`s auftreten.

Mögliche Behandlungen:

- Löschen aller Zeilen, die an irgendeiner Stelle undefinierte Werte enthalten
- Interpolieren der fehlenden Werte durch andere Daten

## Fehlende Daten: Interpolation

```py
import numpy as np
from sklearn.impute import SimpleImputer
X = np.array([[ np.nan, 0,   3  ],
              [ 3,   7,   9  ],
              [ 3,   5,   2  ],
              [ 4,   np.nan, 6  ],
              [ 8,   8,   1  ]])

imputer = SimpleImputer(strategy="mean")
imputer.fit(X)

imputer.transform(X)
imputer.transform(np.array([[np.nan, 1, 1]]))
```

## Skalieren von Werten

Welcher dieser beiden Sterne ist der Sonne am ähnlichsten?

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

scaler = preprocessing.StandardScaler()
scaler.fit(X_train)
X_train_scaled = scaler.transform(X_train)
```

## Skalieren von Werten

Skalierte Werte:

```py
array([[-0.70634165, -1.22474487,  0.95025527],
       [-0.70787163,  1.22474487,  0.43193421],
       [ 1.41421329,  0.        , -1.38218948]])
```

## Skalieren von Werten

Aufgabe: Vergleich einer skalierten Version der Iris k-Nearest-Neighbor-Klassifizierung mit der nichtskalierten

## Kategorien als Eingangsdaten

Manchmal sind _Kategorien_ als Eingangsdaten angegeben - z.B. Land, Berufsgruppe, Messverfahren, ...

Diese können in numerische Daten umgewandelt werden, indem jeder Kategorie eine Spalte mit booleschen Einträgen (0 / 1) zugeordnet wird.

Dies geschieht z.B. mit `sklearn.preprocessing.LabelBinarizer`.

## Kategorien als Eingangsdaten

```py
from sklearn.preprocessing import LabelBinarizer
data = ['cold', 'cold', 'warm', 'cold', 'hot', 'hot']

lb = LabelBinarizer()
lb.fit(data)
X = lb.transform(data)
print(X)
```

```py
array([[1, 0, 0],
       [1, 0, 0],
       [0, 0, 1],
       [1, 0, 0],
       [0, 1, 0],
       [0, 1, 0]])
```

## Textdaten

Beispiel für das Preprocessing von Textdaten: Zählen von Worten

```py
from sklearn.feature_extraction.text import CountVectorizer

sample = ['problem of evil',
          'evil queen',
          'horizon problem']

vectorizer = CountVectorizer()
vectorizer.fit(sample)
print(vectorizer.vocabulary_)
X = vectorizer.transform(sample)
print(X)
print(X.todense())
```

## Pipelines

Pipelines können aus mehreren transformierenden Algorithmen und einem vorhersagenden Algorithmus zusammengesetzt werden:

```py
from sklearn.pipeline import make_pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler

model = make_pipeline(
    SimpleImputer(strategy='mean'),
    StandardScaler,
    LinearRegression()
)
```

## Beispiel: Preprocessing von Textdaten (Newsgroups)

[Multinomial Naive Bayes - Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html#Multinomial-Naive-Bayes)

# Regression

## Lineare Regression

Bedeutet: Festlegen einer linearen Funktion, die die Datenpunkte bestmöglich approximiert (kleinste Quadratsumme)

## Lineare Regression - Beispiele

- Diabetes Vorhersage
- ([Radverkehr](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Example:-Predicting-Bicycle-Traffic))

# Polynomiale Regression

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
from sklearn.preprocessing import PolynomialFeatures
poly_model = make_pipeline(
    PolynomialFeatures(3),
    LinearRegression()
)

poly_model.fit(X, y)
```

Aufgabe: Vergleiche die Ergebnisse einer einfachen Linearen Regression mit der polynomialen Regression.

# Klassifizierung

## Klassifizierungsalgorithmen

- K-Nearest-Neighbors
- Logistische Regression
- Naive Bayes
- Support Vector Machine
- Entscheidungsbäume und Random Forests

Siehe auch: [classifier comparison von scikit-learn](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html)

## K-Nearest-Neighbors

Ein neuer Datenpunkt wird klassifiziert, indem seine nächsten Nachbarn betrachtet werden. Die bei diesen Nachbarn am häufigsten vorkommende Klasse wird auch für den Datenpunkt festgesetzt.

Die Anzahl `k` der betrachteten Nachbarn kann festgesetzt werden (Standardwert = 5)

Siehe auch: <https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html#sklearn.neighbors.KNeighborsClassifier>

## Logistische Regression

An einer Grenze zwischen zwei Klassen wird mit Hilfe einer _logistischen Funktion_ angegeben, wie groß die Wahrscheinlichkeit ist, dass der Datenpunkt zu der einen (bzw zu der anderen) Klasse gehört. Je nachdem, welche der Wahrscheinlichkeiten größer als 50% ist, wird die entsprechende Klasse zugewiesen.

Die logistische Funktion selbst wird intern mittels Regression bestimmt (daher der Name).

Beispiel: <https://scikit-learn.org/stable/auto_examples/linear_model/plot_logistic.html#sphx-glr-auto-examples-linear-model-plot-logistic-py>

## Naive Bayes

Für die bekannten Klassen werden Wahrscheinlichkeitsverteilungen angenommen (z.B. Normalverteilung, Multinomialverteilung). Diese Verteilungen werden aus den Trainingsdaten hergeleitet.

Für einen neuen Datenpunkt wird dann errechnet, unter welcher der Verteilungen er am ehesten auftreten würde.

Zwei wichtige Verteilungen sind die Normalverteilung (Gauß'sche Verteilung) für kontinuierliche Werte und die Multinomialverteilung für diskrete Werte (Ganzzahlen).

[Python Data Science Handbook - Naive Bayes](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html)

## Support Vector Machines

Einfachster Fall: Trennung von Klassen durch Geraden / Ebenen / Hyperebenen - diese Trenner sollen von den getrennten Punkten maximalen Abstand haben.

Durch Kernelfunktionen können die Grenzen auch andere Formen annehmen, z.B. die von Kegelschnitten für polynomiale Kernel vom Grad 2 oder anderen Kurven.

Siehe auch: <https://scikit-learn.org/stable/modules/svm.html>

[Python Data Science Handbook - Support Vector Machines](https://jakevdp.github.io/PythonDataScienceHandbook/05.07-support-vector-machines.html)

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

[Python Data Science Handbook - Decision Trees and Random Forests](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html)

## Klassifizierungsalgorithmen - Übersicht

Mögliche Algorithmen:

```py
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
```

<!--
```py
LogisticRegression(solver="liblinear", multi_class="auto")
SVC(gamma="scale")
RandomForestClassifier(n_estimators=100)
```
-->

## Beispiele zur Klassifizierung

- [Klassifizierung von Newsgroup-Postings (mittels Naive Bayes, logistischer Regression oder Decision Tree)](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html#Multinomial-Naive-Bayes)
- [Erkennen von Ziffern (Random Forest)](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html#Example:-Random-Forest-for-Classifying-Digits)

# Overfitting

## Overfitting

Mögliches Problem beim Lernen: Der Algorithmus ist zu flexibel und erkennt scheinbare Muster in zufälligen Schwankungen.

Algorithmen, die anfällig für Overfitting sind:

- Entscheidungsbäume
- Polynomiale Regression

## Overfitting - Lösungmöglichkeiten

- Einschränkung der Flexibilität (z.B. Grad des Polynoms, Tiefe des Entscheidungsbaums)
- Kombination mehrerer Entscheidungsbäume (Random Forest)
- "Bestrafung" großer Koeffizienten bei der polynomialen Regression (L2- und L1-Regularisierung)

Zur polynomialen Regression siehe: [Data Science Handbook - Regularization](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Regularization)

# Modellbewertung & Verbesserung

## Modellbewertung & Verbesserung

Um das bestmögliche Modell zu bestimmen:

- Testen mehrerer Algorithmen
- Testen mehrerer Parameter für den Algorithmus
- Testen, ob mehr Lerndaten zu besseren Ergebnissen führen

siehe [Python Data Science Handbook → Hyperparameters and Model Validation → Selecting the Best Model](https://jakevdp.github.io/PythonDataScienceHandbook/05.03-hyperparameters-and-model-validation.html#Selecting-the-Best-Model)

# Clustering

## Clustering

Beim Clustering handelt es sich um _unsupervised learning_. Solche Algorithmen haben keine Zieldaten (_y_), sondern suchen nur in den Ausgangsdaten nach einer bestimmten Struktur.

Ziel von Clustering ist es, in vorhandenen Daten Gruppierungen (Cluster) von Datenpunkten zu finden.

## Clustering

- _k-Means Clustering_
- _Gaussian Mixture Models_

## k-Means Clustering

Zum Verfahren: Es werden im n-dimensionalen Raum gewisse Clusterzentren bestimmt. Ein Datenpunkt wird zu jenem Cluster gezählt, zu dessen Zentrum er den geringsten Abstand hat.

Bestimmung der Clusterzentren:

Initialisierung: zufällige Festlegung der Zentren

Wiederholt:

- bestimmen der Zugehörigkeit jedes Datenpunktes basierend auf den Zentren
- neue Festlegung der Zentren als Mittel der ihm zugeordneten Punkte

Dieses Verfahren konvergiert.

[Python Data Science Handbook - k-Means Clustering](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html)

## k-Means Clustering

Beispiele:

- [Anwendung auf Ziffern](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html#Example-1:-k-means-on-digits)
- [Farbkomprimierung von Bildern](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html#Example-2:-k-means-for-color-compression)

# Resources

Pandas website: <https://pandas.pydata.org/>

Python Data Science Handbook: <https://jakevdp.github.io/PythonDataScienceHandbook/>

<!-- https://github.com/jakevdp/PythonDataScienceHandbook -->
