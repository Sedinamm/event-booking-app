import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const ViewTicketScreen = () => {
  const { Name, about, day, id, image, month, price, rating } =
    useRoute().params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView key={id}>
        <ImageBackground source={{ uri: image }} style={styles.image}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              padding: 20,
              position: "absolute",
              bottom: 0,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              {rating}
            </Text>
            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>
              {Name}
            </Text>
          </View>
        </ImageBackground>
        <View style={{ flex: 1, justifyContent: "space-around", padding: 10 }}>
          {/* Date/ Calender/ Day */}
          <View style={{ top: 10 }}>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
              {day} {month}, 2022 - 3 {month} 2022
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontWeight: "bold",
                color: "green",
              }}
            >
              Weekends
            </Text>
          </View>
          <Text
            style={{ color: "#fff", fontSize: 20, fontWeight: "bold", top: 15 }}
          >
            About
          </Text>
          <Text
            style={{ color: "#fff", fontSize: 18, top: 20, color: "white" }}
          >
            {about}
          </Text>
        </View>

        {/* Buy ticket button */}
        <View style={{ padding: 25, alignItems: "center" }}>
          <View
            style={{
              height: 50,
              width: 200,
              backgroundColor: "white",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "green", fontWeight: "bold" }}>Active</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewTicketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },
  image: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    width: 380,
    height: 400,
    justifyContent: "center",
    opacity: 0.8,
  },
});
