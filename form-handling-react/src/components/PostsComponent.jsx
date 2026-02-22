// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,        // data stays fresh for 5 minutes — no background refetch during this window
    cacheTime: 1000 * 60 * 10,       // inactive cache is kept for 10 minutes before garbage collection
    refetchOnWindowFocus: false,      // do not refetch automatically when user re-focuses the browser tab
    keepPreviousData: true,           // show previous data while new data is being fetched (great for pagination)
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>

      {/* isFetching is true during background refetches even when cached data is shown */}
      {isFetching && <p style={{ color: "gray" }}>Refreshing in background...</p>}

      {/* Manual refetch trigger — demonstrates data refetch interaction */}
      <button onClick={() => refetch()}>Refetch Posts</button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
