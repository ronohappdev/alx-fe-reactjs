// File: src/components/Navigation.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

function Navigation() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;