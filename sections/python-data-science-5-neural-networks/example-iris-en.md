# Example: iris classification

load and prepare dataset:

```py
import numpy as np
from sklearn import datasets
from sklearn import preprocessing
from sklearn import utils

iris = datasets.load_iris()

X = iris.data
Y = preprocessing.LabelBinarizer().fit_transform(iris.target[:, np.newaxis])

X, Y = utils.shuffle(X, Y)
```

create model:

```py
from keras.models import Sequential
from keras.layers import Dense

model = Sequential()
model.add(Dense(8, activation="relu"))
model.add(Dense(3, activation="softmax"))

model.compile(
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)
```

learn:

```py
model.fit(X, Y, validation_split=0.25, batch_size=5, epochs=100, verbose=1)
```

verify model:

```py
model.evaluate(X, Y)

model.predict([[5, 3, 1.5, 0.2]]) # category should be 0
```
