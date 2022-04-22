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
      price: 10,
      Name: "Afrochella",
      rating: "Show",
      month: "Oct",
      day: "1",
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      about:
        "Eventbrite is an American Eventbrite is an American event management and ticketing website. The service allows users to browse, create, and promote local events. The service charges a fee to event organizers in exchange for online ticketing services, unless the event is freeIpsum is simply dummy text of the printing and typesetting industry ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
    },
    {
      id: 2,
      price: 2005,
      Name: "Chalewote",
      rating: "Show",
      month: "Nov",
      day: "4",
      image: "https://nanawireko.files.wordpress.com/2012/05/chale.jpg",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 3,
      price: 150,
      Name: "Speak Art",
      rating: "Art Gallery",
      month: "Apr",
      day: "2",
      image:
        "https://c0.wallpaperflare.com/preview/749/878/531/art-artwork-ceiling-exhibition.jpg",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      price: 30,
      Name: "VGMA",
      rating: "Award Show",
      month: "Jan",
      day: "1",
      image:
        "https://i0.wp.com/www.ghlinks.com.gh/wp-content/uploads/2021/04/193103573_140350681484008_285641075850572495_n-scaled.jpg?fit=758%2C948&ssl=1",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 5,
      price: 3000,
      Name: "Worship Night",
      rating: "Program",
      month: "Feb",
      day: "4",
      // date: "2022-05-09",
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 6,
      price: 100,
      Name: "Lorem Ipsum",
      rating: "Art Show",
      month: "Jan",
      day: "6",
      date: "2020-01-01",
      image:
        "https://i.pinimg.com/564x/ed/62/b0/ed62b05912738100bb3d69bfdeb45369.jpg",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 7,
      price: 200,
      Name: "Cevin Sephora",
      rating: "voted 11198498",
      month: "Oct",
      day: "27",
      // date: "2020-01-01",
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 8,
      price: 50,
      Name: "Cevin Sephora",
      rating: "voted 11198498",
      month: "Mar",
      day: "10",
      // date: "2020-01-01",
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 9,
      price: 1000,
      Name: "Cevin Sephora",
      rating: "voted 11198498",
      month: "May",
      day: "1",
      // date: "2020-01-01",
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 10,
      price: 2300,
      Name: "Cevin Sephora",
      rating: "voted 11198498",
      month: "Jul",
      day: "3",
      // date: "2020-01-01",
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 11,
      price: 205,
      Name: "Cevin Sephora",
      rating: "voted 11198498",
      month: "Aug",
      day: "7",
      // date: "2020-01-01",
      image:
        "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <View style={{ flex: 10, backgroundColor: "black" }}>
      {/* Header Section */}
      <View style={{ flex: 1, backgroundColor: "black", flexDirection: "row" }}>
        <Text
          style={{
            marginTop: 50,
            marginLeft: 15,
            fontSize: 33,
            fontWeight: "bold",
            color: "white",
            top: 9,
          }}
        >
          Explore Events
        </Text>

        {/* Profile picture
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Image
            style={{
              borderRadius: 50,
              height: 50,
              width: 50,
              marginTop: 50,
              marginLeft: 130,
              right: 70,
            }}
            source={require("../assets/Images/profile.jpg")}
          />
        </TouchableOpacity> */}
      </View>

      {/* Search Bar */}
      <View style={{ flex: 0.5, backgroundColor: "black" }}>
        <View style={{ marginTop: 55, width: 345 }}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            color="#383838"
            styles={{
              textInput: {
                backgroundColor: "#292929",
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
          keyExtractor={(item, index) => {
            `event-${item.id + index}`;
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Event", { item })}
            >
              <Event item={item} />
            </TouchableOpacity>
          )}
        />
      </View>     
    </View>
  );
}
