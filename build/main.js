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

const processPresentation = require("./processPresentation");
const buildPages = require("./buildPages");

const main = () => {
  fs.rmdirSync("dist", { recursive: true });
  fs.rmdirSync("docs", { recursive: true });
  fs.mkdirSync("dist");
  fs.mkdirSync("docs");
  const entrypointFilenames = fs.readdirSync("entrypoints");
  const results = [];
  const numSlidesTotal = { en: 0, de: 0 };
  for (let entrypoint of entrypointFilenames) {
    const presentationData = processPresentation(entrypoint);
    console.log(
      `${presentationData.topic}-${presentationData.lang}: ${presentationData.slideCount}`
    );
    results.push(presentationData);
    numSlidesTotal[presentationData.lang] += presentationData.slideCount;
  }
  console.log(numSlidesTotal);
  for (let result of results) {
    fs.writeFileSync(`dist/${result.topic}-${result.lang}.md`, result.mdString);
    fs.writeFileSync(
      `dist/${result.topic}-${result.lang}-document.html`,
      result.htmlDocumentString
    );
    fs.writeFileSync(
      `dist/${result.topic}-${result.lang}.html`,
      result.presentationString
    );
    fs.copyFileSync(
      `dist/${result.topic}-${result.lang}.html`,
      `docs/${result.topic}-${result.lang}.html`
    );
  }

  // create pages from markdown
  buildPages({numSlides: numSlidesTotal});
};

main();
