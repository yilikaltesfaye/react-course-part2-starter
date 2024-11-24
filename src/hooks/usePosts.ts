import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) => {
  const fetchPost = async () => {
    const { data } = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: { userId },
      }
    );
    return data;
  };
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: fetchPost,
    staleTime: 10 * 1000,
  });
  return { posts, error, isLoading };
};

export default usePosts;
