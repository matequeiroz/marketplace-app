import { Text, View } from 'react-native';

import { HeaderPublic } from '@/components/features/HeaderPublic';
import { FooterPublic } from '@/components/features/FooterPublic';
import { Button } from '@/components/shared/Button';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';

export const LoginScreen = () => {
  return (
    <View
      style={{
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
        <Text>Form</Text>
        <Button text="Acessar" icon={ArrowRight02Icon} type="primary" />
      </View>
      <FooterPublic />
    </View>
  );
};
