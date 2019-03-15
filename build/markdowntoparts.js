const marked = require('marked');

const validImageTypes = ['png', 'svg'];
const imgRegex = new RegExp(
  '<img src="assets\\/(.*\\.(.*?))" type="image/png"(.*)>',
  (flags = 'g')
);

const svgRegex = new RegExp(
  '<img src="assets\\/(.*\\.(.*?))" type="text/svg".*>'
);

/**
 * Turns markdown into parts describing a slide in a presentation
 * Returns an array of chapters
 * each chapter is an array of slides
 * @param {string} source
 * @param {string[]} images
 * @returns {Object[][]}
 */

const markdownToParts = (source, images) => {
  const tokens = marked.lexer(source);
  // split along headings

  const chapters = [];
  for (let token of tokens) {
    if (token.type === 'heading' && token.depth === 1) {
      chapters.push([[token]]);
    } else {
      currentChapter = chapters[chapters.length - 1];
      if (token.type === 'heading' && token.depth === 2) {
        currentChapter.push([token]);
      } else {
        if (token.type === 'html') {
          // comments and images are processed here
          token.text = token.text
            .replace(imgRegex, (match, imgPath, fileExt, rest) =>
              imageFileToHtmlString(images, imgPath, fileExt, rest)
            )
            .replace(svgRegex, (match, imgPath, fileExt) =>
              imageFileToHtmlString(images, imgPath, fileExt)
            );
        }
        currentSlide = currentChapter[currentChapter.length - 1];
        currentSlide.push(token);
      }
    }
  }
  return chapters;
};

const imageFileToSrcString = (images, imgPath, fileExt) => {
  /**
   * convert an image file to a src-string
   * so it can be included inline
   */
  if (!validImageTypes.includes(fileExt)) {
  }
};

const imageFileToHtmlString = (images, imgPath, fileExt, rest) => {
  if (fileExt === 'svg') {
    const imageSrc = images[imgPath];
    return `${imageSrc}`;
  } else if (validImageTypes.includes(fileExt)) {
    const imageBase64 = images[imgPath];
    if (!imageBase64) {
      throw new Error(
        `Cannot include image from ${imgPath}. It is not listed as an asset`
      );
    }
    return `<img src="data:image/${fileExt};base64, ${imageBase64}"${rest}>`;
  } else {
    throw new Error(`Cannot include images of type ${fileExt}`);
  }
};

module.exports = markdownToParts;
