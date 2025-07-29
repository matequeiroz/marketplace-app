import { useState, useCallback, createContext } from 'react';

import { AuthContextType } from './types';
import { LoginFormType } from '@/types/loginForm';
import { RegisterFormType } from '@/types/registerForm';
import { authService } from '@/services/auth';
import { User } from '@/models/User';

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleUserAutenticate = useCallback(
    async (credentials: LoginFormType) => {
      try {
        const response = await authService.login(credentials);
        if (response.status === 200 && response.data) {
          const { jwt, user: userAuth } = response.data;
          setUser(userAuth);
          setToken(jwt);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

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
