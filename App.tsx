import { useEffect } from 'react';
import Bootsplash from 'react-native-bootsplash';

import { Routes } from '@/routes';
import { AuthProvider } from './src/contexts/auth';

function App() {
  useEffect(() => {
    Bootsplash.hide({ fade: true });
  }, []);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}


export default App;
