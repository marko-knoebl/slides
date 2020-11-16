# Algorithms for supervised learning

## Algorithms for supervised learning

Regression:

- _neural networks_
- linear regression, polynomial regression, ...

Classification:

- _neural networks_
- k-nearest-neighbors
- logistic regression
- naive Bayes
- support vector machines
- decision trees and random forests

## Neural networks

Machine learning algorithm that vaguely resembles how neurons in brains interact

<figure style="width: 60%; margin: 0 auto;">
  <img src="assets/wikimedia-Neural_network.svg" alt="diagram of a neural network">
  <figcaption>diagram of a neural network with two inputs, five intermediate neurons and one output <small>(source: <a href="https://commons.wikimedia.org/wiki/File:Neural_network.svg" title="via Wikimedia Commons">Dake, Mysid via Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by/1.0">CC BY</a>)</small></figcaption>
</figure>

## Regression

Linear regression: a linear function is fitted to given data points (usually via least squares)

## Linear regression

Example: various purchases in different supermarkets:

- 1 l of milk, 1 kg of bread: 4.60€
- 2 l of milk, 3 kg of bread: 13.50€
- 3 l of milk, 2 kg of bread: 12.00€
- (0 l of milk, 0 kg of bread: 0€)

task: estimate prices of:

- 1 l of milk
- 1 kg of bread
- 2 l of milk and 2 kg of bread

This may be solved via regression

## k-nearest-neighbors

classification algorithm that assigns a class to a data point by looking at similar data points with a known classification

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

## Decision trees

Example decision tree for iris classification:

- is the _petal length_ less than 2.5?
  - yes: **setosa**
  - no: is the _petal width_ less than 1.8?
    - yes: is the _petal length_ smaller than 5.1?
      - yes: **versicolor**
      - no: **virginica**
    - no: **virginica**

## Classification algorithms

[overview of classification algorithms in scikit-learn](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html)
