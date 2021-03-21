# Pyplot

# Plotting

### Datenvisualisierung

## Plotting

Grundlegende (low-level) Library für Plotting: _matplotlib_

Abstrahierende Interfaces zu grundlegenden matplotlib Funktionen:

- _pyplot_ (enthalten in matplotlib, ähnlich zum matlab Plotinterface)
- _pandas_ Plotfunktionen (basieren auf pyplot)
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

[Referenz verfügbarer Stile](https://matplotlib.org/stable/gallery/style_sheets/style_sheets_reference.html)

## Stile von Graphen

Beispiel zum Styling eines Graphen:

```py
plt.plot(x, y, color="C0", marker="X", linestyle="dashed")
```

## Stile von Graphen

mögliche Farbangaben:

- Theme-Farbe (`C0` ... `C10`)
- Farbname (`green` / `lightblue` / ...)
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

## Ressourcen

- [Python Data Science Handbook: Simple Line Plots](https://jakevdp.github.io/PythonDataScienceHandbook/04.01-simple-line-plots.html)
- [list of Pyplot functions](https://matplotlib.org/api/pyplot_summary.html)

# Pyplot API

## Pyplot API

siehe:

<https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.html>

# Gundlegende Plots

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

plt.pie([3, 10, 17, 9], startangle=90, counterclock=False)
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

## Scatter Plot 1

Scatter Plot der _petal length_ und _petal width_

Wir plotten die Datenpunkte in 50-er Gruppen in drei verschiedenen Farben

## Scatter plot 2

Scatter Plot aller vier Iris-Eigenschaften

Wir verwenden Farbe und Größe, um _sepal length_ und _sepal width_ zu visualisieren

## Histogramm und Boxplot

Histogramm der _petal length_

Boxplot für alle vier Abmessungen

## Scatter Plot: Lösungen

```py
plt.plot(petal_length[:50], petal_width[:50], ".",
         label="setosa")
plt.plot(petal_length[50:100], petal_width[50:100], ".",
         label="versicolor")
plt.plot(petal_length[100:150], petal_width[100:150], ".",
         label="virginica")

plt.legend()
```

```py
plt.scatter(petal_length, petal_width,
            sepal_length*10, sepal_width)
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
    labels=["petal length", "petal width", "sepal length",
            "sepal width"]
)
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

# Anzeigen von Bildern

## Anzeigen von Bildern

Ein Graustufenbild mit 3x3 Pixeln:

```py
image = np.array([[0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8]])
plt.imshow(image, cmap="gray")
```

ein RGB-Bild mit 2x2 Pixeln:

```py
colors = np.array([[[255, 0, 0], [0, 255, 0]],
                   [[0, 0, 255], [0, 0, 0]]])
plt.imshow(colors)
```
