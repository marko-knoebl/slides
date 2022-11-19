import fs from "fs";
import path from "path";
import upath from "upath";
import { loadUrlContent } from "./loadUrlContent";
import { Topic } from "./Topic";

type CollectionJsonfileConfig = {
  type: "collection";
  titles: Record<string, string>;
  languages: Array<string>;
  childUrls: Array<string>;
  pageUrls?: Record<string, string>;
  topicPageUrls?: Record<string, string>;
  checklistPageUrls?: Record<string, string>;
};

class Collection {
  /**
   * source url relative to srcBaseDir, e.g.:
   * index.json
   * react.json
   * react/react-advanced/index.json
   * react-advanced/index-collection.json
   */
  relSrcUrl: string;

  /** e.g. "src" or "sections" */
  srcBaseDir: string;

  /** e.g. "dist" */
  distBaseDir: string;

  /**
   * relative id, e.g.:
   * index
   * react
   * react/react-basics
   * would identify collection files, e.g.:
   * index.json
   * react.json / react/index.json / index-collection.json
   * react/react-basics.json / react/react-basics/index.json / ...
   */
  relId: string;

  /** e.g. {"en": "React basics", "de": "React Grundlagen"} */
  titles: Record<string, string>;

  /**
   * child URLs relative to srcBaseDir, e.g.:
   * ["./python-all.json", "./react-all.json", ...]
   * ["./react/index-topic.json", ...]
   */
  childUrls: Array<string>;

  /** contents of child elements */
  children: Array<Collection | Topic>;

  /**
   * relative page URLs
   * e.g. {"en": "./index-page-en.md", "de": "./index-page-de.md"}
   */
  pageUrls?: Record<string, string>;

  /** markdown strings */
  pages?: Record<string, string>;

  /**
   * relative topic page URLs
   * e.g. {"en": "./index-topic-page-en.md"}
   */
  topicPageUrls?: Record<string, string>;

  /** markdown strings */
  topicPages?: Record<string, string>;

  /**
   * relative checklist page URLs
   * e.g. {"en": "./react-checklist-en.md"}
   */
  checklistPageUrls?: Record<string, string>;

  /** markdown strings */
  checklistPages?: Record<string, string>;

  /** available languages */
  languages: Array<string>;

  /** parent collection */
  parent?: Collection;

  /** number of slides in this collection per language */
  slideCounts: { en: number; de: number };

  constructor(
    srcUrl: string,
    srcBaseDir: string,
    distBaseDir: string,
    parent?: Collection
  ) {
    srcUrl = upath.normalize(srcUrl);
    this.srcBaseDir = srcBaseDir;
    this.distBaseDir = distBaseDir;
    this.relSrcUrl = srcUrl.slice(this.srcBaseDir.length + 1);
    this.relId = getRelIdFromRelSrcUrl(this.relSrcUrl);
    this.parent = parent;
    this.slideCounts = { en: 0, de: 0 };
  }

  load() {
    const config: CollectionJsonfileConfig = JSON.parse(
      fs.readFileSync(`${this.srcBaseDir}/${this.relSrcUrl}`, {
        encoding: "utf-8",
      })
    );
    this.titles = config.titles;
    this.languages = config.languages;
    this.childUrls = config.childUrls;
    this.children = this.childUrls.map((childUrl) => {
      const absChildUrl = upath.normalize(
        `${this.srcBaseDir}/${path.dirname(this.relSrcUrl)}/${childUrl}`
      );
      return loadUrlContent(
        absChildUrl,
        this.srcBaseDir,
        this.distBaseDir,
        this
      );
    });
    for (let child of this.children) {
      for (let language of child.languages) {
        this.slideCounts[language] += child.slideCounts[language];
      }
    }
    this.pageUrls = config.pageUrls;
    this.pages = {};
    if (this.pageUrls) {
      for (let lang in this.pageUrls) {
        const url = this.pageUrls[lang];
        this.pages[lang] = fs.readFileSync(`${this.srcBaseDir}/${url}`, {
          encoding: "utf-8",
        });
      }
    }
    this.topicPageUrls = config.topicPageUrls;
    this.topicPages = {};
    if (this.topicPageUrls) {
      for (let lang in this.topicPageUrls) {
        const url = this.topicPageUrls[lang];
        this.topicPages[lang] = fs.readFileSync(`${this.srcBaseDir}/${url}`, {
          encoding: "utf-8",
        });
      }
    }
    this.checklistPageUrls = config.checklistPageUrls;
    this.checklistPages = {};
    if (this.checklistPageUrls) {
      for (let lang in this.checklistPageUrls) {
        const url = this.checklistPageUrls[lang];
        this.checklistPages[lang] = fs.readFileSync(
          `${this.srcBaseDir}/${url}`,
          {
            encoding: "utf-8",
          }
        );
      }
    }
  }

  build() {
    for (let child of this.children) {
      child.build();
    }
  }
}

function getRelIdFromRelSrcUrl(relSrcUrl: string) {
  let relId: string;
  if (relSrcUrl.endsWith("/index-collection.json")) {
    relId = relSrcUrl.slice(
      0,
      relSrcUrl.length - "/index-collection.json".length
    );
  } else if (relSrcUrl.endsWith("/index.json")) {
    relId = relSrcUrl.slice(0, relSrcUrl.length - "/index.json".length);
  } else {
    relId = relSrcUrl.slice(0, relSrcUrl.length - ".json".length);
  }
  return relId;
}

function getRelSrcUrlFromRelId(relId: string) {
  if (fs.existsSync(`${relId}.json`)) {
    return `${relId}.json`;
  } else if (fs.existsSync(`${relId}/index.json`)) {
    return `${relId}/index.json`;
  } else if (fs.existsSync(`${relId}/index-collection.json`)) {
    return `${relId}/index-collection.json`;
  }
}

export { Collection };
export type { CollectionJsonfileConfig };
