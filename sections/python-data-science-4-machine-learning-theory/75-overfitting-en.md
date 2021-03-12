# Overfitting

## Overfitting

possible problem for machine learning algorithms: The algorithm is too flexible and recognizes apparent patterns in the training data

Algorithms that are vulnerable to overfitting:

- neural networks
- polynomial regression
- decision trees

## Overfitting

<figure>
  <img src="assets/wikimedia-Overfitting.svg.png" alt="visualization of an algorithm overfitting 2D data" style="width: 45%">
  <figcaption>Visualization of overfitting when categorizing 2D data <small>(source: <a href="https://commons.wikimedia.org/wiki/File:Overfitting.svg" >Chabacano via Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by/1.0">CC BY</a>)</small></figcaption>
</figure>

## Overfitting - solutions

- expand the set of learning data
- reduce model flexibility (e.g. degree of the polynomial, size of a neural network / decision tree)
- randomly disable some neuron outputs during learning (dropout)
- combining multiple decision trees (random forest)
- "penalize" large coefficients in polynomial regression (L2- and L1-regulatization)

for polynomial regression see: [Data Science Handbook - Regularization](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Regularization)
