/*
build contents of /entrypoints from contents of /configs
 */

const fs = require("fs");

class Build {
  async getConfigUrls() {
    this.configUrls = fs.promises.readdir("configs");
  }

  async getSections() {
    for (let configUrl of this.configUrls) {
      const configContent = await fs.promises.readFile(configUrl, {
        encoding: "utf-8"
      });
      const config = JSON.parse(configContent);
      const sectionSpecifiers = config.sections;
    }
  }

  async run() {
    await this.getConfigUrls();
    await this.getSections();
  }
}

const build = new Build();
build.run();
