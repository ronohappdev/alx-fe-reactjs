// File: src/components/ProfileDetails.jsx
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

function ProfileDetails() {
  const { isAuthenticated } = useContext(AuthContext);
  
  return (
    <div className="profile-details">
      <h2>Profile Details</h2>
      <p>User ID: 12345</p>
      <p>Username: DemoUser</p>
      <p>Email: demo@example.com</p>
      <p>Member since: January 1, 2023</p>
    </div>
  );
}

export default ProfileDetails;