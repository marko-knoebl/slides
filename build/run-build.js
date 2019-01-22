const buildPresentation = require('./buildpresentation');

// process.argv: path/to/node_binary, path/to/build.js, coursename, language
const coursename = process.argv[2];
const lang = process.argv[3];

buildPresentation(coursename, lang);
