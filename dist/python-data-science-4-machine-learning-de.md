# Machine learning

## Beispiele für Aufgaben

- **Supervised learning (überwachtes Lernen)**
  - **Regression**
  - **Klassifizierung**
- Unsupervised learning
  - Clustering
  - Dimensionsreduktion / Komprimierung
- Reinforcement learning
  - Optimierung

## Regression

Zuweisung von numerischen Werten zu numerischen Eingabedaten

Beispiele:

- Schätzung der Entfernung einer Galaxie basierend auf der Rotverschiebung
- Schätzung der Kursentwicklung einer Aktie

## Klassifizierung

Zuweisung von Klassen zu numerischen Eingabedaten

Beispiele:

- Spam-Filterung basierend auf einer Anzahl an Wörtern / Phrasen
- Erkennen von Objekten / Personen / Zeichen auf Bildern
- Diagnose von Krankheiten basierend auf Symptomen / Messwerten

## Clustering

Erkennen von Gruppierungen / Clustern bei numerischen Eingabedaten

Beispiele:

- Erkennen wiederkehrender Elemente in Bildern

## Dimensionality Reduction

Vereinfachung von Daten mit einer großen Anzahl an Merkmalen zu Daten mit weniger, aber aussagekräftigeren Merkmalen

## Reinforcement Learning

Optimieren von Strategien in einer Simulation

Beispiele:

- Simulieren des Verlaufs einer Krankheit, Finden der besten Behandlungsstrategie

# Libraries

## Libraries

Python Libraries für Machine Learning:

- _scikit-learn_
- _keras_
- _pytorch_

## Libraries

**scikit-learn**:

- unterstützt viele verschiedene Algorithmenklassen (auch sehr einfache neuronale Netzwerke)
- basiert auf _NumPy_

**keras**:

- unterstützt neuronale Netzwerke
- basiert auf der _TensorFlow_-Bibliothek
- kann auch auf der GPU oder TPU (Tensor Processing Unit) laufen

**pytorch**:

- unterstützt neuronale Netzwerke
- low-level

# Überwachtes Lernen

## Überwachtes Lernen: Verfahren

Schritte:

- Sammeln und Vorbereiten von Trainingsdaten (Eingangsdaten und zugehörigen Ausgangsdaten)
- Trainieren eines Algorithmus basierend auf den Eingangs- und Ausgangsdaten
- Validieren der Richtigkeit / Qualität der Vorhersagen des Algorithmus
- Verwenden des Algorithmus, um Outputs für neue Daten zu erzeugen

## Algorithmen für überwachtes Lernen

Klassifizierung:

- _neuronale Netzwerke_
- k-nearest-neighbors
- logistische Regression
- naive Bayes
- Support Vector Machines
- Entscheidungsbäume (decision trees)

Regression:

- _neuronale Netzwerke_
- lineare Regression
- polynomiale Regression

# Überwachtes Lernen in scikit-learn

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

üblicherweise:

- _X_: zweidimensionales Array mit numerischen Eingangsdaten
- _y_ / _Y_: ein- oder zweidimensionales Array mit numerischen Resultaten

## Daten vorbereiten

Aufgaben:

- Skalieren von Werten
- Fehlende Daten ergänzen
- Kategoriedaten in numerische Daten umwandeln
- Textdaten in numerische Daten umwandeln

## Daten vorbereiten

Klassen zum vorbereiten der Daten besitzen folgende Methoden:

- `.fit`: erlernt anhand vorgegebener Eingangsdaten (`X1`) eine passende Umwandlung für das Modell
- `.transform`: wandelt gegebene Eingangsdaten (`X2`) anhand des gelernten in die neue Form um
- `.fit_transform`: beides in einem Schritt (für die gleichen Daten)
- `.inverse_transform`: umgekehrte Transformation (nicht für alle Transformationen vorhanden)

## Skalieren von Werten

Welcher dieser beiden Sterne ist der Sonne am ähnlichsten?

```py
# data: radius (km), mass (kg), temparature (K)
sun =    [7.0e7, 2.0e30, 5.8e3]

star_a = [6.5e7, 2.2e30, 5.2e3]
star_b = [7.0e8, 2.1e30, 8.1e3]
```

Machine Learning Algorithmen wie z.B. k-Nearest-Neighbor betrachten Absolutwerte.

