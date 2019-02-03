const marked = require('marked');
const markdownToParts = require('./markdowntoparts');
const partsToHtml = require('./partstohtml');
const highlightjs = require('highlightjs');

marked.setOptions({
  highlight: function(code, lang) {
    if (lang === 'tsx') {
      lang = 'ts';
    }
    try {
      return highlightjs.highlight(lang, code).value;
    } catch (e) {
      console.log(`  Did not highlight language: ${lang}`);
    }
  }
});

/**
 * convert a markdown string into
 * an html string (ready for syntax highlighting)
 * 
 * inline any images
 */
const markdownToHtml = (source, images) => {
  const parts = markdownToParts(source, images);
  const html = partsToHtml(parts);
  return html;
};

module.exports = markdownToHtml;
