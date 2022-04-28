import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const LoadingScreen = () => {
  const fade = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(fade, {
          toValue: 0.5,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fade, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    }, 1000);
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <Animated.Text style={{ color: "#fff", opacity: fade, fontWeight: "bold", fontSize: 18 }}>
        Loading...
      </Animated.Text>
    </View>
  );
};

export default LoadingScreen;
