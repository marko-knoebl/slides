## Beispiel: Iris-Klassifikation

<!-- duplicate section in machine-learning-theory and scikit-learn -->

## Beispiel

Beispiel: Klassifizierung von Iris-Pflanzen

Bekannte Daten: Maße und Klassifizierung von 150 Iris-Pflanzen (Schwertlilien)

Aufgabe: Trainieren eines Algorithmus, der anhand der Maße einer Iris-Pflanze eine Klassifizierung vornehmen kann

## Beispiel

Beispieldaten (_sepal length_, _sepal width_, _petal length_, _petal width_, _name_):

- `[5.1, 3.5, 1.4, 0.2]` → `"Iris-setosa"`
- `[7.0, 3.2, 4.7, 1.4]` → `"Iris-versicolor"`
- `[6.3, 3.3, 6.0, 2.5]` → `"Iris-virginica"`

in unseren Daten: _setosa_=0, _versicolor_=1, _virginica_=2

## Beispiel

Vorbereiten der Daten:

```py
from sklearn import datasets

iris = datasets.load_iris()

X = iris.data
y = iris.target
```

## Beispiel

Trainieren eines Algorithmus:

```py
from sklearn.neighbors import KNeighborsClassifier

model = KNeighborsClassifier()
model.fit(X, y)
```

## Beispiel

Anwenden des Erlernten auf neue Daten:

```py
test_data = [
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
]

y_pred = model.predict(test_data)
# [0, 1, 1]

y_pred_proba = model.predict_proba(test_data)
# [[1.  0.  0. ]
#  [0.  0.8 0.2]
#  [0.  0.6 0.4]]
```

## Beispiel

Aufgabe: Verwenden anderer Klassifikatoren, z.B.:

- `sklearn.neural_network.MLPClassifier`
- `sklearn.svm.SVC`
- `sklearn.tree.DecisionTreeClassifier`
- `sklearn.naive_bayes.GaussianNB`
