const fs = require("fs");

const unified = require("unified");
const vfile = require("vfile");

const remarkParse = require("remark-parse");
const remarkInclude = require("@karuga/remark-include");
const remarkStringify = require("remark-stringify");
const remarkRehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypeHighlight = require("rehype-highlight");
const slides = require("@karuga/rehype-slides");
const rehypeInline = require("rehype-inline");
const rehypeStringify = require("rehype-stringify");

const numSlidesTotal = { en: 0, de: 0 };

const filenameRegex = /^(.*)-(.*).md$/;

const presentationDataFromFilename = filename => {
  const match = filenameRegex.exec(filename);
  const topic = match[1];
  const lang = match[2];
  return { filename, topic, lang };
};

const countSlides = (tree, vfile) => {
  const filename = vfile.history[0];
  const { lang } = presentationDataFromFilename(filename);
  const numSlides = tree.children.filter(child => child.type === "heading")
    .length;
  numSlidesTotal[lang] += numSlides;
};

const processorToMd = unified()
  .use(remarkParse)
  .use(options => countSlides)
  .use(remarkInclude, { escaped: true, glob: true })
  .use(remarkStringify, {
    listItemIndent: "1",
    fences: true
  });

const processorToSlides = unified()
  .use(remarkParse)
  .use(remarkInclude, { escaped: true, glob: true })
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeHighlight, { ignoreMissing: true, aliases: { js: ["tsx"] } })
  .use(slides, { preset: "headings_compact" })
  .use(rehypeInline, { svgElements: true })
  .use(rehypeStringify, { closeSelfClosing: true });

const main = async () => {
  const entrypointFilenames = fs.readdirSync("entrypoints");
  const presentationData = entrypointFilenames
    .filter(filename => filenameRegex.exec(filename))
    .map(presentationDataFromFilename);
  presentationData.forEach(presentation => {
    const entryPath = `entrypoints/${presentation.filename}`;
    const entryFile = vfile({
      contents: fs.readFileSync(entryPath),
      path: entryPath
    });
    const resultMd = processorToMd.processSync(entryFile).toString();
    const result = processorToSlides.processSync(entryFile).toString();
    fs.writeFileSync(`dist/${presentation.filename}`, resultMd);
    fs.writeFileSync(
      `dist/${presentation.topic}-${presentation.lang}.html`,
      result
    );
    fs.writeFileSync(
      `docs/${presentation.topic}-${presentation.lang}.html`,
      result
    );
    console.log(`processed ${entryPath}`);
  });
  console.log(numSlidesTotal);

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
};

main();
