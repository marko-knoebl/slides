# Plotting: Beispiele in Pandas

## Plots aus Pandas

Wrapper für _pyplot_-Funktionen, die auf _Series_- und _DataFrame_-Objekten existieren:

- `data.plot()` oder `data.plot.line()`
- `data.plot.bar()`
- `data.plot.scatter()`
- `data.plot.hist()`
- `data.plot.box()`
- `data.plot.pie()`

## Liniendiagramm

Beispiele:

```py
euribor.plot.line()
```

```py
sp500["SP500"].plot.line()
```

## Säulendiagramm

Beispiel:

```py
euribor.iloc[-12:].plot.bar()
```

Übung: Stelle den Median der _sepal-width_ und _sepal-length_ für alle drei Arten von Blumen dar

## Histogram

Übung: Histogramm der _sepal length_

## Box plot

Übung: Box Plots aller Iris-Abmessungen

## Scatter plot

```py
iris.plot.scatter(
    x="sepal_length",
    y="sepal_width",
)
```

mit Größe (s) und Farbe (c):

```py
iris.plot.scatter(
    x="sepal_length",
    y="sepal_width",
    s="petal_length",
    c="petal_width"
)
```

Übung: Scatter plot für _iris setosa_

## Pie chart

```py
data = pd.Series({"a": 50, "b": 30, "c": 20})
data.plot.pie(ylabel="Data")
```

Verteilung von Titanic-Passagieren in Klassen (1 - 3):

```py
titanic["Pclass"].value_counts().plot.pie()
```
