# Scikit-learn: overview and demo

## Scikit-learn: overview and demo

exercise: predicting survival on the Titanic via a linear regression

simple algorithms can be trained to predict survival with 80% accuracy (based on _sex_, _passenger class_, _age_, _number of siblings or spouses_)

## Scikit-learn: overview and demo

"training" a model:

```py
from sklearn.linear_model import LinearRegression

passenger_data = titanic_ml[["female", "pclass", "age", "sibsp"]]
survived = titanic_ml["survived"]

model = LinearRegression()

model.fit(passenger_data, survived)
```

## Scikit-learn: overview and demo

predicting chance of survival for:

- 40-year-old woman in first class (with no siblings or spouses)
- 40-year-old man in third class (with no siblings or spouses)

```py
model.predict(
    np.array([
        [1, 1, 40, 0],
        [0, 3, 40, 0],
    ])
)
# [0.93, 0.03]
```
