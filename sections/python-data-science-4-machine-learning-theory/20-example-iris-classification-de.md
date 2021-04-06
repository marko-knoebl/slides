# Beispiel: Iris-Klassifikation

## Beispiel: Iris-Klassifikation

Aufgabe: trainiere einen Algorithmus, um Iris-Pflanzen basierend auf ihren Abmessungen zu klassifizieren

## Daten laden

```py
# load data via pandas
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/" +
    "machine-learning-databases/iris/iris.data",
    header=None,
    names=["sepal_length", "sepal_width", "petal_length",
           "petal_width", "species"]
)
```

## Daten vorbereiten

```py
iris_shuffled = iris.sample(frac=1.0)

# convert to numerical numpy arrays
measurements = iris_shuffled[[
    "sepal_length",
    "sepal_width",
    "petal_length",
    "petal_width",
]].to_numpy()
species = (
    iris_shuffled["species"]
    .replace({
        "Iris-setosa": 0,
        "Iris-versicolor": 1,
        "Iris-virginica": 2,
    })
    .to_numpy()
)
```

## Erstellen eines Modells in scikit-learn

```py
from sklearn.neighbors import KNeighborsClassifier

model = KNeighborsClassifier()
```

## Erstellen eines Modells in keras

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
```

## Erstellen eines Modells via NumPy

```py
class NearestNeighborClassifier():
    def fit(self, x, y):
        # In a "real" machine learning algorithm,
        #   a lot of processing could happen here.
        # In this case we're just storing the training data.
        self.x = x
        self.y = y

    def predict_single(self, x):
        vectors = self.x - x
        distances = np.linalg.norm(vectors, axis=1)
        min_index = np.argmin(distances)
        return self.y[min_index]

model = NearestNeighborClassifier()
```

## Trainieren des Modells

Trainieren basierend auf den ersten 130 Einträgen:

in _scikit-learn_:

```py
model.fit(measurements[:130], species[:130])
```

in _keras_:

```py
model.fit(
    measurements[:130],
    species[:130],
    epochs=300,
    validation_split=0.1
)
```

## Verwenden des Modells

Anwenden der Klassifikation auf neue Daten (in _scikit-learn_):

```py
demo_measurements = np.array([
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
])

model.predict(demo_measurements)
# e.g. [0, 1, 1] in scikit-learn

model.predict_proba(demo_measurements)
# [[0.9 0.1 0. ]
#  [0.  0.8 0.2]
#  [0.  0.7 0.3]]
```

## Evaluieren des Modells

```py
measurements_val = measurements[130:]
species_val = species[130:]
```

in _scikit-learn_ (_accuracy_):

```py
print(model.score(measurements_val, species_val))
```

in _keras_ (_categorical crossentropy_, _accuracy_):

```py
print(model.evaluate(measurements_val, species_val))
```
