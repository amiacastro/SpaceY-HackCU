import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Friends from './screens/Friends';
import { NavigationBar } from './components';

const Tab = createBottomTabNavigator();

const theme = {
  ... DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  return (
    <NavigationContainer theme={theme}>
          <Tab.Navigator 
          screenOptions={{ headerShown: false}}
          initialRouteName = "Home"
          >
            <Tab.Screen name ="Home" component={Home}/>
            <Tab.Screen name ="Friends" component={Friends}/>
          </Tab.Navigator>
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',

//   },
// });

export default App;
