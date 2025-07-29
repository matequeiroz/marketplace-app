import z from "zod";

export const registerSchema = z.object({
  name: z.string("Digite nome e sobrenome").min(5, 'O nome é obrigatório'),
  phone: z.string("O telefone é obrigatório").min(11, 'Telefone inválido'),
  email: z.email('E-mail inválido').min(1, 'O e-mail é obrigatório'),
  password: z.string("A senha é obrigatória").min(6, 'A senha deve ter pelo menos 6 caracteres'),
  confirmPassword: z.string("A senha é obrigatória").min(6, 'A senha deve ter pelo menos 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não conferem',
  path: ['confirmPassword'],
});