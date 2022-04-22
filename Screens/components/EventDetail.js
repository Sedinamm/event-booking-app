import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PayWithFlutterwave } from "flutterwave-react-native";

const EventDetail = ({ route, navigation }) => {
  const {
    item: { id, Name, rating, image, day, month, about, price },
  } = route.params;

  //   const data = { id, Name, rating, image, day, month, about, price };
  const transactionReference = (length) => {
    let arr =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(
        ""
      );
    let mainArr = [];
    for (let i = 0; i < length; i++) {
      let ranIndex = (Math.random() * (arr.length - 1)).toFixed(0);
      mainArr[i] = arr[ranIndex];
    }
    return mainArr.join("");
  };

  const options = {
    tx_ref: transactionReference(10),
    authorization: "FLWPUBK_TEST-f4d768296673b2f8657ff86ffe6e77f4-X",
    customer: {
      email: "gabby@gmail.com",
    },
    amount: price,
    currency: "GHS",
    payment_options: "mobilemoneyghana",
  };

  const handleOnRedirect = (data) => {
    console.log(data);
  };

  const Image = { uri: `${image}` };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView key={id}>
        <ImageBackground source={Image} style={styles.image}>
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
          <View style={{ top: 10, }}>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", }}>
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
            style={{ color: "#fff", fontSize: 18, top: 20, color: "#383838" }}
          >
            {about}
          </Text>
        </View>

        {/* Buy ticket button */}
        <View style={{ padding: 25, alignItems: "center" }}>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate("TicketScreen", data);
            }}
            style={{
              justifyContent: "center",
              backgroundColor: "#fff",
              width: 310,
              height: 70,
              borderRadius: 60,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>Buy Ticket</Text>
          </TouchableOpacity> */}
          <PayWithFlutterwave
            onRedirect={(data) => handleOnRedirect(data)}
            options={options}
            customButton={(props) => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  width: 310,
                  height: 70,
                  borderRadius: 60,
                  alignItems: "center",
                }}
                onPress={props.onPress}
                isBusy={props.isInitializing}
                disabled={props.disabled}
              >
                <Text style={{}}>Buy Ticket</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetail;

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
