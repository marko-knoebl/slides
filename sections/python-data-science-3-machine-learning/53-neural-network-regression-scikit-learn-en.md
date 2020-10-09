# Regression via a neural network

## Regression via a neural network

Iris data: Estimate the _sepal length_ (column 0) based on the _sepal width_ (column 1) and _petal length_ (column 2)

```py
from sklearn import datasets
from sklearn.neural_network import MLPRegressor

iris = datasets.load_iris()

X = iris.data[:,1:3]
y = iris.data[:, 0]

model = MLPRegressor(
    hidden_layer_sizes=(8, 8),
    alpha=1.0,
    max_iter=2000
)
model.fit(X, y)
```

## Regression via a neural network

```py
test_data = [
    [3.4, 1.9],
    [3.0, 4.7],
    [3.1, 5.0]
]

y_pred = model.predict(test_data)
print(y_pred)
```
