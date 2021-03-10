# Polynomiale Regression mit scikit-learn

## Polynomiale Regression

Manche Daten passen nicht in das Schema eines linearen Zusammenhangs wie:

`y = a*x + b`.

Wir könnten einen polynomialen Zusammenhang annehmen, z.B.:

`y = a*x^2 + b*x + c`

`y = a*x^3 + b*x^2 + c*x + d`

## Polynomiale Regression mit scikit-learn

scikit-learn bietet einen _Preprocessor_ namens `PolynomialFeatures`.

```py
from sklearn.preprocessing import PolynomialFeatures

poly_model = make_pipeline(
    PolynomialFeatures(2),
    LinearRegression()
)

poly_model.fit(x, y)
```

## Übungen

- verwende eine polynomiale Regression anstatt einer linearen Regression für eines der bisherigen Beispiele
- verwende eine polynomiale Regression, um den Datensatz _II_ der sogenannten Anscombe-Daten zu approximieren (kann mittels der _seaborn_-Library geladen werden)
