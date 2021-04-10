import fs = require("fs");

const unified = require("unified");
const rehypeParse = require("rehype-parse");
const rehypeStringify = require("rehype-stringify");

const htmlParser = unified().use(rehypeParse, { position: false });
const htmlToString = unified().use(rehypeStringify);

const templateContent = fs.readFileSync("pages/template-course-page.html", {
  encoding: "utf-8",
});

const buildCoursePage = (course: Course, lang: string, topics: Array<Topic>): string => {
  const templateTree = htmlParser.parse(templateContent);

  const htmlElement = templateTree.children[1];
  const bodyElement = htmlElement.children[2];
  const navElement = bodyElement.children[3];
  navElement.children.push({
    type: "element",
    tagName: "h1",
    children: [{ type: "text", value: course.title }],
  });
  for (let topicId of course.topicIds) {
    // const topic = topics.find((t) => t.idWithoutLang === topicId);
    const topic = topics.find((t) => t.idWithLang === topicId + "-" + lang);
    navElement.children.push({
      type: "element",
      tagName: "h3",
      children: [
        {
          type: "text",
          value: topic.title,
        },
      ],
    });
    for (let presentation of topic.children) {
      console.assert(
        presentation.presentationData.mdTree.children[0].type === "heading"
      );
      const presentationTitle =
        presentation.presentationData.mdTree.children[0].children[0].value;
      const presentationId =
        presentation.presentationData.topic +
        "-" +
        presentation.presentationData.lang;
      navElement.children.push({
        type: "element",
        tagName: "p",
        children: [
          {
            type: "element",
            tagName: "a",
            properties: {
              href: `${topic.idWithoutLang}/${presentationId}.html`,
              target: "content",
            },
            children: [
              {
                type: "text",
                value: presentationTitle,
              },
            ],
          },
        ],
      });
    }
  }
  const coursePageStr = htmlToString.stringify(templateTree).toString();
  return coursePageStr;
};

module.exports.buildCoursePage = buildCoursePage;
