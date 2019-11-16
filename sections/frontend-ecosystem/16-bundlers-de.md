# Bundler

## Bundler

Bundler wie _webpack_ oder _parcel_ erstellen aus vorhandenen Quelldateien sogenannte _Bundles_, die meist mehrere Dateien in einer vereinen.

Über Bundler werden zwei Aufgaben ausgeführt:

- Zusammenführen mehrer Dateien in eine (u.a. um diese schneller laden zu können)
- Übersetzen / transformieren von Code via Plugins, z.B.:
  - Übersetzen von modernem JS / JSX / TypeScript in kompatibles JS (via Babel)
  - Übersetzen von modernem CSS / SCSS in kompatibles CSS (via PostCSS)
  - Verkleinern der Dateien (minification)

## Bundler im Vergleich

- _webpack_: weit verbreitet, viele Plugins
- _parcel_: sehr einfach zu verwenden
- _rollup_: insbesondere zum Erstellen von JS-Libraries
