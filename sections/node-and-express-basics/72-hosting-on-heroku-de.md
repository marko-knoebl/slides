# Hosting auf Heroku

## Hosting auf Heroku

registriere dich für einen Heroku-Account, wähle _Node.js_ als "primary development language"

wähle _create new app_, wähle einen eindeutigen Namen und eine Server-Location

## Verbindung zu GitHub

im "deploy"-Tab, wähle "connect to GitHub"

klicke _Deploy Branch_ zum erstmaligen Deployment

aktiviere automatische Deployments, um bei jeder Änderung des Repositories automatisch zu deployen

## Umgebungsvariablen

setzen von Umgebungsvariablen zur Konfiguration unter "settings" - "config vars"

die Umgebungsvariable `PORT` ist in Programmen automatisch verfügbar und muss hier nicht gesetzt werden

## Hosting auf Heroku

mehr Informationen: https://devcenter.heroku.com/articles/deploying-nodejs
