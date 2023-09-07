import { Post } from "../redux/interfaces/PostType";
import axios from "../utils/axios";

export async function getPosts() {
  const { data } = await axios.get<Post[]>("/posts");
  return data;
}
