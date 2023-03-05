import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react'

import Calendar from './Calendar';
import NewEvent from './NewEvent';

const Stack = createStackNavigator();


const CalenderScreens = ({Navigator}) => {
  return (
        <NavigationContainer theme={theme}>
              <Stack.Navigator 
              screenOptions={{ headerShown: false}}
              initialRouteName = "Calender"
              >
                <Stack.Screen name ="Calender" component={Calendar}/>
                <Stack.Screen name ="NewEvent" component={NewEvent}/>
              </Stack.Navigator>
          </NavigationContainer>
  )
}

export default CalenderScreens