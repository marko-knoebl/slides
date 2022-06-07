# Daten auslesen: Grundlagen

## Spaltennamen und Indexwerte

- `df.index`: Indexwerte der Zeilen
- `df.columns`: Spaltennamen

## Spalten auswählen

eine Spalte (als Series) auswählen:

```py
titanic["Age"]
```

mehrere Spalten (als DataFrame) auswählen:

```py
titanic[["Name", "Age"]]
```

## Spalten auswählen

kürzere Notation (funktioniert nicht für alle Spaltennamen):

```py
titanic.Age
```

Fälle, in denen die kürzere Notation nicht verwendet werden kann:

```py
df["first name"]  # space in name
df["class"]       # reserved word
df["mean"]        # existing method
```

## Zeilen nach Indexwert auswählen

einzelne Zeile als Series:

```py
sp500.loc["1872-01-01"]
```

mehrere Zeilen als DataFrame (beide Grenzen inklusive):

```py
sp500.loc["1872-01-01" : "1872-12-31"]
```

## Zeilen nach Indexwert auswählen

wenn die Indexspalte als Datum geparsed wurde:

```py
sp500.loc["2009"]
```

## Zeilen nach Zeilennummer auswählen

einzelne Zeile als Series:

```py
sp500.iloc[0]
```

mehrere Zeilen als DataFrame:

```py
sp500.iloc[0 : 10]
```

## Zeilen auswählen

```py
titanic[titanic["Pclass"] == 1]
```

```py
titanic[titanic["Age"] >= 70]
```

## Zufällig Zeilen auswählen

- `df.sample()` - ein zufälliger Eintrag)
- `df.sample(5)` - fünf Einträge
- `df.sample(frac=0.1)` - 10% aller Einträge

## Übungen: S&P 500

- erster Eintrag
- letzter Eintrag
- letzte 10 Einträge
- 10 zufällige Einträge
- Eintrag vom 1.1.2009
- Einträge aus dem Jahr 2009
- Einträge mit "_long interest rate_" > 14
- ...

## Lösungen: S&P 500

- erster Eintrag: `sp500.iloc[0]`
- letzter Eintrag: `sp500.iloc[-1]`
- letzte 10 Einträge: `sp500.iloc[-10:]`
- 10 zufällige Einträge: `sp500.sample(10)`
- Eintrag vom 1.1.2009: `sp500.loc["2009-01-01"]`
- Einträge aus dem Jahr 2009: `sp500.loc["2009-01-01": "2009-12-31"]`
- Einträge mit "_long interest rate_" > 14: `sp500[sp500["Long Interest Rate"] > 14]`

## Aufgabe: S&P 500

wann war der S&P 500 am höchsten Wert? (Bestimme das Maximum, dann suche die zugehörige Zeile im DataFrame)

## Lösung: S&P 500

```py
sp500_max = sp500["SP500"].max()
# returns a DataFrame
sp500_max_row = sp500[sp500["SP500"] == sp500_max]
```

kürzere Alternative: (via `.idxmax()`):

```py
# returns a Series
sp500_max_row = sp500.loc[sp500["SP500"].idxmax()]
```

## Aufgaben: Titanic

- alle Überlebenden
- alle 60-Jährigen
- Anzahl an Überlebenden und Nicht-Überlebenden
- Anzahl an Überlebenden und Nicht-Überlebenden in der ersten Klasse

## Lösungen: Titanic

- alle Überlebenden: `titanic[titanic["Survived"] == 0]`
- alle 60-Jährigen: `titanic[titanic["Age"] == 60]`
- Anzahl an Überlebenden und Nicht-Überlebenden: `titanic["Survived"].value_counts()`
- Anzahl an Überlebenden und Nicht-Überlebenden in der ersten Klasse: `titanic[titanic["Pclass"] == 1]["Survived"].value_counts()`
