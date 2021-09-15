# Classification metrics

## Classification metrics

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

## Metrics based on true/false positives/negatives

binary classification: spam detection

- true positive: a spam message is classified as _spam_
- true negative: a regular message is classified as _no spam_
- false positive: a regular message is classified as _spam_ (type I error)
- false negative: a spam message is classified as _no spam_ (type II error)

## Metrics based on true/false positives/negatives

example:

60 regular messages, 40 spam messages

1 regular message is misclassified as spam

5 spam messages are misclassified as regular messages

**precision** = 35/36 = 0.97 (35 out of 36 messages that were classified as spam are _actually_ spam)

**recall** = 35/40 = 0.88 (35 out of 40 spam messages were recognized as spam)

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
