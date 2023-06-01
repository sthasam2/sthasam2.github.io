import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";

/**
 * Defines a document type Blog
 *
 * Blog is a document with following fields:
 * - title: string
 * - publishedAt: string
 * - description: string
 * - coverImage: string
 * - body: mdx
 * - readingTime: json
 * - slug: string
 *  */
export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blogs/*.mdx",
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    coverImage: { type: "string", required: true },
  },
  computedFields: {
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.rawBody),
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace("/.mdx/", ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
