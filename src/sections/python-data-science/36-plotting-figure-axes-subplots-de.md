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

Aufgabe: Skript, das eine PNG-Datei eines Graphen der aktuellen CPU-Last erstellt und jede Sekunde aktuelisiert. (verwende hierzu das PIP-Paket _psutil_)

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
