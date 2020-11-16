# Python & Data Science

## Präsentationen

<https://marko-knoebl.github.io/slides/>

## Ihr Trainer

Marko Knöbl

- aus Wien
- ehemaliger Mathematiklehrer
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

## Python Pakete für Data Science

Installation der wichtigsten Pakete in einer vorhandenen Python-Umgebung:

```bash
pip install jupyter numpy pandas matplotlib sklearn keras
```

Bemerkung: Pakete wie _NumPy_ benötigen oft etwas Zeit, bis sie für eine neue Python-Version verfügbar sind

## Anaconda

_Anaconda_ = Python Distribution, die viele vorkompilierte Pakete und Entwicklerwerkzeuge enthält

Benötigt ~3GB Platz auf der Festplatte

## Installation von Anaconda

Download von <https://www.anaconda.com/products/individual>

Unter Windows sollte der Installationspfad keine Leerzeichen enthalten (Empfehlung: `C:/anaconda`) - siehe <https://docs.anaconda.com/anaconda/user-guide/faq/#distribution-faq-windows-folder>

## Conda

_Conda_ = Environment- und Paketmanager

Erlaubt das Installieren verschiedener Versionen von Python, von Python-Paketen und anderen Abhängigkeiten

insbesondere hilfreich für externe Libraries, die nicht in Python geschrieben sind und kompiliert werden müssen

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

In der Befehlspalette von VS Code (via F1) suchen wir nach: _Python: Create New Blank Jupyter Notebook_

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

Erstellen eines 1-dimensionalen Arrays:

```
a1d = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
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
# or
np.full((2, 6), 0.0)
```

Ein 3x3 Array mit Zufallswerten:

```py
# floats between 0 and 1:
np.random.random((3, 3))
# integers between 1 and 6:
np.random.randint(1, 7, (3, 3))
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

# Auswählen von Array-Einträgen

## Auswählen von Array-Einträgen

```py
a1d[0] # 0
a2d[0, 1] # 2
a2d[0, :] # [1, 2, 3]
a2d[:, 0] # [1, 4, 7]
```

bei 2D-Arrays: _[Zeilenindex, Spaltenindex]_

im Allgemeinen:

- letzter Index: zählt rightung rechts
- vorletzter Index (sofern er existiert): zählt richtung unten

## Auswählen von Array-Einträgen

```py
a2d[0, :] # [1, 2, 3]
```

Kurzform:

```py
a2d[0] # [1, 2, 3]
```

## Slices

```py
a1d[:3] # [0, 1, 2]
a1d[3:6] # [3, 4, 5]
a1d[6:] # [6, 7, 8, 9]
a1d[0:8:2] # [0, 2, 4, 6]
```

```py
a1d[3:0:-1] # [3, 2, 1]
a1d[::-1] # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

```py
a2d[1:, :] # [[5, 6, 7], [8, 9, 10]]
```

gleiches funktioniert mit Python-Listen

# Operationen auf Arrays

## Operatoren

Operatoren werden elementweise angewendet:

```py
a = np.array([1, 2, 3])
b = np.array([2, 2, 2])

-a
# np.array([-1, -2, -3])
a + b
# np.array([3, 4, 5])
a * b
# np.array([2, 4, 6])
```

## Vergleiche

Elementweises Vergleichen von Arrays:

```py
a < b
# np.array([True, False, False])
a == b
# np.array([False, True, False])
```

Achtung: `a == b` kann nicht sinnvoll in if-Abfragen verwendet werden - verwende `np.array_equal(a, b)`.

## Operatoren

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

## Elementweise Funktionen

NumPy bietet spezielle Funktionen, die elementweise angewendet werden:

```py
a = np.array([0, 1, 2, 3])

print(np.sin(a))
# [0.0, 0.84147098, 0.9... ]
print(np.sqrt(a))
# [0.0, 1.0, 1.414... ]
```

## Elementweise Funktionen

- `abs`
- `sin`
- `cos`
- `sqrt`
- `exp`
- `log`
- `log10`
- ...

## Aggregationen

_Aggregationen_ berechnen beispielsweise Werte zu jeder Zeile / jeder Spalte oder zu einem ganzen Array

Gesamtsumme:

```py
np.sum(a2d)
```

Summe entlang Achse 0 ("vertikal")

```py
np.sum(a2d, axis=0)
```

Summe entlang Achse 1 ("horizontal")

```py
np.sum(a2d, axis=1)
```

## Aggregationen

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

Gegeben sind die Massen und Geschwindigkeiten einiger Körper; bestimme die kinetische Energie aller einzelnen Körper und die gesamte kinetische Energie aller Körper zusammen

