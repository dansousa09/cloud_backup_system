import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../../../routes/main.routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContextProvider } from "../../context/auth-context";
import { NativeBaseProvider } from "native-base";

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#FFFF",
        }}
      >
        <NativeBaseProvider>
          <AuthContextProvider>
            <Routes />
          </AuthContextProvider>
        </NativeBaseProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};
