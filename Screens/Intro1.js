import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Intro1({navigation}) {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#eee", justifyContent: "center" }}
    >
      <Image
        style={{ height: 850, width: 400 }}
        source={require("../assets/Images/55.jpg")}
      />
      <View style={{ position: "absolute", alignSelf: "center" }}>
        <Text
          style={{ fontSize: 30, fontWeight: "bold", color: "white", top: 150 }}
        >
          Buy Tickets At Ease
        </Text>
        <View style={{ position: "absolute", alignSelf: "center" }}>
          <Text style={{  top: 200, color: "white", fontWeight:"bold" }}>
            Be able to buy tickets at ease on your
          </Text>
          <Text style={{top: 207, color:"white", alignSelf:"center", fontWeight:"bold"}}>mobile phone</Text>
        </View>

        {/* Button */}
        <View
          style={{
            top: 250,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={()=>{
            navigation.navigate("Intro2")
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
            <Ionicons name="chevron-forward-outline" size={50} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
