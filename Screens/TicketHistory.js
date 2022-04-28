import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function TicketHistory({ item }) {
  const {navigate, goBack} = useNavigation();
  const { Name, price } = item;
  return (
    <TouchableOpacity onPress={() => navigate('viewTicket', item)}>
      <View style={styles.container}>
        <Text style={styles.event}>{Name}</Text>
        <Text style={styles.price}>Ghc {price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    width: 350,
    justifyContent: "space-between",
    marginTop: 25,
    flexDirection: "row",	
    borderRadius: 10,
    alignSelf: "center",	
  },
  event: {
    fontWeight: "bold",
    fontSize: 18
  },
  price: {
    fontWeight: "bold",
    fontSize: 18
  },
});
