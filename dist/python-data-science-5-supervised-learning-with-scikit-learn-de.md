# Überwachtes Lernen mit scikit-learn

# Beispiel: Iris-Klassifizierung un in scikit-learn

<!-- duplicate section in machine-learning-theory and scikit-learn -->

## Überwachtes Lernen in scikit-learn

Schritte:

- Erstellen einer Eingangsmatrix `X` und eines Zielvektors `y` / einer Zielmatrix `Y`
- Instanziierung einer Algorithmenklasse, z.B. `KNeighborsClassifier`, `MLPClassifier`, `LinearRegression`, ...
- "Lernen" mittels `model.fit(X, y)`
- Voraussagen weiterer Ergebnisse mittels `model.predict(...)`

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

# Daten vorbereiten

## Daten vorbereiten

erwünschtes Datenformat für Machine Learning Algorithmen:

- _x_ oder _X_: zweidimensionales Array mit numerischen Eingangsdaten
- _y_ oder _Y_: ein- oder zweidimensionales Array mit numerischen Resultaten

## Daten vorbereiten

Aufgaben:

- "Flattening" von verschachtelten Daten
- Skalieren von Werten
- Fehlende Daten ergänzen
- Kategoriedaten in numerische Daten umwandeln
- Textdaten in numerische Daten umwandeln

## Daten vorbereiten in sklearn

Klassen zum vorbereiten der Daten besitzen folgende Methoden:

- `.fit`: erlernt anhand vorgegebener Eingangsdaten (`X1`) eine passende Umwandlung für das Modell
- `.transform`: wandelt gegebene Eingangsdaten (`X2`) anhand des gelernten in die neue Form um
- `.fit_transform`: beides in einem Schritt (für die gleichen Daten)
- `.inverse_transform`: umgekehrte Transformation (nicht für alle Transformationen vorhanden)

## Skalieren von Werten

Zentrieren und Skalieren der Werte, sodass ihr Mittelwert 0 und ihre Standardabweichung 1 ist:

```py
from sklearn import preprocessing
import numpy as np

stars = np.array([[ 7.0e7, 2.0e30, 5.8e3],
                  [ 6.5e7, 2.2e30, 5.2e3],
                  [ 7.0e9, 2.1e30, 3.1e3]])

scaler = preprocessing.StandardScaler().fit(stars)
X = scaler.transform(stars)
```

## Skalieren von Werten

Skalierte Werte:

```py
array([[-0.70634165, -1.22474487,  0.95025527],
       [-0.70787163,  1.22474487,  0.43193421],
       [ 1.41421329,  0.        , -1.38218948]])
```

## Fehlende Daten

Interpolation:

```py
import numpy as np
from sklearn.impute import SimpleImputer

X = np.array([[ np.nan, 0,   3  ],
              [ 3,   7,   9  ],
              [ 3,   5,   2  ],
              [ 4,   np.nan, 6  ],
              [ 8,   8,   1  ]])

imputer = SimpleImputer(strategy="mean").fit(X)

imputer.transform(X)
imputer.transform(np.array([[np.nan, 1, 1]]))
```

## Kategorien als Daten

Preprocessors:

- `OrdinalEncoder` (Ordinale für Eingangskategorien)
- `LabelEncoder` (Ordinale für Zielkategorien)
- `OneHotEncoder` (One-Hot-Encoding für Eingangskategorien, standardmäßig sparse)
- `LabelBinarizer` (One-Hot-Encoding für Zielkategorien)

## Kategorien als Daten

Beispiel:

```py
from sklearn.preprocessing import LabelBinarizer

encoder = LabelBinarizer().fit(iris_species)
iris_species_one_hot = encoder.transform(iris_species)
```

## Textdaten

Beispiel für das Preprocessing von Textdaten: Zählen von Worten

```py
from sklearn.feature_extraction.text import CountVectorizer

sample = ['problem of evil',
          'evil queen',
          'horizon problem']

vectorizer = CountVectorizer().fit(sample)
print(vectorizer.vocabulary_)
X = vectorizer.transform(sample)
print(X)
print(X.todense())
```

