# Layers

## Layers

häufige Strukturierung mit "Layers" in Web-Anwendungen:

- **Controller** Layer (HTTP)
- **Service** Layer (Geschäftslogik / business logic)
- **Model** Layer (Datenbankanbindung)

## Layers

**Controller**: Empfängt einen HTTP-Request, ruft eine Service-Funktion für die Verarbeitung auf, sendet die Response

**Service**: Wird durch einen Controller aufgerufen; kann auf andere Services und Models zugreifen; Kann Daten an den Controller zurückliefern; beinhaltet die Haupt-Logik (Geschäftslogik)

**Model**: Stellt für Services Datenbankzugriffe zur Verfügung

## Layers

oft entspricht eine Route (HTTP-Anfrage) direkt einem Modell (Datenbank-Tabelle / -Abfrage)

z.B. in einer Shopping-Anwendung:

```text
/products?category=phones&max_price=500
```

entspricht:

```sql
SELECT * FROM products WHERE category = 'phones' AND price <= 500;
```

## Layers

manchmal kann einiges im Service Layer geschehen:

Beispiel: Senden einer neuen Nachricht via `POST`-Request an _/messages_

messageService könnte folgendes verwenden:

- authService (zum Authentifizieren / Authorisieren des Versenders)
- userModel (um den Empfänger zu finden)
- spamDetectionService
- messageModel (um die Nachricht zu speichern)
- notificationService (um die Empfänger\*innen zu benachrichtigen - z.B. via SMS / email)

## Layers

häufige Struktur in Express-Anwendungen:

- Routing Layer: empfängt HTTP-Anfragen und leitet sie an einen Controller weiter; wendet eventuell sogenannte _Middleware_ an
- Controller Layer
- Service Layer
- Model Layer

## Layers

kann für einfachere Projekte vereinfacht werden, z.B.:

- Routing / Controller / Service Layer
- Model Layer

## Source Code Struktur

Beispiel für eine typische Source Code Struktur:

- _server.js_
- _db.js_ (Datenbankanbindung)
- _routes/_
- _controllers/_
- _services/_
- _models/_
