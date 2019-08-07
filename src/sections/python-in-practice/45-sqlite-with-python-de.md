# SQLite mit Python

## Erweiterte Typen konvertieren

SQLite unterstützt nur eine eingeschränkte Anzahl an Typen. Es unterstützt nativ nicht Typen wie `DATE` oder `TIMESTAMP` - diese müssten als Strings gespeichert werden.

Wir können in Python automatisch die Konvertierung in / von Strings vornehmen lassen, indem wir den parameter `detect_types=sqlit3.PARSE_DECLTYPES` an `sqlite3.connect` übergeben.

## Erweiterte Typen konvertieren

Übung: Erstelle eine Kontaktdatenbank die automatisch SQL Strings die das Geburtsdatum beschreiben als `date`-Objekte ausliest.

## Adapter und Converter

Wir können weitere Typen speichern, indem wir sogenannte _Adapter_- und _Converer_- Funktionen schreiben. Diese zusätzlichen Typen werden üblicherweise als Bytesequenzen in der Datanbank abgelegt.

Ein _Adapter_ ist eine Funktion, die ein Python Objekt in einen SQL Wert umwandelt.
Ein _Converter_ ist eine Funktion, dien einen SQL Wert in ein Python Objekt umwandelt.

Siehe:

https://docs.python.org/3/library/sqlite3.html#using-adapters-to-store-additional-python-types-in-sqlite-databases

## Adapter und Converter

Übungen:

- Schreibe Adapter und Converter, um direkt Instanzen von Pythons `ipadress.IPv4Address` zu speichern bzw zu lesen - in SQL würden diese als kodierter Bytestring gespeichert werden
