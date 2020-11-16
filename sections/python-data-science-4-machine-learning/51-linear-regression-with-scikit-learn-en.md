# Linear regression with scikit-learn

## Linear regression with scikit-learn

Example: various purchases in different supermarkets:

- 1 l of milk, 1 kg of bread: 5.00€
- 2 l of milk, 3 kg of bread: 13.50€
- 3 l of milk, 2 kg of bread: 10.90€
- (0 l of milk, 0 kg of bread: 0€)

## Linear regression with scikit-learn

```py
from sklearn.linear_model import LinearRegression

X = [[1, 1], [2, 3], [3, 2], [0, 0]]
y = [5.00, 13.50, 10.90, 0.0]

model = LinearRegression()
model.fit(X, y)

yfit = model.predict([[1, 0], [0, 1], [2, 2]])
print(yfit)
# [1.18333333 3.78333333 9.78333333]
```

## Linear regression with scikit-learn

characteristic numbers of the regression:

- `model.coef_`
- `model.intercept_`

## Linear regression with scikit-learn

Iris data: Estimate the _petal width_ (column 3) based on the _petal length_ (column 2)

```py
from sklearn import datasets
iris = datasets.load_iris()
```

## Examples

- diabetes prediction
- ([bicycle traffic](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Example:-Predicting-Bicycle-Traffic))
