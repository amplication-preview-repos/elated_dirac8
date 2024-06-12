import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentCreateNestedManyWithoutBlogPostsInput } from "./CommentCreateNestedManyWithoutBlogPostsInput";

export type BlogPostCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutBlogPostsInput;
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
};
