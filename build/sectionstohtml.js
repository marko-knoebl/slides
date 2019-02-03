const highlightjs = require('highlightjs');
const marked = require('marked');

marked.setOptions({
  headerIds: false,
  gfm: true,
  xhtml: true
});

const validImageTypes = ['png'];

const sectionsToHtml = (sections, images) => {
  let htmlCode = '';

  for (let sectionIdx = 0; sectionIdx < sections.length; sectionIdx++) {
    const section = sections[sectionIdx];
    htmlCode += `<section class="section" id="section-${sectionIdx + 1}">`;
    for (let pageIdx = 0; pageIdx < section.length; pageIdx++) {
      htmlCode += `<section class="slide" id="slide-${sectionIdx +
        1}-${pageIdx + 1}">`;
      const page = section[pageIdx];
      for (let part of page) {
        if (typeof part === 'string') {
          htmlCode += marked(part);
        } else if (part.type === 'code') {
          let newCode;
          try {
            newCode = highlightjs.highlight(part.language, part.source).value;
          } catch (e) {
            newCode = part.source;
          }
          htmlCode += '<pre class="code">' + newCode + '</pre>';
        } else if (part.type === 'note') {
          htmlCode += `<div class="note"> ${part.content} </div>`;
        }
      }
      htmlCode += '</section>';
    }
    htmlCode += '</section>';
  }

  htmlCode = htmlCode.replace(
    new RegExp('<img src="assets\\/(.*\\.(.*?))"', (flags = 'g')),
    (match, imgPath, fileExt) => {
      if (validImageTypes.includes(fileExt)) {
        const imageBase64 = images[imgPath];
        if (!imageBase64) {
          throw new Error(
            `Cannot include image from ${imgPath}. It is not listed as an asset`
          );
        }
        return `<img src="data:image/${fileExt};base64, ${imageBase64}"`;
      } else {
        throw new Error(`Cannot include images of type ${fileExt}`);
      }
    }
  );

  return htmlCode;
};

module.exports = sectionsToHtml;
