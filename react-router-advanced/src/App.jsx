// File: src/App.jsx
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import AuthContext from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <div className="app">
        <Navigation />
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Dynamic routing for blog posts using :id parameter */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            
            {/* Protected routes */}
            <Route 
              path="/profile/*" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;