```py
masses = np.array([1.2, 2.2, 1.5, 2.0])
velocities = np.array([12.0, 14.0, 14.0, 7.5])
```

Formel: E = m\*v^2 / 2

## Übungen

Gegeben sind die Koordinaten von Eckpunkten eines Dreiecks. Bestimme den Schwerpunkt (arithmetisches Mittel der Eckpunkte).

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
          [0.0, 0.0099998, 0.0199999, ...],
          [1.0, 0.99995, 0.99980, ...]])
```

Überprüfe anhand der Daten, ob näherungsweise gilt: _sin(x)^2 + cos(x)^2 = 1_

## Übungen

Simuliere 1 Million Mal würfeln mit je 10 Würfeln

# Numerische Typen

## Numerische Typen

- **int**
- **float**
- decimal

## Int

ein _int8_ besteht aus 8 bits und kann 256 verschiedene Zahlen darstellen

Integer mit verschiedenen bit-Größen können unterschiedliche Zahlen darstellen:

- _int8_: 256 Zahlen (-128 bis +127)
- _int16_: 65,536 Zahlen (-32,768 bis +32,767)
- _int32_: 4,294,967,296 Zahlen
- _int64_: 18,446,744,073,709,551,616 Zahlen

## Int

Ein _unsigned integer (uint)_ kann nur nicht-negative Zahlen repräsentieren

z.B. bei _uint8_: 0 bis 255

## Float

Standard für die Repräsentation reeller Zahlen in Computern: _IEEE 754_

- **binäre Gleitkommazahlen**
- dezimale Gleitkommazahlen

## Float

wichtige Gleitkommatypen:

- _float32_ (_single_): exakt für ~7 Dezimalstellen
- _float64_ (_double_): exakt für ~16 Dezimalstellen

## Float

**Rundungsfehler**: manche Zahlen können nicht als Gleitkommazahlen dargestellt werden, sie sind immer Annäherungen

Beispiele im Dezimalsystem: 1/3, 1/7

Beispiele im Binärsystem: 1/10, 1/5, 1/3

Beispiel: `0.1 + 0.2` wird zu `0.30000000000000004` ausgewertet, wenn wir 64-bit floats verwenden

## Float

Besondere Werte in IEEE 754:

- `inf` und `-inf` (unendliche Werte)
- `nan` (not-a-number: undefinierter / unbekannter Wert)

# Floats in IEEE 754

## Floats in IEEE 754

Speicherformat:

```txt
(-) s * 2^e
```

- s ... _Signifikand_ / _Koeffizient_
- e ... _Exponent_

## Beispiele

pi als _float32_:

`0 10000000 10010010000111111011011`

2\*pi als _float32_:

`0 10000001 10010010000111111011011`

pi/2 als _float32_:

`0 01111111 10010010000111111011011`

## Beispiele

Die Zahlen _0.20000000_ bis _0.20000005_ als nächstgelegene _float32_ ausgedrückt:

- `0 01111100 10011001100110011001101`
- `0 01111100 10011001100110011001101`
- `0 01111100 10011001100110011001110`
- `0 01111100 10011001100110011001111`
- `0 01111100 10011001100110011001111`
- `0 01111100 10011001100110011010000`

## Beispiele

Avogadro-Konstante (6.02214076 \* 10^23):

`0 11001101 11111110000110001000001`

Planck-Länge (1.61625518 \* 10^-35):

`0 00001011 01010111101011110110100`

## Overflow und Underflow

größte _float32_-Zahl:

`0 11111110 11111111111111111111111`

`~ 2^127.9999 ~ 3.403e38`

kleinste positive _float32_ Zahl mit voller Präzision:

`0 00000001 00000000000000000000000`

`= 2^-126 ~ 1.175e-36`

größere Zahlen ergeben `inf`

kleinere Zahlen verlieren Genauigkeit oder ergeben `0.0`

## Besondere Werte

inf: `0 11111111 00000000000000000000000`

nan: `0 11111111 00000000000000000000001`

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
a = np.array([1, 2, 3, 4], dtype='int64')
b = np.array([1, 2, 3, 4], dtype='uint8')
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

## Integer Typen

Ein _int8_ kann 2^8 (256) verschiedene Zahlen repräsentieren

Anzahlen für andere Integertypen:

- _int8_: 256 (-128 to +127)
- _int16_: 65,536 (-32768 to +32769)
- _int32_: 4,294,967,296
- _int64_: 18,446,744,073,709,551,616

## Integer Typen

```py
np.array([127, 128, 129], dtype="int8")
```

Output (Integer Overflow):

```py
array([127, -128, -127])
```

## Float Typen

Genauigkeit für float Typen:

- _flaot16_: ~3 Dezimalstellen
- _float32_: ~7 Dezimalstellen
- _float64_: ~16 Dezimalstellen

Floats haben ebenfalls einen Minimal- und Maximalwert

## Float Typen

float16: genau für etwa 3 Dezimalstellen

```py
np.array([2.71828, 0.271828], dtype="float16")
# array([2.719 , 0.2717])
```

## Float Typen

float16: overflow

```py
np.array([65450, 65500, 65550], dtype="float16")
# array([65440, 65500, inf])
```

float16: underflow

```py
np.array(
    [3.141e-5, 3.141e-6, 3.141e-7, 3.141e-8, 3.141e-9],
    dtype="float16"
)
# array([3.14e-05, 3.16e-06, 2.98e-07, 5.96e-08, 0.00e+00])
```

# Fortgeschrittenes Indexing und Filtering

## Boolean Indexing

```py
a = np.array([4.1, 2.7, -1, 3.8, -1])

