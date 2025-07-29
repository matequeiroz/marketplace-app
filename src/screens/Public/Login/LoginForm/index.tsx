import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail01Icon, LockKeyIcon, ArrowRight02Icon } from '@hugeicons/core-free-icons';

import { Button } from '@/components/shared/Button';
import { FormInput } from '@/components/shared/InputForm';

import { styles } from './styles';

const loginSchema = z.object({
  email: z.email('O e-mail é inválido').min(1, 'O e-mail é obrigatório'),
  password: z.string("A senha é obrigatória").min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data, errors, isSubmitting);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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
      </View>
      <Button text="Acessar" icon={ArrowRight02Icon} type="primary" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

