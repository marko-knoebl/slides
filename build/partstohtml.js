const marked = require('marked');

const partsToHtml = parts => {
  let htmlCode = '';
  parts.forEach((section, sectionIndex) => {
    htmlCode += `<section class="section" id="section-${sectionIndex + 1}">`;
    section.forEach((slide, slideIndex) => {
      // the links property is required to work with marked
      slide.links = {};
      const slideId = `slide-${sectionIndex + 1}-${slideIndex + 1}`;
      htmlCode += `<section class="slide" id="${slideId}">
        ${marked.parser(slide)}
      </section>`;
    });
    htmlCode += `</section>`;
  });
  return htmlCode;
};

module.exports = partsToHtml;
