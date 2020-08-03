# Grundlegende Plots in Pandas

## Grundlegende Plots in Pandas

allgemeines Plotten:

In Jupyter:

```py
data_frame.plot()
```

Im Terminal:

```py
import matplotlib.pyplot as plt

data_frame.plot()

# show all figures that were created since the last
# call of .show()
plt.show()
```

## Grundlegende Plots in Pandas

- Graph: `df.plot.line()` / `df.plot()`
- Säulendiagramm: `df.plot.bar()`
- Scatter Plot: `df.plot.scatter(x="name1", y="name2")`
- Histogramm: `df.plot.hist()`
- Box Plot: `df.plot.box()`
- Tortendiagramm: `df.pie()`

## Graph

Mittels `df.plot.line()` oder `df.plot()`

```py
euribor.plot.line()
```

```py
sp500["SP500"].plot.line(figsize=(9, 6))
```

## Säulendiagramm

```py
euribor.iloc[-36:].plot.bar()
```

Übung: Median der _sepal-width_ und _sepal-length_ für alle drei Arten von Blumen darstellen

## Scatter Plot

```py
iris.plot.scatter(x="sepal_length", y="sepal_width")
```

Aufgabe: Scatter Plot von _Iris-setosa_

## Histogramm

```py
iris.sepal_lenght.plot.hist()
```

```py
iris.sepal_length.plot.hist(bins=30)
```

## Histogramm

Übung:

Wir simulieren 10 Millionen Würfe mit je 10 Würfeln und stellen die Verteilung der Augensumme als Histogramm dar

## Box Plot

```py
iris.plot.box()
```

## Tortendiagramm

```py
df.pie()
```
