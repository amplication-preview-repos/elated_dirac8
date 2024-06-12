import { BlogPostListRelationFilter } from "../blogPost/BlogPostListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuthorWhereInput = {
  blogPosts?: BlogPostListRelationFilter;
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
