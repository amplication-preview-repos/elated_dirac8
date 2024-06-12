import { BlogPostCreateNestedManyWithoutAuthorsInput } from "./BlogPostCreateNestedManyWithoutAuthorsInput";
import { CommentCreateNestedManyWithoutAuthorsInput } from "./CommentCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  blogPosts?: BlogPostCreateNestedManyWithoutAuthorsInput;
  comments?: CommentCreateNestedManyWithoutAuthorsInput;
  email?: string | null;
  name?: string | null;
};
