/*
CourseCollection
Course (1 : n)
Topic (m : n)
Presentation / Exercise (1 : n)
*/

const fs = require("fs");
const processPresentation = require("./processPresentation.js");
const buildCoursePage = require("./buildCoursePage").buildCoursePage;

const sourceDir = "src";
const distDir = "dist_new";
const languages = ["en", "de"];

class CourseCollection {
  srcUrl: string; // directory
  courses: Array<Course>;
  _courseIds: Array<string>; // e.g. react
  _topicIds: Array<string>; // e.g. react-01-overview-de
  topics: Array<Topic>;

  constructor(srcUrl) {
    this.srcUrl = srcUrl;
    this._courseIds = [];
    this.courses = [];
    this._topicIds = [];
    this.topics = [];
  }

  findCourses() {
    // look for all .json files in the source direcotry
    this._courseIds = fs
      .readdirSync(this.srcUrl)
      .filter(
        (fn) =>
          fs.lstatSync(`${this.srcUrl}/${fn}`).isFile() && fn.endsWith(".json")
      )
      .map((fn) => fn.slice(0, fn.length - 5));
  }

  loadCourses() {
    for (let courseId of this._courseIds) {
      const course = new Course(`${this.srcUrl}/${courseId}.json`);
      course.load();
      this.courses.push(course);
    }
  }

  findTopics() {
    this._topicIds = fs
      .readdirSync(this.srcUrl)
      .filter((fn) => fs.lstatSync(`${this.srcUrl}/${fn}`).isDirectory());
  }

  loadTopics() {
    const topics: Array<Topic> = [];
    for (let topicUrl of this._topicIds) {
      // TODO: for better performance, language could be
      // included in json config
      for (let lang of languages) {
        for (let filename of fs.readdirSync(`${this.srcUrl}/${topicUrl}`)) {
          if (filename.endsWith(`-${lang}.md`)) {
            const t = new Topic(`${this.srcUrl}/${topicUrl}`, lang);
            t.load();
            topics.push(t);
            break;
          }
        }
      }
    }
    this.topics = topics;
  }

  buildTopics() {
    // empty out dist directory
    fs.rmdirSync(distDir, { recursive: true, force: true });
    fs.mkdirSync(distDir);
    for (let topic of this.topics) {
      if (!fs.existsSync(`${distDir}/${topic.idWithoutLang}`)) {
        fs.mkdirSync(`${distDir}/${topic.idWithoutLang}`);
      }
      for (let presentation of topic.children) {
        // this call takes the most time - start optimizing here
        presentation.process();
        const pd = presentation.presentationData;
        fs.writeFileSync(
          `${distDir}/${topic.idWithoutLang}/${pd.topic}-${pd.lang}.html`,
          pd.presentationString
        );
      }
    }
  }

  buildCoursePages() {
    // needs to be called after finding topics
    for (let course of this.courses) {
      const coursePage = buildCoursePage(course, this.topics);
      fs.writeFileSync(`${distDir}/${course.id}.html`, coursePage);
    }
  }

  populateSectionsFolder() {
    const courseIds = ["react"];

    for (let courseId of courseIds) {
      if (!fs.existsSync(`sections/${courseId}`)) {
        fs.mkdirSync(`sections/${courseId}`);
      }
      const re = new RegExp(`^${courseId}-\\d`);

      for (let entry of fs.readdirSync(sourceDir)) {
        if (re.test(entry)) {
          for (let file of fs.readdirSync(`${sourceDir}/${entry}`))
            if (file.endsWith(".md")) {
              fs.copyFileSync(
                `${sourceDir}/${entry}/${file}`,
                `sections/${courseId}/${file}`
              );
            }
        }
      }
    }
  }
}

class Course {
  // file url - e.g. src/react.json
  srcUrl: string;
  // e.g. react
  id: string;
  title: string;
  topicIds: Array<string>;
  languages: Array<string>;

  constructor(srcUrl: string) {
    this.srcUrl = srcUrl;
    this.id = srcUrl.slice(srcUrl.lastIndexOf("/") + 1, srcUrl.length - 5);
  }

  load() {
    const config = JSON.parse(fs.readFileSync(this.srcUrl));
    this.title = config.title;
    this.topicIds = config.topicIds;
    this.languages = config.languages;
  }
}

class Topic {
  idWithLang: string;
  idWithoutLang: string;
  srcUrl: string; // directory
  children: Array<Presentation>;
  title: string;
  language: string;

  constructor(srcUrl: string, language: string) {
    this.srcUrl = srcUrl;
    this.language = language;
    this.idWithoutLang = this.srcUrl.slice(this.srcUrl.lastIndexOf("/") + 1);
    this.idWithLang =
      this.srcUrl.slice(this.srcUrl.lastIndexOf("/") + 1) + "-" + this.language;
  }

  load() {
    const config = JSON.parse(fs.readFileSync(`${this.srcUrl}/index.json`));
    this.title = config.title;

    const presentationFilenames = fs
      .readdirSync(this.srcUrl)
      .filter((fn) => fn.endsWith(`-${this.language}.md`));
    presentationFilenames.sort();
    const presentations = presentationFilenames.map((fn) => {
      return new Presentation(`${this.srcUrl}/${fn}`);
    });
    for (let presentation of presentations) {
      presentation.load();
    }
    this.children = presentations;
  }
}

type Exercise = {};

type PresentationData = {
  filename: string;
  htmlTree: object;
  htmlDocumentString: string;
  lang: string;
  mdTree: any;
  mdString: string;
  presentationTree: object;
  presentationString: string;
  slideCount: number;
  topic: string;
};

class Presentation {
  srcUrl: string; // file
  mdContentStr: string;
  presentationData: PresentationData;

  constructor(srcUrl: string) {
    this.srcUrl = srcUrl;
  }

  load() {
    this.mdContentStr = fs.readFileSync(this.srcUrl, { encoding: "utf-8" });
  }

  process() {
    this.presentationData = processPresentation(this.srcUrl);
  }
}

const allMaterials = new CourseCollection(sourceDir);
allMaterials.findCourses();
allMaterials.loadCourses();
allMaterials.findTopics();
allMaterials.loadTopics();
allMaterials.buildTopics();
allMaterials.buildCoursePages();
allMaterials.populateSectionsFolder();
