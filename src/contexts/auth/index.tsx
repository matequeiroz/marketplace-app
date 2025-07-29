import { useState, useCallback, createContext } from 'react';

import { LoginFormType } from '@/types/loginForm';
import { RegisterFormType } from '@/types/registerForm';
import { AuthContextType } from './types';

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleUserAutenticate = useCallback(async (data: LoginFormType) => {
    setUser(null);
    setToken('fake-token');
  }, []);

  const handleUserRegister = useCallback(async (data: RegisterFormType) => {
    setUser(null);
    setToken('fake-token');
  }, []);

  const handleUserLogout = useCallback(async () => {
    setUser(null);
    setToken(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        handleUserAutenticate,
        handleUserRegister,
        handleUserLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
