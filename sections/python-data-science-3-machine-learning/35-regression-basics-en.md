# Regression - basics

## Example: linear regression

Example: various purchases in different supermarkets:

- 1 l of milk, 1 kg of bread: 4.60€
- 2 l of milk, 3 kg of bread: 13.50€
- 3 l of milk, 2 kg of bread: 12.00€
- (0 l of milk, 0 kg of bread: 0€)

task: estimate prices of:

- 1 l of milk
- 1 kg of bread
- 2 l of milk and 2 kg of bread

This may be solved via regression

## Example: linear regression

```py
from sklearn.linear_model import LinearRegression

X = [[1, 1], [2, 3], [3, 2], [0, 0]]
y = [4.60, 14.50, 12.00, 0.0]

model = LinearRegression()
model.fit(X, y)

yfit = model.predict([[1, 0], [0, 1], [2, 2]])
print(yfit)
# [ 1.14722222  3.64722222 10.46388889]
```

## Example: linear regression

characteristic numbers of the regression:

- `model.coef_`
- `model.intercept_`

## Exercise: linear regression

Iris data: Estimate the _petal width_ (column 3) based on the _petal length_ (column 2)

```py
from sklearn import datasets
iris = datasets.load_iris()
```

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
