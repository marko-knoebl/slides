# Classification algorithms

## Classification algorithms

- _neural networks_
- k-nearest-neighbors
- decision trees
- logistic regression
- naive Bayes
- support vector machines

## k-nearest-neighbors

classification algorithm that assigns a class to a data point by looking at similar data points with a known classification

## Decision trees

Example decision tree for iris classification:

- is the _petal length_ less than 2.5?
  - yes: **setosa**
  - no: is the _petal width_ less than 1.8?
    - yes: is the _petal length_ smaller than 5.1?
      - yes: **versicolor**
      - no: **virginica**
    - no: **virginica**

## Logistic regression

At the boundary of two classes a _logistic function_ is used to determine how likely it is that the data point belongs to the one or the other class

The logisitic function itself is determined via regression (hence the name)

## Naive Bayes

Data points are assumed to be part of a specific probability distribution; these distributions are derived from the training data.

For a new data point, the algorithm determines under which of the distributions it would most likely occur.

two important distributions:

- normal distribution (continuous values)
- multinomial distribution (discrete values)

## Support vector machines

Simplest case: separation of classes via lines / planes / hyperplanes - these separators should have maximum distance from the separated points

Borders may take different shapes by using kernel functions - e.g. conic sections or other curves

## Classification algorithms

[overview of classification algorithms in scikit-learn](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html)
