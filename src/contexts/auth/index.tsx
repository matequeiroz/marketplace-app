import { useState, useCallback, createContext } from 'react';

import { AuthContextType, StorageUserType } from './types';
import { LoginFormType } from '@/types/loginForm';
import { authService } from '@/services/auth';
import { User } from '@/models/User';
import { RegisterType } from '@/types/register';
import { storage } from '@/services/storage';
import { name } from '@@/package.json';

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const keyStorageUser = `@${name}/user`;

  const handleUserAutenticate = useCallback(
    async (credentials: LoginFormType) => {
      try {
        const response = await authService.login(credentials);
        if (response.status === 200 && response.data) {
          const { jwt, user: userAuth } = response.data;
          setUser(userAuth);
          setToken(jwt);
          await storage.set(
            keyStorageUser,
            JSON.stringify({ user: userAuth, token: jwt }),
          );
        }
      } catch (error: any) {
        console.error('handleUserAutenticate', error);
        throw new Error(error);
      }
    },
    [keyStorageUser],
  );

  const handleUserRegister = useCallback(
    async (credentials: RegisterType) => {
      try {
        const response = await authService.register(credentials);
        console.log('response', response);
        if (response.status === 200 && response.data) {
          const { jwt, user: userAuth } = response.data;
          setUser(userAuth);
          setToken(jwt);
          await storage.set(
            keyStorageUser,
            JSON.stringify({ user: userAuth, token: jwt }),
          );
        }
      } catch (error: any) {
        console.error('authContext > handleUserRegister error:', error);
        throw new Error(error);
      }
    },
    [keyStorageUser],
  );

  const handleUserLogout = useCallback(async () => {
    setUser(null);
    setToken(null);
  }, []);

  const handleRestoreUserData = async () => {
    try {
      const userData = await storage.get<StorageUserType>(keyStorageUser);

      if (userData) {
        setUser(userData.user);
        setToken(userData.token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        handleUserAutenticate,
        handleUserRegister,
        handleUserLogout,
        handleRestoreUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
