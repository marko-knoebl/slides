# Iris classification (simple)

The iris dataset contains measurements of leafs of three species of iris flowers along with their species.

Excerpt from the data:

| Sepal length | Sepal width | Petal length | Petal width | Species       |
| -----------: | ----------: | -----------: | ----------: | ------------- |
|          3.1 |         3.5 |          1.4 |         0.2 | I. setosa     |
|          7.0 |         3.2 |          4.7 |         1.4 | I. versicolor |
|          6.3 |         3.3 |          6.0 |         2.5 | I. virginica  |

We can get the full iris dataset via:

```py
from sklearn import datasets

iris = datasets.load_iris()
X = iris.data
y = iris.target
```

From this data, train a classification algorithm and use it to predict the species of flowers with these measurements:

| Sepal length | Sepal width | Petal length | Petal width |
| -----------: | ----------: | -----------: | ----------: |
|          5.3 |         3.4 |          1.5 |         0.4 |
|          6.0 |         3.0 |          4.7 |         1.5 |
|          6.5 |         3.1 |          5.0 |         1.7 |

Try several of these Algorithms from _scikit-learn_:

- `KNeighborsClassifier`
- `SVC`
- `DecisionTreeClassifier`
- `GaussianNB`
- `LogisticRegression`

The classification of the first entry will be relatively clear while algorithms may disagree on the classification of the classification of the third entry.
