// src/components/PostsComponent.jsx
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// API functions
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const createPost = async (newPost) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  return response.json();
};

const PostsComponent = () => {
  const [showPosts, setShowPosts] = useState(true);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');
  
  // Access the query client
  const queryClient = useQueryClient();
  
  // Posts query - Note: In TanStack Query v4+, query keys are arrays
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    onSuccess: (data) => {
      console.log('Posts fetched successfully:', data.length);
    },
    onError: (err) => {
      console.error('Error fetching posts:', err);
    },
  });
  
  // Create post mutation
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      // Optimistic update - add the new post to the existing cache
      queryClient.setQueryData(['posts'], (oldData) => {
        return [newPost, ...oldData];
      });
      
      // Clear form fields
      setNewPostTitle('');
      setNewPostBody('');
    },
  });
  
  const handleCreatePost = (e) => {
    e.preventDefault();
    const newPost = {
      title: newPostTitle,
      body: newPostBody,
      userId: 1, // Hardcoded for demo
    };
    mutation.mutate(newPost);
  };
  
  // Toggle showing posts (demonstrates cache persistence)
  const togglePosts = () => {
    setShowPosts(!showPosts);
  };

  return (
    <div className="posts-container">
      <div className="controls">
        <button onClick={togglePosts}>
          {showPosts ? 'Hide Posts' : 'Show Posts'}
        </button>
        <button 
          onClick={() => refetch()} 
          disabled={isFetching}
        >
          {isFetching ? 'Refreshing...' : 'Refresh Data'}
        </button>
      </div>
      
      {/* Create post form */}
      <div className="create-post">
        <h2>Create New Post</h2>
        <form onSubmit={handleCreatePost}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              value={newPostBody}
              onChange={(e) => setNewPostBody(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'Creating...' : 'Create Post'}
          </button>
        </form>
        {mutation.isError && (
          <div className="error-message">
            Error creating post: {mutation.error.message}
          </div>
        )}
        {mutation.isSuccess && (
          <div className="success-message">
            Post created successfully!
          </div>
        )}
      </div>
      
      {/* Show posts if toggled on */}
      {showPosts && (
        <div className="posts-list">
          <h2>Posts</h2>
          {isLoading && <div className="loading">Loading posts...</div>}
          {isFetching && !isLoading && (
            <div className="refreshing">Refreshing data...</div>
          )}
          {isError && (
            <div className="error-message">
              Error: {error.message}
            </div>
          )}
          {posts && (
            <ul>
              {posts.slice(0, 10).map((post) => (
                <li key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              ))}
              {posts.length > 10 && <div>...and {posts.length - 10} more posts</div>}
            </ul>
          )}
        </div>
      )}
      
      {/* Cache information */}
      <div className="cache-info">
        <h3>React Query Cache Status</h3>
        <p>
          Posts data is {isFetching ? 'being fetched' : 'cached'}
          {!showPosts && ' (component unmounted but cache persists)'}
        </p>
        <p>Open React Query Devtools (bottom-right corner) to inspect cache</p>
      </div>
    </div>
  );
};

export default PostsComponent;