# Regression: Polynomiale Regression und Regularisierung

## Polynomiale Regression

anstatt einers linearen Verhältnisses wird ein polynomiales (oder anderes) Verhältnis zwischen unabhängigen und abhängiger Variable angenommen

## Polynomiale Regression

Annahme einer quadratischen Beziehung zum Alter in den Diabetes-Daten

Hinzufügen einer weiteren Spalte:

```py
x["age_squared"] = x["age"] ** 2
```

## Regularisierung

Regularisierung, um große Koeffizienten zu vermeiden:

- L_1-Regularisierung (Lasso): hohe Absolutwerte der Koeffizienten werden bestraft
- L_2-Regularisierung (Ridge): hohe Quadrate der Koeffizienten werden bestraft

```py
model.fit_regularized(alpha=0.01, L1_wt=0.1)
```
