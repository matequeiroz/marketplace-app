import { LoginFormType } from '@/types/loginForm';
import { RegisterFormType } from '@/types/registerForm';
import { User } from '@/models/User';

export type AuthContextType = {
  user: User | null;
  token: string | null;
  handleUserAutenticate: (data: LoginFormType) => Promise<void>;
  handleUserRegister: (data: RegisterFormType) => Promise<void>;
  handleUserLogout: () => Promise<void>;
};



