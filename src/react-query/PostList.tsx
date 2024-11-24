import { useEffect, useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number | undefined>(undefined);
  const { posts, error, isLoading } = usePosts(userId);
  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>{"is Loading..."}</p>;
  return (
    <>
      <select
        name=""
        value={userId ?? ""}
        className="form-select mb-3"
        onChange={(event) => {
          const value = event.target.value;
          setUserId(value ? parseInt(value) : undefined);
        }}
      >
        <option value="">Select a User</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