a_valid = a > 0
# array([True, True, False, True, False])
a_filtered = a[a_valid]
# array([4.1, 2.7, 3.8])

a_invalid = a < 0
a_with_nans = a.copy()
a_with_nans[a_invalid] = np.nan
# array([4.1, 2.7, nan, 3.8, nan])
```

## Boolean Indexing (Kurzform)

```py
a = np.array([4.1, 2.7, -1, 3.8, -1])

a_filtered = a[a > 0]

a_with_nans = a.copy()
a_with_nans[a < 0] = np.nan
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

Hinzufügen einer extra Dimension der Länge 1: Verwandeln eines 2 x 2 Arrays in ein 2 x 2 x 1 Array:

```py
array_2d = np.array([[1, 2], [3, 4]])
array_3d = np.expand_dims(array_2d, 2)
# [[[1], [2]], [[3], [4]]]
```

Alternative:

```
array_3d = array_2d[:, :, np.newaxis]
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

entlang einer Achse aneinanderfügen (standardmäßig Achse 0):

```py
np.concatenate([a1d, a1d])
np.concatenate([a2d, a2d])
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
points = np.array([[0, 0], [0, 1], [1, 1], [1, 0]])

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
```

In Jupyter werden Plots automatisch angezeigt

wenn wir _nicht_ Jupyter verwenden zusätzlich:

```
plt.show()
```

## Einfacher Plot mit pyplot

Ergebnis:

<img src="assets/pyplot-simple-graphs.png" alt="Simple plot in pyplot" />

## Beispiel

Wir erstellen einen Plot, der die Sinus- und Kosinusfunktion im Intervall von _0_ bis _2π_ zeigt.

## Beispiel

```py
x = np.linspace(0, 2*3.1415, 200)

plt.plot(x, np.sin(x))
plt.plot(x, np.cos(x))
```

## Übung

Erstelle eine Python-Funktion, die eine _Gaußsche Glockenkurve_ basierend auf ihren Parametern _mu_ und _sigma_ zeichnet:

```py
plot_gaussian_function(mu, sigma)
```

# Pyplot: Konfiguration und Styling

## Stile

Vorgefertigte Stylesheets verwendbar mittels:

```py
plt.style.use("stylename")
```

[Referenz verfügbarer Stile](https://matplotlib.org/3.3.0/gallery/style_sheets/style_sheets_reference.html)

## Stile von Graphen

Beispiel zum Styling eines Graphen:

```py
plt.plot(x, y, color="C0", marker="X", linestyle="dashed")
```

## Stile von Graphen

mögliche Farbangaben:

- Theme-Farbe (`C0` ... `C10`)
- Farbname (`green` / `lighblue` / ...)
- Kurzname (`r` / `g` / `b` / `c` / `m` / `y` / `k`)
- Hex-Code (z.B. `#FFAA00`)
- RGB-Tupel (z.B. `(1, 0.7, 0)`)

## Stile von Graphen

mögliche Lininenstile:

- `"none"` oder `""`
- `"solid"` oder `"-"`
- `"dashed"` oder `"--"`
- `"dotted"` oder `":"`
- `"dashdot"` oder `"-."`

## Stile von Graphen

mögliche Marker:

- `""` (keine)
- `"."` (kleiner Punkt)
- `"o"` (großer Punkt)
- `"s"` (Quadrat)
- `"X"`
- `"+"`
- `","` (Pixel)
- ...

## Stile von Graphen

wichtige Parameter:

- `color`
- `linestyle`
- `linewidth`
- `marker`
- `markersize`

