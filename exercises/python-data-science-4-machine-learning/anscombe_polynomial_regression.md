# Polynomial regression of the Anscombe data 2

Approximate the data set 2 from the Anscombe demo data via polynomial regression and compare the result with a linear regression.

You can obtain the data via:

```py
import seaborn as sns

anscombe = sns.load_dataset("anscombe")
anscombe_2 = anscombe[anscombe.dataset == "II"]
```
