import { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../utils/utils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getLocalStorage('authUser');
    if (data) {
      setAuthUser(data);
    }
    setLoading(false);
  }, []);

  if (loading) return;

  return (
    <AuthContext.Provider value={{ authUser, loading, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
