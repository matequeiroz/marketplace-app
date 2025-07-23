import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { SearchIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';

import { fonts, typography } from '@/theme';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontFamily: fonts.bold, fontSize: typography.bold.lg }}>
        Marketplace App
      </Text>
      <Text
        style={{
          fontFamily: fonts.medium,
          fontSize: typography.medium.label.md,
        }}
      >
        Seu app de compras
      </Text>
      <HugeiconsIcon
        icon={SearchIcon}
        size={24}
        color="black"
        strokeWidth={1.5}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
