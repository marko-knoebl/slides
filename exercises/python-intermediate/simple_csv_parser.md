# Simple CSV parser

Create a simple parser that can process a _restricted_ set of CSV strings:

- lines are separated by LF or CRLF
- fields are separated by a ,
- fields may be quoted via "
- restriction: fields may not contain any line breaks
- restriction: quoted fields may _not_ contain any " characters

extra task:

Create a parser that does not have the last two restrictions
