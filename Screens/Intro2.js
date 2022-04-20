import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Intro1({ navigation }) {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#eee", justifyContent: "center" }}
    >
      <Image
        style={{ height: 850, width: 400 }}
        source={require("../assets/Images/00.jpg")}
      />
      <View style={{ position: "absolute", alignSelf: "center" }}>
        <Text
          style={{ fontSize: 30, fontWeight: "bold", color: "white", top: 150 }}
        >
          Travel to All 16 Regions
        </Text>
        <View style={{ position: "absolute", alignSelf: "center" }}>
          <Text style={{ fontWeight: "bold", top: 200, color: "white" }}>
            Visit over 30+ tourists sites in the country
          </Text>
        </View>

        {/* Button */}
        <View
          style={{
            top: 250,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
            style={{
              backgroundColor: "#fff",
              borderRadius: 30,
              height: 55,
              width: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{fontWeight:"bold"}}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
