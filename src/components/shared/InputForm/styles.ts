import { colors, fonts, typography } from '@@/src/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.gray[300],
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: typography.regular.xs,
    color: colors.gray[600],
  },
  labelFocused: {
    color: colors.orange[400],
  },
  labelError: {
    color: colors.semantic.danger
  },
  labelSuccess: {
    color: colors.semantic.success
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
  inputError: { color: colors.semantic.danger },
  inputSuccess: { color: colors.semantic.success},
  
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 4,
    gap: 4
  },
  errorText: {
    fontFamily: fonts.regular,
    fontSize: typography.regular.xs,
    color: colors.semantic.danger
  }
});
