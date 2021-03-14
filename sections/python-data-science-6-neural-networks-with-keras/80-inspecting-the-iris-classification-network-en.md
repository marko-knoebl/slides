# Inspecting the iris classification network

## Creating and training the network

```py
from sklearn import datasets
from sklearn import model_selection

iris = datasets.load_iris()

x = iris.data
y = iris.target

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
model.fit(x, y, epochs=300, validation_split=0.1, verbose=False)
```

## Inspecting the network

```py
layer_0 = model.get_layer(index=0)
layer_1 = model.get_layer(index=1)
layer_2 = model.get_layer(index=2)
layer_3 = model.get_layer(index=3)
```

## Inspecting the network

```py
# input values for an iris setosa flower
values_0 = np.array([[5.1, 3.5, 1.4, 0.2]])
```

## Inspecting the network

getting the values after `layer_0` (dense layer):

```py
values_1 = layer_0(values_0)
```

what happens behind the scenes (possible implementation in numpy):

```py
values_1 = values_0 @ layer_0.kernel + layer_0.bias
```

(matrix multiplication and addition)

## Inspecting the network

getting the values after `layer_1` (RELU activation layer):

```py
values_2 = layer_1(values_1)
```

what happens behind the scenes (possible implementation in numpy):

```py
values_2 = np.maximum(values_1, 0)
```

(replace negative values with 0)

## Inspecting the network

getting the values after `layer_2` (dense layer):

```py
values_3 = layer_2(values_2)
```

what happens behind the scenes (possible implementation in numpy):

```py
values_3 = values_2 @ layer_2.kernel + layer_2.bias
```

## Inspecting the network

getting the values after `layer_3` (softmax activation layer):

```py
values_4 = layer_3(values_3)
```

what happens behind the scenes (possible implementation in Python):

```py
from scipy.special import softmax
# from sklearn.utils.extmath import softmax

values_4 = softmax(values_3)
```

## Inspecting the network

function that predicts results and prints intermediate values:

```py
def predict_and_log(values_0):
    print(values_0, end="\n\n")
    values_1 = layer_0(values_0)
    print(values_1, end="\n\n")
    values_2 = layer_1(values_1)
    print(values_2, end="\n\n")
    values_3 = layer_2(values_2)
    print(values_3, end="\n\n")
    values_4 = layer_3(values_3)
    print(values_4, end="\n\n")
```

## Inspecting the network

```py
predict_and_log(np.array([[5.1, 3.5, 1.4, 0.2]]))
predict_and_log(np.array([[7.0, 3.2, 4.7, 1.4]]))
predict_and_log(np.array([[6.3, 3.3, 6.0, 2.5]]))
```
