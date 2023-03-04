import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TouchableHighlight, TextInput } from 'react-native';

export default function Login() {
  const loginPress = () => console.log("Log in pressed");
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePass] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Huddle!</Text>
      <Text style={styles.subtitle}>Create an Account or Login Below</Text>
      <Text style={styles.normalText}>Username: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => onChangeUsername(val)}
        value={username}
      />
      <Text>Password: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => onChangePass(val)}
        value={password}
      />
      <TouchableHighlight
          style={styles.loginButton}
          onPress={loginPress}
          underlayColor="#DDDDDD">
          <Text style={styles.loginText}>Log In</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
      <Text>
        username: {username}
      </Text>
      <Text>
        password: {password}
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
  title:{
    fontSize: 30,
    padding: 20,
    color: 'teal'
  },
  subtitle:{
    fontSize: 20,
    paddingBottom: 15,
    color: 'gray'
  },
  normalText:{
    fontSize: 14,
    justifyContent: 'left',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  loginButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#808080',
    borderRadius:8,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  }
});