Hier würde vom Algorithmus im wesentlichen nur die Masse herangezogen werden, da alle anderen Werte im Vergleich verschwindend gering sind.

## Skalieren von Werten

Lösung: Die Werte werden zentriert und skaliert, sodass ihr Mittelwert 0 und die Standardabweichung 1 ist

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

Fehlende Daten werden häufig in der Form von `NaN`s auftreten.

Mögliche Behandlungen:

- Löschen aller Zeilen, die an irgendeiner Stelle undefinierte Werte enthalten
- Interpolieren der fehlenden Werte durch andere Daten

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

Manchmals: _Kategorien_ als Eingangs- oder Ausgangsdaten - z.B. Land, Berufsgruppe, Messverfahren, ...

Beispiel für Eingangsdaten:

```py
[["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]]
```

oftmals als Strings angegeben, Kodierung als Zahlen gewünscht

## Kategorien als Daten

Eingangsdaten:

```py
[["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]]
```

Kodierung als Ordinale (nicht für alle Algorithmen geeignet, da implizit geordnet (fr=0, uk=1, us=2)):

```py
[[0., 0.], [1., 0.], [2., 1.]]
```

## Kategorien als Daten

Eingangsdaten:

```py
[["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]]
```

One-Hot-Kodierung:

```py
# fr?, uk?, us?, chrome?, firefox?
[[1., 0., 0., 1., 0.],
 [0., 1., 0., 1., 0.],
 [0., 0., 1., 0., 1.]]
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

# Validierung

## Train-Test Split

Um zu validieren, ob ein Verfahren ein passendes Ergebnis liefert:

Die Daten werden in Trainingsdaten und Testdaten unterteilt. Die Testdaten dienen nur zur Validierung.

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

optionaler Parameter: `test_size` (Standardwert `0.25`)

## Kreuzvalidierung

Bei der Kreuzvalidierung (cross-validation) werden die Daten wiederholt in unterschiedliche Trainings- und Testdaten unterteilt, sodass jeder Eintrag einmal in den Testdaten vorkommt.

```py
from sklearn.model_selection import cross_validate

