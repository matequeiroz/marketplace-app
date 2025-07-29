import { View } from 'react-native';

import { HeaderPublic } from '@/components/features/HeaderPublic';
import { FooterPublic } from '@/components/features/FooterPublic';
import { KeyboardDismissScrollView } from '@/components/shared/KeyboardDismissScrollView';
import { LoginForm } from '@/screens/Public/Login/LoginForm';

export const LoginScreen = () => {
  return (
    <KeyboardDismissScrollView>
      <HeaderPublic
        title="Acesse sua conta"
        subtitle="Informe seu e-mail e senha para entrar"
      />
      <View>
        <LoginForm />
      </View>
      <FooterPublic
        buttonText="Criar conta"
        navigation="Register"
        title="Ainda não tem uma conta?"
      />
    </KeyboardDismissScrollView>
  );
};
