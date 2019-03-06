const fs = require('fs');

const buildPresentation = require('./buildpresentation');

// get a list of all configs inside of src
const courseNames = [];

const courseData = [];

for (let potentialConfig of fs.readdirSync('./src/configs')) {
  const regExp = new RegExp(`(.*)-(.*)\\.json`);
  const matches = regExp.exec(potentialConfig);
  if (matches !== null) {
    courseNames.push(matches[1]);
    courseData.push({
      name: matches[1],
      lang: matches[2]
    });
  }
}

for (let course of courseData) {
  buildPresentation(course.name, course.lang);
}
