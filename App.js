import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import firebase from "firebase";
import Intro1 from "./Screens/Intro1";
import Intro2 from "./Screens/Intro2";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import TicketScreen from "./Screens/TicketScreen";
import EditProfileScreen from "./Screens/EditProfileScreen";
import EventDetail from "./Screens/components/EventDetail";
import Main from "./Screens/Main";
import EventTicket from "./Screens/EventTicket";
import LoadingScreen from "./Screens/LoadingScreen";
import ViewTicketScreen from "./Screens/ViewTicketScreen";

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = firebase.auth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.uid) {
        setTimeout(() => {
          setCurrentUser(true);
          setLoading(false);
        }, 2000);
      } else {
        setCurrentUser(false);
        setLoading(false);
      }
    });

    return () => unsubscribe;
  }, []);
  return (
    <NavigationContainer>
      {loading ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="loading" component={LoadingScreen} />
        </Stack.Navigator>
      ) : !currentUser && !loading ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Intro1" component={Intro1} />
          <Stack.Screen name="Intro2" component={Intro2} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Event" component={EventDetail} />
          <Stack.Screen name="ticket" component={EventTicket} />
          <Stack.Screen name="viewTicket" component={ViewTicketScreen} />
          <Stack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
          />
        </Stack.Navigator>
      )}
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

// {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
// {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
// {/* <Stack.Screen name="TicketScreen" component={TicketScreen} /> */}
