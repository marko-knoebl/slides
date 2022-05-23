# Visualisierung von Iris-Daten

## Iris Datensatz

**Iris Datensatz**: Abmessungen von 150 Iris-Blumen (50 vom Typ _Iris Setosa_, 50 vom Typ _Iris versicolor_ und 50 vom Typ _Iris Virginica_)

Einträge: _sepal length_, _sepal width_, _petal length_, _petal width_

## Laden der Daten

```py
import pandas as pd
iris = pd.read_csv(
    "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
)
# get all rows and the first four columns as numpy data
iris = iris.iloc[:,:4].to_numpy()

sepal_length = iris[:,0]
sepal_width = iris[:,1]
petal_length = iris[:,2]
petal_width = iris[:,3]
```

## Scatter Plot 1

Scatter Plot der _petal length_ und _petal width_

Wir plotten die Datenpunkte in 50-er Gruppen in drei verschiedenen Farben

## Scatter plot 2

Scatter Plot aller vier Iris-Eigenschaften

Wir verwenden Farbe und Größe, um _sepal length_ und _sepal width_ zu visualisieren

## Histogramm und Boxplot

Histogramm der _petal length_

Boxplot für alle vier Abmessungen

## Scatter Plot: Lösungen

```py
plt.plot(petal_length[:50], petal_width[:50], ".",
         label="setosa")
plt.plot(petal_length[50:100], petal_width[50:100], ".",
         label="versicolor")
plt.plot(petal_length[100:150], petal_width[100:150], ".",
         label="virginica")

plt.legend()
```

```py
plt.scatter(petal_length, petal_width,
            sepal_length*10, sepal_width)
```

## Histogramm und Boxplot: Lösungen

```py
plt.hist(
    petal_length,
    bins=np.arange(0.5, 7.5, 0.5)
)
```

```py
plt.boxplot(
    [petal_length, petal_width, sepal_length, sepal_width],
    labels=["petal length", "petal width", "sepal length",
            "sepal width"],
    whis=(0, 100)
)
```
