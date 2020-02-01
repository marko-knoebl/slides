# Cross tabulation

## Cross tabulation

A _cross tabulation_ shows the number of corresponding entries across multiple properties

## Cross tabulation

example:

```py
import seaborn as sns
import pandas as pd
titanic = sns.load_dataset("titanic")
pd.crosstab(titanic.survived, titanic.sex)
```

output:

```
sex       female  male
survived
0             81   468
1            233   109
```
