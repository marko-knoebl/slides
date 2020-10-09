# Example: labeled faces with scikit-learn

## Example: labeled faces

[data source example](http://vis-www.cs.umass.edu/lfw/number_11.html)

input data: greyscale images of famous people (sized 62 x 47) and their names

goal: train a neural network to recognize a person

## Getting data

```py
from sklearn.datasets import fetch_lfw_people
faces = fetch_lfw_people(min_faces_per_person=60)
```

entries:

- `faces.images`: array of images (size: 1248 x 62 x 47)
- `faces.target`: array of numeric labels (1, 3, 3, 3, 5, ...)
- `faces.target_names`: array of label names (0="Ariel Sharon", 1="Colin Powell", ...)

## Preparing data

```py
num_images = faces.images.shape[0]
num_pixels = faces.images.shape[1] * faces.images.shape[2]
X = faces.images.reshape(num_images, num_pixels)

from sklearn.preprocessing import LabelBinarizer
encoder = LabelBinarizer().fit(faces.target)
Y = encoder.transform(faces.target)
```

## Train-test split

```py
from sklearn.model_selection import train_test_split

X_train, X_test, Y_train, Y_test = train_test_split(X, Y)
```

## Create a classifier and train it

```py
from sklearn.neural_network import MLPClassifier

model = MLPClassifier(hidden_layer_sizes=(250, 150, 100),
                      early_stopping=True,
                      n_iter_no_change=100,
                      max_iter=2000,
                      verbose=True)
model.fit(X_train, Y_train)
```

algorithm configuration:

- three layers of neurons with 250, 150 and 100 neurons each
- algorithm will stop if the last 100 iterations did not yield improvements
- algorithm will stop after a maximum of 2000 iterations

## Test the classifier

```py
from sklearn import metrics

real_labels = Y_test.argmax(axis=1)
pred_labels = model.predict_proba(X_test).argmax(axis=1)

print(metrics.accuracy_score(real_labels, pred_labels))
```

`argmax` returns the index of the biggest entry in the array

## Test the classifier

Display a random face and print the real name and the predicted name:

```py
import matplotlib.pyplot as plt
from random import randrange

# randomly select a face
index = randrange(X_test.shape[0])

plt.imshow(X_test[index].reshape(62, 47), cmap="gray")

real_label = real_labels[index]
pred_label = pred_labels[index]

print("real name:", faces.target_names[real_label])
print("predicted name:", faces.target_names[pred_label])
```
