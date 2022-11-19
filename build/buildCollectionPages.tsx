import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";
import { Collection } from "./Collection";
import { Topic } from "./Topic";
import { HtmlPage } from "./HtmlPage";
import {
  BASE_URL,
  COLLECTION_CHECKLIST_POSTFIX,
  COLLECTION_POSTFIX,
  COLLECTION_TOPICS_POSTFIX,
} from "./constants";

function buildCollectionPages(collection: Collection | Topic) {
  for (let lang of collection.languages) {
    const nav = ReactDOMServer.renderToStaticMarkup(
      <CollectionPage collection={collection} lang={lang} />
    );
    fs.writeFileSync(
      `${collection.distBaseDir}/${collection.relId}-${COLLECTION_POSTFIX}-${lang}.html`,
      nav
    );

    if (collection instanceof Collection) {
      // build page that only lists _topics_
      const overviewPage = ReactDOMServer.renderToStaticMarkup(
        <CollectionOverviewPage collection={collection} lang={lang} />
      );
      fs.writeFileSync(
        `${collection.distBaseDir}/${collection.relId}-${lang}.html`,
        overviewPage
      );

      // if available, build collection topics page
      const topicsPage = ReactDOMServer.renderToStaticMarkup(
        <CollectionTopicsPage collection={collection} lang={lang} />
      );
      fs.writeFileSync(
        `${collection.distBaseDir}/${collection.relId}-${COLLECTION_TOPICS_POSTFIX}-${lang}.html`,
        topicsPage
      );

      // if available, build collection checklist
      if (collection.checklistPageUrls?.[lang]) {
        const checklistPage = ReactDOMServer.renderToStaticMarkup(
          <CollectionChecklistPage collection={collection} lang={lang} />
        );
        fs.writeFileSync(
          `${collection.distBaseDir}/${collection.relId}-${COLLECTION_CHECKLIST_POSTFIX}-${lang}.html`,
          checklistPage
        );
      }
    }
  }
  for (let child of collection.children) {
    if (child instanceof Collection || child instanceof Topic) {
      buildCollectionPages(child);
    }
  }
}

/**
 * full collection page linking to subtopics
 */
function CollectionOverviewPage(props: {
  collection: Collection;
  lang: string;
}) {
  const extraContentParts = props.collection.pages?.[props.lang]?.split(
    "<!-- CONTENT-BELOW -->"
  );
  const extraContentAbove = extraContentParts?.[0];
  const extraContentBelow = extraContentParts?.[1];
  return (
    <HtmlPage lang={props.lang}>
      <div style={{ padding: "1rem" }}>
        <nav>
          <a href={`index-${props.lang}.html`}>Home</a> |{" "}
          {props.lang !== "de" ? (
            <a href="index-de.html">German version</a>
          ) : null}
          {props.lang !== "en" ? (
            <a href="index-en.html">English version</a>
          ) : null}
        </nav>
        <h1>{props.collection.titles[props.lang]}</h1>
        {props.collection.parent ? (
          <p>
            parent topic:{" "}
            <a
              href={`${BASE_URL}/${props.collection.parent.relId}-${props.lang}.html`}
            >
              {props.collection.parent.titles[props.lang]}
            </a>
          </p>
        ) : null}
        <ReactMarkdown>{extraContentAbove}</ReactMarkdown>
        <ul>
          {props.collection.children.map((child) => {
            if (!child.languages.includes(props.lang)) {
              return null;
            }
            let url;
            if (child instanceof Collection) {
              url = `${child.relId}-${props.lang}.html`;
            } else {
              url = `${child.relId}-${COLLECTION_POSTFIX}-${props.lang}.html`;
            }
            return (
              <li key={child.relId}>
                <a href={url}>{child.titles[props.lang]}</a>
              </li>
            );
          })}
        </ul>
        <ReactMarkdown>{extraContentBelow}</ReactMarkdown>
      </div>
    </HtmlPage>
  );
}

/**
 * collection page with a sidebar
 * and presentation contents
 */
