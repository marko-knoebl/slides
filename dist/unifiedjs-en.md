# unified.js

## unified.js

Parser / processor / converter for HTML, Markdown, ...

## unified.js

example - creating a simple HTML document:

The `rehypeDocument` processor will add `<html>`, `<head>`, ...

```js
const input = `
<h1>Hello</h1>
<p>hello world</p>
`;

const processor = unified()
  .use(rehypeParse)
  .use(rehypeDocument)
  .use(rehypeStringify);

const output = processor.processSync(input).toString();
```

## unified.js

example - converting Markdown to HTML

```js
const input = `
# hello

hello world
`;

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify);

const output = processor.processSync(input).toString();
```

## terminology

- parser: turns a string into a syntax tree (parse phase)
- transformer: modifies a syntax tree (run phase)
- compiler: turns a syntax tree into a string (stringify phase)

Parsers, transformers and compilers are distributed in _plugins_

A _processor_ includes a parser, possibly multiple transformers and a compiler.

## ecosystem

- _rehype_: tools for handling HTML
- _remark_: tools for handling Markdown
- _retext_: tools for handling natural languages
- ...

## ecosystem / npm packages

base:

- _unified_

parsers:

- _remark-parse_
- _rehype-parse_

compilers:

- _remark-stringify_
- _rehype-stringify_

## ecosystem / npm packages

transformer plugins (that transform the syntax tree):

- _remark-toc_ (add table of contents)
- _remark-rehype_ (transform to rehype)
- _rehype-remark_ (transform to remark)
- _rehype-minify_
- _rehype-format_
- _rehype-document_ (wrap a fragment in a document)
- _rehype-highlight_ (highlight code blocks)
- ...

## ecosystem / npm packages

other plugins (that modify an existing parser / compiler):

- _remark-frontmatter_
- _remark-math_
- ...

## ecosystem / npm packages

full lists of plugins:

- [rehype plugins](https://github.com/rehypejs/rehype/blob/master/doc/plugins.md#list-of-plugins)
- [remark plugins](https://github.com/remarkjs/remark/blob/master/doc/plugins.md#list-of-plugins)

## passing options

options can be passed when adding plugins:

```js
const input = `
# hello

hello world
`;

const processor = unified()
  .use(remarkParse, { position: false, gfm: true })
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeStringify, { closeSelfClosing: true });

const output = processor.processSync(input).toString();
```

## vfiles

in addition to strings, unified processors can process _vfiles_: these objects represent file content (as string) with added additional information (e.g. file path)

a processor always returns a _vfile_ - to get the string content, call `.toString()`

## vfiles

working with vfiles

```js
const input = vfile({
  contents: fs.readFileSync('readme.md'),
  path: 'readme.md',
});

const output = processor.processSync(input).toString();
```

## asynchronous plugins

Some unified plugins may be asynchronous - in particular if they need to read/write files

a processor that includes an asynchronous plugin must be run via `.process()` instead of `.processSync()` (this will return a promise)

# custom plugins

## custom plugins

plugins handle _strings_ and _syntax trees_

- parser: string → syntax tree
- transformer: syntax tree → modified syntax tree
- compiler: syntax tree → string

## custom plugins

most plugins add a _transformer_ to the processor

some plugins may also modify the _parser_ or _compiler_

## custom plugins

general structure of a plugin:

```js
function plugin(options) {
  // get the parser and compiler references
  const parser = this.Parser;
  const compiler = this.Compiler;
  // modify parser and compiler here

  const transformer = (tree, vfile) => {
    // transformer function that modifies
    // the syntax tree
  };
  return transformer;
}
```

## transformer plugins

example: plugin that turns `i` elements into other elements (`em` by default):

```js
const visit = require('unist-util-visit');

function rehypeReplaceItalic(options) {
  const newTag = options.newTag || 'em';
  const transformer = (tree, vfile) => {
    visit(tree, (node) => {
      if (node.tagName === 'i') {
        node.tagName = newTag;
      }
    });
  };
  return transformer;
}
```

## parser / compiler plugins

for an example, see: <https://unifiedjs.com/explore/package/remark-parse/#extending-the-parser>

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

a text node in markdown / HTML:

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
