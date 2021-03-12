# Supervised Learning Algorithmen in scikit-learn

## Algorithmen in scikit-learn

Regression:

- `sklearn.linear_model.LinearRegression`
- `sklearn.neural_network.MLPRegressor`

Klassifizierung:

- `sklearn.neighbors.KNeighborsClassifier`
- `sklearn.tree.DecisionTreeClassifier`
- `sklearn.ensemble.RandomForestClassifier`
- `sklearn.linear_model.LogisticRegression`
- `sklearn.naive_bayes.GaussianNB`
- `sklearn.naive_bayes.MultinomialNB`
- `sklearn.svm.SVC`
- `sklearn.neural_network.MLPClassifier`

## K-Nearest-Neighbors

`sklearn.neighbors.KNeighborsClassifier`

Die Anzahl `k` der betrachteten Nachbarn kann festgesetzt werden (Standardwert = 5)

Siehe auch: https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html

## Entscheidungsbäume (Decision Trees)

siehe: [Python Data Science Handbook - Decision Trees and Random Forests](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html)

Random Forests: Die Daten werden in verschiedene Untermengen zerlegt. Mittels jeder Untermenge wird ein einzelner Decision Tree erstellt. Die Gesamtheit der Decision Trees wird zu einem sogenannten _Random Forest_ zusammengeführt.

```py
RandomForestClassifier(n_estimators=100)
```

## Logistische Regression

Beispiel: https://scikit-learn.org/stable/auto_examples/linear_model/plot_logistic.html

```py
LogisticRegression(solver="liblinear", multi_class="auto")
```

## Naive Bayes

siehe: [Python Data Science Handbook - Naive Bayes](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html)

## Support Vector Machines

siehe:

- https://scikit-learn.org/stable/modules/svm.html
- [Python Data Science Handbook - Support Vector Machines](https://jakevdp.github.io/PythonDataScienceHandbook/05.07-support-vector-machines.html)

## Beispiele

- [Klassifizierung von Newsgroup-Postings (mittels Naive Bayes, logistischer Regression oder Decision Tree)](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html#Multinomial-Naive-Bayes)
- [Erkennen von Ziffern (Random Forest)](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html#Example:-Random-Forest-for-Classifying-Digits)
