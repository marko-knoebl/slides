# Regression

## Lineare Regression

Bedeutet: Festlegen einer linearen Funktion, die die Datenpunkte bestmöglich approximiert (kleinste Quadratsumme)

## Lineare Regression - Beispiele

- [Radverkehr](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html)
- Diabetes Vorhersage
- Hauspreise in Boston

## Polynomiale Regression

Manche Daten passen nicht in das Schema eines linearen Zusammenhangs `y = a*x + b`.

Wir können z.B. versuchen, sie durch einen polynomialen Zusammenhang `y = a*x^2 + b*x + c` darzustellen.

## Polynomiale Regression

In scikit-learn können wir eine polynomiale Regression durch einen _Preprocessor_ namens `PolynomialFeatures` durchführen.

## Polynomiale Regression

Als Beispieldaten verwenden wir den Datensatz _II_ aus den sogenannten Anscombe Daten:

```py
import seaborn as sns

anscombe = sns.load_dataset("anscombe")
anscombe_2 = anscombe[anscombe.dataset == "II"]
```

## Polynomiale Regression

Wir nähern die Daten mit einer Polynomfunktion vom Grad 3 an:

```py
poly_model = make_pipeline(
    PolynomialFeatures(3),
    linear_model.LinearRegression()
)

poly_model.fit(X, y)
```

Aufgabe: Vergleiche die Ergebnisse einer einfachen Linearen Regression mit der polynomialen Regression.

## Overfitting
