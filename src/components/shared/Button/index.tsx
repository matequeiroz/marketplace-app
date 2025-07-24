import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { IconSvgElement, HugeiconsIcon } from '@hugeicons/react-native';

import { styles } from './styles';
import { colors } from '@@/src/theme';

type ButtonType = TouchableOpacityProps & {
  text: string;
  icon?: IconSvgElement;
  type?: 'primary' | 'secondary';
};

export const Button = ({
  text,
  icon,
  type = 'primary',
  ...props
}: ButtonType) => {
  const textColor = type === 'primary' ? colors.white : colors.orange[400];
  const backgroundColor =
    type === 'primary' ? colors.orange[400] : colors.white;

  return (
    <TouchableOpacity {...props} activeOpacity={0.7} style={styles.container}>
      <View
        style={[
          styles.button,
          props.style,
          {
            backgroundColor: backgroundColor,
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              color: textColor,
            },
          ]}
        >
          {text}
        </Text>
        {icon && <HugeiconsIcon size={24} icon={icon} color={textColor} />}
      </View>
    </TouchableOpacity>
  );
};
