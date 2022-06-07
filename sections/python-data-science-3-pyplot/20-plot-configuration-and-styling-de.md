# Pyplot: Konfiguration und Styling

## Stile

Vorgefertigte Stylesheets verwendbar mittels:

```py
plt.style.use("stylename")
```

siehe `plt.style.available` für eine Liste von verfügbaren Stilen (<a href="https://matplotlib.org/stable/gallery/style_sheets/style_sheets_reference.html" target="_blank">online Referenz</a>)

## Stile von Graphen

Beispiel zum Styling eines Graphen:

```py
plt.plot(x, y, color="C0", marker="X", linestyle="dashed")
```

## Stile von Graphen

mögliche Farbangaben:

- Theme-Farbe (`C0` ... `C9`)
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

Langform:

```py
plt.plot(x, y, color="C0", marker="X", linestyle="dashed")
```

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

## Eigene Stylesheets

```py
plt.style.use("./mystyle.mplstyle")
```

```txt
# general configuration
axes.facecolor: EAEAF2

# line plot configuration
lines.linewidth: 1.5
lines.marker: o
lines.markersize: 4

# box plot configuration
boxplot.whiskers: 0, 100
```

## Eigene Stylesheets

eigene Theme-Farben (C0 - C10):

```txt
axes.prop_cycle: cycler('color', ['4C72B0', '55A868', 'C44E52', '8172B2', 'CCB974', '64B5CD'])
```

## Ressourcen

- [Python Data Science Handbook: Simple Line Plots](https://jakevdp.github.io/PythonDataScienceHandbook/04.01-simple-line-plots.html)
- [list of Pyplot functions](https://matplotlib.org/api/pyplot_summary.html)
