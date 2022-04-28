import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TicketHistory(props) {

const {Event,Amount} = props.item
  return (
    <TouchableOpacity onPress={() => {} }>
      <View style={styles.container}> 
      <Text  style={styles.event}>{Event}</Text>
      <Text style={styles.price}>{Amount}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:0.8,
        backgroundColor:"white",
        padding:20,
        width:350,
        alignItems:'center',
        marginTop:25,
        alignSelf:"center"

    },
    event:{
        alignSelf:'flex-start',
        fontWeight:"bold"
    },
    price:{

        alignSelf:'flex-end',
    },


})
