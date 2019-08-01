# Figure Objekte

## Figure Objekte

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
