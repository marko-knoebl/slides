const fs = require("fs");
const pathModule = require("path");

const unified = require("unified");
const remarkParse = require("remark-parse");
const remarkRehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypeStringify = require("rehype-stringify");
const rehypeInline = require("rehype-inline");
const rehypeHighlight = require("rehype-highlight");

const slides = require("@karuga/slides");

const sectionsBasePath = "sections";

const getPresentationMdContent = (name, lang) => {
  const configPath = `configs/${name}-${lang}.json`;

  // check if the configuration file exists
  if (!fs.existsSync(configPath)) {
    throw new Error(`could not find course "${name}`);
  }

  // Read configuration
  // IO
  const config = JSON.parse(fs.readFileSync(configPath, { encoding: "utf-8" }));

  const sectionsContents = config.sections.map(sectionName =>
    getPathContents(`${sectionsBasePath}/${sectionName}`, lang)
  );

  const presentationContent = sectionsContents.join("\n");

  return presentationContent;
};

/**
 * get the text contents of a path:
 *
 * if the path leads to a folder,
 *   concatenate the contents of the files/folders/links
 * if the path leads to an .md file,
 *   use its contents
 * if the path leads to a .tlink file,
 *   use the text content of the .tlink file
 *   as the path to process
 * else,
 *   throw an error
 *
 * example call: getPathContents('sections/angular', 'de')
 */
const getPathContents = (path, lang) => {
  if (new RegExp(`^.*-${lang}\\.md$`).test(path)) {
    return fs.readFileSync(path, { encoding: "utf-8" });
  } else if (new RegExp(`^.*\\.md$`).test(path)) {
    // md file with wrong language
    return "";
  } else if (new RegExp(`^.*-${lang}\\.tlink$`).test(path)) {
    const linkDest = fs.readFileSync(path, { encoding: "utf-8" });
    const pathDir = pathModule.dirname(path);
    return getPathContents(pathDir + "/" + linkDest, lang);
  } else if (new RegExp(`^.*\\.tlink$`).test(path)) {
    // link file with wrong language
    return "";
  } else if (fs.lstatSync(path).isDirectory()) {
    return fs
      .readdirSync(path)
      .filter(subPath => new RegExp(`^.*-${lang}\\.(md|tlink)$`).test(subPath))
      .map(subPath => getPathContents(`${path}/${subPath}`, lang) + "\n")
      .join("");
  } else {
    throw new Error(`could not get content of ${path} in ${lang}`);
  }
};

const presentations = [];

const pipeline = unified()
  .use(remarkParse)
  .use(remarkRehype, { allowDangerousHTML: true })
  .use(rehypeRaw)
  .use(rehypeHighlight, {
    plainText: [
      "txt",
      "pseudocode",
      "rst",
      "rest",
      "tsx",
      "csv",
      "tsv",
      "graphql"
    ],
    aliases: { js: ["tsx"] }
  })
  .use(slides, {
    format: "revealjs_karuga",
    sectionSeparators: ["h1"],
    slideSeparators: ["h2"]
  })
  .use(rehypeInline, { svgElements: true })
  .use(rehypeStringify, { closeSelfClosing: true });

const numSlidesTotal = {
  en: 0,
  de: 0
};

for (let potentialConfig of fs.readdirSync("configs")) {
  const regExp = new RegExp(`(.*)-(.*)\\.json`);
  const matches = regExp.exec(potentialConfig);
  if (matches !== null) {
    const name = matches[1];
    const lang = matches[2];
    const presentationMdContent = getPresentationMdContent(name, lang);
    const numSlides = presentationMdContent.match(new RegExp("\n## ", "g"))
      .length;
    console.log(`${name}-${lang}: ${numSlides} slides`);
    numSlidesTotal[lang] += numSlides;
    fs.writeFileSync(`dist/${name}-${lang}.md`, presentationMdContent);
    pipeline.process(presentationMdContent).then(content => {
      fs.writeFileSync(`dist/${name}-${lang}.html`, content.toString());
      fs.writeFileSync(`docs/${name}-${lang}.html`, content.toString());
    });
    presentations.push({
      name: matches[1],
      lang: matches[2]
    });
  }
}

const indexPageTemplate = fs.readFileSync("pages/index.html", {
  encoding: "utf-8"
});
const indexPage = indexPageTemplate
  .replace("{{count_en}}", numSlidesTotal.en)
  .replace("{{count_de}}", numSlidesTotal.de);
fs.writeFileSync("docs/index.html", indexPage);
fs.copyFileSync(
  "pages/overview-react-topics.html",
  "docs/overview-react-topics.html"
);

console.log(
  `total: ${numSlidesTotal.en} slides in English,` +
    `${numSlidesTotal.de} slides in German`
);
