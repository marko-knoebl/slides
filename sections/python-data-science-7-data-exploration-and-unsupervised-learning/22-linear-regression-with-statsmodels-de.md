# Lineare Regression mit statsmodels

## Lineare Regression mit Python

Python-Pakete für lineare Regression:

- _statsmodels_
- _scikit-learn_

## Beispiel: Diabetes-Daten

Ziel: Korrelation zwischen Patientendaten und fortschreiten einer Diabetes-Erkrankung nach einem Jahr

```py
from sklearn.datasets import load_diabetes

# load dataset as a pandas dataframe
dataset = load_diabetes(as_frame=True)

print(dataset.DESCR)

print(dataset.data)
print(dataset.target)
print(dataset.target.describe())
```

## Beispiel: Diabetes-Daten

```py
import statsmodels.api as sm

# add constant column for base value of y (intercept)
x = sm.add_constant(dataset.data)

y = dataset.target
```

## Beispiel: Diabetes-Daten

```py
model = sm.OLS(y, x)

res = model.fit()

res.summary()
```

## Beispiel: Diabetes-Daten

behalte nur Werte, deren Einfluss signifikant sind:

```py
x_cleaned = x.drop(["age", "s3", "s6", "s4"], axis=1)
```
