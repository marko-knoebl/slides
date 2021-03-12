# Supervised learning algorithms in scikit-learn

## Algorithms in scikit-learn

regression:

- `sklearn.linear_model.LinearRegression`
- `sklearn.neural_network.MLPRegressor`

classification:

- `sklearn.neighbors.KNeighborsClassifier`
- `sklearn.tree.DecisionTreeClassifier`
- `sklearn.ensemble.RandomForestClassifier`
- `sklearn.linear_model.LogisticRegression`
- `sklearn.naive_bayes.GaussianNB`
- `sklearn.naive_bayes.MultinomialNB`
- `sklearn.svm.SVC`
- `sklearn.neural_network.MLPClassifier`

## K-nearest-neighbors

`sklearn.neighbors.KNeighborsClassifier`

The number `k` of neighbors can be chosen (default: 5)

See: https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html

## Decision trees

see: [Python Data Science Handbook - Decision Trees and Random Forests](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html)

random forests: data are split into different subsets; for each subset a separate decision tree is created; all decision trees are combined into a so-called _random forest_

```py
RandomForestClassifier(n_estimators=100)
```

## Logistic regression

See: https://scikit-learn.org/stable/auto_examples/linear_model/plot_logistic.html

```py
LogisticRegression(solver="liblinear", multi_class="auto")
```

## Naive Bayes

see: [Python Data Science Handbook - Naive Bayes](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html)

## Support vector machines

see:

- https://scikit-learn.org/stable/modules/svm.html
- [Python Data Science Handbook - Support Vector Machines](https://jakevdp.github.io/PythonDataScienceHandbook/05.07-support-vector-machines.html)

## Examples

- [classification of newsgroup postings (via naive bayes, logistic regression or decision trees)](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html#Multinomial-Naive-Bayes)
- [digit classification (random forest)](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html#Example:-Random-Forest-for-Classifying-Digits)
