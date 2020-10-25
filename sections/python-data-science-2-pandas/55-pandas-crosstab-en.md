# Cross tabulation

## Cross tabulation

A _cross tabulation_ shows the number of corresponding entries across multiple properties

## Cross tabulation

example:

```py
pd.crosstab(titanic.pclass, titanic.survived)
```

output:

```
survived  False  True 
pclass                
1            80    136
2            97     87
3           372    119
```
