import rehypeHighlight from "rehype-highlight";
import rehypeInline from "rehype-inline";
import rehypeRaw from "rehype-raw";
import rehypeSlides from "@karuga/rehype-slides";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import unified from "unified";
import visit from "unist-util-visit";
import vfile, { VFile } from "vfile";
import { Node as UnistNode } from "unist";

export type PresentationDataNew = {
  mdTree: UnistNode;
  htmlPresentationString: string;
};

function parsedMdToHtmlPresentation(
  mdTree: UnistNode,
  relEntryPath: string,
  srcBaseDir: string
): PresentationDataNew {
  const htmlTree: UnistNode = transformToHtml(mdTree);
  const presentationTree = transformHtmlToSlides(
    htmlTree,
    vfile({ path: `${srcBaseDir}/${relEntryPath}` })
  );
  const presentationString = stringifyHtml(presentationTree);
  const result = {
    mdTree: mdTree,
    htmlPresentationString: presentationString,
  };
  return result;
}

const transformToHtml = (content: UnistNode): UnistNode => {
  const processor = unified()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight, { ignoreMissing: true, aliases: { js: ["tsx"] } })
    .use(rehypeInline, { svgElements: true });
  return processor.runSync(content);
};

const transformHtmlToSlides = (content: UnistNode, vfile: VFile): UnistNode => {
  if (content.children[0] === undefined) {
    console.log(content);
  }
  const processor = unified()
    .use(rehypeSlides, { preset: "headings_compact" })
    .use(rehypeInline)
    .use(() => (node) => {
      visit(node, "element", (node) => {
        if (node.tagName === "a") {
          (node.properties as any).target = "_blank";
        }
      });
    });
  return processor.runSync(content);
};

const stringifyHtml = (content: UnistNode): string => {
  const processor = unified().use(rehypeStringify, { closeSelfClosing: true });
  return processor.stringify(content);
};

export { parsedMdToHtmlPresentation };
