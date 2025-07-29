import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { PrivateRoutesComponent } from "@/routes/PrivateRoutes";
import { PublicRoutesComponent } from "./PublicRoutes";
import { useAuthContext } from "../hooks/useAuthContext";

export const Routes = () => {

  const { user, token } = useAuthContext()

  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} />
     {!user || !token ? <PublicRoutesComponent /> : <PrivateRoutesComponent />}
    </NavigationContainer>
  );
}