const sectionSeparator = RegExp('\\r?\\n----\\r?\\n');
const slideSeparator = RegExp('\\r?\\n---\\r?\\n');
const codeSeparator = RegExp('\r?\n```(.*)\r?\n');
const noteSeparator = RegExp('\\r?\\n\\?\\?\\?\\r?\\n');

/**
 * split source into parts, structuring by section, slide and code/non-code
 *
 * Example input:
 *
 * # slide 1.1
 *
 * ---
 *
 * # slide 1.2
 *
 * ???
 *
 * slide comment
 *
 * ----
 *
 * # slide 2.1
 *
 * ```js
 * console.log(`hello`);
 * ```
 *
 * output:
 *
 * [
 *   [ ["slide 1.1"], ["slide 1.2"] ],
 *   [ ["slide 2.1", {"language": "js", "source": "console.log(`hello`);\n"}] ]
 * ]
 */

const markdownToSections = source => {
  const sections = source.split(sectionSeparator);
  const parts = sections.map(section =>
    section
      .split(slideSeparator)
      .map(slide => parseSlide(slide, codeSeparator, noteSeparator))
  );

  return parts;
};

const parseSlide = (source, codeSeparator, noteSeparator) => {
  const toplevelParts = source.split(noteSeparator);
  const slideContents = toplevelParts[0];
  const parts = slideContents.split(codeSeparator);
  const transformedParts = [];
  let currentLang;
  for (let i = 0; i < parts.length; i++) {
    if (i % 4 === 0) {
      transformedParts.push(parts[i]);
    } else if (i % 4 === 1) {
      currentLang = parts[i];
    } else if (i % 4 === 2) {
      transformedParts.push({
        type: 'code',
        language: currentLang,
        source: parts[i]
      });
    }
  }
  if (toplevelParts.length === 2) {
    transformedParts.push({ type: 'note', content: toplevelParts[1] });
  }
  return transformedParts;
};

module.exports = markdownToSections;
