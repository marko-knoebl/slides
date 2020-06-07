const fs = require("fs");

const reactPaths = fs.readdirSync("sections/react");

for (let path of reactPaths) {
  if (path.endsWith("-de.md")) {
    const pathEn = path.slice(0, path.length - 6) + "-en.md";
    const contentsDe = fs.readFileSync(`sections/react/${path}`, {
      encoding: "utf-8"
    });
    const contentsEn = fs.readFileSync(`sections/react/${pathEn}`, {
      encoding: "utf-8"
    });
    const numLinesDe = (contentsDe.match(/\n##/g) || { length: 0 }).length;
    const numLinesEn = (contentsEn.match(/\n##/g) || { length: 0 }).length;
    console.log(numLinesDe);
    if (numLinesDe !== numLinesEn) {
      console.log(path);
    } else {
    }
  }
}
