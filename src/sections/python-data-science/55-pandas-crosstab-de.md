# Kontingenztabelle

## Kontingenztabelle

Eine _Kontingenztabelle_ oder _Kreuztabelle_ kann mittels `pd.crosstab` erstellt werden.

## Kontingenztabelle

Beispiel:

```py
import seaborn as sns
import pandas as pd
titanic = sns.load_dataset("titanic")
pd.crosstab(titanic.survived, titanic.sex)
```

Ausgabe:

```
sex       female  male
survived              
0             81   468
1            233   109
```
