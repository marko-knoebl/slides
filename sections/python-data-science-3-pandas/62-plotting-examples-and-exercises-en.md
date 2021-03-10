# Plotting: examples and exercises

## Basic example

```py
import numpy as np
import pandas as pd

x = np.array([0, 1, 2, 3])

data = pd.DataFrame({
    "y1": x*2,
    "y2": x**2
})

data.plot()
```

## Graph

examples:

```py
euribor.plot.line()
sp500["SP500"].plot.line()
```

## Bar chart

example:

```py
euribor.iloc[-36:].plot.bar()
```

Exercise: Visualize the median of _sepal-width_ and _sepal-length_ for all three types of flowers

## Scatter plot

```py
iris.plot.scatter(
    x="sepal_length"
    y="sepal_width",
    s="petal_length",
    c="petal_width"
)
```

Exercise: scatter plot for _iris setosa_

## Histogram

Exercise: histogram of the _sepal length_

## Box plot

Exercise: box plots of all iris measurements

## Pie chart

Example:

```py
surface = pd.Series({"land": 0.29, "water": 0.71})

surface.plot.pie(ylabel="Surface of the earth")
```
