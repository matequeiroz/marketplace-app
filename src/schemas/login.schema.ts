import z from "zod";

export const loginSchema = z.object({
  identifier: z.email('O e-mail é inválido').min(1, 'O e-mail é obrigatório'),
  password: z.string("A senha é obrigatória").min(6, 'A senha deve ter pelo menos 6 caracteres'),
});