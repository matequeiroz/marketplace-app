import { Text, View } from "react-native";

import { Button } from "@/components/shared/Button";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { styles } from "./styles";

export const FooterPublic = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Ainda não tem uma conta?</Text>
        <Button text="Cadastrar" type="secondary" icon={ArrowRight02Icon} />
      </View>
      <Text style={styles.textFooter}>
        © {new Date().getFullYear()} MarketplaceApp. All rights reserved.
      </Text>
    </View>
  );
}