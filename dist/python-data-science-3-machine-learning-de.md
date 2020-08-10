# NumPy Fortgeschritten

## Form von Arrays ändern

```py
array_1d = array_3d.ravel()
array_1d = array_3d.reshape(8)
array_2d = array_3d.reshape(2, 4)
array_2d = array_3d.reshape(2, -1) # automatic second dimension
array_2d_transposed = array_2d.T
```

## Dimensionalität erhöhen

Hinzufügen einer extra Dimension der Länge 1 via `newaxis` - Verwandeln eines 2 x 2 Arrays in ein 2 x 2 x 1 Array:

```py
array_2d = np.array([[1, 2], [3, 4]])
array_3d = array_2d[:, :, np.newaxis]
# [[[1], [2]], [[3], [4]]]
```

## Slices als Views

In Python können wir eine flache Kopie einer Liste erstellen, indem wir sie slicen - dies ist in NumPy nicht so (um die Effizienz zu steigern):

```py
list = [1, 2, 3]
list_copy = list[:]
list_copy[0] = 10 # does NOT change list

array = np.array([1, 2, 3])
array_view = array[:]
array_view[0] = 10 # DOES change array
```

## Arrays kopieren

Arrays können via `array.copy()` kopiert werden

## Arrays aneinanderfügen

nebeineinander anfügen:

```py
np.concatenate([a1d, a1d])
np.concatenate([a2d, a2d])
```

untereinander anfügen:

```py
np.concatenate([a2d, a2d], axis=1)
```

## Matrix-Multiplikation

Matrix-Multiplikation kann durch den binären Operator `@` durchgeführt werden

```py
a = np.array([1, 1])

M = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(a @ M)
# array([0.   , 1.414])
```

## Matrix-Multiplikation

Rotation verschiedener Punkte um 45° gegen den Uhrzeigersinn:

```py
points = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])

M = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(points @ M)
```

## Matrix-Multiplikation

Beispiel:

bekannt: Preise verschiedener Produkte, derent Bestände in verschiedenen Lagern

```py
prices = np.array([3.99, 12.99, 5.90, 15])
quantities = np.array([[0, 80, 80, 100],
                       [100, 0, 0, 0],
                       [50, 0, 0, 50]])
```

Gesucht: Warenwert pro Lager

# Machine learning

## Kategorien von Methoden

- Supervised learning (Überwachtes Lernen)
- Unsupervised learning
- Reinforcement learning

## Beispiele für Aufgaben

- Regression
- Klassifizierung
- Clustering
- Dimensionsreduktion

## Beispiele für Aufgaben

### Regression

Zuweisung von numerischen Werten zu numerischen Eingabedaten

Beispiele:

- Schätzung der Entfernung einer Galaxie basierend auf der Rotverschiebung
- Schätzung der Kursentwicklung einer Aktie

## Beispiele für Aufgaben

### Klassifikation

Zuweisung von Klassen zu numerischen Eingabedaten

Beispiele:

- Spam-Filterung basierend auf einer Anzahl an Wörtern / Phrasen (2x "nigerian prince", 1x "viagra")
- Erkennen von Objekten / Personen / Zeichen auf Bildern

## Beispiele für Aufgaben

### Clustering

Erkennen von Gruppierungen / Clustern bei numerischen Eingabedaten

Beispiele:

- Erkennen wiederkehrender Elemente in Bildern

# Regression - Grundlagen

## Lineare Regression

## Lineare Regression

Beispiel: Wir betrachten verschiedene Einkäufe bei verschiedenen Supermärkten:

- 1 l Milch, 1 kg Brot: 4.58€
- 2 l Milch, 3 kg Brot: 13.50€
- 3 l Milch, 2 kg Brot: 11.98€
- (0 l Milch, 0 kg Brot: 0€)

Was wäre eine passende Schätzung für den Preis von 1 Liter Milch / 1 kg Brot? Wenn wir bei einem Supermarkt 2 Liter Milch und 2 kg Brot kaufen, welcher Preis wäre in etwa zu erwarten?

Diese Aufgabe kann mit Hilfe von linearer Regression beantwortet werden.

