# unified.js

## unified.js

Parser / processor / converter for HTML, Markdown, ...

## unified.js

example - creating a simple HTML document:

The `rehypeDocument` plugin will add `<html>`, `<head>`, ...

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

- _remark-toc_ (adds table of contents)
- _remark-rehype_ (transforms to rehype)
- _rehype-remark_ (transforms to remark)
- _rehype-minify_
- _rehype-format_
- _rehype-document_ (wraps a fragment in a document)
- _rehype-highlight_ (highlights code blocks)
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