## Stile von Graphen

Kurzform (weniger flexibel):

```py
plt.plot(x, y, "C0X--")
```

## Label

- `plt.title("Trigonometric functions")`
- `plt.xlabel("x (radians)")`
- `plt.ylabel("y")`

## Label

Label für einzelne Graphen:

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

## Ressource

siehe [Python Data Science Handbook: Simple Line Plots](https://jakevdp.github.io/PythonDataScienceHandbook/04.01-simple-line-plots.html)

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

## Säulen- und Balkendiagramm

```py
plt.bar(x, y, width=0.6)
plt.bar(x, y, width=1, align="edge")

plt.bar(
    [0, 1, 2],
    [9.6, 17, 9.8],
    tick_label=["China", "Russia", "USA"]
)

# horizontal
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
plt.scatter(x, y, s=sizes, c=colors)
```

## Histogramm

Zählt die Häufigkeit von bestimmten Werten / Wertebereichen

```py
plt.hist(many_simulated_dice_rolls_with_10_dice)
```

```py
plt.hist(
    many_simulated_dice_rolls_with_10_dice,
    bins=[15, 20, 25, 30, 35, 40, 45, 50, 55]
)
```

```py
plt.hist(
    many_simulated_dice_rolls_with_10_dice,
    density=True
)
```

## Box Plot

Visualisierung von statistischen Daten einer Verteilung (Minimum, Median, Maximum, ...)

```py
plt.boxplot(dice_simulation_1)
```

```py
plt.boxplot(
    [dice_simulation_1, dice_simulation_2],
    labels=["simulation 1", "simulation 2"]
)
```

## Tortendiagramm

```py
plt.pie([3, 10, 17, 9], labels=["a", "b", "c", "d"])

plt.pie([3, 10, 17, 9], explode=[0, 0, 0, 0.1])
```

# Visualisierung von Iris-Daten

## Iris Datensatz

**Iris Datensatz**: Abmessungen von 150 Iris-Blumen (50 vom Typ _Iris Setosa_, 50 vom Typ _Iris versicolor_ und 50 vom Typ _Iris Virginica_)

Einträge: _sepal length_, _sepal width_, _petal length_, _petal width_

## Laden der Daten

```py
import pandas as pd
iris = pd.read_csv(
    "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
)
# get all rows and the first four columns as numpy data
iris = iris.iloc[:,:4].to_numpy()

sepal_length = iris[:,0]
sepal_width = iris[:,1]
petal_length = iris[:,2]
petal_width = iris[:,3]
```

## Scatter Plot I

Scatter Plot der _petal length_ und _petal width_

Wir plotten die Datenpunkte in 50-er Gruppen in drei verschiedenen Farben

## Scatter plot II

Scatter Plot aller vier Iris-Eigenschaften

Wir verwenden Farbe und Größe, um _sepal length_ und _sepal width_ zu visualisieren

## Histogramm und Boxplot

Histogramm der _petal length_

Boxplot für alle vier Abmessungen

## Scatter Plot: Lösungen

```py
plt.plot(petal_length[:50], petal_width[:50], ".", label="setosa")
plt.plot(petal_length[50:100], petal_width[50:100], ".", label="versicolor")
plt.plot(petal_length[100:150], petal_width[100:150], ".", label="virginica")

plt.legend()
```

```py
plt.scatter(petal_length, petal_width, sepal_length*10, sepal_width)
```

## Histogramm und Boxplot: Lösungen

```py
plt.hist(
    petal_length,
    bins=np.arange(0.5, 7.5, 0.5)
)
```

```py
plt.boxplot(
    [petal_length, petal_width, sepal_length, sepal_width],
    labels=["petal length", "petal width", "sepal length", "sepal width"]
)
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

<!-- list separator -->

- [Python Data Science Handbook: Density and Contour Plots](https://jakevdp.github.io/PythonDataScienceHandbook/04.04-density-and-contour-plots.html)
- [Python Data Science Handbook: Three-Dimensional Plotting in Matplotlib](https://jakevdp.github.io/PythonDataScienceHandbook/04.12-three-dimensional-plotting.html)

## Plotten der Dichtefunktion einer Verteilung

- (Histogramm)
- (Box Plot)
- KDE (Kernel Density Estimation) - pandas, seaborn
- Violin Plot (Box Plot + KDE) - seaborn
- 2D Histogramm - pyplot (hist2d, hexbin)
- 2D KDE - seaborn

siehe [Python Data Science Handbook: Histograms, Binnings, and Density](https://jakevdp.github.io/PythonDataScienceHandbook/04.05-histograms-and-binnings.html)

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
