const fs = require("fs");

const unified = require("unified");
const vfile = require("vfile");

const remarkParse = require("remark-parse");
const { remarkInclude } = require("@karuga/remark-include");
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

const readLogger = (tree, vfile) => {
  const filename = vfile.history[0];
  const { lang } = presentationDataFromFilename(filename);
  const numSlides = tree.children.filter(child => child.type === "heading")
    .length;
  console.log(`read contents of ${filename}: ${numSlides} slides`);
  numSlidesTotal[lang] += numSlides;
};

const processorToMd = unified()
  .use(remarkParse)
  .use(remarkInclude)
  .use(options => readLogger)
  .use(remarkStringify, {
    listItemIndent: "1",
    fences: true
  });

const processorToSlides = unified()
  .use(remarkParse)
  .use(remarkInclude)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeHighlight, { ignoreMissing: true, aliases: { js: ["tsx"] } })
  .use(slides, { preset: "headings_compact" })
  .use(rehypeInline, { svgElements: true })
  .use(rehypeStringify, { closeSelfClosing: true });

const main = async () => {
  const entrypointFilenames = await fs.promises.readdir("entrypoints");
  const presentationData = entrypointFilenames
    .filter(filename => filenameRegex.exec(filename))
    .map(presentationDataFromFilename);
  const processPromises = presentationData.map(async presentation => {
    const entryPath = `entrypoints/${presentation.filename}`;
    const entryFile = vfile({
      contents: await fs.promises.readFile(entryPath),
      path: entryPath
    });
    const resultMd = (await processorToMd.process(entryFile)).toString();
    const result = (await processorToSlides.process(entryFile)).toString();
    await fs.promises.writeFile(`dist/${presentation.filename}`, resultMd);
    await fs.promises.writeFile(
      `dist/${presentation.topic}-${presentation.lang}.html`,
      result
    );
    await fs.promises.writeFile(
      `docs/${presentation.topic}-${presentation.lang}.html`,
      result
    );
  });
  await Promise.all(processPromises);
  console.log(numSlidesTotal);

  const indexPageTemplate = fs.readFileSync("pages/index.html", {
    encoding: "utf-8"
  });
  const indexPage = indexPageTemplate
    .replace("{{count_en}}", numSlidesTotal.en)
    .replace("{{count_de}}", numSlidesTotal.de);
  await fs.promises.writeFile("docs/index.html", indexPage);
  await fs.promises.copyFile(
    "pages/overview-react-topics.html",
    "docs/overview-react-topics.html"
  );
};

main();
