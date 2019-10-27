const fs = require("fs");
const pathModule = require("path");

const unified = require("unified");
const remarkParse = require("remark-parse");
const remarkRehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypeStringify = require("rehype-stringify");
const rehypeInline = require("@karuga/rehype-inline");
const rehypeHighlight = require("rehype-highlight");

const { slides } = require("@karuga/slides");

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
      .map(subPath => {
        const pathContents = getPathContents(`${path}/${subPath}`, lang);
        if (pathContents === "") {
          return pathContents;
        }
        return pathContents + "\n";
      })
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
    plainText: ["txt", "pseudocode", "rst", "rest", "tsx", "csv", "tsv"],
    aliases: { js: ["tsx"] }
  })
  .use(slides, {
    format: "revealjs_karuga",
    sectionSeparators: ["h1"],
    slideSeparators: ["h2"]
  })
  .use(rehypeInline)
  .use(rehypeStringify, { closeSelfClosing: true });

let n = 0;

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
    n += numSlides;
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

fs.copyFileSync("assets/presentation-index.html", "docs/index.html");

console.log(n);
