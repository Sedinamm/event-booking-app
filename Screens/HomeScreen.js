import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import Event from "./components/Event";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomeScreen({ navigation }) {
  const data = [
    {
      id: 1,
      Name: "Afrochella",
      rating: "Show",
      date: new Date(),
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 2,
      Name: "Chalewote",
      rating: "Show",
      date: new Date(),
      image: "https://nanawireko.files.wordpress.com/2012/05/chale.jpg",
    },
    {
      id: 3,
      Name: "Speak Art",
      rating: "Art Gallery",
      date: new Date(),
      image:
        "https://c0.wallpaperflare.com/preview/749/878/531/art-artwork-ceiling-exhibition.jpg",
    },
    {
      id: 4,
      Name: "VGMA",
      rating: "Award Show",
      date: new Date(),
      image:
        "https://i0.wp.com/www.ghlinks.com.gh/wp-content/uploads/2021/04/193103573_140350681484008_285641075850572495_n-scaled.jpg?fit=758%2C948&ssl=1",
    },
    {
      id: 5,
      Name: "Worship Night",
      rating: "Program",
      date: new Date(),
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 6,
      Name: "Lorem Ipsum",
      rating: "Art Show",
      date: new Date(),
      image:
        "https://i.pinimg.com/564x/ed/62/b0/ed62b05912738100bb3d69bfdeb45369.jpg",
    },
    {
      id: 7,
      Name: "Cevin Sephora",
      rating: "voted 11198498",
      date: new Date(),
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 8,
      Name: "Cevin Sephora",
      rating: "voted 11198498",
      date: new Date(),
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 9,
      Name: "Cevin Sephora",
      rating: "voted 11198498",
      date: new Date(),
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 10,
      Name: "Cevin Sephora",
      rating: "voted 11198498",
      date: new Date(),
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 11,
      Name: "Cevin Sephora",
      rating: "voted 11198498",
      date: new Date(),
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <View style={{ flex: 10, backgroundColor: "black" }}>
      {/* Header Section */}
      <View style={{ flex: 1, backgroundColor: "black", flexDirection: "row" }}>
        <Text
          style={{
            marginTop: 50,
            marginLeft: 10,
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Explore Events
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Image
            style={{
              borderRadius: 50,
              height: 50,
              width: 50,
              marginTop: 50,
              marginLeft: 130,
            }}
            source={require("../assets/Images/profile.jpg")}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.5, backgroundColor: "black" }}>
        <View style={{ marginTop: 55, width: 340 }}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            styles={{
              textInput: {
                backgroundColor: "grey",
                borderRadius: 14,
                bottom: 50,
                left: 15,
              },
            }}
          />
        </View>
      </View>
      <View style={{ flex: 5 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => {
            item.id;
          }}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Event item={item} />
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Bottom tab navigation */}
      <View
        style={{
          flex: 0.7,
          backgroundColor: "#101010",
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          flexDirection: "row",
          alignItems: "center",
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
}
