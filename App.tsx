import { SafeAreaView, StyleSheet } from 'react-native';
import Bootsplash from 'react-native-bootsplash';

import { useEffect } from 'react';
import { Routes } from '@/routes';

function App() {

  useEffect(() => {
    Bootsplash.hide({ fade: true })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