test_results = cross_validate(
    model, X, y, cv=5, scoring="accuracy"
)
print(test_results["test_score"])
```

## Validierungsmetriken

Klassifizierung:

- accuracy metrics
  - accuracy
  - confusion matrix
- Metriken, die auf true/false positives/negatives basieren
  - precision
  - recall
  - f-score
  - ROC und AUC
- probabilistische Metriken
  - Kreuzentropie

Regression:

- Mittlere quadratische Abweichung
- Bestimmtheitsmaß (R²)

## Klassifizierungsmetriken

Beispiel:

Ein Korb von Früchten enthält 10 Äpfel, 10 Orangen und 10 Pfirsiche

Ein Klassifizierungsalgorithmus liefert diese Ergebnisse:

- Klassifizierung von Äpfeln: 8 als Äpfel, 0 als Orangen, 2 als Pfirsiche
- Klassifizierung von Orangen: 10 als Orangen
- Klassifizierung von Pfirsichen: 1 als Apfel, 0 als Orangen, 9 als Pfirsiche

## Accuracy metrics

**accuracy**: relativer Anteil korrekter Klassifizierungen (im Beispiel: 27/30=0.9)

**confusion matrix**: Tabelle mit Klassifizierungen für jede Kategorie

|         | apples | oranges | peaches |
| ------- | ------ | ------- | ------- |
| apples  | 8      | 0       | 2       |
| oranges | 0      | 10      | 0       |
| peaches | 1      | 0       | 9       |

## Metriken, die auf true/false positives/negatives basieren

Binäre Klassifizierung: ist eine Frucht ein Apfel oder ist sie kein Apfel?

- true positive: ein Apfel wird als Apfel klassifiziert
- true negative: ein Pfirsich wird als _kein_ Apfel klassifiziert
- false positive: ein Pfirsich wird als Apfel klassifiziert (Fehler erster Art)
- false negative: ein Apfel wird als _kein_ Apfel klassifiziert (Fehler zweiter Art)

## Metriken, die auf true/false positives/negatives basieren

**precision** (Genauigkeit) = 8/9=0.889 (8 von 9 Früchten, die als Äpfel klassifiziert wurden, sind tatsächlich Äpfel)

**recall** (Trefferquote) = 8/10=0.8 (8 von 10 Äpfeln wurden als Äpfel erkannt)

precision = true positives / predicted positives

recall = true positives / condition positives

siehe auch: [Precision and recall auf der englischsprachigen Wikipedia](https://en.wikipedia.org/wiki/Precision_and_recall)

## Metriken, die auf true/false positives/negatives basieren

_precision_ und _recall_ haben unterschiedliche Relevanz in verschiedenen Szenarien

Beispiel: Beim Klassifizieren von E-mails als Spam ist _precision_ besonders wichtig (vermeiden, eine E-mail fälschlicherweise als Spam zu klassifizieren)

## Metriken, die auf true/false positives/negatives basieren

**f-score** = harmonisches Mittel zwischen _precision_ und _recall_

## Metriken, die auf true/false positives/negatives basieren

**ROC** (Receiver Operating Characteristic)

= Metrik, die _true positives_ und _false positives_ wiederspiegelt

Ein Klassifizierungsalgorithmus könnte bezüglich seiner _true positives_-Quote und _false positives_-Quote fein eingestellt werden:

- Option 1: 60% true positives-Quote, 0% false positives-Quote
- Option 2: 70% true positives-Quote, 5% false positives-Quote
- Option 3: 80% true positives-Quote, 25% false positives-Quote
- Option 4: 90% true positives-Quote, 55% false positives-Quote
- Option 5: 95% true positives-Quote, 90% false positives-Quote

## Metriken, die auf true/false positives/negatives basieren

Die ROC kann als Kurve dargestellt werden; je größer die Fläche unter der Kurve (area under the curve, AUC), desto besser die Klassifikation

## Metriken, die auf true/false positives/negatives basieren

Bestimmen der ROC mit scikit-learn:

```py
false_positive_rates, true_positive_rates, thresholds = metrics.roc_curve(
    y_test,
    classifier.predict_proba(X_test)[: 1]
)
```

Zeichnen der ROC:

```py
plt.plot(false_positive_rate, true_positive_rate)
```

Bestimmen der AUC:

```py
auc = metrics.auc(false_positive_rates, true_positive_rates)
```

## Probabilistische Metriken

**Kreuzentropie** (log loss): Misst, wie gut ein Modell einer Wahrscheinlichkeitsverteilung die tatsächliche Wahrscheinlichkeitsverteilung annähert

relevant bei _neuronalen Netzwerken_ und _logistischer Regression_

## Regressionsmetriken

**mittlere quadratische Abweichung**

**Bestimmtheitsmaß (R²)**:

vergleicht die mittlere quadratische Abweichung der Regression mit der Varianz der Eingangsdaten

- R²=1 - perfekte Interpolation
- R²=0 - Interpolation ist nicht besser als das Verwenden des Durchschnitts
- R²&lt;0 - schlechter als das Verwenden des Durchschnitts

## Validierungsmetriken in scikit-learn

Klassifizierung:

- _accuracy_score_
- _confusion_matrix_
- _precision_recall_fscore_support_
- _log_loss_
- _roc_curve_
- _roc_auc_

Regression:

- _mean_squared_error_
- _r2_score_

Siehe auch <https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics>

## Validierunsmetriken in Keras

- _accuracy_
- _categorical_crossentropy_
- _sparse_categorical_crossentropy_
- _precision_
- _recall_
- _auc_
- _mean_squared_error_

Siehe auch <https://keras.io/api/metrics/>

## Validierung

Aufgabe: Validierung der Iris-Klassifizierung

# Iris-Klassifikation in scikit-learn - komplett

## Iris-Klassifikation - komplett

```py
import pandas as pd
from sklearn.preprocessing import (
    LabelBinarizer,
    StandardScaler,
)
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn import metrics

# loading data

iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/" +
    "machine-learning-databases/iris/iris.data",
    header=None)
iris_measures = iris.iloc[:, :4].to_numpy()
iris_species = iris.iloc[:, 4].to_numpy()

# preparing data

encoder = LabelBinarizer()
encoder.fit(iris_species)
iris_species_one_hot = encoder.transform(iris_species)

