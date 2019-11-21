// experimental new build system based on HTML imports
// run via:
// node scripts/build_imports.js

const fs = require("fs");

const unified = require("unified");
const rehypeParse = require("rehype-parse");
const remarkParse = require("remark-parse");
const remarkRehype = require("remark-rehype");
const remarkSectionize = require("remark-sectionize");
const rehypeRaw = require("rehype-raw");
const rehypeStringify = require("rehype-stringify");
const rehypeInline = require("rehype-inline");

const slides = require("@karuga/slides");

// duplicate the rehypeInline plugin so it can be used twice
const rehypeInline1 = options => rehypeInline(options);
const rehypeInline2 = options => rehypeInline(options);

class Build {
  constructor() {
    this.processor = unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeInline1)
      //.use(rehypeInline1, {
      //  importProcessors: { "text/markdown": [[remarkSectionize]] }
      //})
      .use(rehypeRaw)
      //.use(slides, {
      //  format: "revealjs_karuga",
      //  sectionSeparators: ["h1"],
      //  slideSeparators: ["h2"]
      //})
      .use(rehypeStringify, { closeSelfClosing: true });
  }

  async getEntrypointUrls() {
    this.presentations = [];
    const entryPoints = await fs.promises.readdir("entrypoints");
    for (let entryPoint of entryPoints) {
      const entryPointUrl = `entrypoints/${entryPoint}`;
      this.presentations.push({
        entryPointUrl,
        id: entryPoint.slice(0, entryPoint.length - 5)
      });
    }
  }

  async getEntrypointStringContents() {
    for (let presentation of this.presentations) {
      const entryPointStringContent = await fs.promises.readFile(
        presentation.entryPointUrl,
        { encoding: "utf-8" }
      );
      presentation.entryPointStringContent = entryPointStringContent;
    }
  }

  async buildPresentations() {
    for (let presentation of this.presentations) {
      const content = await this.processor.process(
        presentation.entryPointStringContent
      );
      const contentString = content.toString();
      fs.promises.writeFile(`dist/${presentation.id}-new.html`, contentString);
    }
  }

  async run() {
    await this.getEntrypointUrls();
    await this.getEntrypointStringContents();
    await this.buildPresentations();
  }
}

const build = new Build();
build.run();
