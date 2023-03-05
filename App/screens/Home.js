import { useState } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeHeader, FocusedStatusBar } from '../components';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1}}>
        <View style={{zIndex: 0}}>
        <HomeHeader/>
          <Text>This is the Home Page</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.pastel_medium_blue, 
    }
});

export default Home