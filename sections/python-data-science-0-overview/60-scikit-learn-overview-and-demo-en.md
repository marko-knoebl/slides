# Scikit-learn: overview and demo

## Scikit-learn: overview and demo

exercise: predicting survival on the Titanic via a linear regression

simple algorithms can be trained to predict survival with 80% accuracy (based on _sex_, _passenger class_, _age_, _number of siblings or spouses_, _number of parents or children_)

## Scikit-learn: overview and demo

defining input data and output data:

```py
passenger_data = titanic[
    ["Female", "Pclass", "Age", "SibSp", "Parch"]
]
survived = titanic["Survived"]
```

## Scikit-learn: overview and demo

"training" a model:

```py
from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(passenger_data, survived)
```

## Scikit-learn: overview and demo

predicting a value for the survival of:

- 40-year-old woman in first class (without companions)
- 40-year-old man in second class (without companions)

```py
new_passenger_data = pd.DataFrame(
    [
        [1, 1, 40, 0, 0],
        [0, 2, 40, 0, 0]
    ],
    columns=["Female", "Pclass", "Age", "SibSp", "Parch"],
)
model.predict(new_passenger_data)
# [0.93, 0.23]
```