## Aufgabe: Vorbereiten von Iris-Rohdaten

```py
import pandas as pd
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data",
    header=None)
```

erste Zeile: `5.1,3.5,1.4,0.2,Iris-setosa`

Aufgaben:

- Zieldaten als ordinale Daten oder mittels one-hot-Encoding
- Eingangsdaten skalieren
- k-Nearest-Neighbor-Klassifizierung bei skalierten und nichtskalierten Daten vergleichen

# Pipelines

## Pipelines

Pipelines können aus mehreren transformierenden Algorithmen und einem vorhersagenden Algorithmus zusammengesetzt werden:

```py
from sklearn.pipeline import make_pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression

model = make_pipeline(
    SimpleImputer(strategy='mean'),
    StandardScaler(),
    LinearRegression()
)
```

## Pipelines

Aufgabe:

Erstelle eine Pipeline für die Kategorisierung von Iris-Daten

# Speichern und Laden von Modellen

## Speichern und Laden von Modellen

Ein trainiertes Modell kann für spätere Verwendung gespeichert werden

In Python können Objekte mittels des `pickle`-Moduls gespeichert / geladen werden

## Speichern von Modellen

```py
import pickle

with open("model.pickle", mode="wb") as picklefile:
    pickle.dump(model, picklefile)
```

## Laden von Modellen

```py
import pickle

with open("model.pickle", mode="rb") as picklefile:
    model = pickle.load(picklefile)

model.predict(data)
```

# Supervised Learning Algorithmen in scikit-learn

## Algorithmen in scikit-learn

Regression:

- `sklearn.linear_model.LinearRegression`
- `sklearn.neural_network.MLPRegressor`

Klassifizierung:

- `sklearn.neighbors.KNeighborsClassifier`
- `sklearn.tree.DecisionTreeClassifier`
- `sklearn.ensemble.RandomForestClassifier`
- `sklearn.linear_model.LogisticRegression`
- `sklearn.naive_bayes.GaussianNB`
- `sklearn.naive_bayes.MultinomialNB`
- `sklearn.svm.SVC`
- `sklearn.neural_network.MLPClassifier`

## K-Nearest-Neighbors

`sklearn.neighbors.KNeighborsClassifier`

Die Anzahl `k` der betrachteten Nachbarn kann festgesetzt werden (Standardwert = 5)

Siehe auch: <https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html>

## Entscheidungsbäume (Decision Trees)

siehe: [Python Data Science Handbook - Decision Trees and Random Forests](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html)

Random Forests: Die Daten werden in verschiedene Untermengen zerlegt. Mittels jeder Untermenge wird ein einzelner Decision Tree erstellt. Die Gesamtheit der Decision Trees wird zu einem sogenannten _Random Forest_ zusammengeführt.

```py
RandomForestClassifier(n_estimators=100)
```

## Logistische Regression

Beispiel: <https://scikit-learn.org/stable/auto_examples/linear_model/plot_logistic.html>

```py
LogisticRegression(solver="liblinear", multi_class="auto")
```

## Naive Bayes

siehe: [Python Data Science Handbook - Naive Bayes](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html)

## Support Vector Machines

siehe:

