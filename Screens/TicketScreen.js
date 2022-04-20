import React from "react";
import {
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

// import { borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 10 }}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 0.5 }}></View>
        <View style={{ flex: 5 }}></View>
        {/* Bottom Tab menu */}
        <View
          style={{
            flex: 0.7,
            backgroundColor: "#101010",
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            top: 35,
          }}
        >
          {/* Home Tab */}
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Ionicons
              style={{ marginHorizontal: 50 }}
              name="home"
              size={30}
              color="white"
            />
          </TouchableOpacity>

          {/* Ticket Tab */}
          <TouchableOpacity onPress={() => navigation.navigate("TicketScreen")}>
            <Icon
              style={{ marginHorizontal: 50 }}
              name="credit-card"
              size={30}
              color="white"
            />
          </TouchableOpacity>

          {/* Profile */}
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <Ionicons
              style={{ marginHorizontal: 50 }}
              name="person-outline"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
