# Functional and sequential API

## Functional and sequential API

sequential API (only allows linear data processing):

```py
model = keras.models.Sequential()
model.add(keras.layers.Dense(256, activation="relu"))
model.add(keras.layers.Dense(128, activation="relu"))
model.add(keras.layers.Dense(10, activation="softmax"))
```

functional API (allows more complex processing):

```py
inputs = keras.layers.Input(shape=[28, 28])
x = keras.layers.Dense(256, activation="relu")(inputs)
x = keras.layers.Dense(128, activation="relu")(x)
outputs = keras.layers.Dense(10, activation="softmax")(x)
model = keras.Model(inputs, outputs)
```
