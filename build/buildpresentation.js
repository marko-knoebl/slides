const fs = require('fs');
const pathModule = require('path');

const markdownToHtml = require('./markdowntohtml');

const sectionsBasePath = './src/sections';
const templateFilename = './src/assets/template.html';
const highlightjsCssFilename = './node_modules/highlightjs/styles/default.css';

const buildPresentation = (coursename, lang) => {
  const configPath = `./src/configs/${coursename}-${lang}.json`;

  // check if the configuration file exists; otherwise, exit the process
  if (!fs.existsSync(configPath)) {
    console.log(`ERR: could not find course "${coursename}"`);
    return;
  }

  console.log(`Building course "${coursename}" in language ${lang}.`);

  // Read configuration
  // IO
  const config = JSON.parse(readTextFile(configPath));

  const sections = config.sections;
  const title = config.title;

  const sectionsContents = sections.map(sectionName =>
    getPathContents(`${sectionsBasePath}/${sectionName}`, lang)
  );
  const sectionContentsString = sectionsContents.join('\n');

  // images
  const images = {};
  if (config.images) {
    for (let imgName of config.images) {
      const fullImgPath = `src/assets/${imgName}`;
      if (new RegExp('\\.png$').test(fullImgPath)) {
        images[imgName] = fs.readFileSync(fullImgPath, 'base64');
      } else if (new RegExp('\\.svg$').test(fullImgPath)) {
        images[imgName] = fs.readFileSync(fullImgPath, 'utf-8');
      }
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

/**
 * get the text contents of a path:
 *
 * if the path leads to a folder,
 *   concatenate the contents of the files/folders/links
 * if the path leads to an .md file,
 *   use its contents
 * if the path leads to a .tlink file,
 *   use the text content of the .tlink file
 *   as the path to process
 * else,
 *   throw an error
 *
 * example call: getPathContents('src/sections/angular', 'de')
 */
const getPathContents = (path, lang) => {
  if (new RegExp(`^.*-${lang}\\.md$`).test(path)) {
    return readTextFile(path);
  } else if (new RegExp(`^.*\\.md$`).test(path)) {
    // md file with wrong language
    return '';
  } else if (new RegExp(`^.*-${lang}\\.tlink$`).test(path)) {
    const linkDest = readTextFile(path);
    const pathDir = pathModule.dirname(path);
    return getPathContents(pathDir + '/' + linkDest, lang);
  } else if (new RegExp(`^.*\\.tlink$`).test(path)) {
    // link file with wrong language
    return '';
  } else if (fs.lstatSync(path).isDirectory()) {
    return fs
      .readdirSync(path)
      .map(subPath => {
        const pathContents = getPathContents(`${path}/${subPath}`, lang);
        if (pathContents === '') {
          return pathContents;
        }
        return pathContents + '\n';
      })
      .join('');
  } else {
    throw new Error(`could not get content of ${path} in ${lang}`);
  }
};

const readTextFile = filename => {
  /**
   * Read the contents of a utf-8-encoded text file (synchronous)
   */
  return fs.readFileSync(filename, 'utf-8');
};

module.exports = buildPresentation;
