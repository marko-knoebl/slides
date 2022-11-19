/**
 * URL postfix of collection / topic pages
 * e.g.
 * "collection" ->
 * "react-redux-collection-en.html"
 */
const COLLECTION_POSTFIX = "collection";

/**
 * URL postfix of page that lists topics
 * e.g.
 * "collection-topics" ->
 * "react-all-collection-topics-en.html"
 */
const COLLECTION_TOPICS_POSTFIX = "collection-topics";

const COLLECTION_CHECKLIST_POSTFIX = "checklist";

const PAGE_MARKER = "page";

/**
 * url where the deployment will be hosted
 * - "docs" for local testing
 * - "slides" for deployment on marko-knoebl.github.io/slides
 */
const BASE_URL = "/slides";

export {
  BASE_URL,
  COLLECTION_POSTFIX,
  COLLECTION_CHECKLIST_POSTFIX,
  COLLECTION_TOPICS_POSTFIX,
  PAGE_MARKER,
};
