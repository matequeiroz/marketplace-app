import { RegisterFormType } from "./registerForm";

export type RegisterType = Omit<RegisterFormType, 'confirmPassword'>