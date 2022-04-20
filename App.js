import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Intro1 from "./Screens/Intro1";
import Intro2 from "./Screens/Intro2";
import Signup from "./Screens/Signup";
import Login  from "./Screens/Login";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import TicketScreen from "./Screens/TicketScreen";
import EditProfileScreen from "./Screens/EditProfileScreen";
import EventDetail from "./Screens/components/EventDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ header: () => null }}>

        <Stack.Screen name="Intro1" component={Intro1} />
        <Stack.Screen name="Intro2" component={Intro2} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Event" component={EventDetail} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="TicketScreen" component={TicketScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
