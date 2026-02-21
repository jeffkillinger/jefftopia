export type BlogPostMetadata = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
};

// Reserved for future blog implementation.
export const blogPosts: BlogPostMetadata[] = [];
