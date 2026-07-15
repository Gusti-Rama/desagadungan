import Markdoc, { Node } from "@markdoc/markdoc";
import React from "react";

interface MarkdocRendererProps {
  content: string | Node | any;
}

/**
 * MarkdocRenderer — Parses raw Markdoc/Markdown content from Keystatic
 * and renders it as styled React elements.
 *
 * This component runs on the server at build time for optimal performance.
 */
export default function MarkdocRenderer({ content }: MarkdocRendererProps) {
  // 1. If it's a string, parse it. If it's from Keystatic, extract the `node` property.
  const ast = typeof content === "string" ? Markdoc.parse(content) : (content?.node || content);

  // 2. Transform the AST (with optional custom node/tag config)
  const transformed = Markdoc.transform(ast, {
    nodes: {},
    tags: {},
  });

  // 3. Render the transformed AST into React elements
  const rendered = Markdoc.renderers.react(transformed, React);

  return (
    <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:leading-relaxed prose-p:text-gray-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-md">
      {rendered}
    </div>
  );
}
