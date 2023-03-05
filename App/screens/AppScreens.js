import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Friends from './Friends'
import CalendarScreens from './CalendarScreens';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const AppScreens = () => {
  return (
    <Tab.Navigator
        screenOptions={{ headerShown: false}}
        initialRouteName = "Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CalendarScreens" component={CalendarScreens} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default AppScreens;