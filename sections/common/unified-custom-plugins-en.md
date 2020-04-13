# unified.js - custom plugins

## unified.js - custom plugins

a plugin can be a _parser_, _transformer_ or _compiler_

most plugins are transformers

## custom plugins

plugins handle _strings_ and _syntax trees_

- parser: string → syntax tree
- transformer: syntax tree → modified syntax tree
- compiler: syntax tree → string

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

example: visit https://astexplorer.net/ - choose "Markdown"

## syntax trees

specifications:

- generic specification: [unist](https://github.com/syntax-tree/unist)
- markdown documents: [mdast](https://github.com/syntax-tree/mdast)
- HTML documents: [hast](https://github.com/syntax-tree/hast)
- XML documents: [xast](https://github.com/syntax-tree/xast)
- Natural languages: [nlcst](https://github.com/syntax-tree/nlcst)

## syntax trees

typical node properties:

```json
{
  "type": "...",
  "position": ...,
  "value": "..."
}
```

```json
{
  "type": "...",
  "position": ...,
  "children": []
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

hast text node properties:

- _type_ = "text"
- _value_
