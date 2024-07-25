import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginType, setLoginType] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedLoginType = localStorage.getItem('loginType');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedLoginType) {
      setLoginType(storedLoginType);
    }
  }, []);

  const login = (userData, type) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('loginType', type);
    setUser(userData);
    setLoginType(type);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('loginType');
    setUser(null);
    setLoginType(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
