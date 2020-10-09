# Lineare Regression mit scikit-learn

## Lineare Regression mit scikit-learn

Beispiel: verschiedene Einkäufe bei verschiedenen Supermärkten:

- 1 l Milch, 1 kg Brot: 5.00€
- 2 l Milch, 3 kg Brot: 13.50€
- 3 l Milch, 2 kg Brot: 10.90€
- (0 l Milch, 0 kg Brot: 0€)

## Lineare Regression mit scikit-learn

```py
from sklearn.linear_model import LinearRegression

X = [[1, 1], [2, 3], [3, 2], [0, 0]]
y = [4.60, 14.50, 12.00, 0.0]

model = LinearRegression()
model.fit(X, y)

yfit = model.predict([[1, 0], [0, 1], [2, 2]])
print(yfit)
# [1.18333333 3.78333333 9.78333333]
```

## Lineare Regression mit scikit-learn

Kennzahlen der "erlernten" Regression:

- `model.coef_`
- `model.intercept_`

## Lineare Regression mit scikit-learn

Übung: Abschätzen der _petal width_ (Spaltenindex 3) basierend auf der _petal length_ (Spaltenindex 2) bei den Iris-Daten

```py
from sklearn import datasets
iris = datasets.load_iris()
```

## Beispiele

- Diabetes Vorhersage
- ([Radverkehr](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Example:-Predicting-Bicycle-Traffic))
