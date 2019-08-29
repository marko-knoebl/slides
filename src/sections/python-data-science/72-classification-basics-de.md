# Klassifizierung - Grundlagen

## Klassifizierung

Aufgabe: Klassifizierung von Iris-Pflanzen basierend auf ihren Maßen

Gegeben ist eine Reihe von Daten mit bekannten Maßen und bekannten Spezies. Baiserend darauf: Trainieren eines Algorithmus, um später die Spezies anderer Pflanzen zu bestimmen.

## Klassifizierung

In diesem Fall verwenden wir einen _K-nearest-neighbors-Klassifikator_ als Algorithmus, andere Algorithmen wären genauso denkbar.

## Klassifizierung

Trainieren des Algorithmus:

```py
from sklearn.neighbors import KNeighborsClassifier
from sklearn import datasets

iris = datasets.load_iris()

X = iris.data
y = iris.target

model = KNeighborsClassifier()
model.fit(X, y)
```

## Klassifizierung

Durchführen der Klassifizierung

```py
test_data = [
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
]

y_pred = model.predict(test_data)
print(y_pred)
```

## Klassifizierung

Weitere Aufgaben:

Wir verwenden andere Klassifikatoren, wie etwa:

- `SVC`
- `DecisionTreeClassifier`
- `GaussianNB`

## Klassifizierung

Bei vielen Klassifizierungsalgorithmen können auch Wahrscheinlichkeiten für die einzelnen Klassen angezeigt werden:

```py
model.predict_proba(test_data)
```

```py
array([[1. , 0. , 0. ],
       [0. , 0.8, 0.2],
       [0. , 0.6, 0.4]])
```

Der erste Eintrag gehört sicher zur ersten Klasse, der letzte Eintrag gehört mit 60-prozentiger Sicherheit zur zweiten Klasse.
