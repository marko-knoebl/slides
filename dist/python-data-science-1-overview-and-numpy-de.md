# Python und Data Science 1: Überblick und NumPy

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

- interaktives Python-Dokument (basierend auf IPython)
- Dateiformat mit Endung _.ipynb_
- kann Python Code, Ausgaben / Grafiken und Dokumentation / Notizen beinhalten

## Jupyter Interfaces

- _Jupyter Notebook_: webbasiertes Interface, das auf einem Server oder lokal laufen kann
- _JupyterLab_: Nachfolgeprojekt von _Jupyter Notebook_
- _VS Code_: unterstützt Jupyter notebooks ebenfalls

## Jupyter Notebook - VS Code

VS Code kann sich mit dem IPython-Kernel verbinden:

In der Befehlspalette von VS Code (via F1) suchen wir nach: _Python: Create New Blank Jupyter Notebook_

<!-- pip install ipykernel - will install ipython, jupyter-core, jupyter-client -->

## Jupyter Notebook - Anaconda

Starten: Eintrag _Jupyter Notebook_ im Startmenü / Befehl `jupyter notebook` im Terminal

Stoppen: _Quit_ im rechten oberen Eck der Ordneransicht (üblicherweise unter http&#x3A;//localhost:8888/tree)

Python-Pakete: _notebook_ oder _jupyterlab_

## Jupyter Notebook - online

kostelnlose online Jupyter Notebooks:

- Binder (begrenzte Sessions): <https://jupyter.org/try>
- <https://www.kaggle.com/notebooks>
- <https://colab.research.google.com> (Google Login erforderlich)

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

## Code schreiben und ausführen

Interface-Funktionalität (je nach Notebook-Typ verschieden):

- Zelle ausführen
- neu starten (vergisst bisherige Variablen und Zustand)
- alle Zellen ausführen / neu starten und alle Zellen ausführen
- Ausführung unterbrechen

## Code schreiben und ausführen

Auf die letzte Ausgabe zugreifen:

```py
print(_ * 3)
```

## Dokumentation via Markdown

Wir können Dokumentation über die standardisierte Sprache _Markdown_ hinzufügen:

Wechsle von _Code_ auf _Markdown_ und versuche den folgenden Code:

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

- `a3d.shape`: (2, 2, 2)
- `a3d.ndim`: 3
- `a3d.size`: 8

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

Beispiele im Dezimalsystem: 1/3, 1/7, π

Beispiele im Binärsystem: 1/10, 1/5, 1/3, π

Beispiel: `0.1 + 0.2` wird zu `0.30000000000000004` ausgewertet, wenn wir 64-bit floats verwenden

Beispiel: π + π wird zu `6.2` ausgewertet, wenn wir Dezimalzahlen mit 2 Stellen verwenden (besseres Ergebnis wäre `6.3`)

## Float

manche Operationen führen zu einem Verlust von Genauigkeit - z.B. Subtrahieren von nahe beieinanderliegenden Zahlen

Beispiel:

```
a = 0.001234567 (7 relevante Dezimalstellen)
b = 0.001234321 (7 relevante Dezimalstellen)

c = a - b
c = 0.000000246 (3 relevante Dezimalstellen)
```

## Float

Besondere Werte in IEEE 754:

- `inf` und `-inf` (unendliche Werte)
- `nan` (not-a-number: undefinierter / unbekannter Wert)

# Floats in IEEE 754

## Floats in IEEE 754

Speicherformat:

```txt
(-) 2^e * s
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

Die Zahlen _0.20000000_, _0.20000001_, ... _0.20000005_ als nächstgelegene _float32_ ausgedrückt:

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

Jedes NumPy Array kann nur Daten eines Typs enthalten (z.B. nur 64-bit floats oder nur bytes)

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

- _int8_: 256 (-128 bis +127)
- _int16_: 65,536 (-32768 bis +32767)
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

Summe entlang Achse 0 ("richtung unten")

```py
np.sum(a2d, axis=0)
```

Summe entlang Achse 1 ("richtung rechts")

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
- kinetic energy
- Schwerpunkt eines Dreiecks
- Sinus- und Kosinusfunktion - Wertetabelle
- dice rolls

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
a_with_nans[a_with_nans < 0] = np.nan
```

# NumPy Fortgeschritten

## Form von Arrays ändern

```py
a3d.ravel() # 1d-array
a3d.reshape(8) # 1d-array
a3d.reshape(2, 4) # 2x4 array
a3d.reshape(2, -1) # automatic second dimension
a2d.T # transposed
```

## Dimensionalität erhöhen

Hinzufügen einer extra Dimension der Länge 1: Verwandeln eines 2 x 2 Arrays in ein 2 x 2 x 1 Array:

```py
np.expand_dims(a2d, 2)
# [[[1], [2], [3]],
#  [[4], [5], [6]],
#  [[7], [8], [9]]]
```

Alternative:

```
a2d[:, :, np.newaxis]
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

## Matrix-Multiplikation / Array-Multiplikation

mittels des binären Operators `@`

```py
a = np.array([1, 1])

m = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(a @ m)
# array([0.   , 1.414])
```

## Matrix-Multiplikation

Rotation verschiedener Punkte um 45° gegen den Uhrzeigersinn:

```py
points = np.array([[0, 0], [0, 1], [1, 1], [1, 0]])

m = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(points @ m)
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
