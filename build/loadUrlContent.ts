import fs from "fs";
import { Topic, TopicJsonfileConfig } from "./Topic";
import { Collection, CollectionJsonfileConfig } from "./Collection";

function loadUrlContent(
  url: string,
  srcBaseDir: string,
  distBaseDir: string,
  parent?: Collection
): Collection | Topic {
  /**
   * load content of a URL, e.g.:
   * - src/index.json
   * - src/react.json
   * - src/react-basics/index.json
   * - src/react-basics/react-01-overview/index.json
   */
  const jsonString = fs.readFileSync(url, { encoding: "utf-8" });
  const config = JSON.parse(jsonString) as
    | TopicJsonfileConfig
    | CollectionJsonfileConfig;
  if (config.type === "collection") {
    const collection = new Collection(url, srcBaseDir, distBaseDir, parent);
    collection.load();
    return collection;
  } else if (config.type === "topic") {
    const topic = new Topic(url, srcBaseDir, distBaseDir, parent);
    topic.load();
    return topic;
  } else {
    console.log(config);
    throw new Error(`invalid type: ${(config as any).type}`);
  }
}

export { loadUrlContent };
