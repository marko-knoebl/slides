# Regression

## Lineare Regression

Bedeutet: Festlegen einer linearen Funktion, die die Datenpunkte bestmöglich approximiert (kleinste Quadratsumme).

## Lineare Regression

Beispiel:

```py
from sklearn.linear_model import LinearRegression

x = np.array([0, 1, 1, 2, 3])
y = np.array([3, 4.5, 5, 5, 4.5])
X = x[:, np.newaxis]

model = LinearRegression
model.fit(X, y)

yfit = model.predict(X)
```

## Beispiele

- Umlaufzeit der Planeten -> Mittlerer Sonnenabstand (oder andere Richtung)
- Rechnungsbetrag -> Trinkgeld
- Radverkehr
