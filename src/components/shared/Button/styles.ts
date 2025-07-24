import { StyleSheet } from 'react-native';

import { colors, typography } from '@/theme';

const borderColor = colors.orange[400];

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  button: {
    height: 62,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: borderColor,
    borderWidth: 1,
  },
  text: {
    fontSize: typography.medium.action.md,
  }
});
