import { BlogPost } from "../blogPost/BlogPost";
import { Comment } from "../comment/Comment";

export type Author = {
  blogPosts?: Array<BlogPost>;
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
