# Machine Learning: Theorie

## Themen

- Überblick über Methoden
- Libraries
- Überblick über Verfahren im Machine Learning
- Algorithmen für Überwachtes Lernen
- Vorbereiten von Daten
- Trainieren eines Modells
- Validieren eines Modells

# Überblick über Methoden

## Überblick über Methoden

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

# Beispiele für Datensätze und Aufgaben

## Beispiele für Datensätze und Aufgaben

- [Wikipedia: List of datasets for machine-learning research](https://en.wikipedia.org/wiki/List_of_datasets_for_machine-learning_research)
- [UCI machine learning repository](https://archive.ics.uci.edu/ml)
- [scikit-learn datasets](https://scikit-learn.org/stable/datasets/index.html)
- [keras datasets](https://keras.io/api/datasets/)
- [TensorFlow datasets](https://www.tensorflow.org/datasets/overview)

## Mögliche Aufgaben

- Bilddaten: z.B. Objekterkennung, Gesichtserkennung, Handschrifterkennung
- Textdaten: z.B. Sentimentanalyse
- Sprachdaten: z.B. Spracherkennung

## Oft verwendete Datensätze

- [Iris Datensatz](https://en.wikipedia.org/wiki/Iris_flower_data_set)
- [MNIST Datensatz handgeschriebener Ziffern](https://en.wikipedia.org/wiki/MNIST_database)
- [Boston Haus-Preise](http://lib.stat.cmu.edu/datasets/boston)
- [Labeled Faces in the Wild](vis-www.cs.umass.edu/lfw)

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

# Iris Datensatz

## Iris Datensatz

_Iris Datensatz_: einfacher Beispieldatensatz für Machine Learning / Data Science

Beinhaltet Abmessungen von 150 Iris-Pflanzen (Schwertlilien): 3 verschiedene Spezies mit je 50 Einträgen

## Iris Datensatz

Beispiel CSV-Daten von <http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data>:

```txt
5.1,3.5,1.4,0.2,Iris-setosa
4.9,3.0,1.4,0.2,Iris-setosa
4.7,3.2,1.3,0.2,Iris-setosa
```

## Iris Datensatz

Laden der Daten mittels Hilfsfunktion `sklearn.datasets.load_iris()`:

Abmessungen in `.data`

Spezies in `.target` (setosa=0, versicolor=1, virginica=2)

```py
# .data
array([[5.1, 3.5, 1.4, 0.2],
       [4.9, 3. , 1.4, 0.2],
       [4.7, 3.2, 1.3, 0.2],
       # ...
      ])
# .target
array([0, 0, 0, ...])
```

# Beispiel: Iris-Klassifizierung in scikit-learn

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

# Beispiel: Iris-Klassifizierung in Keras

<!-- duplicate in machine-learning-theory and neural-networks-with-keras -->

## Überwachtes Lernen in Keras

Schritte:

- Erstellen eines Input-Arrays `x` und eines Ziel-Arrays `y`
- Erstellen eines Modells aus verschiedenen Layern (z.B. Preprocessing-Layer, Neuronen-Layer, ...)
- Kompilieren via `model.compile()` und "Lernen" via `model.fit(x, y)`
- Vorhersagen weiterer Ergebnisse via `model.predict(...)`

## Beispiel

Laden von Daten:

```py
from sklearn import datasets

iris = datasets.load_iris()

x = iris.data
y = iris.target
```

## Beispiel

Trainieren des Netzwerks:

```py
from tensorflow import keras

model = keras.Sequential([
    keras.layers.Dense(8),
    keras.layers.Activation("relu"),
    keras.layers.Dense(3),
    keras.layers.Activation("softmax")
])
model.compile(
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)
model.fit(x, y, epochs=300, validation_split=0.1)
```

## Beispiel

Anwenden der Klassifikation auf neue Daten:

```py
test_data = [
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
]

y_pred = model.predict(test_data)
# [[0.9 0.1 0. ]
#  [0.  0.8 0.2]
#  [0.  0.7 0.3]]
```

# Algorithmen für überwachtes Lernen

## Algorithmen für überwachtes Lernen

Regression:

- _neuronale Netzwerke_
- lineare Regression, polynomiale Regression, ...

Klassifizierung:

- _neuronale Netzwerke_
- k-nearest-neighbors
- Entscheidungsbäume (decision trees)
- logistische Regression
- naive Bayes
- Support Vector Machines

# Lineare Regression

## Regression

Lineare Regression: Festlegen einer linearen Funktion, die die Datenpunkte bestmöglich approximiert (kleinste Quadratsumme)

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
1, 1 → 5.00
2, 3 → 13.50
3, 2 → 10.90
0, 0 → 0.00
```

Ergebnis einer linearen Regression:

```txt
price = 0.05 + 1.13*x + 3.73*y
```

# Neuronale Netzwerke

<!--
duplicates in machine-learning-theory and
neural-networks-with-keras
-->

## Neuronale Netzwerke

Machine Learning Verfahren, das in etwa die Interaktion von Neuronen im Gehirn nachahmt

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
- Softmax - oft im letzen Layer für Klassifikation verwendet
- Sigmoid - oft im letzen Layer für "Tagging" verwendet (Tags können sich überlappen)

## Ressource

- <https://victorzhou.com/blog/intro-to-neural-networks/>

# Klassifizierungsalgorithmen

## Klassifizierungsalgorithmen

- _neuronale Netzwerke_
- k-nearest-neighbors
- Entscheidungsbäume (decision trees)
- logistische Regression
- naive Bayes
- Support Vector Machines

## K-Nearest-Neighbors

Um einen Datenpunkt zu klassifizieren, werden ähnliche bekannte Datenpunkte betrachtet, für die schon eine Klassifizierung bekannt ist

## Entscheidungsbäume (Decision Trees)

Beispiel für die Iris-Klassifizierung:

- Ist die _petal length_ kleiner oder gleich 2.4?
  - ja: **setosa**
  - nein: Ist die _petal width_ kleiner oder gleich 1.7?
    - ja: Ist die _petal length_ kleiner oder gleich 5.0?
      - ja: **versicolor**
      - nein: **virginica**
    - nein: **virginica**

## Logistische Regression

An einer Grenze zwischen zwei Klassen wird mit Hilfe einer _logistischen Funktion_ angegeben, wie groß die Wahrscheinlichkeit ist, dass der Datenpunkt zu der einen bzw zu der anderen Klasse gehört.

Die logistische Funktion selbst wird intern mittels Regression bestimmt (daher der Name).

## Naive Bayes

Für die bekannten Klassen werden Wahrscheinlichkeitsverteilungen angenommen (z.B. Normalverteilung, Multinomialverteilung). Diese Verteilungen werden aus den Trainingsdaten hergeleitet.

Für einen neuen Datenpunkt wird dann errechnet, unter welcher der Verteilungen er am ehesten auftreten würde.

Zwei wichtige Verteilungen:

- Normalverteilung oder _Gauß'sche Verteilung_ (für kontinuierliche Werte)
- Multinomialverteilung (für diskrete Werte / Ganzzahlen)

## Support Vector Machines

Einfachster Fall: Trennung von Klassen durch Geraden / Ebenen / Hyperebenen - diese Trenner sollen von den getrennten Punkten maximalen Abstand haben.

Durch Kernelfunktionen können die Grenzen auch andere Formen annehmen, z.B. die von Kegelschnitten für polynomiale Kernel vom Grad 2 oder anderen Kurven.

## Klassifizierungsalgorithmen

[Überblick über Klassifizierungsalgorithmen in scikit-learn](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html)

# Beispiel: Iris-Klassifizierung mit verschiedenen Algorithmen

## Beispiel: Iris-Klassifizierung mit verschiedenen Algorithmen

Aufgabe: verwende andere Klassifizierungsalgorithmen in _scikit-learn_, z.B.:

- `sklearn.tree.DecisionTreeClassifier`
- `sklearn.svm.SVC`
- `sklearn.naive_bayes.GaussianNB`
- `sklearn.neural_network.MLPClassifier`

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

## Skalieren von Werten

Welcher dieser beiden Sterne ist der Sonne am ähnlichsten?

```py
# data: radius (km), mass (kg), temparature (K)
sun =    [7.0e7, 2.0e30, 5.8e3]

star_a = [6.5e7, 2.2e30, 5.2e3]
star_b = [7.0e8, 2.1e30, 8.1e3]
```

manche Machine Learning Algorithmen wie z.B. k-Nearest-Neighbor betrachten Absolutwerte.

Hier würde vom Algorithmus im wesentlichen nur die Masse herangezogen werden, da alle anderen Werte im Vergleich verschwindend gering sind.

## Skalieren von Werten

Lösung: Bevor ein Algorithmus angewendet wird, werden die Werte zentriert und skaliert (z.B. so, dass ihr Mittelwert 0 und ihre Standardabweichung 1 sind)

## Fehlende Daten

Fehlende Daten werden häufig in der Form von `NaN`s auftreten.

Mögliche Behandlungen:

- Löschen aller Zeilen, die an irgendeiner Stelle undefinierte Werte enthalten
- Interpolieren der fehlenden Werte durch andere Daten

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
[["fr", "chrome"],
 ["uk", "chrome"],
 ["us", "firefox"]]
```

One-Hot-Kodierung:

```py
# fr?, uk?, us?, chrome?, firefox?
[[1., 0., 0., 1., 0.],
 [0., 1., 0., 1., 0.],
 [0., 0., 1., 0., 1.]]
```

## Textdaten

Beispiel für Preprocessing für Textklassifikation: Zählen von Wörtern

# Beispiel: Laden und Vorbereiten von Daten

## Laden von Daten

```py
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/" +
    "machine-learning-databases/iris/iris.data",
    header=None)
iris_measures = iris.iloc[:, :4].to_numpy()
iris_species = iris.iloc[:, 4].to_numpy()
```

## Vorbereiten von Daten

```py
encoder = LabelBinarizer()
encoder.fit(iris_species)
iris_species_one_hot = encoder.transform(iris_species)
```

```py
scaler = StandardScaler()
scaler.fit(iris_measures)
iris_measures_scaled = scaler.transform(iris_measures)
```

```py
x = iris_measures_scaled
y = iris_species_one_hot
```

# Modellvalidierung und -auswahl

## Modellvalidierung und -auswahl

Um das bestmögliche Modell zu bestimmen:

- Testen mehrerer Algorithmen
- Testen mehrerer Parameter für den Algorithmus
- Testen, ob mehr Lerndaten zu besseren Ergebnissen führen

siehe [Python Data Science Handbook → Hyperparameters and Model Validation → Selecting the Best Model](https://jakevdp.github.io/PythonDataScienceHandbook/05.03-hyperparameters-and-model-validation.html#Selecting-the-Best-Model)

# Trainingsdaten und Validierungsdaten

## Trainingsdaten und Validierungsdaten

Um zu validieren, ob ein Verfahren ein passendes Ergebnis liefert:

Die Daten werden in _Trainingsdaten_ und _Validierungsdaten_ unterteilt

## Trainingsdaten und Validierungsdaten

für iterative Algorithmen (z.B. Neuronale Netzwerke in _keras_):

- _Trainingsdaten_
- _Testdaten_ (während iterativem Training verwendet)
- _Validierungsdaten_ (zur Validierung des fertigen Modells)

für andere Algorithmen (z.B. _sklearn_):

- _Trainingsdaten_
- _Validierungsdaten_ oder _Testdaten_ (zur Validierung des Modells)

# Validierungsmetriken

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

## Validierungsmetriken

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

# Beispiel: Iris-Validierung in scikit-learn

## Beispiel: Iris-Validierung in scikit-learn

Manueller train-test Split:

```py
rng = np.random.default_rng(seed=1)

random_indexes = rng.permutation(x.shape[0])
# e.g. [65, 44, 22, 133, 47, ...]

x_train = x[random_indexes[:120]]
y_train = y[random_indexes[:120]]

x_test = x[random_indexes[120:]]
y_test = y[random_indexes[120:]]
```

## Beispiel: Iris-Validierung in scikit-learn

Automatische Unterteilung vis scikit-learn:

```py
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y)
```

## Beispiel: Iris-Validierung in scikit-learn

Validierung basierend auf den Testdaten:

```py
from sklearn import metrics

y_prediction = model.predict(x_test)
score = metrics.accuracy_score(y_prediction, y_test)
print("accuracy:", score)
```

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
