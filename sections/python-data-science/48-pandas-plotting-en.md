# Plotting

## Plotting

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
# call to .show()
plt.show()
```

## Plotting functions

```py
# graph
data.plot.line()
data.plot()
# bar chart
data.plot.bar()
# box plot
data.plot.box()
# histogram
data.plot.hist()
# scatter plot
data.plot.scatter(x="colname_1", y="colname_2")
# scatter matrix
from pandas.plotting import scatter_matrix
scatter_matrix(data)
```

## Graphs

example:

```py
euribor.plot.line()
sp500["SP500"].plot.line(figsize=(9, 6))
```

## Bar charts

example:

```py
euribor.iloc[-36:].plot.bar()
```

exercise:

plot median _sepal-width_ and _sepal-length_ for all three types of flowers

## Box plots

Display statistical data in a diagram (min, median, max, ...)

```py
iris.plot.box()
```

## Histograms

counts occurrences of certain values / value ranges

examples:

```py
iris.sepal_lenght.plot.hist()
```

```py
iris.sepal_length.plot.hist(bins=30)
```

## Histograms

exercise:

simulate 10 million rolls of dice - each using 10 dice; plot the distribution of the sums as a histogram

## Scatter plots

creates data points with two values - one on the x-axis and the other on the y-axis

```py
iris.plot.scatter(x="sepal_length", y="sepal_width")
```

task: scatter plot of just _Iris-setosa_

## Scatter matrix

creates several scatter plots - if there are 4 data series it will create 4x4 plots (scatter plots and histograms)

```py
from pandas.plotting import scatter_matrix

scatter_matrix(iris)
```