## Lineare Regression

Beispiel:

```py
from sklearn.linear_model import LinearRegression

X = [[1, 1], [2, 3], [3, 2], [0, 0]]
y = [4.58, 14.50, 11.98, 0.0]

model = LinearRegression()
model.fit(X, y)

yfit = model.predict([[1, 0], [0, 1], [2, 2]])
print(yfit)
```

## Lineare Regression - Beispiel

Iris-Datensatz: Abschätzen der _sepal width_ basierend auf der _sepal length_

```py
from sklearn import datasets
iris = datasets.load_iris()
```

## Lineare Regression - erlernte Koeffizienten

- `model.coef_`
- `model.intercept_`

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

# Regression und Klassifikation: Verfahren

## Regression und Klassifikation: Verfahren

- Instanziierung einer Algorithmenklasse, z.B. `LinerRegression`, `KNeighborsClassifier`, `DecisionTreeClassifier`, ...
- Erstellen einer Eingangsmatrix `X` und eines Zielvektors `y`
- "Lernen" mittels `model.fit(X, y)`
- Voraussagen weiterer Ergebnisse mittels `model.predict(...)`

# Validierung

## Train-Test Split

Um zu validieren, ob ein Verfahren ein passendes Ergebnis liefert:

Die Daten (X, y) werden in Trainingsdaten und Testdaten unterteilt. Die Testdaten dienen zur Validierung.

## Train-Test Split

Frage: wie gut approximiert unsere lineare Regression die Iris Daten?

```py
from sklearn.model_selection import train_test_split
from sklearn import metrics

X_train, X_test, y_train, y_test = train_test_split(X, y)

...

print(metrics.r2_score(y_prediction, y_test))
```

Wir können einen Parameter `test_size` angeben, dessen Standardwert `0.25` ist (d.h. 25% der Daten werden zur Validierung verwendet)

## Validierungsmetriken

Regression:

- `metrics.mean_squared_error(y_true, y_pred)` (mittlere quadratische Abweichung)
- `metrics.r2_score(y_true, y_pred)` (R², Bestimmtheitsmaß)

Klassifizierung:

- `metrics.accuracy_score(y_true, y_pred)` (Anteil an richtig klassifizierten Einträgen)
- `metrics.confusion_matrix(y_true, y_pred)` (Anteil an richtig / falsch klassifizierten Einträgen für jede Klasse)
- `metrics.precision_recall_fscore_support(y_true, y_pred)` (Zusammenfassung wichtiger Metriken)

Siehe auch <https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics>

## Validierungsmetriken: Bestimmtheitsmaß

Das Bestimmtheitsmaß (R²) gibt an, wie nahe die Interpolation an den Testdaten liegt:

- R²=1 - perfekte Interpolation
- R²=0 - Interpolation nicht besser als der einfache Durchschnitt
- R²&lt;0 - schlechter als der einfache Durchschnitt 

## Validierung

Aufgaben:

- Validierung der Iris-Regression
- Validierung der Iris-Klassifizierung

## Kreuzvalidierung

Bei der Kreuzvalidierung (cross-validation) werden die Daten wiederholt in unterschiedliche Trainings- und Testdaten unterteilt, sodass jeder Eintrag einmal in den Testdaten vorkommt.

```py
from sklearn.model_selection import cross_validate

...

test_results = cross_validate(model, X, y, cv=5, scoring="r2")
test_scores = test_results["test_score"]
print(test_scores)
# [ 0.61840428  0.72569954 -1.1742135   0.44294841  0.50589789]
```

# Daten vorbereiten

## Daten vorbereiten

üblicherweise:

- `X`: zweidimensionales Array mit Eingangsdaten
- `y`: eindimensionales Array mit Resultaten

Die Arrays `X` und `y` sollten numerische Daten enthalten

## Daten vorbereiten

Aufgaben:

- Fehlende Daten ergänzen
- Skalieren von Werten
- Kategoriedaten in numerische Daten umwandeln
- Textdaten in numerische Daten umwandeln

## Daten vorbereiten

Klassen zum vorbereiten der Daten besitzen folgende Methoden:

