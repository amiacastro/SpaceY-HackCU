import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react'

import Calendar from './Calendar';
import NewEvent from './NewEvent';

const Stack = createStackNavigator();


const CalendarScreens = () => {
  return (
        <NavigationContainer independent={true}>
              <Stack.Navigator
              screenOptions={{ headerShown: false}}
              initialRouteName = "Calendar"
              >
                    <Stack.Screen name="Calendar" component={Calendar}/>
                    <Stack.Screen name="NewEvent" component={NewEvent}/>
              </Stack.Navigator>
          </NavigationContainer>
  )
}

export default CalendarScreens