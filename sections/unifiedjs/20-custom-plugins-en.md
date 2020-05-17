# custom plugins

## custom plugins

plugins handle _strings_/_vfiles_ and _syntax trees_

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

example: plugin that turns `<i>` elements into other elements (`<em>` by default):

```js
const visit = require('unist-util-visit');

function rehypeReplaceItalic(options = {}) {
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
