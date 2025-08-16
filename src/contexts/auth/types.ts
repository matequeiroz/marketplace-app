import { LoginFormType } from '@/types/loginForm';
import { User } from '@/models/User';
import { RegisterType } from '@/types/register';

export type StorageUserType = {
  user: User;
  token: string;
};

export type AuthContextType = {
  user: User | null;
  token: string | null;
  handleUserAutenticate: (data: LoginFormType) => Promise<void>;
  handleUserRegister: (data: RegisterType) => Promise<void>;
  handleUserLogout: () => Promise<void>;
  handleRestoreUserData: () => Promise<void>;
};