scaler = StandardScaler()
scaler.fit(iris_measures)
iris_measures_scaled = scaler.transform(iris_measures)

X = iris_measures_scaled
Y = iris_species_one_hot

# train-test-split

X_train, X_test, Y_train, Y_test = train_test_split(X, Y)

# training

model = KNeighborsClassifier()
model.fit(X_train, Y_train)

# validation

Y_prediction = model.predict(X_test)
score = metrics.accuracy_score(Y_prediction, Y_test)
print("accuracy: ", score)

# predicting further species

new_iris_data = [
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
]
new_iris_predictions = model.predict(
    scaler.transform(new_iris_data)
)
print("prediction data:")
print(new_iris_predictions)
predicted_labels = encoder.inverse_transform(
    new_iris_predictions
)
print("predicted labels:")
print(predicted_labels)
```

# Datensätze für Machine Learning

## Datensätze für Machine Learning

- [Wikipedia: List of datasets for machine-learning research](https://en.wikipedia.org/wiki/List_of_datasets_for_machine-learning_research)
- [UCI machine learning repository](https://archive.ics.uci.edu/ml)
- [scikit-learn datasets](https://scikit-learn.org/stable/datasets/index.html)
- [keras datasets](https://keras.io/api/datasets/)

## Datensätze in scikit-learn

- [Iris flower data set](https://en.wikipedia.org/wiki/Iris_flower_data_set)
- [Boston house prices](http://lib.stat.cmu.edu/datasets/boston)
- [Labeled Faces in the Wild](vis-www.cs.umass.edu/lfw)
- [Handwritten digits](https://archive.ics.uci.edu/ml/datasets/Optical+Recognition+of+Handwritten+Digits)
- ...

## Datensätze in keras

- MNITS digits
- MNITS fashion
- Boston housing prices
- ...

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

# Algorithmen für überwachtes Lernen

## Algorithmen für überwachtes Lernen

Regression:

- _neuronale Netzwerke_
- lineare Regression, polynomiale Regression, ...

Klassifizierung:

- _neuronale Netzwerke_
- k-nearest-neighbors
- logistische Regression
- naive Bayes
- Support Vector Machines
- Entscheidungsbäume (decision trees)

## Neuronale Netze

Aus künstlichen Neuronen aufgebaute Netzwerke - ähnliches Konzept wie Neuronen im Gehirn

<figure style="width: 70%; margin: 0 auto;">
  <img src="assets/wikimedia-Neural_network.svg" alt="diagram of a neural network">
  <figcaption>Diagrammm eines neuronalen Netzwerks mit zwei Inputs, fünf Neuronen in der Zwischenschicht und einem Output <small>(Quelle: <a href="https://commons.wikimedia.org/wiki/File:Neural_network.svg" title="via Wikimedia Commons">Dake, Mysid via Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by/1.0">CC BY</a>)</small></figcaption>
</figure>

## Regression

Lineare Regression: Festlegen einer linearen Funktion, die die Datenpunkte bestmöglich approximiert (kleinste Quadratsumme)

## K-Nearest-Neighbors

Klassifizierungsalgorithmus, der einem Datenpunkt eine Klasse zuweist, indem er ähnliche bekannte Datenpunkte betrachtet, für die schon eine Klassifizierung bekannt ist

## Logistische Regression

An einer Grenze zwischen zwei Klassen wird mit Hilfe einer _logistischen Funktion_ angegeben, wie groß die Wahrscheinlichkeit ist, dass der Datenpunkt zu der einen (bzw zu der anderen) Klasse gehört. Je nachdem, welche der Wahrscheinlichkeiten größer ist, wird die entsprechende Klasse zugewiesen.

Die logistische Funktion selbst wird intern mittels Regression bestimmt (daher der Name).

## Naive Bayes

Für die bekannten Klassen werden Wahrscheinlichkeitsverteilungen angenommen (z.B. Normalverteilung, Multinomialverteilung). Diese Verteilungen werden aus den Trainingsdaten hergeleitet.

Für einen neuen Datenpunkt wird dann errechnet, unter welcher der Verteilungen er am ehesten auftreten würde.

Zwei wichtige Verteilungen sind die Normalverteilung (Gauß'sche Verteilung) für kontinuierliche Werte und die Multinomialverteilung für diskrete Werte (Ganzzahlen).

## Support Vector Machines

Einfachster Fall: Trennung von Klassen durch Geraden / Ebenen / Hyperebenen - diese Trenner sollen von den getrennten Punkten maximalen Abstand haben.

Durch Kernelfunktionen können die Grenzen auch andere Formen annehmen, z.B. die von Kegelschnitten für polynomiale Kernel vom Grad 2 oder anderen Kurven.

## Entscheidungsbäume (Decision Trees)

Entscheidungsbäume können auf Basis von Trainingsdaten generiert werden.

Beispiel für die Iris-Klassifizierung:

- Ist die _petal length_ kleiner oder gleich 2.4?
  - ja: **setosa**
  - nein: Ist die _petal width_ kleiner oder gleich 1.7?
    - ja: Ist die _petal length_ kleiner oder gleich 5.0?
      - ja: **versicolor**
      - nein: **virginica**
    - nein: **virginica**

## Klassifizierungsalgorithmen

[Überblick über Klassifizierungsalgorithmen in sklearn](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html)

# Lineare Regression

## Lineare Regression

Beispiel: Wir betrachten verschiedene Einkäufe bei verschiedenen Supermärkten:

- 1 l Milch, 1 kg Brot: 5.00€
- 2 l Milch, 3 kg Brot: 13.50€
- 3 l Milch, 2 kg Brot: 10.90€
- (0 l Milch, 0 kg Brot: 0€)

Aufgabe: Schätzung der Preise von:

- 1 l Milch
- 1 kg Brot
- 1 l Milch und 2 kg Brot

Diese Aufgabe kann mit Hilfe von Regression beantwortet werden.

## Lineare Regression

Eingangsdaten:

```txt
1, 1 ➡ 5.00
2, 3 ➡ 13.50
3, 2 ➡ 10.90
0, 0 ➡ 0.00
```

Ergebnis einer linearen Regression:

```txt
price = 0.05 + 1.13*x + 3.73*y
```

# Neuronale Netzwerke

## Neuronale Netzwerke

Mchine Learning Verfahren, dass in etwa die Interaktion von Neuronen im Gehirn nachahmt

## Neuronale Netzwerke

<figure style="width: 70%; margin: 0 auto;">
  <img src="assets/wikimedia-Neural_network.svg" alt="diagram of a neural network">
  <figcaption>Diagrammm eines neuronalen Netzwerks mit zwei Inputs, fünf Neuronen in der Zwischenschicht und einem Output <small>(Quelle: <a href="https://commons.wikimedia.org/wiki/File:Neural_network.svg" title="via Wikimedia Commons">Dake, Mysid via Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by/1.0">CC BY</a>)</small></figcaption>
</figure>

## Neuronen

<figure>
  <img src="assets/wikimedia-ArtificialNeuronModel_english.png">
  <figcaption>Modell eines einzelnen Neurons mit mehreren Inputs und einem Output</figcaption>
</figure>

## Aktivierungsfunktionen

- ReLU (Rectified Linear Unit)
- Softmax - often used in the last layer for classification
- Sigmoid - often used in the last layer for "tagging" (tags may overlap)

## Ressource

- <https://victorzhou.com/blog/intro-to-neural-networks/>

# Supervised Learning Algorithmen in scikit-learn

## Algorithmen in scikit-learn

Regression:

- `sklearn.linear_model.LinearRegression`
- `sklearn.neural_network.MLPRegressor`

Klassifizierung:

- `sklearn.neighbors.KNeighborsClassifier`
- `sklearn.naive_bayes.GaussianNB`
- `sklearn.naive_bayes.MultinomialNB`
- `sklearn.linear_model.LogisticRegression`
- `sklearn.svm.SVC`
- `sklearn.tree.DecisionTreeClassifier`
- `sklearn.ensemble.RandomForestClassifier`
- `sklearn.neural_network.MLPClassifier`

## K-Nearest-Neighbors

`sklearn.neighbors.KNeighborsClassifier`

Die Anzahl `k` der betrachteten Nachbarn kann festgesetzt werden (Standardwert = 5)

Siehe auch: <https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html#sklearn.neighbors.KNeighborsClassifier>

## Logistische Regression

Beispiel: <https://scikit-learn.org/stable/auto_examples/linear_model/plot_logistic.html#sphx-glr-auto-examples-linear-model-plot-logistic-py>

```py
LogisticRegression(solver="liblinear", multi_class="auto")
```

## Naive Bayes

siehe: [Python Data Science Handbook - Naive Bayes](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html)

## Support Vector Machines

siehe:

- <https://scikit-learn.org/stable/modules/svm.html>
- [Python Data Science Handbook - Support Vector Machines](https://jakevdp.github.io/PythonDataScienceHandbook/05.07-support-vector-machines.html)

## Entscheidungsbäume (Decision Trees)

siehe: [Python Data Science Handbook - Decision Trees and Random Forests](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html)

Random Forests: Die Daten werden in verschiedene Untermengen zerlegt. Mittels jeder Untermenge wird ein einzelner Decision Tree erstellt. Die Gesamtheit der Decision Trees wird zu einem sogenannten _Random Forest_ zusammengeführt.

```py
RandomForestClassifier(n_estimators=100)
```

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

poly_model.fit(X, y)
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

# Overfitting

## Overfitting

Mögliches Problem beim Lernen: Der Algorithmus ist zu flexibel und erkennt scheinbare Muster in den Eingangsdaten, hinter denen aber keine Systematik steckt

Algorithmen, die anfällig für Overfitting sind:

- Neuronale Netze
- Polynomiale Regression
- Entscheidungsbäume

## Overfitting

<figure>
  <img src="assets/wikimedia-Overfitting.svg.png" alt="visualization of an algorithm overfitting 2D data" style="width: 45%">
  <figcaption>Visualisierung von Overfitting bei der Kategorisierung von 2D-Daten <small>(Quelle: <a href="https://commons.wikimedia.org/wiki/File:Overfitting.svg" >Chabacano via Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by/1.0">CC BY</a>)</small></figcaption>
</figure>

## Overfitting - Lösungsmöglichkeiten

- größere Menge an Daten zum Lernen
- Einschränkung der Flexibilität (z.B. Grad des Polynoms, Tiefe des Entscheidungsbaums)
- zufälliges Deaktivieren einiger Neuronen während des Lernens (Dropout)
- Kombination mehrerer Entscheidungsbäume (Random Forest)
- "Bestrafung" großer Koeffizienten bei der polynomialen Regression (L2- und L1-Regularisierung)

Zur polynomialen Regression siehe: [Data Science Handbook - Regularization](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Regularization)

# Modellvalidierung und -auswahl

## Modellvalidierung und -auswahl

Um das bestmögliche Modell zu bestimmen:

- Testen mehrerer Algorithmen
- Testen mehrerer Parameter für den Algorithmus
- Testen, ob mehr Lerndaten zu besseren Ergebnissen führen

siehe [Python Data Science Handbook → Hyperparameters and Model Validation → Selecting the Best Model](https://jakevdp.github.io/PythonDataScienceHandbook/05.03-hyperparameters-and-model-validation.html#Selecting-the-Best-Model)

# Clustering

## Clustering

Beim Clustering handelt es sich um _unsupervised learning_.

Solche Algorithmen haben keine Zieldaten (_y_), sondern suchen nur in den Ausgangsdaten nach einer bestimmten Struktur.

Ziel von Clustering ist es, in vorhandenen Daten Gruppierungen (Cluster) von Datenpunkten zu finden.

## Clustering

- _k-Means Clustering_
- _Gaussian Mixture Models_

## k-Means Clustering

Zum Verfahren: Es werden im n-dimensionalen Raum gewisse Clusterzentren bestimmt. Ein Datenpunkt wird zu jenem Cluster gezählt, zu dessen Zentrum er den geringsten Abstand hat.

Bestimmung der Clusterzentren:

Initialisierung: zufällige Festlegung der Zentren

Wiederholt:

- bestimmen der Zugehörigkeit jedes Datenpunktes basierend auf den Zentren
- neue Festlegung der Zentren als Mittel der ihm zugeordneten Punkte

Dieses Verfahren konvergiert.

[Python Data Science Handbook - k-Means Clustering](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html)

## k-Means Clustering

Beispiele:

- [Anwendung auf Ziffern](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html#Example-1:-k-means-on-digits)
- [Farbkomprimierung von Bildern](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html#Example-2:-k-means-for-color-compression)
