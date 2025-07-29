import { useState, useCallback, createContext } from 'react';

import { AuthContextType } from './types';
import { LoginFormType } from '@/types/loginForm';
import { authService } from '@/services/auth';
import { User } from '@/models/User';
import { RegisterType } from '@/types/register';

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
      } catch (error: any) {
        console.error('handleUserAutenticate', error);
        throw new Error(error)
      }
    },
    [],
  );

  const handleUserRegister = useCallback(async (credentials: RegisterType) => {
    try {
      const response = await authService.register(credentials);
      console.log('response', response)
      if (response.status === 200 && response.data) {
        const { jwt, user: userAuth } = response.data;
        setUser(userAuth);
        setToken(jwt);
      }
    } catch (error: any) {
      console.error('authContext > handleUserRegister error:', error);
      throw new Error(error);
    }
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
