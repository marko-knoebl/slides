# Pyplot: figure, axes & subplots

## Figure & axes

Figure = entire drawing

Axes = coordinate system that can display data

A figure can contain multiple axes objects next to one another

## Figure

Every drawing in _pyplot_ is created via a _figure_ object (the figure is usually created automatically when plotting)

Manually creating a figure of size 800 x 600 px (assuming 100 dpi):

```py
fig = plt.figure(
    figsize=(8, 6),
    facecolor="#eeeeee"
)
```

This will automatically become the active figure.

## Figure objects

exporting the active figure:

```py
plt.savefig("myplot.png")
plt.savefig("myplot.svg")
```

## Axes objects

Creating and activating new axes objects:

```py
# axes in the bottom left
ax1 = plt.axes(0, 0, 0.5, 0.5)
plt.plot([0, 1, 2], [0, 1, 0])

# axes in the top right
ax2 = plt.axes(0.5, 0.5, 0.5, 0.5)
plt.plot([0, 1, 2], [0, 1, 0])
```

## Axes objects

getting the current active axes object:

```py
# gca = get current axes
active_axes = plt.gca()
```

making an axes object the active axes:

```py
# sca = set current axes
plt.sca(ax1)
```

## Axes objects

creating axes with the the same x axis and a new y axis:

```py
ax2 = ax1.twinx()
```

## Axes objects

automatic creation of multiple _Axes_ objects in a grid (here: 2 rows, 3 columns):

```py
fig, ax = plt.subplots(2, 3)

ax0 = ax[0, 0]
ax1 = ax[0, 1]
ax5 = ax[1, 2]
```

## Axis and Axes

naming to keep in mind:

- `plt.axis`: e.g. for setting scaling
- `plt.axes`: for creating a new coordinate system

actual meaning (from Latin): _axis_ = singular, _axes_ = plural
