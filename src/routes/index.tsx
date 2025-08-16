import { StatusBar } from 'react-native';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { PrivateRoutesComponent } from '@/routes/PrivateRoutes';
import { PublicRoutesComponent } from './PublicRoutes';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useGlobalLoading } from '@/hooks/useGlobalLoading';
import { Loading } from '@/components/shared/Loading';

export const Routes = () => {
  const { user, token, handleRestoreUserData } = useAuthContext();
  const { loading, setLoading } = useGlobalLoading();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await handleRestoreUserData();

        setTimeout(() => setLoading(false), 2000);
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const render = () => {
    if (loading) {
      return <Loading />;
    }

    if (!loading) {
      return !user || !token ? (
        <PublicRoutesComponent />
      ) : (
        <PrivateRoutesComponent />
      );
    }
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      {render()}
    </NavigationContainer>
  );
};
