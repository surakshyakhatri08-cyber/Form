import axios from "axios";

export const getPostsData = async () => {
  const response = await axios.get("https://dummyjson.com/posts");
  return response.data.posts;
};