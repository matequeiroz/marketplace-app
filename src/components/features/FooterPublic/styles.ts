import { StyleSheet } from "react-native";
import { colors, fonts, typography } from "@/theme";

export const styles = StyleSheet.create({
  container: {},
  content: {
    marginBottom: 24,
    gap: 24
  },
  text: { 
    color: colors.gray[500],
    fontFamily: fonts.regular,
    fontSize: typography.regular.md
  },
  textFooter: {
    color: colors.gray[500],
    fontFamily: fonts.regular,
    fontSize: typography.regular.xs
  }
})