- `.fit`: erlernt anhand vorgegebener Eingangsdaten (`X1`) eine passende Umwandlung für das Modell
- `.transform`: wandelt gegebene Eingangsdaten (`X2`) anhand des gelernten in die neue Form um
- `.fit_transform`: beides in einem Schritt (für die gleichen Daten)

## Fehlende Daten

Fehlende Daten werden häufig in der Form von `NaN`s auftreten.

Mögliche Behandlungen:

- Löschen aller Zeilen, die an irgendeiner Stelle undefinierte Werte enthalten
- Interpolieren der fehlenden Werte durch andere Daten

## Fehlende Daten: Interpolation

```py
import numpy as np
from sklearn.impute import SimpleImputer
X = np.array([[ np.nan, 0,   3  ],
              [ 3,   7,   9  ],
              [ 3,   5,   2  ],
              [ 4,   np.nan, 6  ],
              [ 8,   8,   1  ]])

imputer = SimpleImputer(strategy="mean")
imputer.fit(X)

imputer.transform(X)
imputer.transform(np.array([[np.nan, 1, 1]]))
```

## Skalieren von Werten

Welcher dieser beiden Sterne ist der Sonne am ähnlichsten?

```py
# data: radius (km), mass (kg), temparature (K)
sun =    [7.0e7, 2.0e30, 5.8e3]

star_a = [6.5e7, 3.0e30, 5.2e3]
star_b = [7.0e8, 2.5e30, 8.1e3]
```

Machine Learning Algorithmen wie z.B. k-Nearest-Neighbor betrachten Absolutwerte. Hier würde vom Algorithmus im wesentlichen nur die Masse herangezogen werden, da alle anderen Werte im Vergleich verschwindend gering sind.

## Skalieren von Werten

Lösung: Die Werte werden zentriert und skaliert, sodass ihr Mittelwert 0 und die Standardabweichung 1 ist

```py
from sklearn import preprocessing
import numpy as np
X_train = np.array([[ 7.0e7, 2.0e30, 5.8e3],
                    [ 6.5e7, 3.0e30, 5.2e3],
                    [ 7.0e9, 2.5e30, 3.1e3]])

scaler = preprocessing.StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
```

## Skalieren von Werten

Skalierte Werte:

```py
array([[-0.70634165, -1.22474487,  0.95025527],
       [-0.70787163,  1.22474487,  0.43193421],
       [ 1.41421329,  0.        , -1.38218948]])
```

## Kategorien als Daten

Manchmals: _Kategorien_ als Eingangs- oder Ausgangsdaten - z.B. Land, Berufsgruppe, Messverfahren, ...

oftmals als Strings angegeben, Kodierung als Zahlen gewünscht, z.B.:

```py
visitors = np.array(
    [["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]]
)
```

## Kategorien als Daten

Eingangsdaten:

```py
visitors = np.array(
    [["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]]
)
```

Kodierung als Ordinale (nicht für alle Algorithmen geeignet, da implizit geordnet (fr=0, uk=1, us=2)):

```py
np.array([[0., 0.], [1., 0.], [2., 1.]])
```

## Kategorien als Daten

Eingangsdaten:

```py
visitors = np.array(
    [["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]]
)
```

One-Hot-Kodierung:

```py
# fr?, uk?, us?, chrome?, firefox?
np.array([[1., 0., 0., 1., 0.],
          [0., 1., 0., 1., 0.],
          [0., 0., 1., 0., 1.]])
```

## Kategorien als Daten

Preprocessors:

- `OrdinalEncoder` (Ordinale für Eingangskategorien)
- `LabelEncoder` (Ordinale für Zielkategorien)
- `OneHotEncoder` (One-Hot-Encoding für Eingangskategorien, standardmäßig sparse)
- `LabelBinarizer` (One-Hot-Encoding für Zielkategorien)

## Kategorien als Daten

Beispiele:

```py
X = preprocessing.OrdinalEncoder().fit_transform(visitors)
y = preprocessing.LabelEncoder().fit_transform(iris_species)

X = preprocessing.OneHotEncoder().fit_transform(visitors)
Y = preprocessing.LabelBinarizer().fit_transform(iris_species)
```

