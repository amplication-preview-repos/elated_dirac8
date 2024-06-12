import { BlogPostUpdateManyWithoutAuthorsInput } from "./BlogPostUpdateManyWithoutAuthorsInput";
import { CommentUpdateManyWithoutAuthorsInput } from "./CommentUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  blogPosts?: BlogPostUpdateManyWithoutAuthorsInput;
  comments?: CommentUpdateManyWithoutAuthorsInput;
  email?: string | null;
  name?: string | null;
};
