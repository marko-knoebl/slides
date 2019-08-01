# Regression - Grundlagen

## Lineare Regression

## Lineare Regression

Beispiel: Wir betrachten verschiedene Einkäufe bei verschiedenen Supermärkten:

- 1 l Milch, 1 kg Brot: 4.58€
- 2 l Milch, 3 kg Brot: 13.50€
- 3 l Milch, 2 kg Brot: 11.98€
- (0 l Milch, 0 kg Brot: 0€)

Was wäre eine passende Schätzung für den Preis von 1 Liter Milch / 1 kg Brot? Wenn wir bei einem Supermarkt 2 Liter Milch und 2 kg Brot kaufen, welcher Preis wäre in etwa zu erwarten?

Diese Aufgabe kann mit Hilfe von linearer Regression beantwortet werden.

## Lineare Regression

Beispiel:

```py
from sklearn.linear_model import LinearRegression

X = [[1, 1], [2, 3], [3, 2], [0, 0]]
y = [4.58, 14.50, 11.98, 0.0]

model = LinearRegression()
model.fit(X, y)

yfit = model.predict([[1, 0], [0, 1], [2, 2]])
print(yfit)
```

## Lineare Regression - Beispiel

Iris-Datensatz: Abschätzen der _sepal width_ basierend auf der _sepal length_

## Beispiele

- Radverkehr
