# Regular expressions

## Regular expressions

Mini language that can define a search pattern for text

Examples of simple search patterns:

- a .com domain: `https?://.+?\.com`
- an HTML heading: `<h1>.+?</h1>`
- a time: `\d?\d:\d\d`

## Try it out

Online: https://regexr.com/

In VS Code: Ctrl+F and click the button labeled _.\*_

## Special characters and escapes

The following characters have special meanings:

- `\`
- `^`
- `$`
- `.`
- `|`
- `?`
- `*`
- `+`
- `()`
- `[]`
- `{}`

## Special characters and escapes

Avoid the special meaning by prepending a backslash:

- `13\$`
- `9\.99€`
- `1\+1=2`

## Character categories

- `.` : any character except newline
- `\s` : whitespace
- `\d` : digit
- `\w` : digit, letter or underscore

Exercise: find all digits in a document

## Repetitions

- `a*` : character _a_ repeated 0 or more times (matches _longest_ string)
- `a*?` : character _a_ repeated 0 or more times (matches _shortest_ string)
- `a+` : character _a_ repeated 1 or more times (matches _longest_ string)
- `a+?` : charcter _a_ repeated 1 or more times (matches _shortest_ string)
- `a?` : optional character _a_

Exercises:

- find all numbers, e.g. _12_ or _0.99_
- find all text within quotation marks in a document
- find all "words" that end in `.jpeg` or `.jpg`

## Groups

Group expressions via `(...)`

Examples:

- `(ab)+` matches repetitions of the sequence _ab_
- `<(-=)+->` matches the following pattern: `<-=-=-=-=->`

## Alternatives

`...|...|...` : Match any of the listed alternatives

Example to find an image: `\.(jpe?g|png|gif)`

Exercises:

- find URLs that start with `http://` or `https://` and end with `.com` or `.org`

## Capture groups

Groups can be used to extract information

Example: `(\d?\d):(\d\d)` will extract two values

## Start & end

- `\A` : start of the string
- `\Z` : end of the string
- `^` : start of a line
- `$` : end of a line

## Character classes

- `[a-z]` : any lowercase ASCII letter
- `[a-zA-Z]` : any ASCII letter
- `[,;.]` : same as `(,|;|.)`
