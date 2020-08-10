# Example: california housing

for comparison: linear regression - http://www.clungu.com/scikit-learn/tutorial/Scikit-learn/

load and prepare dataset:

```py
from sklearn import datasets
from sklearn import utils
from sklearn import model_selection
from sklearn import preprocessing

housing = datasets.fetch_california_housing()

scaler = preprocessing.StandardScaler().fit(housing.data)

X = scaler.transform(housing.data)
y = housing.target

X, y = utils.shuffle(X, y)
```

create model:

```py
from keras.models import Sequential
from keras.layers import Dense

model = Sequential()
model.add(Dense(16, activation="relu"))
model.add(Dense(16, activation="relu"))
model.add(Dense(1, activation="linear"))

model.compile(loss="mean_squared_error")
```

learn:

```py
model.fit(X, y, epochs=100, validation_split=0.25, verbose=1)
```

evaluate:

```py
model.evaluate(X, y)
```
