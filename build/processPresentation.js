const fs = require("fs");

const unified = require("unified");
const vfile = require("vfile");

const remarkParse = require("remark-parse");
const remarkInclude = require("@karuga/remark-include");
const remarkRehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypeHighlight = require("rehype-highlight");
const rehypeInline = require("rehype-inline");
const rehypeSlides = require("@karuga/rehype-slides");
const rehypeStringify = require("rehype-stringify");
const remarkStringify = require("remark-stringify");

const processPresentation = (entrypointFilename) => {
  // assign topic, lang, id
  const presentationData = extractPresentationDataFromFilename(
    entrypointFilename
  );
  const entryPath = `entrypoints/${entrypointFilename}`;
  const entryFile = vfile({
    contents: fs.readFileSync(entryPath),
    path: entryPath,
  });
  presentationData.mdTree = parseAndInclude(entryFile);
  presentationData.title =
    presentationData.mdTree.children[0].children[0].value;
  presentationData.slideCount = countSlides(presentationData.mdTree);
  presentationData.mdString = stringifyMd(presentationData.mdTree);
  presentationData.htmlTree = transformToHtml(presentationData.mdTree);
  presentationData.htmlDocumentString = stringifyHtml(
    presentationData.htmlTree
  );
  presentationData.presentationTree = transformHtmlToSlides(
    presentationData.htmlTree,
    vfile({ path: entryPath })
  );
  presentationData.presentationString = stringifyHtml(
    presentationData.presentationTree
  );
  return presentationData;
};

const parseAndInclude = (vfile) => {
  const processor = unified()
    .use(remarkParse, { position: false })
    .use(remarkInclude, { escaped: true, glob: true });
  const parsed = processor.parse(vfile, { position: false });
  return processor.runSync(parsed);
};

const countSlides = (mdContent) => {
  return mdContent.children.filter((child) => child.type === "heading").length;
};

const stringifyMd = (content) => {
  const processor = unified().use(remarkStringify, {
    listItemIndent: "1",
    fences: true,
  });
  return processor.stringify(content);
};

const transformToHtml = (content) => {
  const processor = unified()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight, { ignoreMissing: true, aliases: { js: ["tsx"] } })
    .use(rehypeInline, { svgElements: true });
  return processor.runSync(content);
};

const transformHtmlToSlides = (content) => {
  const processor = unified()
    .use(rehypeSlides, { preset: "headings_compact" })
    .use(rehypeInline);
  return processor.runSync(content);
};

const stringifyHtml = (content) => {
  const processor = unified().use(rehypeStringify, { closeSelfClosing: true });
  return processor.stringify(content);
};

const extractPresentationDataFromFilename = (filename) => {
  const filenameRegex = /^(.*)-(.*).md$/;
  const match = filenameRegex.exec(filename);
  const topic = match[1];
  const lang = match[2];
  const id = `${topic}-${lang}`;
  return { topic, lang, id };
};

module.exports = processPresentation;
