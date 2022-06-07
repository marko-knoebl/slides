# Plotting examples in pandas

## Plots from Pandas

wrappers for _pyplot_ functions that exist on _Series_ and _DataFrame_ objects:

- `data.plot()` or `data.plot.line()`
- `data.plot.bar()`
- `data.plot.scatter()`
- `data.plot.hist()`
- `data.plot.box()`
- `data.plot.pie()`

## Graph / line plot

examples:

```py
euribor.plot.line()
```

```py
sp500["SP500"].plot.line()
```

## Bar chart

example:

```py
euribor.iloc[-12:].plot.bar()
```

exercise: Visualize the median of _sepal-width_ and _sepal-length_ for all three types of flowers

## Histogram

Exercise: histogram of the _sepal length_

## Box plot

Exercise: box plots of all iris measurements

## Scatter plot

```py
iris.plot.scatter(
    x="sepal_length",
    y="sepal_width",
)
```

with color and size:

```py
iris.plot.scatter(
    x="sepal_length",
    y="sepal_width",
    s="petal_length",
    c="petal_width"
)
```

Exercise: scatter plot for _iris setosa_

## Pie chart

```py
data = pd.Series({"a": 50, "b": 30, "c": 20})
data.plot.pie(ylabel="Data")
```

distribution of Titanic passengers into _passenger classes_ (1 - 3)

```py
titanic["Pclass"].value_counts().plot.pie()
```
