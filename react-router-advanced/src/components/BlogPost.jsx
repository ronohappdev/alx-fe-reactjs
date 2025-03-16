// File: src/components/BlogPost.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BlogPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch post data
    const fetchPost = () => {
      setLoading(true);
      
      // Mock data - in a real app, you would fetch from an API
      const posts = {
        1: {
          id: 1, 
          title: 'Getting Started with React Router',
          content: 'This post explains the basics of setting up React Router in your application...',
          author: 'Jane Doe',
          date: '2023-03-15'
        },
        2: {
          id: 2, 
          title: 'Understanding Protected Routes',
          content: 'Learn how to implement protected routes to secure parts of your application...',
          author: 'John Smith',
          date: '2023-03-18'
        },
        3: {
          id: 3, 
          title: 'Nested Routes in React Applications',
          content: 'Discover how to organize your application using nested routes for better UX...',
          author: 'Alex Johnson',
          date: '2023-03-22'
        },
        4: {
          id: 4, 
          title: 'Dynamic Routing Explained',
          content: 'Learn how to use dynamic segments in your routes to handle variable content...',
          author: 'Sam Wilson',
          date: '2023-03-25'
        }
      };
      
      // Simulate network delay
      setTimeout(() => {
        if (posts[postId]) {
          setPost(posts[postId]);
        }
        setLoading(false);
      }, 300);
    };
    
    fetchPost();
  }, [postId]);
  
  if (loading) {
    return <div>Loading post...</div>;
  }
  
  if (!post) {
    return (
      <div className="post-not-found">
        <h2>Post not found</h2>
        <p>Sorry, the requested blog post does not exist.</p>
        <button onClick={() => navigate('/blog')}>Back to Blog</button>
      </div>
    );
  }
  
  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <div className="post-meta">
        <span>By {post.author}</span>
        <span>Published on {post.date}</span>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <button onClick={() => navigate('/blog')}>Back to Blog</button>
    </div>
  );
}

export default BlogPost;