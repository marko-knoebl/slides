# TensorFlow: overview and demo

## TensorFlow: overview and demo

exercise: predicting survival on the Titanic via a simple neural network

## TensorFlow: overview and demo

defining input data and output data:

```py
passenger_data = titanic[
    ["Female", "Pclass", "Age", "SibSp", "Parch"]
]
survived = titanic["Survived"]
```

## TensorFlow: overview and demo

defining a neural network in TensorFlow:

```py
from tensorflow import keras

model = keras.Sequential([
    # hidden layer with 4 neurons
    keras.layers.Dense(4),
    keras.layers.Activation("relu"),
    # output layer with 2 neurons (2 categories)
    keras.layers.Dense(2),
    keras.layers.Activation("softmax")
])
```

(note: this NN is very simple - but still more complicated than needed for this task)

## TensorFlow: overview and demo

compiling and training the model:

```py
model.compile(
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)

model.fit(passenger_data, survived, epochs=100, validation_split=0.1)
```

## TensorFlow: overview and demo

predicting a value for the survival of:

- 40-year-old woman in first class (without companions)
- 40-year-old man in second class (without companions)

```py
new_passenger_data = pd.DataFrame(
    [
        [1, 1, 40, 0, 0],
        [0, 2, 40, 0, 0]
    ],
    columns=["Female", "Pclass", "Age", "SibSp", "Parch"],
)
model.predict(new_passenger_data)
# [[0.16, 0.84], [0.80, 0.20]]
```
