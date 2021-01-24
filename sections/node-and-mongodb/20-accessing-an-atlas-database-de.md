# Zugriff auf eine Atlas-Datenbank

## Zugriff auf eine Atlas-Datenbank

um aus _node_ eine Verbindung aufbauen zu können:

- setze erlaubte IP-Adressen
- erstelle einen Datenbank-User
- notiere die Datenbank-URL

## Atlas: erlaubte IP-Adressen

in der Sidebar: _Network Access_

füge IP-Adressen hinzu, die auf das Cluster zugreifen dürfen

## Atlas: User erstellen

in der Sidebar: _Database Access_

füge einen User hinzu, welcher sich mit Username und Passwort identifizieren kann

## Atlas: Verbindungs-URL

in der Sidebar: _Clusters_

klicke auf _connect_ und wähle _connect your application_

notiere die URL als:

```
mongodb+srv://<user>:<password>@<clusterurl>/<dbname>
```

(wir können einen beliebigen _dbname_ wählen, um eine neue Datenbank zu erstellen)
