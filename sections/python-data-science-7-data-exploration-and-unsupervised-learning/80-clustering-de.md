# Clustering

## Clustering

Ziel: Finden von Gruppierungen (Clustern) von Datenpunkten

Strategien:

- _k-Means Clustering_
- _Gaussian Mixture Models_

## k-Means Clustering

Zum Verfahren: Es werden im n-dimensionalen Raum gewisse Clusterzentren bestimmt. Ein Datenpunkt wird zu jenem Cluster gezählt, zu dessen Zentrum er den geringsten Abstand hat.

Bestimmung der Clusterzentren:

Initialisierung: zufällige Festlegung der Zentren

Wiederholt:

- bestimmen der Zugehörigkeit jedes Datenpunktes basierend auf den Zentren
- neue Festlegung der Zentren als Mittel der ihm zugeordneten Punkte

Dieses Verfahren konvergiert.

[Python Data Science Handbook - k-Means Clustering](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html)

## k-Means Clustering: Beispiel

Beispiel für Iris-Abmessungen (unter Der Annahme, dass die Spezies unbekannt sind):

```py
measurements = np.array([[5.1, 3.5, 1.4, 0.2],
                         [4.9, 3.0, 1.4, 0.2],
                         [4.7, 3.2, 1.3, 0.2], ...])

from sklearn.cluster import KMeans

model = KMeans(n_clusters=3)
model.fit(measurements)
```

## k-Means Clustering: Beispiel

Cluster-Zentren:

```py
model.cluster_centers_
```

## k-Means Clustering: Beispiel

Visualisierung der Zentren:

```py
species_pred = model.predict(measurements)

plt.scatter(
    measurements[:, 0],
    measurements[:, 1],
    c=species_pred
)
```

## k-Means Clustering

Beispiele:

- [Anwendung auf Ziffern](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html#Example-1:-k-means-on-digits)
- [Farbkomprimierung von Bildern](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html#Example-2:-k-means-for-color-compression)
