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
