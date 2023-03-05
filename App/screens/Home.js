import { useState } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet, ImageBackground } from 'react-native';
import { COLORS, assets} from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeHeader, FocusedStatusBar, Calendar } from '../components';


import ViewModelInstance from '../ViewModel';

const Home = ({ navigation }) => {
  return (
    <ImageBackground source={assets.gradient2} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>
        <FocusedStatusBar background={COLORS.primary} />
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0 }}>
            <HomeHeader name={ViewModelInstance.firstname} />
            <Text>This is the Home Page</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground >
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.white,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }
});

export default Home