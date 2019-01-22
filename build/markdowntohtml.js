const markdownToSections = require('./markdowntosections');
const sectionsToHtml = require('./sectionstohtml');

/**
 * convert a markdown string into
 * an html string (ready for syntax highlighting)
 * 
 * inline any images
 */
const markdown2html = (source, images) => {
  const parts = markdownToSections(source);
  const html = sectionsToHtml(parts, images);
  return html;
};

module.exports = markdown2html;
