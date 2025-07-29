// modules
import { View } from 'react-native';

// components
import { HeaderPublic } from '@/components/features/HeaderPublic';
import { WrapperPublic } from '@/components/shared/WrapperPublic';
import { FooterPublic } from '@/components/features/FooterPublic';
import { KeyboardDismissScrollView } from '@/components/shared/KeyboardDismissScrollView';

// screens
import { RegisterForm } from '@/screens/Public/Register/RegisterForm';

export const RegisterScreen = () => {
  return (
    <KeyboardDismissScrollView>
      <HeaderPublic
        title="Crie sua conta"
        subtitle="Informe os seus dados pessoais e de acesso"
      />
      <View>
        <RegisterForm />
      </View>
      <FooterPublic
        buttonText="Acessar"
        navigation="Login"
        title="Já tem uma conta?"
      />
    </KeyboardDismissScrollView>
  );
};
