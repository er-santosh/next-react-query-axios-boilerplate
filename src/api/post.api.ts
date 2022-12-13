import { createUpdatePostInput } from "@/schemas/post.schema";
import { IPostResponse, IPostsResponse } from "@/types/post";
import { axiosInstance } from "@/utils/axios";

export const getAllPosts = async () => {
  const response = await axiosInstance.get<IPostsResponse>("posts");
  return response.data;
};

export const createPost = async (postInput: createUpdatePostInput) => {
  const response = await axiosInstance.post<IPostResponse>("posts", postInput);
  return response.data;
};
