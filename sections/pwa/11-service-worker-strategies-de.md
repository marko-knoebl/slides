# Service Worker: Strategien

## Service Worker: Strategien

Bei Entscheidung für eine Strategie sind verschiedene Ziele in Erwägung zu ziehen:

- Inhalte so schnell wie möglich liefern
- aktuelle Inhalte liefern
- Sparen bei Datenübertragung
- Sparen bei der Cachegröße

## Service Worker: Strategien

Aspekte zu Resourcen:

- sollte diese Resource beim ersten Besuch eines Benutzers automatisch heruntergeladen und gecached werden?
- wenn diese Resource angefragt wird, sollte sie aus dem _Cache_ oder dem _Netzwerk_ geladen werden?
- falls die erste Anfrage (von Cache oder Netzwerk) fehlschlägt, soll die andere Möglichkeit versucht werden?
- falls die Resource aus dem Cache geladen wird, sollen wir versuchen, sie im Hintergrund zu aktualisieren?

Wichtige Fragen:

- laden wir eine angefragte Resource aus dem Cache, dem Netzwerk oder einer Kombination?
- welche Resourcen cachen wir und wann cachen wir sie?

## Service Worker: Strategien

laden von Resourcen - Strategien:

- immer aus dem Netzwerk
- immer aus dem Cache
- Netzwerk, mit Cache als Fallback
- Cache, mit Netzwerk als Fallback
- Cache, wobei der Cache im Hintergrund währenddessen aktualisiert wird
- Cache, wobei im Hintergrund die Resource heruntergeladen und die Anzeige unmittelbar aktualisiert wird

## Service Worker: Strategien

Caching - Strategien:

- Cachen, sobald neue Daten eintreffen
- bei Installation im Vorhinein cachen
- bei Useraktion im Vorhinein cachen

(diese Strategien können kombiniert werden)

## Service Worker: Strategien

Siehe [Offline Cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-then-network)
