import { colors, fonts, typography } from '@@/src/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.gray[300],
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  iconContainer: {},
  label: {
    fontFamily: fonts.regular,
    fontSize: typography.regular.xs,
    color: colors.gray[600],
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    fontFamily: fonts.regular,
    fontSize: typography.regular.md,
    color: colors.gray[400],
  },
  inputError: { borderColor: 'red' },
  error: { color: 'red', marginTop: 4, fontSize: 12 },
  labelFocused: {
    color: colors.orange[400],
  },
});
