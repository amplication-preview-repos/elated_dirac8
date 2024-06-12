import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  author?: AuthorWhereUniqueInput;
  blogPost?: BlogPostWhereUniqueInput;
  commentAuthor?: StringNullableFilter;
  commentContent?: StringNullableFilter;
  commentCreatedAt?: DateTimeNullableFilter;
  commentCreatedDate?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  relatedBlogPost?: StringNullableFilter;
};
