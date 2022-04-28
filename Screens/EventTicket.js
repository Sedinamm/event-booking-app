import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const EventTicket = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {navigate, goBack} = useNavigation()
  const { id, Name, rating, image, day, month, about, price } = route.params;
  return (
    <View style={styles.container}>
      <View style={{ height: 50, justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16,
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigate('Main')}>
              <MaterialIcons name="arrow-back-ios" color="#fff" size={20} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 18, color: "#fff" }}>Your ticket</Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}></View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            paddingHorizontal: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/Images/ticket2.png")}
            style={{
              height: 200,
              width: Dimensions.get("window").width,
              tintColor: "#5ac127",
              overflow: "hidden",
            }}
          />
          <View
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <View style={{ backgroundColor: "#76d245", padding: 30 }}>
                  <Text
                    style={{
                      fontSize: 40,
                      color: "#fff",
                      fontWeight: "bold",
                      letterSpacing: 3,
                    }}
                  >
                    {Name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#fff",
                      fontWeight: "bold",
                      letterSpacing: 3,
                      textAlign: "center",
                    }}
                  >
                    Ticket
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                      fontWeight: "bold",
                      letterSpacing: 3,
                      textAlign: "center",
                    }}
                  >
                    {day + "" + month}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
//     <View style={styles.container}>
//       <View style={styles.title}>
//         <Text style={{fontSize:30,color:'white',
// }}>Your Ticket</Text>
//       </View>
//       <View>

//       </View>
//     </View>

export default EventTicket;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: 30,
  },

  title: {
    flex: 0.2,
    backgroundColor: "black",
    justifyContent: "center",
    // alignItems:'center',
    paddingLeft: 30,
  },

  event: {
    flex: 0.2,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
    marginRight: 60,
  },

  eventdetails: {
    flex: 0.2,
    backgroundColor: "white",
    justifyContent: "space-around",
    marginLeft: 60,
    marginRight: 60,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
