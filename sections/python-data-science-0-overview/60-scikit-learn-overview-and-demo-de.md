# Scikit-learn: Überblick und Demo

## Scikit-learn: Überblick und Demo

Übung: Voraussagen von Überleben auf der Titanic basierend auf einer linearen Regression

Einfache Algorithmen können trainiert werden, um mit ca 80%-iger Sicherheit vorauszusagen, ob ein Passagier überlebt hat (basierend auf _Geschlecht_, _Passagierklasse_, _Alter_, _Anzahl an Geschwistern bzw Eheleuten_, _Anzahl an Eltern bzw Kindern_)

## Scikit-learn: Überblick und Demo

Definieren von Eingangsdaten und vorherzusagenden Ausgangsdaten:

```py
passenger_data = titanic[
    ["Female", "Pclass", "Age", "SibSp", "Parch"]
]
survived = titanic["Survived"]
```

## Scikit-learn: Überblick und Demo

"Trainieren" eines Modells:

```py
from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(passenger_data, survived)
```

## Scikit-learn: Überblick und Demo

Voraussagen eines Wertes für das Überleben von:

- 40 Jahre alte Frau in der ersten Klasse (ohne Begleitung)
- 40 Jahre alter Mann in der zweiten Klasse (ohne Begleitung)

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
