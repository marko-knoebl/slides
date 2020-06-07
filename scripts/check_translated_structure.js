const fs = require("fs");

class Checker {
  constructor(path) {
    this.path = path;
    this.presentationData = []; // {title: "pres", lang: "de", text: "..."}
    this.presentationContents = {};
  }

  async findConfigFiles() {
    const potentialConfigs = await fs.promises.readdir(this.path);
    const configRegexp = new RegExp(`(.*)-(.*)\\.json`);
    for (let potentialConfig of potentialConfigs) {
      const matches = configRegexp.exec(potentialConfig);
      if (matches !== null) {
        this.presentationData.push({
          title: matches[1],
          lang: matches[2]
        });
      }
    }
  }

  async readConfig(configPath) {
    const fileContent = await fs.promises.readFile(configPath, {
      encoding: "utf-8"
    });
    const configData = JSON.parse(fileContent);
    configData.longTitle = configData.title;
    this.presentationData.find(data => )
  }

  async readConfigs() {
    const configReaders = this.presentationData.map(pres => {
      const configPath = `${this.path}/${pres.title}-${pres.lang}.json`;
      return this.readConfig(configPath);
    });
    const configs = await Promise.all(configReaders);
  }

  async run() {
    await this.findConfigFiles();
    await this.readConfigs();
  }
}

const checker = new Checker("./configs");

checker.run();
