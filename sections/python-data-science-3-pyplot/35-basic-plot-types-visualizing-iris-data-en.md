# Basic plot types: visualizing iris data

## Iris data set

**Iris data set**: measurements of 150 Iris flowers (50 of type _iris setosa_, 50 of type _iris versicolor_ and 50 of type _iris virginica_)

data entries: _sepal length_, _sepal width_, _petal length_, _petal width_

## Loading the data

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

## Scatter plot 1

scatter plot of petal_length and petal_width

plot the first 50, the second 50 and the thrid 50 data points separately (in separate colors)

## Scatter plot 2

scatter plot of all four iris properties

use the color and size to visualize _sepal length_ and _sepal width_

## Histogram and boxplot

histogram of the _petal length_

boxplot of all four measurements

## Scatter plot: solutions

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

## Histogram and boxplot: solutions

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
