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

exporting a figure:

```py
fig.savefig("myplot.png")
fig.savefig("myplot.svg")
```

## Figure objects

Task: Script that generates a graph of the current CPU load and updates it every second (use the PIP package _psutil_)

## Axes objects

Getting the active _axes_ object:

```py
ax = plt.gca() # get current axes
```

The Methods of `plt` that we've previously seen call methods of the active _Axes_ object in the background:

```py
ax.plot(...)
ax.set_title(...)
ax.set_xlabel(...)
ax.legend()
ax.set_aspect("equal")
```

## Axes objects

Task: Create a sine and cosine plot via _Axes_

## Axis and Axes

naming to keep in mind:

- `plt.axis`: e.g. for setting scaling
- `plt.axes`: for creating a nex coordinate system

actual meaning (from Lating): _axis_ = singular, _axes_ = plural

## Subplots

Creating multiple _Axes_ objects in a grid (here: 2 rows, 3 columns):

```py
fig, ax = plt.subplots(2, 3)

ax0 = ax[0, 0]
ax1 = ax[0, 1]
ax5 = ax[1, 2]
```
