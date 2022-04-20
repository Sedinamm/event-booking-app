import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from "react-native-vector-icons/Ionicons";

// import BottomSheet from 'reanimated-bottom-sheet';
// import Animated from "react-native-reanimated";

const EditProfileScreen = ({navigation}) => {

    //  renderInner = () => (
    //     <Text>Hello</Text>
    // );
    //  renderHeader = () => (
    //     <View style={styles.header}>
    //         <View style={styles.panelHeader}>
    //             <View style={styles.panelHandle}>

    //             </View>
    //         </View>
    //     </View>
    // );

    // bs= React.createRef();
    // fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
        {/* <BottomSheet
        ref={this.bs}
        snapPoints = {[330,0]}
        renderContent = {this.renderInner}
        renderHeader = {this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledContentGestureInteraction={true}
        /> */}
        <View style={{margin:20}}>
            <View style={{alignItems:"center"}}>
                <TouchableOpacity onPress={() => {}}>
                    <View style={{
                        height: 100,
                        width:100,
                        borderRadius:15,
                        justifyContent:"center",
                        alignItems:"center",
                        top:40
                    }}>
                        <ImageBackground
                        source={{uri: 'https://crokepark.ie/BlankSite/media/optimised/Home/EOTF-590.jpg?ext=.jpg'}}
                        style={{height:100, width:100}}
                        imageStyle={{borderRadius:15}}
                        >
                            <View style={{
                                flex:1,
                                justifyContent:"center",
                                alignItems:"center",
                            }}>
                                <Icon name="camera" size={35} color="#fff" style={{
                                    opacity:0.7,
                                    alignItems:"center",
                                    justifyContent:"center",
                                    borderWidth:1,
                                    borderColor:"#fff",
                                    borderRadius:10,
                                }}/>
                            </View>
                            </ImageBackground>
                    </View>
                </TouchableOpacity>

                {/* Text Area */}
                <Text style={{marginTop:10, fontSize:18, fontWeight:"bold" , top:40}}>Gabriel Sedinam</Text>
            </View>

            <View style={[styles.action, {top:40}]}>
                <FontAwesome name="user-o" size={20} />
                <TextInput
                placeholder="First Name"
                placeholderTextColor="#666666"
                autoCorrect={false}	
                style={styles.textInput}
                />
            </View>
            <View style={[styles.action, {top:40}]}>
                <FontAwesome name="user-o" size={20} />
                <TextInput
                placeholder="Last Name"
                placeholderTextColor="#666666"
                autoCorrect={false}	
                style={styles.textInput}
                />
            </View>
            <View style={[styles.action, {top:40}]}>
                <Feather name="phone" size={20} />
                <TextInput
                placeholder="Phone"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}	
                style={styles.textInput}
                />
            </View>
            <View style={[styles.action, {top:40}]}>
                <FontAwesome name="envelope-o" size={20} />
                <TextInput
                placeholder="Email"
                placeholderTextColor="#666666"
                keyboardType="email-address"
                autoCorrect={false}	
                style={styles.textInput}
                />
            </View>
            <View style={[styles.action, {top:40}]}>
                <FontAwesome name="globe" size={20} />
                <TextInput
                placeholder="Country"
                placeholderTextColor="#666666"
                autoCorrect={false}	
                style={styles.textInput}
                />
            </View>
            <View style={[styles.action, {top:40}]}>
                <Icon name="map-marker-outline" size={20} />
                <TextInput
                placeholder="City"
                placeholderTextColor="#666666"
                autoCorrect={false}	
                style={styles.textInput}
                />
            </View >
                <TouchableOpacity style={[styles.commandButton, {top:40}]} onPress={() => {}}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
        </View>
        {/* Bottom tab navigation */}
      <View
        style={{
          flex: 0.3,
          backgroundColor: "#101010",
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          flexDirection: "row",
          alignItems: "center",
          top: 220,
        }}
      >
        {/* Home Tab */}
        <TouchableOpacity>
          <Ionicons
            style={{ marginHorizontal: 50 }}
            name="home"
            size={30}
            color="white"
          />
        </TouchableOpacity>

        {/* Ticket Tab */}
        <TouchableOpacity onPress={() => navigation.navigate("TicketScreen")}>
          <Icon
            style={{ marginHorizontal: 50 }}
            name="credit-card"
            color="white"
            size={30}
          />
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Ionicons
            style={{ marginHorizontal: 50 }}
            name="person-outline"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
  });
