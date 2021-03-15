# Basic validation metrics

## Basic validation metrics

classification metrics:

- accuracy
- confusion matrix

regression metrics:

- mean squared error
- coefficient of determination (R²)

## Basic classification metrics

example:

a basket of fruits contains 10 apples, 10 oranges and 10 peaches

a classification algorithm yields these results:

- classification of apples: 8 as apples, 0 as oranges, 2 as peaches
- classification of oranges: 10 as oranges
- classification of peaches: 1 as an apple, 0 as oranges, 9 as peaches

## Basic classification metrics

**accuracy**: relative amount of correct classifications (in our example: 27/30=0.9)

**confusion matrix**: table of classifications for each category

|         | apples | oranges | peaches |
| ------- | ------ | ------- | ------- |
| apples  | 8      | 0       | 2       |
| oranges | 0      | 10      | 0       |
| peaches | 1      | 0       | 9       |

## Basic regression metrics

**mean squared error**

**coefficient of determination (R²)**:

compares the mean squared error of the regression with the variance of the dataset

- R²=1 - perfect interpolation
- R²=0 - interpolation is no better than taking the average of all data
- R²<0 - worse than taking the average of all data
