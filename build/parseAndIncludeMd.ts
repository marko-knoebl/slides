import remarkInclude from "@karuga/remark-include";
import remarkParse from "remark-parse";
import unified from "unified";
import { Node as UnistNode } from "unist";
import { VFile } from "vfile";

function parseAndIncludeMd(vfile: VFile): UnistNode {
  const processor = unified()
    .use(remarkParse)
    .use(remarkInclude, { escaped: true, glob: true });
  const parsed = processor.parse(vfile);
  return processor.runSync(parsed);
}

export { parseAndIncludeMd };
