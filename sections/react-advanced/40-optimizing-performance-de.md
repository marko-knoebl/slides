# Performance<wbr/>optimierung

## Performanceoptimierung

Themen:

- Visualisierung von Updates in den React Devtools
- Messen von Render-Zeiten in den React Devtools
- Memoisation von Komponenten basierend auf Props
- Memoisation aufwändiger Berechnungen für das Rendering
- _Virtual DOM_ und die _key_-Property

## Memoisation

Memoisation = Technik, um Funktionsaufrufe zu optimieren: Bisherige Resultate werden gecached und müssen nicht neu berechnet werden

## Performanceoptimierung

was React schon für uns erledigt:

- Hooks (state, reducer, context) lösen _kein_ Re-Rendering aus, wenn sich deren Wert nicht geändert hat

was wir beitragen können:

- Memoisation von Komponentenrenderings basierend auf deren Props
- Memoisation aufwändiger Berechnungen
- Bereitstellen eines _key_-Props für wiederholte Elemente
