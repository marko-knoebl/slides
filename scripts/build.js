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

const processorToMd = unified()
  .use(remarkParse)
  .use(remarkInclude)
  .use(options => (tree, vfile) => {
    const filename = vfile.history[0];
    const lang = filename.slice(filename.length - 5, filename.length - 3);
    const numSlides = tree.children.filter(child => child.type === "heading")
      .length;
    console.log(`read contents of ${filename}: ${numSlides} slides`);
    numSlidesTotal[lang] += numSlides;
  })
  .use(remarkStringify, {
    listItemIndent: "1",
    fences: true
  });

const processorToSlides = unified()
  .use(remarkParse)
  .use(remarkInclude)
  .use(remarkRehype, { allowDangerousHtml: true })
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

const main = async () => {
  const entrypointFilenames = await fs.promises.readdir("entrypoints");
  const presentationData = entrypointFilenames
    .filter(filename => /^(.*)-(.*).md/.exec(filename))
    .map(filename => {
      const match = /^(.*)-(.*).md/.exec(filename);
      const topic = match[1];
      const lang = match[2];
      return { topic: topic, lang: lang, filename: filename };
    });
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
    await fs.promises.writeFile(
      `dist/${presentation.topic}-${presentation.lang}.html`,
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
