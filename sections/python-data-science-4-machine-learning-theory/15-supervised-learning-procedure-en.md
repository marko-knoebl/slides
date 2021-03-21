# Supervised learning procedure

## Supervised learning procedure

steps:

- collect and prepare training data (input data and associated output data)
- train a model based on the input and output (can take time)
- validate the model's accuracy
- use the model to predict outputs for new data

## Supervised learning procedure

in _scikit-learn_:

- create an input matrix (commonly `x` or `X`) and a target vector / matrix (commonly `y` or `Y`)
- instantiate an algorithm class - e.g. `KNeighborsClassifier`, `MLPClassifier`, `LinearRegression`, ...
- "learn" via `model.fit(x, y)`
- validate via `model.score(x_val, y_val)` or `metrics.accuracy_score(x_val, y_val)`, ...
- predict more results via `model.predict(...)` or `model.predict_proba(...)`

## Supervised learning procedure

in _keras_:

- create an input array (commonly `x`) and a target array (commonly `y`)
- build a model from various layers (e.g. preprocessing layers, neural layers, ...)
- compile via `model.compile()` and "learn" via `model.fit(x, y)`
- validate via `model.evaluate(x_val, y_val)`
- predict more results via `model.predict(...)`
