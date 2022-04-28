import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import userAuth from "../firebase/userAuth";

export default function Signup({ navigation }) {
  const { signUp } = userAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert("a field is missing");
    } else {
      signUp(email, password);
    }
  };
  const handleGoToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={{ flex: 10, backgroundColor: "white" }}>
      <View style={{ flex: 3, backgroundColor: "white" }}>
        {/* <Image
          style={{ bottom: -1, right: 20, width: 410, height: 350 }}
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
        <View style={{ width: "100%", padding: 16 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 35,
              color: "white",
              top: 10,
            }}
          >
            Sign Up
          </Text>

          {/* Email */}

          <View style={{ width: "100%", marginVertical: 8, top: 40 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Email
            </Text>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              placeholder="Email"
              style={{
                backgroundColor: "white",
                padding: 16,
                borderRadius: 50,
              }}
            />
          </View>

          {/* Password */}

          <View style={{ width: "100%", marginVertical: 8, top: 40 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Password
            </Text>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Password"
              secureTextEntry
              style={{
                backgroundColor: "white",
                padding: 16,
                borderRadius: 50,
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
            <TouchableOpacity
              onPress={
                // const res = await signUp(email, password);
                // console.log(res);
                handleSubmit
              }
              style={{
                backgroundColor: "white",
                borderRadius: 30,
                height: 55,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          {/* Text */}
          <Text
            style={{ top: 100, alignSelf: "center", right: 20, color: "white" }}
          >
            Already have an account?
          </Text>
          <TouchableOpacity onPress={handleGoToLogin}>
            <Text
              style={{
                top: 20,
                fontWeight: "bold",
                alignSelf: "center",
                left: 100,
                color: "white",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
