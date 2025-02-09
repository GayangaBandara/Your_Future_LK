import React from 'react';
import { useUser } from '../contexts/UserContext';

const ProfileSettings = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Profile Settings</h1>
      {user ? (
        <p>Logged in as: {user.email}</p>
      ) : (
        <p>Please sign in to view your profile settings.</p>
      )}
    </div>
  );
};

export default ProfileSettings;
