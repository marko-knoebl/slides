# Grundlegende Plots in Pandas

## Grundlegende Plots in Pandas

```py
import numpy as np
import pandas as pd

x = np.array([0, 1, 2, 3])

data = pd.DataFrame({
    "y1": x*2,
    "y2": x**2
})

data.plot.line()
```

## Grundlegende Plots in Pandas

außerhalb eines Jupyter Notebooks:

```py
import matplotlib.pyplot as plt

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
iris.sepal_length.plot.hist()
```

```py
iris.sepal_length.plot.hist(bins=30)
```

## Box Plot

```py
iris.plot.box()
```

## Tortendiagramm

```py
df.pie()
```

## Scatter Matrix

Erstellt mehrere Scatter Plots - bei 4 Series-Einträgen enstehen 4x4 Plots (Scatter Plots und Histogramme)

```py
from pandas.plotting import scatter_matrix

scatter_matrix(iris)
```
