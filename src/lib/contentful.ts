import contentful from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface BlogPost {
  blogTitle: string;
  author: string;
  publishedDate: string;
  description: string;
  blogContents: string;
  slug: string;
  ogImage: string;
  tags: string[];
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
