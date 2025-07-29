import { useEffect } from 'react';
import Bootsplash from 'react-native-bootsplash';

import { Routes } from '@/routes';

function App() {
  useEffect(() => {
    Bootsplash.hide({ fade: true });
  }, []);

  return <Routes />;
}


export default App;
