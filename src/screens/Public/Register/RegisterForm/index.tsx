import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  UserIcon,
  PhoneLockFreeIcons,
  Mail01Icon,
  LockKeyIcon,
  ArrowRight02Icon,
} from '@hugeicons/core-free-icons';
import { Alert, View } from 'react-native';

import { Button } from '@/components/shared/Button';
import { FormInput } from '@/components/shared/InputForm';
import { RegisterFormType } from '@/types/registerForm';
import { registerSchema } from '@/schemas/register.schema';

import { styles } from './styles';
import { useAuthContext } from '@@/src/hooks/useAuthContext';
import { RegisterType } from '@/types/register';

export const RegisterForm = () => {
  const { handleUserRegister } = useAuthContext();

  const { control, handleSubmit } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const onSubmit = async ({ email, password, phone, username }: RegisterType) => {
    try {
      await handleUserRegister({ email, password, phone, username });
    } catch (error) {
      console.log('RegisterForm > onSumit error:', error);
      Alert.alert(
        'Erro',
        'Não foi possível fazer seu cadastro, tente novamente.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FormInput
          name="username"
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
      <Button
        text="Cadastrar"
        icon={ArrowRight02Icon}
        type="primary"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};
