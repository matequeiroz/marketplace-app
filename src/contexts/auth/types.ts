import { LoginFormType } from '@/types/loginForm';
import { RegisterFormType } from '@/types/registerForm';

export type AuthContextType = {
  user: null;
  token: string | null;
  handleUserAutenticate: (data: LoginFormType) => Promise<void>;
  handleUserRegister: (data: RegisterFormType) => Promise<void>;
  handleUserLogout: () => Promise<void>;
};



