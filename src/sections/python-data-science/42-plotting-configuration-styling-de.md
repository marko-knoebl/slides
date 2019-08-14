# Konfiguration und Styling

## Stile

Vorgefertigte Stylesheets verwendbar mittels:

```py
plt.style.use("stylename")
```

Für Demos verfügbarer Stile siehe:

https://matplotlib.org/3.1.0/gallery/style_sheets/style_sheets_reference.html

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

## Label

- `plt.title("Trigonometric functions")`
- `plt.xlabel("x (radians)")`
- `plt.ylabel("y")`

## Label

Label für verschiedene Funktionen:

```py
plt.plot(x, np.sin(x), label='sin(x)')
plt.plot(x, np.cos(x), label='cos(x)')

plt.legend()
```

## Achsenlimits und Skalierung

Bestimmten Ausschnitt anzeigen:

```py
plt.xlim(-0.1, 0.1)
plt.ylim(-0.1, 0.1)
```

Gleiche Einheitengröße auf beiden Achesn:

```py
plt.axis("equal")
```

Ansicht einpassen (ohne Abstand zum Rand):

```py
plt.axis("tight")
```
