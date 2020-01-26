const fs = require("fs");

class Build {
  async readPresentationConfigs() {
    this.presentations = [];
    const configFiles = await fs.promises.readdir("configs_full");
    for (let configFile of configFiles) {
      const configPath = `configs_full/${configFile}`;
      const configContent = await fs.promises.readFile(configPath, {
        encoding: "utf-8"
      });
      const config = JSON.parse(configContent);
      this.presentations.push(config);
    }
  }

  async readPresentationMdContents() {
    for (let presentation of this.presentations) {
      this.readPresentationMdContent(presentation);
    }
  }

  async readPresentationMdContent(presentation) {
    for (let include of presentation.includes)
  }

  async createIndexFile() {
    const indexPageTemplate = await fs.promises.readFile(
      "assets/presentation-index.html",
      { encoding: "utf-8" }
    );
    const indexPage = indexPageTemplate
      .replace("{{count_en}}", this.numSlidesTotal.en)
      .replace("{{count_de}}", this.numSlidesTotal.de);
    await fs.promises.writeFile("docs/index.html", indexPage);
  }

  async run() {
    await this.readPresentationConfigs();
    console.log(this.presentations);
    return;
    await this.detectPresentations();
    console.log(this.presentations);
    await this.readPresentationConfigs();
    await this.createIndexFile();
  }
}

const build = new Build();
build.run();
