# Example: iris classification

## Example: iris classification

```py
import pandas as pd
import sklearn

import keras
```

load and prepare dataset:

```py
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/" +
    "machine-learning-databases/iris/iris.data",
    header=None)
iris_measures = iris.iloc[:, :4].to_numpy()
iris_species = iris.iloc[:, 4].to_numpy()
```

```py
encoder = sklearn.preprocessing.LabelBinarizer()
encoder.fit(iris_species)
iris_species_binarized = encoder.transform(iris_species)
```

```py
x = iris_measures
y = iris_species_binarized
```

```py
model = keras.Sequential([
    keras.layers.Dense(8, activation="relu"),
    keras.layers.Dense(3, activation="softmax")
])

model.compile(
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)
```

```py
model.fit(x, y, epochs=100, validation_split=0.1)
```

```py
model.evaluate(x, y)
```

```py
model.predict([[5, 3, 1.5, 0.2]]) # category should be 0
```
