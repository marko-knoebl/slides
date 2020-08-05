# Example: iris classification

load and prepare dataset:

```py
import numpy as np

from sklearn import datasets
from sklearn.preprocessing import LabelBinarizer, StandardScaler

iris = datasets.load_iris()

X = StandardScaler().fit_transform(iris.data)
Y = LabelBinarizer().fit_transform(iris.target[:, np.newaxis])
```

build model:

```py
from keras.models import Sequential
from keras.layers import Dense

model = Sequential()
model.add(Dense(8, activation="relu"))
model.add(Dense(8, activation="relu"))
model.add(Dense(3, activation="softmax"))

model.compile(
    optimizer="adam",
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)

model.fit(X, Y, batch_size=5, epochs=100, verbose=0)
```

verify model:

```py
model.evaluate(X, Y)

model.predict([[5, 3, 1.5, 0.2]]) # category should be 0
```
