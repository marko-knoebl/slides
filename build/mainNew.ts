import fs from "fs";
import { buildCollectionPages } from "./buildCollectionPages";
import { Collection } from "./Collection";
import { loadUrlContent } from "./loadUrlContent";

const ENTRYPOINT = "sections/index.json";
const SRC_BASE_DIR = "sections";
const DIST_BASE_DIR = "docs";

function main() {
  // empty out dist directory
  fs.rmSync(DIST_BASE_DIR, { recursive: true, force: true });
  fs.mkdirSync(DIST_BASE_DIR, { recursive: true });
  console.log("# loading contents");
  // load contents, parse markdown in linear presentations
  // takes ~ 3 seconds
  const fullContent = loadUrlContent(
    ENTRYPOINT,
    SRC_BASE_DIR,
    DIST_BASE_DIR
  ) as Collection;
  for (let topLevelTopic of fullContent.children) {
    console.log(topLevelTopic.relId, topLevelTopic.slideCounts);
  }
  console.log("# building presentations");
  // convert parsed markdown to HTML
  fullContent.build();
  console.log("# building collection and topic pages");
  buildCollectionPages(fullContent);
  fs.copyFileSync(
    `${DIST_BASE_DIR}/index-en.html`,
    `${DIST_BASE_DIR}/index.html`
  );
}

main();
