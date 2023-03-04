import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Home from './screens/Home';
import Friends from './screens/Friends';

const Stack = createStackNavigator();

const theme = {
  ... DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  const [loaded] = useFonts({

  })

  return (
      <NavigationContainer theme={theme}>
          <Stack.Navigator screenOptions={{ headerShown: false}}
          initialRouteName = "Home">
            <Stack.Screen name ="Home" component={Home}/>
            <Stack.Screen name ="Friends" component={Friends}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

export default App;