function CollectionPage(props: {
  collection: Collection | Topic;
  lang: string;
}) {
  const script = `
    document
      .getElementById("nav-toggle-button")
      .addEventListener("click", () => {
        document.querySelector("body > div > nav").classList.toggle("hidden");
      });
  `;
  const css = `
    nav.hidden {
      display: none;
    }
  `;
  return (
    <HtmlPage lang={props.lang}>
      <div style={{ height: "100%", display: "flex", alignItems: "stretch" }}>
        <nav
          style={{
            flexBasis: "320px",
            overflow: "auto",
            paddingTop: "4em",
            paddingLeft: "1em",
            paddingRight: "1em",
            paddingBottom: "0.5em",
            // needed for:
            // https://github.com/w3c/csswg-drafts/issues/129
            // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
            marginBottom: "0.5em",
          }}
        >
          {props.collection instanceof Collection ? (
            <>
              <div>
                <a href={`index-${props.lang}.html`}>Home</a>
              </div>
              {getNavEntry(props.collection, props.lang)}
            </>
          ) : (
            <>
              <div>
                parent topic:{" "}
                <a
                  href={`${BASE_URL}/${props.collection.parent.relId}-${props.lang}.html`}
                >
                  {props.collection.parent.titles[props.lang]}
                </a>
              </div>
              <div>
                <a href={`${props.collection.relId}-${props.lang}.html`}>
                  show presentation individually
                </a>
              </div>
              {getNavEntryForTopicPage(props.collection, props.lang)}
            </>
          )}
        </nav>
        <main style={{ flexGrow: 1 }}>
          <iframe
            name="content"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </main>
        <button
          id="nav-toggle-button"
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            padding: "0.4em 0.8em",
            cursor: "pointer",
            borderRadius: "0.25em",
            backgroundColor: "#0074d9",
            color: "#ffffff",
            border: "none",
          }}
          onClick={() => {
            const nav = document.querySelector(
              "body > div > nav"
            ) as HTMLElement;
            nav.style.display =
              nav.style.display === "block" ? "none" : "block";
          }}
        >
          toggle sidebar
        </button>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </div>
    </HtmlPage>
  );
}

function getNavEntryForTopicPage(element: Topic, lang: string) {
  return (
    <section key={element.relId}>
      <h1>{element.titles[lang]}</h1>
      <ul>
        {element.children
          .filter((child) => child.language === lang)
          .map((child, index) => {
            const title = child.getTitle();
            const url = `${BASE_URL}/${element.relId}-${lang}.html#/${index}`;
            return (
              <li key={child.relSrcUrl}>
                <a href={url} target="content">
                  {title}
                </a>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

function getNavEntry(element: Collection | Topic, lang: string) {
  if (!element.languages.includes(lang)) {
    return null;
  } else if (element instanceof Collection) {
    return (
      <section key={element.relSrcUrl}>
        <h1>
          {element.titles[lang]}{" "}
          <small>
            (
            <a href={`${element.relId}-${COLLECTION_POSTFIX}-${lang}.html`}>
              show individually
            </a>{" "}
            |{" "}
            <a href={`${element.relId}-${lang}.html`}>
              show individual overview
            </a>
            )
          </small>
        </h1>
        {element.children.map((child) => getNavEntry(child, lang))}
      </section>
    );
  } else if (element instanceof Topic) {
    return (
      <section key={element.relSrcUrl}>
        <h1>
          {element.titles[lang]}{" "}
          <small>
            (
            <a href={`${element.relId}-${COLLECTION_POSTFIX}-${lang}.html`}>
              show individually
            </a>
            )
          </small>
        </h1>
        <ul>
          {element.children
            .filter((child) => child.language === lang)
            .map((child, index) => {
              const title = child.getTitle();
              const url = `${element.relId}-${lang}.html#/${index}`;
              return (
                <li key={child.relSrcUrl}>
                  <a href={url} target="content">
                    {title}
                  </a>
                </li>
              );
            })}
        </ul>
      </section>
    );
  }
}

function CollectionTopicsPage(props: { collection: Collection; lang: string }) {
  return (
    <HtmlPage lang={props.lang}>
      <div style={{ padding: "1rem" }}>
        <nav>
          <a href={`/index-${props.lang}.html`}>Home</a> |{" "}
          {props.lang !== "de" ? (
            <a href="/index-de.html">German version</a>
          ) : null}
          {props.lang !== "en" ? (
            <a href="/index-en.html">English version</a>
          ) : null}
        </nav>
        <ReactMarkdown>{props.collection.topicPages[props.lang]}</ReactMarkdown>
      </div>
    </HtmlPage>
  );
}

function CollectionChecklistPage(props: {
  collection: Collection;
  lang: string;
}) {
  return (
    <HtmlPage lang={props.lang}>
      <div style={{ padding: "1rem" }}>
        <nav>
          <a href={`/index-${props.lang}.html`}>Home</a> |{" "}
          {props.lang !== "de" ? (
            <a href="/index-de.html">German version</a>
          ) : null}
          {props.lang !== "en" ? (
            <a href="/index-en.html">English version</a>
          ) : null}
        </nav>
        <ReactMarkdown>
          {props.collection.checklistPages[props.lang]}
        </ReactMarkdown>
      </div>
    </HtmlPage>
  );
}

export { buildCollectionPages };
