# SMTP / IMAP

## SMTP / IMAP

https://automatetheboringstuff.com/chapter16/

(für Fehler und Korrekturen siehe nächste Folie)

zur verdeckten Passworteingabe: Modul "getpass"

## SMTP / IMAP

Fehler in der resouce:

Die query besteht aus zwei Einträgen:

~~`UIDs = imapObj.search(['SINCE 05-Jul-2014'])`~~

`UIDs = imapObj.search(['SINCE', '05-Jul-2014'])`

Neuere Version von _pyzmail_ verwenden:

~~`pyzmail`~~ → `pyzmail36`

_bytes_ statt _string_ verwenden:

~~`'BODY[]'`~~ → `b'BODY[]`
