import { ActivityIndicator, View } from 'react-native';
import { colors } from '@/theme';

import Logo from '@@/assets/images/svg/logo.svg';
import { styles } from './styles';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <Logo width={100} height={100} />
      <ActivityIndicator color={colors.orange[700]} />
    </View>
  );
};
