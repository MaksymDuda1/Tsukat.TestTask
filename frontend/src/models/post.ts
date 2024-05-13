import { Tag } from "../enums/tag";

export class Post {
  post_id: string = "";
  title: string = "";
  summary: string = "";
  content: string = "";
  image_path: string = "";
  tags: Tag[] = [];

}