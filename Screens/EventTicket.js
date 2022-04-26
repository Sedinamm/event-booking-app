import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React, { useState } from "react";

const EventTicket = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.title}> 
        <Text style={{fontSize:30,color:'white',
}}>Your Ticket</Text>
      </View>
      <View style={styles.event}>
        <Text style={{fontSize:25,fontWeight:'bold'}}>AFROCHELLA</Text>
      </View>
      <View style={styles.eventdetails}>
        <Text style={{paddingLeft:20,fontSize:20, fontWeight:'bold'}}>100GHC</Text>
        <Text style={{fontSize:20, textAlign:'center', fontWeight:'bold'}}> TICKET ID - N257358Y0</Text>
      </View>
    </View>
  );
};

export default EventTicket;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
  },

  title:{
    flex:0.2,
    backgroundColor:'black',
    justifyContent:'center',
    // alignItems:'center',
    
    paddingLeft:30,

  },

  event:{
    flex:0.2,
    backgroundColor:'green',
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:60,
    marginRight:60,
  },

  eventdetails:{
    flex:0.2,
    backgroundColor:'white',
    justifyContent:'space-around',
    marginLeft:60,
    marginRight:60,
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
