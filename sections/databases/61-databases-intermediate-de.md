# Datenbanken - intermediate

## Relationen zwischen Tabellen

- `1 : 1`
- `1 : n`
- `m : n`

## Relationen zwischen Tabellen: Beispiele

- `0..1 : 1..1`  
  department ←manages→ employee  
  Ein Department hat einen Manager; jeder Angestellte managed entweder 0 oder 1 Department
- `0..1 : 0..n`  
  department ←works in→ person  
  Ein Department kann viele Angestellte haben; ein Angestellter kann 0 oder 1 Department zugeteilt sein
- `0..m : 0..n`  
  project ←works on→ person  
  An einem Projekt können mehrere Angestellte arbeiten; ein Angestellter kann an mehreren Projekten arbeiten

## Entity-Relationship-Model

https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model

## ACID

Qualitätsmerkmale einer Datenbank (Sicherheit gegenüber Fehlern):

- _Atomicity_: Daten werden mittels Transaktionen abgeändert, die entweder erfolgreich sind oder als ganzes Fehlschlagen - es wird nie eine Transaktion nur teilweise angewendet
- _Consistency_: Für Inhalte können bestimmte Gültigkeitskriterien festgelegt sein - diese können nicht durch Operationen auf den Daten verletzt werden
- _Isolation_: Parallel laufende Transaktionen beeinflussen einander nicht
- _Durability_: Wenn eine Transaktion vom Datenbanksystem als erfolgreich ausgewiesen wird, muss deren Resultat garantiert dauerhaft vorhanden sein
