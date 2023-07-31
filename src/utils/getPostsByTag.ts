import { slugifyAll } from "./slugify";

const getPostsByTag = (posts: tag, tag: string) =>
  posts.filter(post => slugifyAll(post.data.tags).includes(tag));

export default getPostsByTag;
