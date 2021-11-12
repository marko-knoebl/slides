# Dimensionality reduction

## Dimensionality reduction

Simplification of data with a large number of attributes/features to data with fewer, but more expressive/meaningful attributes

## Techniques

- feature selection: select some features, discard the rest
- principal component analysis
- autoencoder (neural network)
- manifold learning

see also: [Dimensionality Reduction on Machine Learning Mastery](https://machinelearningmastery.com/dimensionality-reduction-for-machine-learning/)

## Techniques

- [Python Data Science Handbook: Principal Component Analysis](https://jakevdp.github.io/PythonDataScienceHandbook/05.09-principal-component-analysis.html)
- [Wikipedia: Autoencoder](https://en.wikipedia.org/wiki/Autoencoder)
- [Python Data Science Handbook: Manifold Learning](https://jakevdp.github.io/PythonDataScienceHandbook/05.10-manifold-learning.html)

## Example: MovieLens recommendations

We will apply a dimensionality reduction algorithm to the _MovieLens_ user ratings, reducing the rating data to few attributes (roughly 25); thereby we can then recommend similar movies
