import React, { useEffect, useState } from "react";
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
import { FlatList } from "react-native-gesture-handler";
import TicketHistory from "./TicketHistory";
import app, { fireDB } from "../firebase/config";

// import { borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fireDB
      .collection("users")
      .doc(app.auth().currentUser.uid)
      .onSnapshot(
        (querySnap) => {
          setUser(querySnap.data());
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  // const Data = [
  //   {
  //     id: 1,
  //     Event: "AfroChella",
  //     Amount: "100Ghc",
  //   },
  //   {
  //     id: 2,
  //     Event: "Speak Art",
  //     Amount: "150Ghc",
  //   },
  //   {
  //     id: 3,
  //     Event: "VGMA",
  //     Amount: "100Ghc",
  //   },
  //   {
  //     id: 4,
  //     Event: "Worship Night",
  //     Amount: "50Ghc",
  //   },
  //   // {
  //   // id:5,
  //   // Event:"Art Show",
  //   //  Amount:"100Ghc"
  //   // },
  //   // {
  //   // id:6,
  //   // Event:"The Live Experience",
  //   //  Amount:"100Ghc"
  //   // },
  //   // {
  //   // id:7,
  //   // Event:"Hung Over",
  //   //  Amount:"100Ghc"
  //   // },
  //   // {
  //   // id:8,
  //   // Event:"Fire Crackers",
  //   //  Amount:"100Ghc"
  //   // },
  //   // {
  //   // id:9,
  //   // Event:"Sexes Beach Festiival",
  //   //  Amount:"100Ghc"
  //   // },
  //   // {
  //   // id:10,
  //   // Event:"We Outside",
  //   //  Amount:"100Ghc"
  //   // },
  // ];

  console.log(user);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={{ color: "white", fontSize: 25, paddingLeft: 20 }}>
          HISTORY
        </Text>
      </View>

      <View style={{ flex: 0.7 }}>
        {user?.tickets.length >= 1 ? (
          <FlatList
            data={user?.tickets}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TicketHistory item={item} />}
          />
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text style={{ fontSize: 20, color: "#fff" }}>No history</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // justifyContent:"center",
    // alignItems:"center"
  },
  title: {
    flex: 0.2,
    backgroundColor: "black",
    justifyContent: "center",
  },
});