## Textdaten

Beispiel für das Preprocessing von Textdaten: Zählen von Worten

```py
from sklearn.feature_extraction.text import CountVectorizer

sample = ['problem of evil',
          'evil queen',
          'horizon problem']

vectorizer = CountVectorizer()
vectorizer.fit(sample)
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

- Zieldaten als ordinale Daten
- Eingangsdaten skalieren
- k-Nearest-Neighbor-Klassifizierung bei skalierten und nichtskalierten Daten vergleichen

## Beispiel: Preprocessing von Textdaten (Newsgroups)

[Multinomial Naive Bayes - Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html#Multinomial-Naive-Bayes)

# Regression

## Lineare Regression

Bedeutet: Festlegen einer linearen Funktion, die die Datenpunkte bestmöglich approximiert (kleinste Quadratsumme)

## Lineare Regression - Beispiele

- Diabetes Vorhersage
- ([Radverkehr](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Example:-Predicting-Bicycle-Traffic))

# Polynomiale Regression

## Polynomiale Regression

Manche Daten passen nicht in das Schema eines linearen Zusammenhangs `y = a*x + b`.

Wir können z.B. versuchen, sie durch einen polynomialen Zusammenhang `y = a*x^2 + b*x + c` darzustellen.

## Polynomiale Regression

In scikit-learn können wir eine polynomiale Regression durch einen _Preprocessor_ namens `PolynomialFeatures` durchführen.

## Polynomiale Regression

Als Beispieldaten verwenden wir den Datensatz _II_ aus den sogenannten Anscombe Daten:

```py
import seaborn as sns

anscombe = sns.load_dataset("anscombe")
anscombe_2 = anscombe[anscombe.dataset == "II"]
```

## Polynomiale Regression

Wir nähern die Daten mit einer Polynomfunktion vom Grad 3 an:

```py
from sklearn.preprocessing import PolynomialFeatures
poly_model = make_pipeline(
    PolynomialFeatures(3),
    LinearRegression()
)

