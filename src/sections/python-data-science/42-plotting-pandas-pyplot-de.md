# Plotting

## Grundlegende Plots

- funktionaler Zusammenhang (x-y)
  - Graph
  - Bar Chart
- Datenpunkte mit zwei Merkmalen
  - Scatter Plot
- Dichte / Lage einer Verteilung
  - Histogram
  - Box Plot

## Graph

Pyplot: `plt.plot(x, y)`

Pandas: `df.plot()` / `df.plot.line()`

## Säulendiagramm

Pyplot: `plt.bar(x, y)`

Pandas: `df.plot.bar()`

## Scatter Plot

Pyplot: `plt.scatter(x, y)`

Pandas: `df.plot.scatter(x="name1", y="name2")`

## Histogramm

Pyplot: `plt.hist(x)`

Pandas: `df.plot.hist()`

## Graph

Pandas:

```py
series.plot()
dataframe.plot()
```

Matplotlib / Pyplot:

```py
plt.plot(data)
```

## Graph (x / y)

Matplotlib / Pyplot:

```py
plt.plot(x, y)
```

## Bar Chart

Pandas:

```py
df.plot.bar()
```

Matplotlib / Pyplot:

```py
plt.bar(x=[0, 1, 2, 3], height=y)
```

Seaborn

```py
sns.barplot(x=[0, 1, 2, 3], y=y)
```