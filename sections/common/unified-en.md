# unified.js

## unified.js

Parser / processor / converter for HTML, Markdown, ...

## unified.js

example - create simple HTML document:

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

example - convert Markdown to HTML

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

## unified.js - terminology

- parser: turns a string into a syntax tree (parse phase)
- transformer: modifies a syntax tree (run phase)
- compiler: turns a syntax tree into a string (stringify phase)

A _processor_ usually includes a parser, possibly multiple transformers and a compiler.

<!-- list-separator -->

## unified.js - ecosystem

- _rehype_: tools for handling HTML
- _remark_: tools for handling Markdown
- _retext_: tools for handling natural languages

## unified.js - ecosystem

parsers:

- _remark-parse_
- _rehype-parse_

compilers:

- _remark-stringify_
- _rehype-stringify_

transformers:

- _remark-toc_ (table of contents)
- _remark-math_
- _remark-rehype_ (transform to rehype)
- _rehype-remark_
- _rehype-minify_
- _rehype-format_
- _rehype-document_ (wrap a fragment in a document)
- _rehype-highight_ (highlight code blocks)
- ... (see list of [rehype plugins](https://github.com/rehypejs/rehype/blob/master/doc/plugins.md#list-of-plugins) and [remark plugins](https://github.com/remarkjs/remark/blob/master/doc/plugins.md#list-of-plugins))
