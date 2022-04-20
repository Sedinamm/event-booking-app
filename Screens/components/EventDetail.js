import { StyleSheet, Text, View ,ScrollView,ImageBackground,SafeAreaView} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';


const EventDetail = ({route}) => {
    const {item: {id,Name,rating ,image,day,month,about}} = route.params;

    const Image = { uri: `${image}` };
  return (
      <SafeAreaView style={styles.container}>
              <ScrollView key={id}>
    <ImageBackground  source={Image} style={styles.image} >
     
      <View style={{ flex:1,justifyContent:"flex-end",padding:20,position:"absolute",bottom:0}}>
          <Text  style={{color:"#fff",fontSize:18,fontWeight:"bold"}}>{rating}</Text>
          <Text  style={{color:"#fff",fontSize:30,fontWeight:"bold"}}>{Name}</Text>
      </View>
      </ImageBackground>
     <View style={{flex:1,justifyContent:"space-around", padding:10,}}>
         {/* Date/ Calender/ Day */}
         <View style={{top:10}}>  
              <Text style={{color:"#fff",fontSize:20, fontWeight:"bold",}}>{day} {month}, 2022 - 22 {month} 2022</Text>
              <Text style={{color:"#fff",fontSize:15, fontWeight:"bold",color:"#292929"}}>Weekends</Text>
        </View>
         <Text style={{color:"#fff",fontSize:20, fontWeight:"bold", top:15}}>About</Text>
         <Text style={{color:"#fff",fontSize:18, top:20, color:"#292929"}}>{about}</Text>
     </View>

     {/* Buy ticket button */}
    <View style={{padding:25,alignItems:"center"}}>
    <TouchableOpacity style={{justifyContent:"center",backgroundColor:"#fff",width:310,height:70,borderRadius:60,alignItems:"center"}}>
         <Text style={{fontSize:19, fontWeight:"bold"}}>Buy Ticket</Text>
     </TouchableOpacity>
    </View>
    </ScrollView>
      </SafeAreaView>
   
  )
}

export default EventDetail

const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:"#000000",
    padding:20,
   }, 	
    image: {
        flex: 1,
        position:"relative",
        justifyContent: 'center',
        width:380,
        height:400,
        justifyContent:"center",
        opacity:0.8
      },

})