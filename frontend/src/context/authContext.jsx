import { createContext, useEffect, useState } from 'react';
import { checkAuth } from '../api/authApi';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const { data } = await checkAuth();
      setAuthUser(data);
    } catch (error) {
      if (error.response?.status !== 401) {
        console.error('Unexpected auth error:', error);
      }
      setAuthUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return;

  return (
    <AuthContext.Provider value={{ authUser, loading, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
