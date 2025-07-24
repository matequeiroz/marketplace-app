import { colors, fonts, typography } from "@@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 32,
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    gap: 8
  },
  title: {
    fontSize: typography.bold.lg,
    fontFamily: fonts.bold
  },
  subtitle: {
    fontSize: typography.regular.sm,
    fontFamily: fonts.regular,
    color: colors.gray[300]
  }
});