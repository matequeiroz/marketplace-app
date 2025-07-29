import { post } from '@/config/HttpClient';
import { LoginFormType } from '@/types/loginForm';
import { LoginResponseType } from '@/types/loginResponse';
import { RegisterResponseType } from '@/types/registerResponse';
import { RegisterType } from '@/types/register';

export const authService = {
  login: async (data: LoginFormType) => {
    try {
      const response = await post<LoginResponseType>('/auth/local', data);
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  },
  register: async (data: RegisterType) => {
    try {
      const response = await post<RegisterResponseType>(
        '/auth/local/register',
        data,
      );
      return response;
    } catch (error: any) {
      console.error('authService > register error:', error)
      throw new Error(error);
    }
  },
};
