import { LoginFormType } from '@/types/loginForm';
import { post } from '@/config/HttpClient';
import { LoginResponseType } from '@/types/loginResponse';

export const authService = {
  login: async (data: LoginFormType) => {
    try {
      const response = await post<LoginResponseType>('/auth/local', data);
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  },
};
