# Artists

## Artists

Artist = base class for elements in a figure

## Artists

example: creating an artist (rectangle) explicitly

```py
r = plt.Rectangle((0.25, 0.75), 0.1, 0.1, color="C0")

ax = plt.gca()
ax.add_artist(r)
```

## Artists

examples: creating primitive _artists_:

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
