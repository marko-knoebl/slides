# Kontingenztabelle

## Kontingenztabelle

Eine _Kontingenztabelle_ oder _Kreuztabelle_ gibt Anzahlen über mehrere Merkmale hinweg an.

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
