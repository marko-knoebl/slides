# syntax trees

## syntax trees

syntax trees are represented in unist format, e.g.:

```json
{
  "type": "root",
  "children": [
    {
      "type": "paragraph",
      "children": [{ "type": "text", "value": "lorem" }]
    },
    {
      "type": "paragraph",
      "children": [{ "type": "text", "value": "ipsum" }]
    }
  ]
}
```

## syntax trees

example: visit <https://astexplorer.net/> - choose "Markdown"

## syntax trees

specifications:

- generic specification: [unist](https://github.com/syntax-tree/unist)
- markdown documents: [mdast](https://github.com/syntax-tree/mdast)
- HTML documents: [hast](https://github.com/syntax-tree/hast)
- XML documents: [xast](https://github.com/syntax-tree/xast)
- Natural languages: [nlcst](https://github.com/syntax-tree/nlcst)

## syntax trees

a text node in markdown or HTML:

```json
{
  "type": "text",
  "value": "hello world",
  "position": "..."
}
```

## syntax trees

a paragraph node in markdown:

```json
{
  "type": "paragraph",
  "children": [{ "type": "text", "value": "hello" }],
  "position": "..."
}
```

## syntax trees

a hyperlink node in HTML:

```json
{
  "type": "element",
  "tagName": "a",
  "properties": { "href": "https://unifiedjs.com" },
  "children": [{ "type": "text", "value": "unified.js" }],
  "position": "..."
}
```

## syntax trees

position information is added automatically when parsing

this can be disabled by passing `{ position: false }` to a parser

## syntax trees

common types for mdast:

- _root_
- _text_
- _paragraph_
- _heading_
- _list_
- _listItem_
- ...

## syntax trees

hast element properties:

- _type_ = "element"
- _tagName_
- _properties_
- _children_
