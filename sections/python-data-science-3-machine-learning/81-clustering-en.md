# Clustering

## Clustering

Clusterings falls in the category of _unsupervised learning_

For unsupervised learning there are no target data (_y_); instead the algorithms looks for patterns in the input data

The goal of clustering is finding clusters in input data

## Clustering

- _k-means clustering_
- _gaussian mixture models_

## k-means clustering

process: Cluster centers are determined in n-dimensional space. A data point is associated to the cluster whose center is closest

determining the cluster centers:

random initialization of centers

repeatedly:

- classify each data point according to the closest cluster center
- recompute the cluster centers as the mean of all associated points

This process converges

[Python Data Science Handbook - k-Means Clustering](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html)

## k-means clustering

examples:

- [clustering for handwritten digits](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html#Example-1:-k-means-on-digits)
- [color compression of images](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html#Example-2:-k-means-for-color-compression)
