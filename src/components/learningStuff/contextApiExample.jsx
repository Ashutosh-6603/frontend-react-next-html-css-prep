import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function Profile() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState({ name: "Ashutosh" });

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      <Profile />
    </AuthContext.Provider>
  );
}
