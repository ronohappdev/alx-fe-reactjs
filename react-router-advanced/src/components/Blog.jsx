// File: src/components/Blog.jsx
import { Link } from 'react-router-dom';

function Blog() {
  // In a real app, this would come from an API or state management
  const blogPosts = [
    { id: 1, title: 'Getting Started with React Router' },
    { id: 2, title: 'Understanding Protected Routes' },
    { id: 3, title: 'Nested Routes in React Applications' },
    { id: 4, title: 'Dynamic Routing Explained' }
  ];
  
  return (
    <div className="blog-page">
      <h1>Blog Posts</h1>
      <ul className="blog-list">
        {blogPosts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;

