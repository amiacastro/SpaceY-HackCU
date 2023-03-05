import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';


import Home from './Home';
import Friends from './Friends'
import CalendarScreens from './CalendarScreens';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const AppScreens = () => {
    const color = COLORS.pastel_pink;
    const size = SIZES.font;
  return (
    <Tab.Navigator
        screenOptions={{ headerShown: false}}
        initialRouteName = "Home"
    >
      <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
                }}
        />
      <Tab.Screen name="CalendarScreens" component={CalendarScreens} options={{
                tabBarLabel: 'Calendar',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="calendar" color={color} size={size} />
                ),
                }}
        />
      <Tab.Screen name="Friends" component={Friends} options={{
                tabBarLabel: 'Friends',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="people" color={color} size={size} />
                ),
                }}
        />
      <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                ),
                }}
        />
    </Tab.Navigator>
  );
}

export default AppScreens;