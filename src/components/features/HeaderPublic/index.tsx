import { Text, View } from 'react-native';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';

import { Button } from '@/components/shared/Button';
import Logo from '@@/assets/images/svg/logo.svg';

import { styles } from './styles';
import { HeaderPublicTypes } from './types';

export const HeaderPublic = ({ title, subtitle }: HeaderPublicTypes) => {
  return (
    <View style={styles.container}>
      <Logo width={100} height={100} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <Button text="Acessar" icon={ArrowRight02Icon} type='primary' />
    </View>
  );
};
