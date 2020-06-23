const unified = require("unified");

const rehypeStringify = require("rehype-stringify");

const createOverviewPage = (presentations, structure, lang) => {
  const full = {
    type: "root",
    children: [],
  };
  for (let section of structure) {
    const overviewSection = createOverviewSection(presentations, section, lang);
    overviewSection.type = "element";
    overviewSection.tagName = "section";
    full.children.push(overviewSection);
  }

  const docString = transformTreeToHtml(full);
  return docString;
};

const getPresentationDataById = (presentations, id) => {
  return presentations.find((presentation) => presentation.id === id);
};

const createOverviewSection = (presentations, section, lang) => {
  const docTree = {
    type: "root",
    children: [
      {
        type: "element",
        tagName: "h2",
        children: [{ type: "text", value: section.title }],
      },
    ],
  };

  for (let presentationTopic of section.presentations) {
    const presentationData = getPresentationDataById(
      presentations,
      `${presentationTopic}-${lang}`
    );
    const title = presentationData.title;
    const id = presentationData.id;
    docTree.children.push({
      type: "element",
      tagName: "article",
      children: [
        {
          type: "element",
          tagName: "a",
          properties: {
            href: `${id}.html`,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          children: [{ type: "text", value: title }],
        },
        { type: "text", value: " (" },
        {
          type: "element",
          tagName: "a",
          properties: {
            href: `${id}.html`,
            download: true,
          },
          children: [{ type: "text", value: "download" }],
        },
        { type: "text", value: ")" },
      ],
    });
  }
  return docTree;
};

const transformTreeToHtml = (content) => {
  const processor = unified().use(rehypeStringify);
  return processor.stringify(content);
};

module.exports = createOverviewPage;
