import { Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';

import { Button } from '@/components/shared/Button';
import { PublicRoutesParamList } from '@/types/public.routes';
import { styles } from './styles';

type FooterPublicType = {
  navigation: keyof PublicRoutesParamList;
  title: string;
  buttonText: string;
};

export const FooterPublic = ({
  buttonText,
  navigation,
  title,
}: FooterPublicType) => {

  const nav = useNavigation<NavigationProp<PublicRoutesParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{title}</Text>
        <Button
          text={buttonText}
          type="secondary"
          icon={ArrowRight02Icon}
          onPress={() => nav.navigate(navigation)}
        />
      </View>
      <Text style={styles.textFooter}>
        © {new Date().getFullYear()} MarketplaceApp. All rights reserved.
      </Text>
    </View>
  );
};
