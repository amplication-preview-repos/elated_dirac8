import { Author } from "../author/Author";
import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  author?: Author | null;
  blogPost?: BlogPost | null;
  commentAuthor: string | null;
  commentContent: string | null;
  commentCreatedAt: Date | null;
  commentCreatedDate: Date | null;
  content: string | null;
  createdAt: Date;
  id: string;
  relatedBlogPost: string | null;
  updatedAt: Date;
};
