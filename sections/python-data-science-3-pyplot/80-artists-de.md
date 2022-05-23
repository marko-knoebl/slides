# Artists

## Artists

Artist = Base Class für Elemente in einer _figure_

## Artists

Beispiel: explizites Erstellen eines Artists (Rechteck)

```py
r = plt.Rectangle((0.25, 0.75), 0.1, 0.1, color="C0")

ax = plt.gca()
ax.add_artist(r)
```

## Artists

Beispiele: Erstellen einfacher Artists

```py
r = plt.Rectangle((0.25, 0.75), 0.1, 0.1, color="C0")
c = plt.Circle((0.75, 0.75), 0.1, color="C1")
p = plt.Polygon(
    [[0.2, 0.2], [0.5, 0.1], [0.8, 0.2]],
    color="C2",
)
l = plt.Line2D(
    (0.5, 0.5), # x coordinates
    (0.25, 0.75), # y coordinates
    color="C3",
)
t = plt.Text(0, 0, "Hello!", size=40, color="C4")
```
