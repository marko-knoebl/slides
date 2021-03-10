# Iris dataset

## Iris dataset

_Iris dataset_: simple example dataset for machine learning / data science

contains measurements of 150 iris plants: 3 different species with 50 samples each

## Iris dataset

example CSV data from <http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data>:

```txt
5.1,3.5,1.4,0.2,Iris-setosa
4.9,3.0,1.4,0.2,Iris-setosa
4.7,3.2,1.3,0.2,Iris-setosa
```

## Iris dataset

data loaded via helper function `sklearn.datasets.load_iris()`:

measurements in `.data`

species in `.target` (setosa=0, versicolor=1, virginica=2)

```py
# .data
array([[5.1, 3.5, 1.4, 0.2],
       [4.9, 3. , 1.4, 0.2],
       [4.7, 3.2, 1.3, 0.2],
       # ...
      ])
# .target
array([0, 0, 0, ...])
```
