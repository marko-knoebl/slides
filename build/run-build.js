const fs = require('fs');

const buildPresentation = require('./buildpresentation');

// get a list of all configs inside of src
const courseNames = [];

for (let potentialConfig of fs.readdirSync('./src')) {
  const regExp = new RegExp(`(.*)-config\\.json`);
  const matches = regExp.exec(potentialConfig);
  if (matches !== null) {
    courseNames.push(matches[1]);
  }
}

for (let courseName of courseNames) {
  const configContent = fs.readFileSync(`./src/${courseName}-config.json`);
  const configData = JSON.parse(configContent);
  for (let lang of configData.languages) {
    buildPresentation(courseName, lang);
  }
}
