# Regression - Grundlagen

## Beispiel: Lineare Regression

Beispiel: Wir betrachten verschiedene Einkäufe bei verschiedenen Supermärkten:

- 1 l Milch, 1 kg Brot: 4.60€
- 2 l Milch, 3 kg Brot: 13.50€
- 3 l Milch, 2 kg Brot: 12.00€
- (0 l Milch, 0 kg Brot: 0€)

Was wäre eine passende Schätzung für den Preis von 1 Liter Milch / 1 kg Brot? Wenn wir bei einem Supermarkt 2 Liter Milch und 2 kg Brot kaufen, welcher Preis wäre in etwa zu erwarten?

Diese Aufgabe kann mit Hilfe von Regression beantwortet werden.

## Beispiel: Lineare Regression

```py
from sklearn.linear_model import LinearRegression

X = [[1, 1], [2, 3], [3, 2], [0, 0]]
y = [4.60, 14.50, 12.00, 0.0]

model = LinearRegression()
model.fit(X, y)

yfit = model.predict([[1, 0], [0, 1], [2, 2]])
print(yfit)
```

## Lineare Regression

Kennzahlen der "erlernten" Regression:

- `model.coef_`
- `model.intercept_`

## Lineare Regression - Übung

Iris-Datensatz: Abschätzen der _petal width_ (Spaltenindex 3) basierend auf der _petal length_ (Spaltenindex 2)

```py
from sklearn import datasets
iris = datasets.load_iris()
```

## Regression mittels neuronalem Netzwerk

Iris-Datensatz: Abschätzen der Spalte 0 basierend auf Spalten 1 und 2

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

## Regression mittels neuronalem Netzwerk

```py
test_data = [
    [3.4, 1.9],
    [3.0, 4.7],
    [3.1, 5.0]
]

y_pred = model.predict(test_data)
print(y_pred)
```
