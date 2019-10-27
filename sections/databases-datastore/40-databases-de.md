# Datenbanken

## Datenbanken

Verwendung: Verwaltung großer Datenmengen

## Tabellen und Datenschemata

Die meisten Datenbanken verwalten ihre Daten in Tabellen

## Relationen zwischen Tabellen

- `1 : 1`
- `1 : n`
- `m : n`

## Relationen zwischen Tabellen: Beispiele

- `0..1 : 1..1`  
  department ←manages→ person
- `0..1 : 0..n`  
  department ←works in→ person
- `0..m : 0..n`  
  project ←works on→ person

## Entity-Relationship-Model

https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model

## ACID

Qualitätsmerkmale einer Datenbank (Sicherheit gegenüber Fehlern):

- _Atomicity_: Daten werden mittels Transaktionen abgeändert, die entweder erfolgreich sind oder als ganzes Fehlschlagen - es wird nie eine Transaktion nur teilweise angewendet
- _Consistency_: Für Inhalte können bestimmte Gültigkeitskriterien festgelegt sein - diese können nicht durch Operationen auf den Daten verletzt werden
- _Isolation_: Parallel laufende Transaktionen beeinflussen einander nicht
- _Durability_: Wenn eine Transaktion vom Datenbanksystem als erfolgreich ausgewiesen wird, muss deren Resultat garantiert dauerhaft vorhanden sein
