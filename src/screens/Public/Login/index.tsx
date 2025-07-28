import { View } from 'react-native';

import { HeaderPublic } from '@/components/features/HeaderPublic';
import { FooterPublic } from '@/components/features/FooterPublic';
import { LoginForm } from '@/screens/Public/Login/LoginForm';
import { colors } from '@/theme';

export const LoginScreen = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        height: '100%',
        paddingTop: 64,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 46,
        justifyContent: 'space-between',
      }}
    >
      <HeaderPublic
        title="Acesse sua conta"
        subtitle="Informe seu e-mail e senha para entrar"
      />
      <View>
        <LoginForm />
      </View>
      <FooterPublic />
    </View>
  );
};
