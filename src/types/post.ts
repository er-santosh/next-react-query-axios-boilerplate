export interface IPostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type IPostsResponse = IPostResponse[];
