import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import TicketScreen from './TicketScreen'
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const Main = () => {
    return <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="TicketScreen" component={TicketScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
}

export default Main