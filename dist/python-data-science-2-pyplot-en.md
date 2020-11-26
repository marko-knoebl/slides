# Python and Data Science 2: Pyplot

# Plotting

### Data visualization

## Plotting

Basic (low-level) library for plotting: _matplotlib_

Higher-level interfaces:

- _pyplot_ (contained in matplotlib, similar to matlab's plotting interface)
- _pandas_ plotting functions
- _seaborn_

## Simple plot with pyplot

```py
import numpy as np
import matplotlib.pyplot as plt

x = np.array([0, 1, 2, 3])

y1 = x*2
y2 = x**2

plt.plot(x, y1)
plt.plot(x, y2)
```

In Jupyter plots are shown automatically

In a regular terminal / program:

```py
plt.show()
```

## Simple plot with pyplot

results:

<img src="assets/pyplot-simple-graphs.png" alt="Simple plot in pyplot" />

## Example

We'll create a plot that shows the sine and cosine functions in the interval from _0_ to _2π_

## Example

```py
x = np.linspace(0, 2*3.1415, 200)

plt.plot(x, np.sin(x))
plt.plot(x, np.cos(x))
```

## Exercise

Create a Python function that plots a _gaussian function_ based on its parameters _mu_ and _sigma_:

```py
plot_gaussian_function(mu, sigma)
```

# Pyplot: Configuration and Styling

## Styling

Predefined stylesheets are available via:

```py
plt.style.use("stylename")
```

[Reference of available styles](https://matplotlib.org/3.3.0/gallery/style_sheets/style_sheets_reference.html)

## Styling graphs

graph styling example:

```py
plt.plot(x, y, color="C0", marker="X", linestyle="dashed")
```

## Styling graphs

specifying colors:

- theme color (_C0_ ... _C10_)
- color name (_green_ / _lightblue_ / ...)
- short name (_r_ / _g_ / _b_ / _c_ / _m_ / _y_ / _k_)
- hex code (e.g. _#FFAA00_)
- RGB tuple (e.g. `(1, 0.7, 0)`)

## Styling graphs

line style:

- `"none"` or `""`
- `"solid"` or `"-"`
- `"dashed"` or `"--"`
- `"dotted"` or `":"`
- `"dashdot"` or `"-."`

## Styling graphs

marker:

- `""` (none)
- `"."` (small dot)
- `"o"` (large dot)
- `"s"` (square)
- `"X"`
- `"+"`
- `","` (pixel)
- ...

## Styling graphs

important parameters:

- `color`
- `linestyle`
- `linewidth`
- `marker`
- `markersize`

## Styling graphs

combined short form (less flexible):

```py
plt.plot(x, y, "C0X--")
```

## Labels

- `plt.title("Trigonometric functions")`
- `plt.xlabel("x (radians)")`
- `plt.ylabel("y")`

## Labels

labelling individual graphs:

```py
plt.plot(x, np.sin(x), label='sin(x)')
plt.plot(x, np.cos(x), label='cos(x)')

plt.legend()
```

## Axes

disabling axes:

```py
plt.axis("off")
```

## Axes limits

Fit axes (without gaps):

```py
plt.axis("tight")
```

Show a specific region:

```py
plt.axis([-1, 1, -1, 1])
```

Show a specific region of one axis:

```py
plt.xlim(-1, 1)
```

## Scaling

Equal distances on both axes:

```py
plt.axis("equal")
```

Equal distances on both axes, restricting plot area to used data ranges:

```py
plt.axis("scaled")
```

## Grid

```py
plt.grid(True)
```

## Ticks

```py
plt.yticks([-1, 0, 1])
plt.xticks(np.linspace(0, 2*np.pi, 5))
```

## Exercises

- sine and cosine with extended options
- n-th prime and approximation via _n \* ln(n)_
- estimating pi via random points

## Exercise: sine and cosine with extended options

possible result:

<img src="assets/pyplot-sine-cosine-advanced.png" alt="Advanced plot of sine and cosine" />

## Exercise: sine and cosine with extended options

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

## Resources

- [Python Data Science Handbook: Simple Line Plots](https://jakevdp.github.io/PythonDataScienceHandbook/04.01-simple-line-plots.html)
- [list of Pyplot functions](https://matplotlib.org/api/pyplot_summary.html)

# Basic plot types

## Basic plot types

- graph: `plt.plot(x, y)` / `plt.plot(y)`
- bar chart: `plt.bar(x, y)`
- scatter plot: `plt.plot(x, y, ".")` / `plt.scatter(x, y, size, color)`
- histogram: `plt.hist(x)`
- box plot: `plt.boxplot(x)`
- pie chart: `plt.pie(x, labels=...)`

## Graph

Graph of associated values of x and y:

```py
plt.plot(x, y)
```

Graph with automatic x (0, 1, ...):

```py
plt.plot(y)
```

## Bar charts

```py
plt.bar(x, y, width=0.6)
plt.bar(x, y, width=1, align="edge")

plt.bar(
    [0, 1, 2],
    [9.6, 17, 9.8],
    tick_label=["China", "Russia", "USA"]
)

# horizontal
plt.barh([0, 1, 2], [9.6, 17, 9.8])
```

## Scatter plot

creates data points with two (or more) values - one on the x-axis and the other on the y-axis

simple:

```py
plt.plot(x, y, ".")
```

advanced:

```py
plt.scatter(x, y, s=sizes, c=colors)
```

## Histogram

Counts the occurence of certain values / ranges

```py
plt.hist(many_simulated_dice_rolls_with_10_dice)
```

```py
plt.hist(
    many_simulated_dice_rolls_with_10_dice,
    bins=[15, 20, 25, 30, 35, 40, 45, 50, 55]
)
```

```py
plt.hist(
    many_simulated_dice_rolls_with_10_dice,
    density=True
)
```

## Box plot

Visualization of statistical data of a distribution (minimum, median, maximum, ...)

```py
plt.boxplot(dice_simulation_1)
```

```py
plt.boxplot(
    [dice_simulation_1, dice_simulation_2],
    labels=["simulation 1", "simulation 2"]
)
```

## Pie chart

```py
plt.pie([3, 10, 17, 9], labels=["a", "b", "c", "d"])

plt.pie([3, 10, 17, 9], explode=[0, 0, 0, 0.1])
```

# Basic plot types: visualizing iris data

## Iris data set

**Iris data set**: measurements of 150 Iris flowers (50 of type _iris setosa_, 50 of type _iris versicolor_ and 50 of type _iris virginica_)

data entries: _sepal length_, _sepal width_, _petal length_, _petal width_

## Loading the data

```py
import pandas as pd
iris = pd.read_csv(
    "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
)
# get all rows and the first four columns as numpy data
iris = iris.iloc[:,:4].to_numpy()

sepal_length = iris[:,0]
sepal_width = iris[:,1]
petal_length = iris[:,2]
petal_width = iris[:,3]
```

## Scatter plot 1

scatter plot of petal_length and petal_width

plot the first 50, the second 50 and the thrid 50 data points separately (in separate colors)

## Scatter plot 2

scatter plot of all four iris properties

use the color and size to visualize _sepal length_ and _sepal width_

## Histogram and boxplot

histogram of the _petal length_

boxplot of all four measurements

## Scatter plot: solutions

```py
plt.plot(petal_length[:50], petal_width[:50], ".",
         label="setosa")
plt.plot(petal_length[50:100], petal_width[50:100], ".",
         label="versicolor")
plt.plot(petal_length[100:150], petal_width[100:150], ".",
         label="virginica")

plt.legend()
```

```py
plt.scatter(petal_length, petal_width,
            sepal_length*10, sepal_width)
```

## Histogram and boxplot: solutions

```py
plt.hist(
    petal_length,
    bins=np.arange(0.5, 7.5, 0.5)
)
```

```py
plt.boxplot(
    [petal_length, petal_width, sepal_length, sepal_width],
    labels=["petal length", "petal width", "sepal length",
            "sepal width"]
)
```

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
- `plt.axes`: for creating a new coordinate system

actual meaning (from Latin): _axis_ = singular, _axes_ = plural

## Subplots

Creating multiple _Axes_ objects in a grid (here: 2 rows, 3 columns):

```py
fig, ax = plt.subplots(2, 3)

ax0 = ax[0, 0]
ax1 = ax[0, 1]
ax5 = ax[1, 2]
```

# Advanced plot types

## Advanced plot types

- plotting data points with more than 2 features
- plotting z = f(x, y)
- plotting density of some distribution (1D and 2D)

## Plotting data points with more than 2 features

- advanced scatter plot (size, color) - pyplot, pandas, seaborn
- scatter matrix - pandas, seaborn

## Plotting z = f(x, y)

- contour plots - pyplot, pandas, seaborn
- 3d plots - matplotlib

<!-- list separator -->

- [Python Data Science Handbook: Density and Contour Plots](https://jakevdp.github.io/PythonDataScienceHandbook/04.04-density-and-contour-plots.html)
- [Python Data Science Handbook: Three-Dimensional Plotting in Matplotlib](https://jakevdp.github.io/PythonDataScienceHandbook/04.12-three-dimensional-plotting.html)

## Plotting density of some distribution

- (histogram)
- (box plot)
- KDE (kernel density estimation) - pandas, seaborn
- violin plot (box plot + KDE) - seaborn
- 2D histogram - pyplot (hist2d, hexbin)
- 2D KDE - seaborn

see [Python Data Science Handbook: Histograms, Binnings, and Density](https://jakevdp.github.io/PythonDataScienceHandbook/04.05-histograms-and-binnings.html)
