import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TouchableHighlight, TextInput, ImageBackground, Image, View } from 'react-native';
import { COLORS, SIZES, FONTS, assets } from '../constants';

import ViewModelInstance from '../ViewModel';

export default function Login({ navigation }) {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePass] = React.useState('');
  return (
    <ImageBackground source={assets.gradient} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>

        {/* <View style={{flex:1,alignItems:"center",justifyContent:"center"}}> */}
          <Text style={styles.title}>Welcome to Huddle!</Text>
          <Image
            style={styles.tinyLogo}
            source={assets.huddle}
          />
          <Text style={styles.subtitle}>Create an Account or Login Below</Text>

        {/* </View> */}
        <Text style={styles.normalText}>Username: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => onChangeUsername(val)}
          value={username}
        />
        <Text style={styles.normalText}>Password: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => onChangePass(val)}
          value={password}
        />
        <TouchableHighlight
          style={styles.loginButton}
          onPress={() => ViewModelInstance.login(username, password, navigation)}
          underlayColor="#DDDDDD">
          <Text style={styles.loginText}>Log In</Text>
        </TouchableHighlight>
        <Text style={styles.createAccount}>New to Huddle? Create An Account</Text>
        <StatusBar style="auto" />

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.pastel_darker_blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: SIZES.title,
    paddingBottom: "3%",
    color: COLORS.pastel_medium_blue,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: SIZES.extraLarge,
    paddingBottom: "8%",
    paddingLeft: "20%",
    paddingRight: "20%",
    paddingTop: "0%",
    color: COLORS.gray,
    textAlign: 'center'
  },
  normalText: {
    fontSize: SIZES.medium,
    color: COLORS.white
  },
  input: {
    height: "6%",
    width: "60%",
    margin: "5%",
    borderWidth: 1,
    padding: "5%",
    color: COLORS.white,
    borderColor: COLORS.white
  },
  loginButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
    paddingTop: "3%",
    paddingBottom: "3%",
    width: "40%",
    backgroundColor: COLORS.gray,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.white
  },
  loginText: {
    color: COLORS.white,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: SIZES.medium
  },
  createAccount: {
    paddingTop: "10%",
    paddingBottom: 5,
    color: COLORS.pastel_light_blue,
    textDecorationLine: 'underline',
    fontSize: SIZES.medium
  },
  tinyLogo: {
    width: 170,
    height: 170,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }
});
