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
