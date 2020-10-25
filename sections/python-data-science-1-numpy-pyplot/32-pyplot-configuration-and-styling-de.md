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
