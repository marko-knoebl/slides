# Example: digit recognition

## Example: digit recognition

input data: grayscale images of 1797 handwritten digits

target data: digit (e.g. 0, 1, 2, 3, ...)

## Loading digit data

```py
from sklearn import datasets

digits = datasets.load_digits()
```

images are in `digits.images`

labels are in `digits.target`

## Visualizing digits

task:

display some of the images and their correct labels via _pyplot_'s `imshow`

## Visualizing digits

simple solution:

```py
plt.imshow(digits.images[3], cmap="gray")
plt.axis("off")
plt.title(digits.target[3])
```

## Preparing data

task:

flatten input array from 1797x8x8 to 1797x64

## Preparing data

explicit solution:

```py
x = digits.images.reshape(1797, 64)
```

robust solution:

```py
x = digits.images.reshape(digits.images.shape[0], -1)
```

## Training

Task: select the first 1500 entries as training data and train the model

## Training

Solution:

```py
from sklearn.neighbors import KNeighborsClassifier

x_train = x[:1500]
y_train = y[:1500]

model = KNeighborsClassifier(1)
model.fit(x_train, y_train)
```

## Testing

Task: select the remaining entries as testing data and compute the percentage of correct classifications

## Testing

Solution:

```py
x_test = x[1500:]
y_test = y[1500:]

y_pred = model.predict(x_test)

import numpy as np

num_correct = np.sum(y_pred == y_test)

print(num_correct / y_test.size)
```
