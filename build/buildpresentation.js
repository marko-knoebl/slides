const fs = require('fs');

const markdownToHtml = require('./markdowntohtml');

const sectionsBasePath = './src/sections';
const templateFilename = './src/assets/template.html';
const highlightjsCssFilename = './node_modules/highlightjs/styles/default.css';

const buildPresentation = (coursename, lang) => {
  // check if the configuration file exists; otherwise, exit the process
  if (!fs.existsSync(`./src/${coursename}-config.json`)) {
    console.log(`ERR: could not find course "${coursename}"`);
    return;
  }

  console.log(`Building course "${coursename}" in language ${lang}.`);

  // Read configuration
  // IO
  const config = readConfig(coursename);
  const sections = config.sections;
  const title = config[`title-${lang}`];

  // Expand sections where entire folders are listed
  const sectionPaths = [];
  for (let sectionPath of sections) {
    const potentialDirPath = `${sectionsBasePath}/${sectionPath}`;
    if (
      fs.existsSync(potentialDirPath) &&
      fs.lstatSync(potentialDirPath).isDirectory()
    ) {
      for (let realSectionPath of fs.readdirSync(potentialDirPath)) {
        if (new RegExp(`\\d+.*-${lang}.md`).test(realSectionPath)) {
          sectionPaths.push(`${potentialDirPath}/${realSectionPath}`);
        }
      }
    } else if (fs.existsSync(`${sectionsBasePath}/${sectionPath}-${lang}.md`)) {
      sectionPaths.push(`${sectionsBasePath}/${sectionPath}-${lang}.md`);
    } else {
      throw new Error(`Could not find section: "${sectionPath}`);
    }
  }

  // // Read section contents
  // const sectionPaths = sectionNames.map(
  //   sectionName => `${sectionsBasePath}/${sectionName}-${lang}.md`
  // );
  // IO
  const sectionContents = getSectionContents(sectionPaths);
  const sectionContentsString = sectionContents.join('\n');

  // images
  const images = {};
  if (config.images) {
    for (let imgName of config.images) {
      const fullImgPath = `src/assets/${imgName}`;
      images[imgName] = fs.readFileSync(fullImgPath, 'base64');
    }
  }

  // Read header, footer and stylesheet contents
  // IO
  const template = readTextFile(templateFilename);
  const highlightjsStyles = readTextFile(highlightjsCssFilename);

  // write plain markdown file to disk
  // TODO: do this in a different script
  const markdownFileName = `dist/${coursename}-${lang}.md`;
  // IO
  fs.writeFileSync(markdownFileName, sectionContentsString, {
    encoding: 'utf-8'
  });

  // write presentation content to disk
  const presentationBodyHtmlContent = markdownToHtml(
    sectionContentsString,
    images
  );
  const fullHtmlContent = template
    .replace('{{highlightjs-style}}', `<style>${highlightjsStyles}</style>`)
    .replace('{{content}}', presentationBodyHtmlContent)
    .replace(new RegExp('\\{\\{title\\}\\}', 'g'), title);

  const distPresentationFileName = `dist/${coursename}-${lang}.html`;
  const docsPresentationFileName = `docs/${coursename}-${lang}.html`;
  // IO
  fs.writeFileSync(distPresentationFileName, fullHtmlContent, {
    encoding: 'utf-8'
  });
  fs.writeFileSync(docsPresentationFileName, fullHtmlContent, {
    encoding: 'utf-8'
  });
};

const readConfig = coursename => {
  /**
   * Read the config for a specific course from disk
   */
  const configPath = `src/${coursename}-config.json`;
  const config = JSON.parse(readTextFile(configPath));
  return config;
};

const getSectionContents = sectionPaths => sectionPaths.map(readTextFile);

const readTextFile = filename => {
  /**
   * Read the contents of a utf-8-encoded text file (synchronous)
   */
  return fs.readFileSync(filename, 'utf-8');
};

module.exports = buildPresentation;
