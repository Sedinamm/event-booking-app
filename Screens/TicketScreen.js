import React from "react";
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

// import { borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const ProfileScreen = ({ navigation,  }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>History</Text>
        <View style={{flex:0.3, justifyContent:"center",alignItems:"center",backgroundColor:"green"}}>
           <Text>Afrochella</Text>
            <View>
              <Text>Ticket Id:</Text>
              <Text>ajfoaifoiawoieeee8989af8898998</Text>
            </View>
           <Text>amount</Text>
        </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"yellow",
    justifyContent:"center",
    alignItems:"center"
  },
});
