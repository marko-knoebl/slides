# Supervised learning in scikit-learn

## Supervised learning in scikit-learn

steps:

- create an input matrix `X` and a target vector `y` / a target matrix `Y`
- instantiate an algorithm class - e.g. `KNeighborsClassifier`, `MLPClassifier`, `LinearRegression`, ...
- "learn" via `model.fit(X, y)`
- predict more results via `model.predict(...)`
