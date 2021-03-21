# Scikit-learn: Überblick und Demo

## Scikit-learn: Überblick und Demo

Übung: Voraussagen von Überleben auf der Titanic basierend auf einer linearen Regression

## Scikit-learn: Überblick und Demo

"Trainieren" eines Modells:

```py
from sklearn.linear_model import LinearRegression

passenger_data = titanic_ml[["female", "pclass", "age", "sibsp"]]
survived = titanic_ml["survived"]

model = LinearRegression()

model.fit(passenger_data, survived)
```

## Scikit-learn: Überblick und Demo

Voraussagen der Überlebenschance für:

- 40 Jahre alte Frau in der ersten Klasse (ohne Geschwister oder Ehemann)
- 40 Jahre alter Mann in der dritten Klasse (ohne Geschwister oder Ehefrau)

```py
model.predict(
    np.array([
        [1, 1, 40, 0],
        [0, 3, 40, 0],
    ])
)
# [0.93, 0.03]
```
