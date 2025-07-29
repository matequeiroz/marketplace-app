import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Mail01Icon,
  LockKeyIcon,
  ArrowRight02Icon,
} from '@hugeicons/core-free-icons';

import { Button } from '@/components/shared/Button';
import { FormInput } from '@/components/shared/InputForm';
import { loginSchema } from '@/schemas/login.schema';
import { LoginFormType } from '@/types/loginForm';
import { useAuthContext } from '@/hooks/useAuthContext';

import { styles } from './styles';

export function LoginForm() {
  const { handleUserAutenticate } = useAuthContext()

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched"
  });


  const onSubmit = async ({ identifier, password }: LoginFormType) => {
    try {
      await handleUserAutenticate({ identifier, password })
    } catch (error) {
      
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FormInput
          name="identifier"
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
      <Button
        text="Acessar"
        icon={ArrowRight02Icon}
        type="primary"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}
