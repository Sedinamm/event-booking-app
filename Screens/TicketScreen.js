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
      <View style={{ flex: 10 }}>
        <View style={{ flex: 9 }}>
          
        
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
