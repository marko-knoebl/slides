# Diabetes progression prediction

Using _scikit-learn_, create a linear regression model for diabetes disease progression after one year based on 10 input variables.

The dataset can be loaded via:

```py
from sklearn.datasets import load_diabetes

dataset = load_diabetes()
print(dataset.data)
print(dataset.target)
```

Use the data from `dataset.data` to predict the values of `dataset.target`.

From the dataset documentation:

> Ten baseline variables, age, sex, body mass index, average blood pressure, and six blood serum measurements were obtained for each of n = 442 diabetes patients, as well as the response of interest, a quantitative measure of disease progression one year after baseline.

> Note: Each of these 10 feature variables have been mean centered and scaled by the standard deviation times n_samples (i.e. the sum of squares of each column totals 1).
