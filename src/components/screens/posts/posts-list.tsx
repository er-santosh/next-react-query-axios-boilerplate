import { getAllPosts } from "@/api/post.api";
import { useQuery } from "@tanstack/react-query";

const PostsList = () => {
  const { isLoading, data: posts } = useQuery(["posts"], getAllPosts);

  if (isLoading) return <p>Loading....</p>;

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostsList;
