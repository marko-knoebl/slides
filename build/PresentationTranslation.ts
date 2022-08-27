import fs from "fs";
import path from "path";
import { Node as UnistNode } from "unist";
import vfile from "vfile";

import { PresentationDataNew } from "./parsedMdToHtmlPresentation";
import { parseAndIncludeMd } from "./parseAndIncludeMd";

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

class PresentationTranslation {
  /**
   * relative source url, e.g.:
   * typescript/10-basics-en.md
   */
  relSrcUrl: string;

  /** e.g. "src" or "sections" */
  srcBaseDir: string;

  /** e.g. "dist" */
  distBaseDir: string;

  /**
   * relative id, e.g.:
   * typescript/10-basics-en
   */
  relId: string;

  /** e.g. "en" or "de" */
  language: string;

  mdContentStr: string;
  mdTree: UnistNode | undefined;
  presentationData: PresentationData;
  presentationDataNew: PresentationDataNew;

  /** number of slides in this presentation */
  slideCount: 0;

  constructor(srcUrl: string, srcBaseDir: string, distBaseDir: string) {
    if (!srcUrl.endsWith(".md")) {
      throw new Error("invalid filename");
    }
    this.srcBaseDir = srcBaseDir;
    this.relSrcUrl = srcUrl.slice(this.srcBaseDir.length + 1);
    this.distBaseDir = distBaseDir;
    this.language = this.relSrcUrl.slice(
      this.relSrcUrl.length - 5,
      this.relSrcUrl.length - 3
    );
    this.relId = getRelIdFromRelSrcUrl(this.relSrcUrl);
    this.slideCount = 0;
  }

  load() {
    this.mdContentStr = fs.readFileSync(
      `${this.srcBaseDir}/${this.relSrcUrl}`,
      { encoding: "utf-8" }
    );

    const entryFile = vfile({
      contents: this.mdContentStr,
      path: `${this.srcBaseDir}/${this.relSrcUrl}`,
    });
    this.mdTree = parseAndIncludeMd(entryFile);

    for (let child of this.mdTree!.children as Array<UnistNode>) {
      if (child.type === "heading") {
        this.slideCount++;
      }
    }
  }

  getTitle() {
    for (let child of this.mdTree!.children as Array<UnistNode>) {
      if (child.type === "heading") {
        return child.children[0].value;
      }
    }
    throw new Error("could not find a heading to extract a title");
  }
}

function getRelIdFromRelSrcUrl(relSrcUrl: string) {
  return relSrcUrl.slice(0, relSrcUrl.length - ".md".length);
}

export { PresentationTranslation };
