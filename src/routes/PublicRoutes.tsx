import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen, RegisterScreen } from '@/screens/Public';
import { PublicRoutesParamList } from '@/types/public.routes';

export const PublicRoutes = createNativeStackNavigator<PublicRoutesParamList>();

const PublicRoutesNavigator = () => (
  <PublicRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <PublicRoutes.Screen name="Login" component={LoginScreen} />
    <PublicRoutes.Screen name="Register" component={RegisterScreen} />
  </PublicRoutes.Navigator>
);

export const PublicRoutesComponent = () => (
  <PublicRoutesNavigator />
);

