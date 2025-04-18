import type { MarkdownLayoutProps } from "astro";
import type { MarkdownPostFrontmatter } from "../types/markdown-post";

export function getMarkdownPosts() {
  const allPosts: MarkdownLayoutProps<MarkdownPostFrontmatter>[] =
    Object.values(import.meta.glob("../pages/posts/*.md", { eager: true }));
  return allPosts;
}

export function getMarkdownPostTags() {
  const allPosts = getMarkdownPosts();
  const allTags = new Set<string>();
  for (const post of allPosts) {
    const tags = post.frontmatter.tags;
    if (Array.isArray(tags)) {
      for (const tag of tags) {
        allTags.add(tag);
      }
    }
  }
  return Array.from(allTags);
}
