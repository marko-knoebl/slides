# Context

## Context

Möglichkeit, Werte aus einer Komponente direkt allen weiter unten im Dokumentenbaum liegenden Komponenten zur Verfügung zu stellen - ohne diese über jede Ebene übergeben zu müssen

Das Interface von Context kann sowohl Daten (aus dem State) als auch Eventhandler übergeben.

## Context

eine Anwendung kann viele verschiedene Kontexttypen haben, z.B.:

- `ThemeContext`
- `LanguageContext`
- `UserContext`
- `TodosContext`
- ...

## Context

eine Komponente weiter oben im Komponentenbaum kann ein **Provider** eines Kontexts sein

eine Komponente weiter unten im Komponentenbaum kann ein **Consumer** sein

(Datenfluss von oben nach unten, aber mit übersprungenen Zwischenebenen)

## Context

mögliche Struktur mit Providern, die selbst State verwalten:

- _LanguageProvider_ (Verwalten / Bereitstellen von Language State)
  - _ThemeProvider_ (Verwalten / Bereitstellen von Theme State)
    - _TodosProvider_
      - _App_
        - _TodoList_
          - _TodoItem_
            - ...

## Context

Unterscheidung von Providern:

- "reine Provider" - erhalten Daten via Props, hat keinen internen State
- Provider mit State - haben internen State, verwenden einen "reinen Provider", um diesen zur Verfügung zu stellen
  - können "manuell" definiert werden
  - können mittels der Library _constate_ definiert werden
