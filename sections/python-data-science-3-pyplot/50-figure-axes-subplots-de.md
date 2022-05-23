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

Exportieren der aktiven Figure:

```py
plt.savefig("myplot.png")
plt.savefig("myplot.svg")
```

## Axes Objekte

Erstellen und aktivieren neuer Axes Objekte:

```py
# axes in the bottom left
ax1 = plt.axes(0, 0, 0.5, 0.5)
plt.plot([0, 1, 2], [0, 1, 0])

# axes in the top right
ax2 = plt.axes(0.5, 0.5, 0.5, 0.5)
plt.plot([0, 1, 2], [0, 1, 0])
```

## Axes Objekte

Das aktive _Axes_-Objekt abfragen:

```py
# gca = get current axes
active_axes = plt.gca()
```

Ein _Axes_-Objekt zum aktiven machen:

```py
# sca = set current axes
plt.sca(ax1)
```

## Axes Objekte

Erstellen eines neuen _Axes_-Objekts mit gleicher x-Achse und neuer y-Achse:

```py
ax2 = ax1.twinx()
```

## Subplots

automatisches Erstellen mehrerer Axes-Objekte in einem Raster (hier: 2 Zeilen, 3 Spalten):

```py
fig, ax = plt.subplots(2, 3)

ax0 = ax[0, 0]
ax1 = ax[0, 1]
ax5 = ax[1, 2]
```

## Axis und Axes

Achtung unglückliche Namensvergabe:

- `plt.axis`: z.B. zum Einstellen der Skalierung
- `plt.axes`: zum Erstellen eines neuen Koordinatensystems

Eigentliche Bedeutungen aus dem Lateinischen / Englischen: _axis_ = Achse, _axes_ = Achsen
