import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  authorId?: SortOrder;
  blogPostId?: SortOrder;
  commentAuthor?: SortOrder;
  commentContent?: SortOrder;
  commentCreatedAt?: SortOrder;
  commentCreatedDate?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  relatedBlogPost?: SortOrder;
  updatedAt?: SortOrder;
};
