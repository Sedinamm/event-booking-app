import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function Signup({navigation}) {
  return (
    <View style={{ flex: 10, backgroundColor: "white" }}>
      <View style={{ flex: 3, backgroundColor: "white" }}>
        {/* <Image
          style={{ bottom: -1, right: 20, height: 350, width: 410 }}
          source={require("../assets/Images/55.jpg")}
        /> */}
      </View>

      <View
        style={{
          flex: 5,
          backgroundColor: "black",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View style={{ alignSelf: "left", top: 25, left: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 35,
              color:"white",
            }}
          >
            Login
          </Text>

          {/* Email */}
          <Text style={{ top: 40, fontWeight: "bold", fontSize: 15, color:"white", }}>
            Email
          </Text>
          <View style={{ marginTop: 55, width: 340 }}>
            <GooglePlacesAutocomplete
              placeholder="Email"
              styles={{
                textInput: {
                  backgroundColor: "#eee",
                  borderRadius: 50,
                },
              }}
            />
          </View>

          {/* Password */}
          <Text style={{ top: 70, fontWeight: "bold", fontSize: 15, color:"white", }}>
            Password
          </Text>
          <View style={{ marginTop: 85, width: 340 }}>
            <GooglePlacesAutocomplete
              placeholder="Password"
              styles={{
                textInput: {
                  backgroundColor: "#eee",
                  borderRadius: 50,
                },
              }}
            />
          </View>

          {/* Button */}
          <View
            style={{
              top: 80,
              alignItems: "center",
              
            }}
          >
            <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}
              style={{
                backgroundColor: "white",
                borderRadius: 30,
                height: 55,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* Text */}
          <Text style={{ top: 100, alignSelf: "center", right: 20,color:"white", }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
            <Text
              style={{
                top: 83,
                fontWeight: "bold",
                alignSelf: "center",
                left: 87,
                color:"white",
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
