// File: src/components/Profile.jsx
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

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
      
      {/* Define nested routes within the Profile component */}
      <div className="profile-content">
        <Routes>
          <Route index element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
}

export default Profile;