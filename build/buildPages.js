/*
Copyright (c) 2020 Marko Knöbl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const fs = require("fs");

const unified = require("unified");

const remarkParse = require("remark-parse");
const remarkRehype = require("remark-rehype");
const rehypeStringify = require("rehype-stringify");
const rehypeParse = require("rehype-parse");

const buildPages = (data) => {
  const indexPageTemplate = fs.readFileSync("pages/index.html", {
    encoding: "utf-8",
  });
  const indexPage = indexPageTemplate
    .replace("{{count_en}}", data.numSlides.en)
    .replace("{{count_de}}", data.numSlides.de);
  fs.writeFileSync("docs/index.html", indexPage);

  const markdownParser = unified().use(remarkParse, { position: false });
  const toHtml = unified().use(remarkRehype);
  const htmlToString = unified().use(rehypeStringify);
  const htmlParser = unified().use(rehypeParse, { position: false });

  const templateContent = fs.readFileSync("pages/template.html", {
    encoding: "utf-8",
  });
  const topicFilenames = fs.readdirSync("pages");
  const topicMdNames = topicFilenames.filter(
    (filename) => filename.endsWith(".md") && !filename.endsWith("nobuild.md")
  );

  for (let filename of topicMdNames) {
    const content = fs.readFileSync("pages/" + filename, { encoding: "utf-8" });
    const parsedMarkdown = markdownParser.parse(content);
    const potentialHeading = parsedMarkdown.children[0];
    let heading;
    if (potentialHeading.type === "heading") {
      heading = potentialHeading.children[0].value;
    }
    const innerHtml = toHtml.runSync(parsedMarkdown);
    const parsedTemplate = htmlParser.parse(templateContent);

    const htmlElement = parsedTemplate.children[1];
    const headElement = htmlElement.children[0];
    if (heading !== undefined) {
      headElement.children.push({
        type: "element",
        tagName: "title",
        children: [{ type: "text", value: heading }],
      });
    }
    const bodyElement = htmlElement.children[2];
    bodyElement.children.push(innerHtml);
    const htmlString = htmlToString.stringify(parsedTemplate).toString();
    fs.writeFileSync(
      "docs/" + filename.slice(0, filename.length - 3) + ".html",
      htmlString
    );
  }
};

module.exports = buildPages;
