# Numbers

## Numbers

types of numbers:

- _integer_
- _floating-point number_ or _float_ (binary system)
- _decimal_

## Numbers

Programming languages commonly use _integers_ and _floats_

Databases and some data formats additionally use _decimals_

## Numbers

Be cautious of rounding errors: Some numbers cannot be represented as floating point numbers - the will always be rounded

e.g.: `1/3`

A computer is also unable to represent numbers like `0.1` or `0.2` exactly

Example: `0.3 - 0.2` will often not evaluate to `0.1`, but `0.09999999999999998`

## Numbers

Types like _integer_ or _float_ usually have a specific accuracy

examples:

- an _integer_ in _SQL_ can typically represent the values _-2,147,483,648_ to _2,147,483,647_
- a binary floating point number often has an accuracy of about 15 decimal places (_64-Bit numbers_)

## Numbers

Saving as a number or as text?

How should we store credit card numbers, ZIP codes, telephone numbers, ...

## Numbers

Credit card numbers, ZIP codes, telephone numbers should be stored as text

reasons:

- these numbers can start with zeros
- these numbers can include special characters (e.g. `/`, spaces)

Principle: if a number cannot be sensibly used for coputations it should be stored as text
