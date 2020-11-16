# Kontingenztabelle

## Kontingenztabelle

Eine _Kontingenztabelle_ oder _Kreuztabelle_ gibt Anzahlen über mehrere Merkmale hinweg an.

## Kontingenztabelle

Beispiel:

```py
pd.crosstab(titanic.pclass, titanic.survived)
```

Ausgabe:

```
survived  False  True 
pclass                
1            80    136
2            97     87
3           372    119
```
