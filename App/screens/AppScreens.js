import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
<<<<<<< HEAD
import Friends from './Friends'
import Calendar from './Calendar';
=======
import Friends from './Friends';
import Profile from './Profile';
>>>>>>> 4bccd97a2ac87d850836f41e9f471c5d7bcf0690

const Tab = createBottomTabNavigator();

const AppScreens = () => {
  return (
    <Tab.Navigator
        screenOptions={{ headerShown: false}}
        initialRouteName = "Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default AppScreens;