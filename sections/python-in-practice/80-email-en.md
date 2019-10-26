# SMTP / IMAP

## SMTP / IMAP

https://automatetheboringstuff.com/chapter16/

(for error corrections see next slide)

for hidden password entry: use module _getpass_

## SMTP / IMAP

Errors in the resource:

provide the query as two entries:

~~`UIDs = imapObj.search(['SINCE 05-Jul-2014'])`~~

`UIDs = imapObj.search(['SINCE', '05-Jul-2014'])`

use newer version of _pyzmail_:

~~`pyzmail`~~ → `pyzmail36`

use bytes instead of a string:

~~`'BODY[]'`~~ → `b'BODY[]`
