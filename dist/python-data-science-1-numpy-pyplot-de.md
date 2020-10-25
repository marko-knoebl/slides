# Python & Data Science

## Präsentationen

<https://marko-knoebl.github.io/slides/>

## Ihr Trainer

Marko Knöbl

- aus Wien
- emaliger Mathematiklehrer
- Programmierthemen:
  - JavaScript, TypeScript und React
  - Python, Data Science

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

# Jupyter und IPython

## IPython

IPython = Fortgeschrittene interaktive Python Konsole, beinhaltet u.a. Autovervollständigung

## Jupyter Notebooks

Jupyter notebook = Dateiformat (_.ipynb_), das ein interaktives Python-Dokument repräsentiert, in dem Eingabezellen einzeln ausgewertet werden können; die Interaktivität basiert auf IPython

## Jupyter Interfaces

- _Jupyter Notebook_: webbasiertes Interface, das auf einem Server oder lokal laufen kann
- _JupyterLab_: Nachfolgeprojekt von _Jupyter Notebook_
- _VS Code_: unterstützt Jupyter notebooks ebenfalls

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

## Jupyter Notebooks - VS Code

wir installieren _ipykernel_ und seine Abhängigkeiten (_ipython_, _jupyter-core_, _jupyter-client_):

<!-- will install ipython, jupyter-core, jupyter-client -->

```bash
pip install ipykernel
```

In der Befehlspalette von VS Code (via F2) suchen wir nach: _Python: Create New Blank Jupyter Notebook_

## Jupyter Notebooks - lokal

Starten: Eintrag _Jupyter Notebook_ im Startmenü / Befehl `jupyter notebook` im Terminal

Stoppen: _Quit_ im rechten oberen Eck der Ordneransicht (üblicherweise unter http&#x3A;//localhost:8888/tree)

Python-Pakete: _notebook_ oder _jupyterlab_

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

In IPython gibt es nummerierte Eingaben, z.B. `[1]`

Während eine Eingabe ausgewertet wird, wird `[*]` angezeigt

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

Zelle ausführen oder verlassen, um das Resultat anzuzeigen, doppelklicken zum erneuten Editieren

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
a2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
```

Ausgabe:

```py
array([[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]])
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
np.full((2, 6), 0.0)
```

Ein 3x3 Array mit Zufallswerten:

```py
np.random.random((3, 3))
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
a2d[:, 0] # [1, 4, 7]
```

## Operationen auf Arrays

Auswählen von Einträgen:

```py
a2d[1:, 1:] # [[5, 6], [8, 9]]
a2d[1, ::-1] # [6, 5, 4]
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
print(np.nan)
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
a = np.array([-1, 3, -2, 1])
a_is_pos = a > 0
# array([False, True, False, True])
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

## Einfacher Plot mit pyplot

Ergebnis:

<img src="assets/pyplot-simple-graphs.png" alt="Simple plot in pyplot" />

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
plt.plot(x, y, "C0X--")
```

Langform:

```py
plt.plot(x, y, color="C0", marker="X", linestyle="dashed")
```

In der Langform sind genauere Farb- und Größenangaben möglich

## Stile von Graphen

mögliche Farbangaben:

- Theme-Farbe (`C0` ... `C10`)
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
- `"X"`
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

Gleiche Einheitengrößen und Beschränkung der Achsen auf verwendete Datenbereiche:

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

## Übung: Sinus und Kosinus mit erweiterten Optionen

mögliches Ergebnis:

<img src="assets/pyplot-sine-cosine-advanced.png" alt="Advanced plot of sine and cosine" />

## Übung: Sinus und Kosinus mit erweiterten Optionen

```py
import matplotlib.pyplot as plt
import numpy as np

plt.style.use("seaborn")

x = np.linspace(0, 2*np.pi, 100)
sin = np.sin(x)
cos = np.cos(x)
plt.plot(x, sin, "C0--", label="sin(x)")
plt.plot(x, cos, "C1:", label="cos(x)")

pi_multiples = np.array([0, 0.5, 1, 1.5, 2]) * np.pi
sin_points = np.sin(pi_multiples)
cos_points = np.cos(pi_multiples)
plt.plot(pi_multiples, sin_points, "C0o")
plt.plot(pi_multiples, cos_points, "C1o")

plt.title("Trigonometric functions")
plt.xlabel("x (radians)")
plt.xticks(np.linspace(0, 2*np.pi, 5))
plt.legend()
plt.axis("scaled")
```

# Pyplot: Gundlegende Plots

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

# Weitere Plots

## Weitere Plots

- Plotten von Datenpunkten mit mehr als 2 Merkmalen
- Plotten von z = f(x, y)
- Plotten der Dichtefunktion einer Verteilung (1D und 2D)

## Plotten von Datenpunkten mit mehr als 2 Merkmalen

- erweiterter Scatter Plot (Größe, Farbe) - pyplot, pandas, seaborn
- Scatter Matrix - pandas, seaborn

## Plotten von z = f(x, y)

- Contour Plots - pyplot, pandas, seaborn
- 3D Plots - matplotlib

## Plotten der Dichtefunktion einer Verteilung

- (Histogramm)
- (Box Plot)
- KDE (Kernel Density Estimation) - pandas, seaborn
- Violin Plot - seaborn
- 2D Histogramm - pyplot (hist2d, hexbin)
- 2D KDE - seaborn

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
