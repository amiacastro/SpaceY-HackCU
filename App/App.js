import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, DefailtTheme} from '@react-navigation/native'

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
