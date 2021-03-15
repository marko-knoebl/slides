# Model validation and selection

## Train data and validation data

In order to verify the results of an algorithm:

Data are split into _training data_ and _test data_ / _validation data_

## Train data and validation data

for iterative algorithms (e.g. neural networks in _keras_):

- _train data_
- _test data_ (used during iterative training)
- _validation data_ (used for validating the final model)

for other alogirthms (e.g. _sklearn_):

- _train data_
- _validation data_ or _test data_ (used for validating the model)

## Model validation and selection

To find the best model:

- test multiple algorithms
- test multiple parameters for the algorithm
- test if more input data leads to better results

see [Python Data Science Handbook → Hyperparameters and Model Validation → Selecting the Best Model](https://jakevdp.github.io/PythonDataScienceHandbook/05.03-hyperparameters-and-model-validation.html#Selecting-the-Best-Model)
