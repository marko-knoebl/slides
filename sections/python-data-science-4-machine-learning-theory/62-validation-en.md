# Validation

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

## Validation metrics

classification metrics:

- accuracy metrics
  - accuracy
  - confusion matrix
- metrics based on true/false positives/negatives
  - precision
  - recall
  - f-score
  - ROC and AUC
- probabilistic metrics
  - cross entropy

## Validation metrics

regression metrics:

- mean squared error
- coefficient of determination (R²)

## Classification metrics

example:

a basket of fruits contains 10 apples, 10 oranges and 10 peaches

a classification algorithm yields these results:

- classification of apples: 8 as apples, 0 as oranges, 2 as peaches
- classification of oranges: 10 as oranges
- classification of peaches: 1 as an apple, 0 as oranges, 9 as peaches

## Accuracy metrics

**accuracy**: relative amount of correct classifications (in our example: 27/30=0.9)

**confusion matrix**: table of classifications for each category

|         | apples | oranges | peaches |
| ------- | ------ | ------- | ------- |
| apples  | 8      | 0       | 2       |
| oranges | 0      | 10      | 0       |
| peaches | 1      | 0       | 9       |

## Metrics based on true/false positives/negatives

binary classification: is a fruit an apple or is it not an apple?

- true positive: an apple is classified as an apple
- true negative: a peach is classified as _not_ an apple
- false positive: a peach is classified as an apple (type I error)
- false negative: an apple is classified as _not_ an apple (type II error)

## Metrics based on true/false positives/negatives

**precision** = 8/9=0.889 (8 out of 9 fruits that were classified as apples are _actually_ apples)

**recall** = 8/10=0.8 (8 out of 10 apples were recognized as apples)

precision = true positives / predicted positives

recall = true positives / condition positives

see also: [precision and recall on Wikipedia](https://en.wikipedia.org/wiki/Precision_and_recall)

## Metrics based on true/false positives/negatives

_precision_ and _recall_ have different relevance in different scenarios

example: when classifying emails as spam, _precision_ is very important (avoiding classifying a regular email as spam)

## Metrics based on true/false positives/negatives

**f-score** = harmonic mean of _precision_ and _recall_

## Metrics based on true/false positives/negatives

**ROC** (receiver operating characteristic)

= metric that represents _true positives_ and _false positives_

a classification algorithm could be fine-tuned in respect to its true positives rate and false positives rate:

- option 1: 60% true positives rate, 0% false positives rate
- option 2: 70% true positives rate, 5% false positives rate
- option 3: 80% true positives rate, 25% false positives rate
- option 4: 90% true positives rate, 55% false positives rate
- option 5: 95% true positives rate, 90% false positives rate

## Metrics based on true/false positives/negatives

The ROC may be displayed as a curve; the bigger the area under the curve (AUC), the better the classification

## Probabilistic metrics

**cross entropy** (log loss): measures how well a model of a probability distribution approximates the actual probability distribution

relevant for _neural networks_ and _logistic regression_

## Regression metrics

**mean squared error**

**coefficient of determination (R²)**:

compares the mean squared error of the regression with the variance of the dataset

- R²=1 - perfect interpolation
- R²=0 - interpolation is no better than taking the average of all data
- R²<0 - worse than taking the average of all data

## Validation metrics in scikit-learn

classification:

- _accuracy_score_
- _confusion_matrix_
- _precision_recall_fscore_support_
- _log_loss_
- _roc_curve_
- _roc_auc_

regression:

- _mean_squared_error_
- _r2_score_

See also <https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics>

## Validation metrics in keras

- _accuracy_
- _categorical_crossentropy_
- _sparse_categorical_crossentropy_
- _precision_
- _recall_
- _auc_
- _mean_squared_error_

See also <https://keras.io/api/metrics/>

## Validation

Exercise: validation of iris classification
