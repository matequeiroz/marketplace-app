import { View } from "react-native"

import { HeaderPublic } from "@/components/features/HeaderPublic"

export const LoginScreen = () => {

  return (
    <View style={{ height: '100%', paddingTop: 64, paddingLeft: 40, paddingRight: 40, paddingBottom: 46 }}>
      <HeaderPublic title="Acesse sua conta" subtitle="Informe seu e-mail e senha para entrar" />
      {/* <Text>Login Screen</Text> */}
    </View>
  )
}