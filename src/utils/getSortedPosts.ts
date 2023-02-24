import type { CollectionEntry } from "astro:content";

const getSortedPosts = (
  posts: {
    title: string;
    postSlug: string;
    description: string;
    pubDatetime: Date;
    tags: string[];
  }[]
) =>
  posts.sort(
    (a, b) =>
      Math.floor(new Date(b.pubDatetime).getTime() / 1000) -
      Math.floor(new Date(a.pubDatetime).getTime() / 1000)
  );

export default getSortedPosts;
