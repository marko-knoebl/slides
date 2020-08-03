# Basic plots in Pandas

## Basic plots in Pandas

general procedure:

In Jupyter:

```py
data_frame.plot()
```

In the terminal:

```py
import matplotlib.pyplot as plt

data_frame.plot()

# show all figures that were created since the last
# call of .show()
plt.show()
```

## Basic plots in Pandas

- graph: `df.plot.line()` / `df.plot()`
- bar chart: `df.plot.bar()`
- scatter plot: `df.plot.scatter(x="name1", y="name2")`
- histogram: `df.plot.hist()`
- box plot: `df.plot.box()`
- pie chart: `df.pie()`

## Graph

via `df.plot.line()` or `df.plot()`

```py
euribor.plot.line()
```

```py
sp500["SP500"].plot.line(figsize=(9, 6))
```

## Bar chart

```py
euribor.iloc[-36:].plot.bar()
```

Exercise: Visualize the median of _sepal-width_ and _sepal-length_ for all three types of flowers

## Scatter Plot

```py
iris.plot.scatter(x="sepal_length", y="sepal_width")
```

Exercise: scatter plot for _Iris-setosa_

## Histogram

```py
iris.sepal_lenght.plot.hist()
```

```py
iris.sepal_length.plot.hist(bins=30)
```

## Histogram

Exercise:

Simulate 10 Million rolls with 10 dice each and visualize the distribution of the sum of eyes as a histogram

## Box plot

```py
iris.plot.box()
```

## Pie chart

```py
df.pie()
```

## Scatter matrix

creates several scatter plots - if there are 4 data series it will create 4x4 plots (scatter plots and histograms)

```py
from pandas.plotting import scatter_matrix

scatter_matrix(iris)
```
