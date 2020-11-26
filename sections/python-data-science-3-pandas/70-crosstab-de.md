# Anzahlen und Kontingenztabelle

## Anzahlen

```py
titanic["class"].value_counts()
```

```
Third     491
First     216
Second    184
```

## Kontingenztabelle

Eine _Kontingenztabelle_ oder _Kreuztabelle_ gibt Anzahlen über mehrere Merkmale hinweg an.

## Kontingenztabelle

```py
pd.crosstab(titanic["class"], titanic["survived"])
```

```
survived    0    1
class
First      80  136
Second     97   87
Third     372  119
```