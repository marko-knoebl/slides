import { PresentationTranslation } from "./PresentationTranslation";
import fs from "fs";
import path from "path";
import upath from "upath";
import { parsedMdToHtmlPresentation } from "./parsedMdToHtmlPresentation";
import { Node as UnistNode } from "unist";
import { Collection } from "./Collection";
import { PAGE_MARKER } from "./constants";

type TopicJsonfileConfig = {
  type: "topic";
  languages: Array<string>;
  titles: Record<string, string>;
};

class Topic {
  /**
   * source url relative to srcBaseDir, e.g.:
   * react/index-topic.json
   * react-redux/thunk/index.json
   */
  relSrcUrl: string;

  /**
   * srcDir relative to srcBaseDir, e.g.:
   * typescript
   * react-redux/thunk
   */
  relSrcDir: string;

  /** e.g. "src" or "sections" */
  srcBaseDir: string;

  /** e.g. "dist" */
  distBaseDir: string;

  /**
   * relative id, e.g.:
   * react
   * react-redux/thunk
   * would identify topic files, e.g.:
   * react/index-topic.json
   * react-redux/thunk/index.json
   */
  relId: string;

  /**
   * reference to parent collection
   */
  parent: Collection;

  /** e.g. {"en": "React basics", "de": "React Grundlagen"} */
  titles: Record<string, string>;

  /** available languages */
  languages: Array<string>;

  /**
   * child URLs relative to srcBaseDir, e.g.:
   * ["sections/python-beginner/72-pip-and-pypi-en.md"]
   */
  childUrls: Array<string>;

  /** contents of child elements */
  children: Array<PresentationTranslation>;

  /** number of slides in this topic per language */
  slideCounts: { en: number; de: number };

  constructor(
    srcUrl: string,
    srcBaseDir: string,
    distBaseDir: string,
    parent: Collection
  ) {
    this.srcBaseDir = upath.normalize(srcBaseDir);
    this.relSrcUrl = srcUrl.slice(this.srcBaseDir.length + 1);
    this.relSrcDir = path.dirname(srcUrl).slice(this.srcBaseDir.length + 1);
    this.distBaseDir = distBaseDir;
    this.relId = getRelIdFromRelSrcUrl(this.relSrcUrl);
    this.parent = parent;
    this.slideCounts = { en: 0, de: 0 };
  }

  load() {
    const config: TopicJsonfileConfig = JSON.parse(
      fs.readFileSync(`${this.srcBaseDir}/${this.relSrcUrl}`, {
        encoding: "utf-8",
      })
    );
    this.titles = config.titles;
    this.languages = config.languages;
    const srcDir = `${this.srcBaseDir}/${this.relSrcDir}`;
    const childUrls = fs
      .readdirSync(srcDir)
      .filter(
        (fn) =>
          fn.endsWith(".md") && !new RegExp(`${PAGE_MARKER}-..\.md`).test(fn)
      );
    childUrls.sort();
    this.childUrls = childUrls;
    this.children = this.childUrls.map((url) => {
      const absChildUrl = upath.normalize(
        `${this.srcBaseDir}/${path.dirname(this.relSrcUrl)}/${url}`
      );
      const presentation = new PresentationTranslation(
        absChildUrl,
        this.srcBaseDir,
        this.distBaseDir
      );
      presentation.load();
      return presentation;
    });
    for (let presentation of this.children) {
      this.slideCounts[presentation.language] += presentation.slideCount;
    }
  }

  build() {
    console.log(`building ${this.relId}`);
    for (let lang of this.languages) {
      const presentationTreeChildren = [];
      for (let linearPresentation of this.children) {
        if (linearPresentation.language === lang) {
          for (let node of linearPresentation.mdTree
            .children as Array<UnistNode>) {
            presentationTreeChildren.push(node);
          }
        }
      }

      const presentationTree: UnistNode = {
        type: "root",
        children: presentationTreeChildren,
      };

      const presentation = parsedMdToHtmlPresentation(
        presentationTree,
        this.relSrcUrl,
        this.srcBaseDir
      );

      const url = `${this.distBaseDir}/${this.relId}-${lang}.html`;
      var dirname = path.dirname(url);
      if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
      }
      fs.writeFileSync(url, presentation.htmlPresentationString);
    }
  }
}

function getRelIdFromRelSrcUrl(relSrcUrl: string) {
  let relId;
  if (relSrcUrl.endsWith("/index-topic.json")) {
    relId = relSrcUrl.slice(0, relSrcUrl.length - "/index-topic.json".length);
  } else if (relSrcUrl.endsWith("/index.json")) {
    relId = relSrcUrl.slice(0, relSrcUrl.length - "/index.json".length);
  } else {
    relId = relSrcUrl.slice(0, relSrcUrl.length - ".json".length);
  }
  return relId;
}

export { Topic };
export type { TopicJsonfileConfig };
