import React from 'react';
import { useUser } from '../contexts/UserContext';
// import "../styles/Profile.css";


const Profile = () => {
  const { user } = useUser();

  return (
    <div className="profile-container">
      <h2>Welcome, {user?.email}</h2>
      <p>Your profile information.</p>
      <div className="profile-details">
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>UID:</strong> {user?.uid}</p>
      </div>
    </div>
  );
};
export default Profile;