import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'

const Event = ({item}) => {

     const {Name:nameed,rating:rated,date:dated,image:img} = item;
     
    const image = { uri: `${img}` };

    const date = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[dated.getMonth()];
  return (
    <View style={styles.container}>
      <ImageBackground  source={image} style={styles.image} borderRadius={25}>
      <View style={{ flex:0.5,justifyContent:"center",alignItems:"flex-end",padding:20,borderRadius:10,backgroundColor:"#fff",position:"absolute",width:72,height:75,top:10,right:10}}>
          <Text style={{color:"#000",fontSize:20,right:5,fontWeight:"bold"}}>{dated.getDate()}</Text>
          <Text style={{color:"#000",fontSize:20}}>{month}</Text>
      </View>
      <View style={{ flex:0.5,justifyContent:"flex-end",padding:20,position:"absolute",bottom:0}}>
          <Text  style={{color:"#fff",fontSize:18,fontWeight:"bold"}}>{rated}</Text>
          <Text  style={{color:"#fff",fontSize:30,fontWeight:"bold"}}>{nameed}</Text>
      </View>
      </ImageBackground>
    </View>
  )
}

export default Event

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        padding: 10,
},
image: {
    flex: 1,
    position:"relative",
    justifyContent: 'center',
    width:350,
    height:350,
    borderRadius:25,
    justifyContent:"center",
    opacity:0.8
  },
})
