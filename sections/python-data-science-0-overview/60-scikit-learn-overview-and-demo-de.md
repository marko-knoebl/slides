# Scikit-learn: Überblick und Demo

## Scikit-learn: Überblick und Demo

Übung: Voraussagen von Überleben auf der Titanic basierend auf einer linearen Regression

Einfache Algorithmen können trainiert werden, um mit ca 80%-iger Sicherheit vorauszusagen, ob ein Passagier überlebt hat (basierend auf _Geschlecht_, _Passagierklasse_, _Alter_, _Anzahl an Geschwistern bzw Eheleuten_, _Anzahl an Eltern bzw Kindern_)

## Scikit-learn: Überblick und Demo

"Trainieren" eines Modells:

```py
from sklearn.linear_model import LinearRegression

passenger_data = titanic[["Female", "Pclass", "Age", "SibSp", "Parch"]]
survived = titanic["Survived"]

model = LinearRegression()

model.fit(passenger_data, survived)
```

## Scikit-learn: Überblick und Demo

Voraussagen eines Wertes für das Überleben von:

- 40 Jahre alte Frau in der ersten Klasse (ohne Begleitung)
- 40 Jahre alter Mann in der zweiten Klasse (ohne Begleitung)

```py
model.predict(
    np.array([
        [1, 1, 40, 0, 0],
        [0, 3, 40, 0, 0],
    ])
)
# [0.93, 0.23]
```
