# Git remote

## Git remote

Hosts für Git:

- **GitHub**
- **GitLab**

## Zusammenarbeit via GitHub

Optionen:

- Klonen eines bestehenden Repositories von GitHub
- Veröffentlichen eines eigenen Repositories

## Klonen eines bestehenden Git Repositories

```bash
git clone https://github.com/...
```

Wir kopieren hierzu den Link des grünen _clone or download_-Buttons auf GitHub

## Veröffentlichen eines neuen Git Repositories

Auf GitHub: Klicke auf das _+_ rechts oben

Wähle _nicht_ "Initialize this repository with a README"

## Veröffentlichen eines neuen Git Repositories

Sobald das leere Repository auf GitHub existiert - folge der dort angezeigten Anleitung für ein _leeres Repository_

Üblicherweise verbindet man ein lokales Repository nur mit _einem_ remote Repository - das remote Repository nennt man üblicherweise _origin_

```bash
git remote add origin https://github.com/...
```

## Veröffentlichen eines neuen Branches

Zum Veröffentlichen eines Branches, der am remote Repository noch nicht bekannt ist:

```bash
git push -u origin main
```

kopiert die Commits des lokalen _main_-Branches in einen neu angelegten _main_-Branch im remote Repository

## Veröffentlichen von Commits eines bekannten Branches

Zum Veröffentlichen von Commits eines Branches, der auf der remote-Seite schon bekannt ist:

```bash
git push
```

## Holen neuer Commits von einem remote Branch

Holen und mergen von Commits des remote Branches, der dem aktiven Branch entspricht:

```bash
git pull
```

## Löschen eines remote Branches

Löschen eines lokalen Branches:

```bash
git branch -d python-3-port
```

Löschen des zugehörigen remote Branches:

```bash
git push origin :python-3-port
```

## Credentials speichern

```bash
git config credential.helper cache
```

Hierdurch speichert Git eingegebene Passwörter für 15 Minuten
