import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, TextInput } from 'react-native';

export default function Login() {
  const loginPress = () => console.log("Log in pressed");
  const [username, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Huddle!</Text>
      <Text>Create an Account or Login Below</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => onChangeText(val)}
        value={username}
      />
      <Button
        title="Log In"
        onPress={loginPress}
      />
      <StatusBar style="auto" />
      <Text>
        username: {username}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
