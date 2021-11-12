# Clustering

## Clustering

finding clusters in input data

strategies:

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

## k-means clustering: example

example for iris measurements (assuming species are unknown):

```py
measurements = np.array([[5.1, 3.5, 1.4, 0.2],
                         [4.9, 3.0, 1.4, 0.2],
                         [4.7, 3.2, 1.3, 0.2], ...])

from sklearn.cluster import KMeans

model = KMeans(n_clusters=3)
model.fit(measurements)
```

## k-means clustering: example

cluster centers:

```py
model.cluster_centers_
```

## k-means clustering: example

visualizing clusters:

```py
species_pred = model.predict(measurements)

plt.scatter(
    measurements[:, 0],
    measurements[:, 1],
    c=species_pred
)
```

## k-means clustering

examples:

- [clustering for handwritten digits](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html#Example-1:-k-means-on-digits)
- [color compression of images](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html#Example-2:-k-means-for-color-compression)
