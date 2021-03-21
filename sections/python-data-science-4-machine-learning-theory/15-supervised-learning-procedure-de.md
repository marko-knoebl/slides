# Überwachtes Lernen

## Überwachtes Lernen: Verfahren

Schritte:

- Sammeln und Vorbereiten von Trainingsdaten (Eingangsdaten und zugehörigen Ausgangsdaten)
- Trainieren eines Algorithmus basierend auf den Eingangs- und Ausgangsdaten
- Validieren der Richtigkeit / Qualität der Vorhersagen des Algorithmus
- Verwenden des Algorithmus, um Outputs für neue Daten zu erzeugen

## Überwachtes Lernen: Verfahren

in _scikit-learn_:

- Erstelle eine Eingangsmatrix (oft `x` oder `X`) und eines Zielvektors / einer Zielmatrix (oft `y` oder `Y`)
- Instanziiere eine Algorithmenklasse, z.B. `KNeighborsClassifier`, `MLPClassifier`, `LinearRegression`, ...
- "Lerne" mittels `model.fit(x, y)`
- Validiere mittels `model.score(x_val, y_val)` oder `metrics.accuracy_score(x_val, y_val)`, ...
- Sage weitere Ergebnisse voraus mittels `model.predict(...)` oder `model.predict_proba(...)`

## Überwachtes Lernen: Verfahren

in _keras_:

- Erstelle ein Eingangs-Array (`x`) und ein Ziel-Array (`y`)
- Erstelle ein Modell aus verschiedenen Layern (z.B. Preprocessing-Layer, Neuronen-Layer, ...)
- Kompiliere via `model.compile()` und "Lernen" via `model.fit(x, y)`
- Validiere via `model.evaluate(x_val, y_val)`
- Sage weitere Werte vorher via `model.predict(...)`
