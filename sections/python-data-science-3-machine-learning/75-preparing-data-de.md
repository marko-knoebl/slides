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
visitors = np.array([["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]])
```

## Kategorien als Daten

Eingangsdaten:

```py
visitors = np.array([["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]])
```

Kodierung als Ordinale (nicht für alle Algorithmen geeignet, da implizit geordnet (fr=0, us=2)):

```py
np.array([[0., 0.], [1., 0.], [2., 1.]])
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
- `OneHotEncoder` (One-Hot-Encoding für Eingangsdaten, standardmäßig sparse)
- `LabelBinarizer` (One-Hot-Encoding für Zieldaten)

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
