# Grundlegende Plots

## Grundlegende Plots

- Graph
- Säulendiagramm
- Scatter Plot
- Histogram
- Box Plot
- Tortendiagramm

## Graph

Pyplot: `plt.plot(x, y)` / `plt.plot(y)`

Pandas: `df.plot.line()` / `df.plot()`

## Säulendiagramm

Pyplot: `plt.bar(x, y)`

Pandas: `df.plot.bar()`

## Scatter Plot

Pyplot: `plt.plot(x, y, ".")`

Pyplot (fortgeschritten): `plt.scatter(x, y, size, color)`

Pandas: `df.plot.scatter(x="name1", y="name2")`

## Histogramm

Pyplot: `plt.hist(x)`

Pandas: `df.plot.hist()`

## Box Plot

Pyplot: `plt.boxplot(data)`

Pandas: `df.plot.box()`

## Tortendiagramm

Pyplot: `plt.pie(x, labels=[...])`

Pandas: `df.pie()`
