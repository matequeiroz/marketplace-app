
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Store02Icon, UserIcon } from '@hugeicons/core-free-icons';

import { HomeScreen } from '@/screens/Private/Home';
import { ProfileScreen } from '@/screens/Private/Profile';
import { PrivateRoutesParamList } from '@/types/private.routes';
import { colors, fonts, typography } from '@/theme';

const PrivateRoutes = createBottomTabNavigator<PrivateRoutesParamList>();

const tabBarLabelStyle = {
  fontFamily: fonts.medium,
  fontSize: typography.medium.label.md,
};

const homeScreenOptions = {
  title: 'Produtos',
  tabBarLabelStyle,
  tabBarActiveTintColor: colors.orange[400],
  tabBarInactiveTintColor: colors.gray[400],
  tabBarIcon: ({ color }: { color: string }) => <HugeiconsIcon icon={Store02Icon} size={24} color={color} strokeWidth={1.5} />,
};

const profileScreenOptions = {
  title: 'Perfil',
  tabBarLabelStyle,
  tabBarActiveTintColor: colors.orange[400],
  tabBarInactiveTintColor: colors.gray[400],
  tabBarIcon: ({ color }: { color: string }) =>  <HugeiconsIcon icon={UserIcon} size={24} color={color} strokeWidth={1.5} />,
};

const PrivateRoutesNavigator = () => (
  <PrivateRoutes.Navigator screenOptions={{ headerShown: false }}>
    <PrivateRoutes.Screen
      name="Home"
      component={HomeScreen}
      options={homeScreenOptions}
    />
    <PrivateRoutes.Screen
      name="Profile"
      component={ProfileScreen}
      options={profileScreenOptions}
    />
  </PrivateRoutes.Navigator>
);

export const PrivateRoutesComponent = () => <PrivateRoutesNavigator />;