poly_model.fit(X, y)
```

Aufgabe: Vergleiche die Ergebnisse einer einfachen Linearen Regression mit der polynomialen Regression.

# Klassifizierung

## Klassifizierungsalgorithmen

- K-Nearest-Neighbors
- Logistische Regression
- Naive Bayes
- Support Vector Machine
- Entscheidungsbäume und Random Forests

Siehe auch: [classifier comparison von scikit-learn](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html)

## K-Nearest-Neighbors

Ein neuer Datenpunkt wird klassifiziert, indem seine nächsten Nachbarn betrachtet werden. Die bei diesen Nachbarn am häufigsten vorkommende Klasse wird auch für den Datenpunkt festgesetzt.

Die Anzahl `k` der betrachteten Nachbarn kann festgesetzt werden (Standardwert = 5)

Siehe auch: <https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html#sklearn.neighbors.KNeighborsClassifier>

## Logistische Regression

An einer Grenze zwischen zwei Klassen wird mit Hilfe einer _logistischen Funktion_ angegeben, wie groß die Wahrscheinlichkeit ist, dass der Datenpunkt zu der einen (bzw zu der anderen) Klasse gehört. Je nachdem, welche der Wahrscheinlichkeiten größer als 50% ist, wird die entsprechende Klasse zugewiesen.

Die logistische Funktion selbst wird intern mittels Regression bestimmt (daher der Name).

Beispiel: <https://scikit-learn.org/stable/auto_examples/linear_model/plot_logistic.html#sphx-glr-auto-examples-linear-model-plot-logistic-py>

## Naive Bayes

Für die bekannten Klassen werden Wahrscheinlichkeitsverteilungen angenommen (z.B. Normalverteilung, Multinomialverteilung). Diese Verteilungen werden aus den Trainingsdaten hergeleitet.

Für einen neuen Datenpunkt wird dann errechnet, unter welcher der Verteilungen er am ehesten auftreten würde.

Zwei wichtige Verteilungen sind die Normalverteilung (Gauß'sche Verteilung) für kontinuierliche Werte und die Multinomialverteilung für diskrete Werte (Ganzzahlen).

[Python Data Science Handbook - Naive Bayes](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html)

## Support Vector Machines

Einfachster Fall: Trennung von Klassen durch Geraden / Ebenen / Hyperebenen - diese Trenner sollen von den getrennten Punkten maximalen Abstand haben.

Durch Kernelfunktionen können die Grenzen auch andere Formen annehmen, z.B. die von Kegelschnitten für polynomiale Kernel vom Grad 2 oder anderen Kurven.

Siehe auch: <https://scikit-learn.org/stable/modules/svm.html>

[Python Data Science Handbook - Support Vector Machines](https://jakevdp.github.io/PythonDataScienceHandbook/05.07-support-vector-machines.html)

## Entscheidungsbäume (Decision Trees)

Machine Learning Bibliotheken können sogenannte Entscheidungsbäume auf Basis von Trainingsdaten generieren.

Beispiel für einen Entscheidungsbaum für die Iris-Klassifizierung:

- Ist die _petal length_ kleiner oder gleich 2.4?
  - ja: **setosa**
  - nein: Ist die _petal width_ kleiner oder gleich 1.7?
    - ja: Ist die _petal length_ kleiner oder gleich 5.0?
      - ja: **versicolor**
      - nein: **virginica**
    - nein: **virginica**

## Random Forests

Basierend auf Decision Trees: Die Daten werden in verschiedene Untermengen zerlegt. Mittels jeder Untermenge wird ein einzelner Decision Tree erstellt. Die Gesamtheit der Decision Trees wird zu einem sogenannten _Random Forest_ zusammengeführt.

[Python Data Science Handbook - Decision Trees and Random Forests](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html)

## Klassifizierungsalgorithmen - Übersicht

Mögliche Algorithmen:

```py
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
```

<!--
```py
LogisticRegression(solver="liblinear", multi_class="auto")
SVC(gamma="scale")
RandomForestClassifier(n_estimators=100)
```
-->

## Beispiele zur Klassifizierung

- [Klassifizierung von Newsgroup-Postings (mittels Naive Bayes, logistischer Regression oder Decision Tree)](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html#Multinomial-Naive-Bayes)
- [Erkennen von Ziffern (Random Forest)](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html#Example:-Random-Forest-for-Classifying-Digits)

# Overfitting

## Overfitting

Mögliches Problem beim Lernen: Der Algorithmus ist zu flexibel und erkennt scheinbare Muster in zufälligen Schwankungen.

Algorithmen, die anfällig für Overfitting sind:

- Entscheidungsbäume
- Polynomiale Regression

## Overfitting - Lösungmöglichkeiten

- Einschränkung der Flexibilität (z.B. Grad des Polynoms, Tiefe des Entscheidungsbaums)
- Kombination mehrerer Entscheidungsbäume (Random Forest)
- "Bestrafung" großer Koeffizienten bei der polynomialen Regression (L2- und L1-Regularisierung)

Zur polynomialen Regression siehe: [Data Science Handbook - Regularization](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Regularization)

# Modellbewertung & Verbesserung

## Modellbewertung & Verbesserung

Um das bestmögliche Modell zu bestimmen:

- Testen mehrerer Algorithmen
- Testen mehrerer Parameter für den Algorithmus
- Testen, ob mehr Lerndaten zu besseren Ergebnissen führen

siehe [Python Data Science Handbook → Hyperparameters and Model Validation → Selecting the Best Model](https://jakevdp.github.io/PythonDataScienceHandbook/05.03-hyperparameters-and-model-validation.html#Selecting-the-Best-Model)

# Clustering

## Clustering

Beim Clustering handelt es sich um _unsupervised learning_. Solche Algorithmen haben keine Zieldaten (_y_), sondern suchen nur in den Ausgangsdaten nach einer bestimmten Struktur.

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

# Resources

Pandas website: <https://pandas.pydata.org/>

Python Data Science Handbook: <https://jakevdp.github.io/PythonDataScienceHandbook/>

<!-- https://github.com/jakevdp/PythonDataScienceHandbook -->
