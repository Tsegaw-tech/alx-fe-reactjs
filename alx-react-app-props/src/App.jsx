// src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';


function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };

  return (
    // ✅ Provide userData via Context instead of props
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
