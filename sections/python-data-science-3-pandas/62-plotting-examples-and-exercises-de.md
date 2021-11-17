# Plotting: Beispiele und Übungen

## Grundlegendes Beispiel

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

Beispiele:

```py
euribor.plot.line()
sp500["SP500"].plot.line()
```

## Säulendiagramm

Beispiel:

```py
euribor.iloc[-36:].plot.bar()
```

Übung: Median der _sepal-width_ und _sepal-length_ für alle drei Arten von Blumen darstellen

## Scatter Plot

```py
iris.plot.scatter(
    x="sepal_length"
    y="sepal_width",
    s="petal_length",
    c="petal_width"
)
```

Übung: Scatter plot für _iris setosa_

## Histogramm

Übung: Histogramm der _sepal length_

## Box Plot

Übung: Box Plots aller Iris-Abmessungen

## Tortendiagramm

Beispiel:

```py
surface = pd.Series([0.29, 0.71], index=["land", "water"])

surface.plot.pie(ylabel="Surface of the earth")
```

## Pareto-Diagram

Beispiel:

```py
pop = countries["population"].sort_values(ascending=False)
pop.plot.bar()
pop.cumsum().plot.line(color="C1")
```
