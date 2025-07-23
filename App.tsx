import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { fonts } from './src/theme/fonts';
import { typography } from './src/theme/typography';

function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={{ fontFamily: fonts.bold, fontSize: typography.bold.lg }}>Marketplace App</Text>
        <Text style={{ fontFamily: fonts.medium, fontSize: typography.medium.label.md }}>Seu app de compras</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
