// File: src/components/Profile.jsx
import { Outlet, Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      
      {/* Navigation for nested routes */}
      <nav className="profile-nav">
        <ul>
          <li><Link to="/profile">Profile Details</Link></li>
          <li><Link to="/profile/settings">Profile Settings</Link></li>
        </ul>
      </nav>
      
      {/* This is where the nested route components will render */}
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;