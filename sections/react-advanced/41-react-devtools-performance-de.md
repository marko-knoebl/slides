# React Devtools und Performance

## React Devtools und Performance

Funktionalität der Devtools:

- hervorheben von Komponenten, wenn diese neu gerendert werden
- Profiler, der das Aufzeichnen und Analysieren einer Session erlaubt

## React Devtools und Performance

Hervorheben von Komponenten, wenn diese neu gerendert werden:

In den Einstellungen der React Devtools: wähle _Highlight updates when components render._

Komponenten erhalten beim Rendering einen färbigen Rahmen (Farbe ändert sich abhängig von der Reder-Frequenz)

## React Devtools und Performance

Auzeichnen und Analysieren einer Session:

In dem "Profiler"-Tab der Browser Tools:

- Klicke auf den Aufnahmebutton
- Interagiere mit der React-Anwendung (jede User-Aktion wird als ein "_Commit_" aufgezeichnet)
- Klicke auf den Aufnahmebutton zum Stoppen

## React Devtools und Performance

Begutachten der Profiling-Daten:

Jede User-Aktion (z.B. Klick, Texteingabe) wird als ein sogenannter _Commit_ aufgezeichnet

Commits werden im rechten oberen Eck angezeigt

Details werden durch Anklicken sichtbar

## React Devtools und Performance

Zahlen in einem Commit-Detail:

```
TodoApp (3ms of 109ms)
```

bedeutet:

- Das Rendering der ganzen Anwendung dauerte 109 Millisekunden (Bemerkung: läuft bei einem Production-Build und ohne Devtools schneller)
- Die meiste Zeit (106 Millisekunden) wurde mit dem Rendering von Unterkomponenten verbracht
- Die Inhalte, die nur zu _TodoApp_ gehören, dauerten 3 ms

## React Devtools und Performance

Farben in einem Commit-Detail:

Farbskala von _grün_ bis _gelb_ zeigt an, wie viel Zeit für einzelne Komponenten aufgewendet wurde - verglichen mit Geschwisterkomponenten

Grau gestreifte Komponenten wurden nicht neu gerendert
