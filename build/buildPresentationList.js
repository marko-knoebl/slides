// build a list of all presentations

const fs = require("fs");

const unified = require("unified");
const rehypeParse = require("rehype-parse");
const rehypeStringify = require("rehype-stringify");
const unistUtilVisit = require("unist-util-visit");

const buildPresentationList = entrypointFilenames => {
  const processor = unified()
    .use(rehypeParse, { position: false })
    .use(options => (tree, vfile) => {
      console.log(tree);
      unistUtilVisit(
        tree,
        node => node.properties && node.properties.id === "presentations-index",
        node => {
          node.children = entrypointFilenames.map(filename => {
            const name = filename.slice(0, filename.length - 3);
            return {
              type: "element",
              tagName: "li",
              children: [
                {
                  type: "element",
                  tagName: "a",
                  properties: { href: name + ".html" },
                  children: [{ type: "text", value: name }]
                }
              ]
            };
          });
          console.log(node);
        }
      );
    })
    .use(rehypeStringify);
  const presentationListTemplate = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-reboot.min.css"
      />
      <title>Presentations index</title>
    <head>
    <body>
      <h1>Presentations index</h1>
      <ul id="presentations-index"></ul>
    </body>
  </html>
  `;
  const result = processor.processSync(presentationListTemplate).toString();
  fs.writeFileSync("docs/list.html", result);
  for (let filename of entrypointFilenames) {
  }
};

module.exports = buildPresentationList;
