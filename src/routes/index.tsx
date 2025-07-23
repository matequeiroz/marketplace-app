import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { PrivateRoutesComponent } from "@/routes/PrivateRoutes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} />
      <PrivateRoutesComponent />
    </NavigationContainer>
  );
}