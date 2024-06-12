import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "commentAuthor";

export const CommentTitle = (record: TComment): string => {
  return record.commentAuthor?.toString() || String(record.id);
};
