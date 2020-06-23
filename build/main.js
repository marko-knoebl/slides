const fs = require("fs");

const processPresentation = require("./processPresentation");
const createOverviewPage = require("./createOverviewPage");

const main = () => {
  fs.rmdirSync("dist", { recursive: true });
  fs.rmdirSync("docs", { recursive: true });
  fs.mkdirSync("dist");
  fs.mkdirSync("docs");
  const entrypointFilenames = fs.readdirSync("entrypoints");
  const presentations = [];
  const numSlidesTotal = { en: 0, de: 0 };
  for (let entrypoint of entrypointFilenames) {
    const presentationData = processPresentation(entrypoint);
    console.log(
      `${presentationData.topic}-${presentationData.lang}: ${presentationData.slideCount}`
    );
    presentations.push(presentationData);
    numSlidesTotal[presentationData.lang] += presentationData.slideCount;
  }
  console.log(numSlidesTotal);
  for (let pres of presentations) {
    fs.writeFileSync(`dist/${pres.topic}-${pres.lang}.md`, pres.mdString);
    fs.writeFileSync(
      `dist/${pres.topic}-${pres.lang}-document.html`,
      pres.htmlDocumentString
    );
    fs.writeFileSync(
      `dist/${pres.topic}-${pres.lang}.html`,
      pres.presentationString
    );
    fs.copyFileSync(
      `dist/${pres.topic}-${pres.lang}.html`,
      `docs/${pres.topic}-${pres.lang}.html`
    );
  }

  const structureEn = JSON.parse(fs.readFileSync("topics/structure-en.json"));
  const structureDe = JSON.parse(fs.readFileSync("topics/structure-de.json"));
  const indexPageStringEn = createOverviewPage(
    presentations,
    structureEn,
    "en"
  );
  const indexPageStringDe = createOverviewPage(
    presentations,
    structureDe,
    "de"
  );
  fs.writeFileSync("docs/overview-en.html", indexPageStringEn);
  fs.writeFileSync("docs/overview-de.html", indexPageStringDe);

  const indexPageTemplate = fs.readFileSync("pages/index.html", {
    encoding: "utf-8",
  });
  const indexPage = indexPageTemplate
    .replace("{{count_en}}", numSlidesTotal.en)
    .replace("{{count_de}}", numSlidesTotal.de);
  fs.writeFileSync("docs/index.html", indexPage);
  fs.copyFileSync(
    "pages/overview-react-topics.html",
    "docs/overview-react-topics.html"
  );
};

main();
