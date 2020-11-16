# Basic plots in pandas and pyplot

## Graph

Pyplot:

```py
plt.plot(x, y)
plt.plot(y)
```

Pandas:

```py
df.plot.line()
df.plot()
```

## Bar chart

Pyplot:

```py
plt.bar(x, y)
```

Pandas:

```py
df.plot.bar()
```

## Scatter Plot

Pyplot:

```py
plt.plot(x, y, ".")
plt.scatter(x, y, 2, "red")
```

Pandas:

```py
df.plot.scatter(x="name1", y="name2")
```

## Histogram

Pyplot:

```py
plt.hist(x)
```

Pandas:

```py
df.plot.hist()
```

## Histogram

Pyplot:

```py
plt.hist(
  iris[:, 2],
  bins=[1, 2, 4, 5, 6],
  density=True)
```

Pandas:

```py
iris.sepal_length.plot.hist(bins=5)
```

## Box Plot

Pyplot:

```py
plt.boxplot(data)
```

Pandas:

```py
df.plot.box()
```

## Pie chart

Pyplot:

```py
plt.pie(x, labels=[...])
```

Pandas:

```py
df.plot.pie()
```
