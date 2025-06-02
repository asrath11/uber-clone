import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create the context
const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const res = await axios.get('http://localhost:5000/users/profile', {
        withCredentials: true,
      });
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Call only on first load
  useEffect(() => {
    fetchProfile();
  }, []);

  const login = (userData) => {
    setUser(userData);
    setLoading(false);
  };

  const logout = async () => {
    await axios.post(
      'http://localhost:5000/users/logout',
      {},
      {
        withCredentials: true,
      }
    );
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for accessing the user context
export const useUser = () => useContext(UserContext);