- <https://scikit-learn.org/stable/modules/svm.html>
- [Python Data Science Handbook - Support Vector Machines](https://jakevdp.github.io/PythonDataScienceHandbook/05.07-support-vector-machines.html)

## Beispiele

- [Klassifizierung von Newsgroup-Postings (mittels Naive Bayes, logistischer Regression oder Decision Tree)](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html#Multinomial-Naive-Bayes)
- [Erkennen von Ziffern (Random Forest)](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html#Example:-Random-Forest-for-Classifying-Digits)

# Lineare Regression mit scikit-learn

## Lineare Regression mit scikit-learn

Beispiel: verschiedene Einkäufe bei verschiedenen Supermärkten:

- 1 l Milch, 1 kg Brot: 5.00€
- 2 l Milch, 3 kg Brot: 13.50€
- 3 l Milch, 2 kg Brot: 10.90€
- (0 l Milch, 0 kg Brot: 0€)

## Lineare Regression mit scikit-learn

```py
from sklearn.linear_model import LinearRegression

X = [[1, 1], [2, 3], [3, 2], [0, 0]]
y = [4.60, 14.50, 12.00, 0.0]

model = LinearRegression()
model.fit(X, y)

yfit = model.predict([[1, 0], [0, 1], [2, 2]])
print(yfit)
# [1.18333333 3.78333333 9.78333333]
```

## Lineare Regression mit scikit-learn

Kennzahlen der "erlernten" Regression:

- `model.coef_`
- `model.intercept_`

## Lineare Regression mit scikit-learn

Übung: Abschätzen der _petal width_ (Spaltenindex 3) basierend auf der _petal length_ (Spaltenindex 2) bei den Iris-Daten

```py
from sklearn import datasets
iris = datasets.load_iris()
```

## Beispiele

- Diabetes Vorhersage
- ([Radverkehr](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Example:-Predicting-Bicycle-Traffic))

# Polynomiale Regression mit scikit-learn

## Polynomiale Regression

Manche Daten passen nicht in das Schema eines linearen Zusammenhangs wie:

`y = a*x + b`.

Wir könnten einen polynomialen Zusammenhang annehmen, z.B.:

`y = a*x^2 + b*x + c`

`y = a*x^3 + b*x^2 + c*x + d`

## Polynomiale Regression mit scikit-learn

scikit-learn bietet einen _Preprocessor_ namens `PolynomialFeatures`.

```py
from sklearn.preprocessing import PolynomialFeatures

poly_model = make_pipeline(
    PolynomialFeatures(2),
    LinearRegression()
)

poly_model.fit(x, y)
```

## Übungen

- verwende eine polynomiale Regression anstatt einer linearen Regression für eines der bisherigen Beispiele
- verwende eine polynomiale Regression, um den Datensatz _II_ der sogenannten Anscombe-Daten zu approximieren (kann mittels der _seaborn_-Library geladen werden)

# Regression mittels neuronalem Netzwerk

## Regression mittels neuronalem Netzwerk

Iris-Datensatz: Abschätzen der Spalte 0 basierend auf Spalten 1 und 2

```py
from sklearn import datasets
from sklearn.neural_network import MLPRegressor

iris = datasets.load_iris()

X = iris.data[:,1:3]
y = iris.data[:, 0]

model = MLPRegressor(
    hidden_layer_sizes=(8, 8),
    alpha=1.0,
    max_iter=2000
)
model.fit(X, y)
```

## Regression mittels neuronalem Netzwerk

```py
test_data = [
    [3.4, 1.9],
    [3.0, 4.7],
    [3.1, 5.0]
]

y_pred = model.predict(test_data)
print(y_pred)
```

# Validierung

## Train-Test Split

Wie gut kategorisiert ein bestimmter Algorithmus die Iris-Daten?

```py
from sklearn.model_selection import train_test_split
from sklearn import metrics

X_train, X_test, Y_train, Y_test = train_test_split(X, Y)

# ...

Y_prediction = model.predict(X_test)
print(metrics.accuracy_score(Y_test, Y_prediction))
```

optionale Parameter:

- `test_size` (Standardwert `0.25`)
- `random_state` (Integer-Seed für Zufallsauswahl)

## Kreuzvalidierung

Bei der Kreuzvalidierung (cross-validation) werden die Daten wiederholt in unterschiedliche Trainings- und Testdaten unterteilt, sodass jeder Eintrag einmal in den Testdaten vorkommt.

```py
from sklearn.model_selection import cross_validate

test_results = cross_validate(
    model, X, y, cv=5, scoring="accuracy"
)
print(test_results["test_score"])
```

## Beispiel: ROC der Iris-Daten

Bestimmen der ROC mit scikit-learn:

```py
# false positive rates, true positive rates, thresholds
fpr, tpr, thresholds = metrics.roc_curve(
    y_test,
    classifier.predict_proba(X_test)[:, 0]
)
```

ideale Kombination: _false positive rate_ = 0, _true positive rate_ = 1

## Beispiel: ROC der Iris-Daten

Zeichnen der ROC:

```py
plt.plot(fpr, tpr, marker="o")
```

Bestimmen der AUC:

```py
auc = metrics.auc(fpr, tpr)
```

# Example: Erkennung von Ziffern

## Example: Erkennung von Ziffern

```py
from sklearn.neighbors import KNeighborsClassifier
from sklearn import datasets, model_selection, metrics

digits = datasets.load_digits()
# flatten array from 1797x8x8 to 1797x64
X = digits.images.reshape(digits.images.shape[0], -1)
y = digits.target

X_train, X_test, y_train, y_test =
    model_selection.train_test_split(X, y)

model = KNeighborsClassifier()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(metrics.accuracy_score(y_test, y_pred))
```

# Beispiel: Gesichtserkennung mit scikit-learn

## Beispiel: Gesichtserkennung

[Beispieldaten](http://vis-www.cs.umass.edu/lfw/number_11.html)

Eingangsdaten: Schwarz-weiß-Bilder bekannter Personen (Größe 62 x 47) und deren Namen

Ziel: erkennen der Personen mittels eines neuronalen Netzwerks

## Daten laden

```py
from sklearn.datasets import fetch_lfw_people
faces = fetch_lfw_people(min_faces_per_person=60)
```

Einträge:

- `faces.images`: Array von Bildern (1248 x 62 x 47)
- `faces.target`: Array von numerischen Labeln (1, 3, 3, 3, 5, ...)
- `faces.target_names`: Array von Labelnamen (0="Ariel Sharon", 1="Colin Powell", ...)

## Daten vorbereiten

```py
num_images = faces.images.shape[0]
num_pixels = faces.images.shape[1] * faces.images.shape[2]
X = faces.images.reshape(num_images, num_pixels)

from sklearn.preprocessing import LabelBinarizer
encoder = LabelBinarizer().fit(faces.target)
Y = encoder.transform(faces.target)
```

## Train-Test Split

```py
from sklearn.model_selection import train_test_split

X_train, X_test, Y_train, Y_test = train_test_split(X, Y)
```

## Erstellen und Trainieren eines Klassifikators

```py
from sklearn.neural_network import MLPClassifier

model = MLPClassifier(hidden_layer_sizes=(250, 150, 100),
                      early_stopping=True,
                      n_iter_no_change=100,
                      max_iter=2000,
                      verbose=True)
model.fit(X_train, Y_train)
```

Konfiguration des Algorithmus:

- drei Schichten an Neuronen mit je 250, 150 und 100 Neuronen
- Algorithmus stoppt, wenn für die letzten 100 Iterationsschritte keine Verbesserung eintrat
- Algorithmus stoppt nach maximal 2000 Iterationen

## Testen

```py
from sklearn import metrics

real_labels = Y_test.argmax(axis=1)
pred_labels = model.predict_proba(X_test).argmax(axis=1)

print(metrics.accuracy_score(real_labels, pred_labels))
```

`argmax` gibt den index des größten Eintrags im Array zurück

## Testen

Anzeigen eines zufälligen Gesichts, des echten Namens und des vorhergesagten Namens:

```py
import matplotlib.pyplot as plt
from random import randrange

# randomly select a face
index = randrange(X_test.shape[0])

plt.imshow(X_test[index].reshape(62, 47), cmap="gray")

real_label = real_labels[index]
pred_label = pred_labels[index]

print("real name:", faces.target_names[real_label])
print("predicted name:", faces.target_names[pred_label])
```

# Abstraktion

## Abstraktion

- Pipelines
- eigene Klassen

## Abstraktion

_Pipelines_ können das Verarbeiten von Eingangswerten _x_ abstrahieren

Eigene Klassen können das Verarbeiten von sowohl _x_ als auch _y_ abstrahieren

## Abstraktion

direkte Verwendung eines Modells, um Überleben auf der Titanic vorherzusagen:

```py
model.predict([[2, 0, 28.0, 0]])
# [0]
```

abstrahiertes Interface:

```py
classifier.predict_survival(
    pclass=2, sex="male", age=28.0, sibsp=0
)
# False
```
