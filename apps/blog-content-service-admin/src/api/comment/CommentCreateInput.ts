import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  blogPost?: BlogPostWhereUniqueInput | null;
  commentAuthor?: string | null;
  commentContent?: string | null;
  commentCreatedAt?: Date | null;
  commentCreatedDate?: Date | null;
  content?: string | null;
  relatedBlogPost?: string | null;
};
