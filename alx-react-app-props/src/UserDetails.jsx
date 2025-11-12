// src/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  // ✅ Access data directly from Context
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '20px', borderRadius: '6px' }}>
      <h3>User Details (via Context)</h3>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
