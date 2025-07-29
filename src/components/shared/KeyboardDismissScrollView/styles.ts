import { colors } from '@@/src/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingLeft: 40,
    paddingRight: 40,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
