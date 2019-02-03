## SMTP / IMAP

https://automatetheboringstuff.com/chapter16/

zur verdeckten Passworteingabe: Modul "getpass"

## SMTP / IMAP

Achtung Fehler:

falsch:

`UIDs = imapObj.search(['SINCE 05-Jul-2014'])`

richtig:

`UIDs = imapObj.search(['SINCE', '05-Jul-2014'])`

Achtung veraltet: `pyzmail` -> `pyzmail36`

Achtung: `'BODY[]'` -> `b'BODY[]` (bytes statt string)
