import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  UserIcon,
  PhoneLockFreeIcons,
  Mail01Icon,
  LockKeyIcon,
  ArrowRight02Icon,
} from '@hugeicons/core-free-icons';
import { View } from 'react-native';

import { Button } from '@/components/shared/Button';
import { FormInput } from '@/components/shared/InputForm';

import { styles } from './styles';

const registerSchema = z.object({
  name: z.string("Digite nome e sobrenome").min(5, 'O nome é obrigatório'),
  phone: z.string("O telefone é obrigatório").min(11, 'Telefone inválido'),
  email: z.email('E-mail inválido').min(1, 'O e-mail é obrigatório'),
  password: z.string("A senha é obrigatória").min(6, 'A senha deve ter pelo menos 6 caracteres'),
  confirmPassword: z.string("A senha é obrigatória").min(6, 'A senha deve ter pelo menos 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não conferem',
  path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const { control, handleSubmit } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched"
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FormInput
          name="name"
          label="Nome"
          control={control}
          icon={UserIcon}
          placeholder="Seu nome completo"
          keyboardType="default"
          autoCapitalize="none"
        />
        <FormInput
          name="phone"
          label="Telefone"
          control={control}
          icon={PhoneLockFreeIcons}
          placeholder="(00) 00000-0000"
          keyboardType="number-pad"
          autoCapitalize="none"
          maxLength={11}
        />
        <FormInput
          name="email"
          label="E-mail"
          control={control}
          icon={Mail01Icon}
          placeholder="email@exemplo.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <FormInput
          name="password"
          label="Senha"
          control={control}
          icon={LockKeyIcon}
          placeholder="Sua senha"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <FormInput
          name="confirmPassword"
          label="Confirmar senha"
          control={control}
          icon={LockKeyIcon}
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          autoCapitalize="none"
        />
      </View>
      <Button text="Cadastrar" icon={ArrowRight02Icon} type="primary" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
