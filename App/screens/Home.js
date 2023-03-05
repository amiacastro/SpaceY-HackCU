import { useState } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeHeader, FocusedStatusBar } from '../components';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar background={COLORS.black} />

      <View style={{ flex: 1}}>
        <View style={{zIndex: 0}}>
        <HomeHeader/>
          <Text>This is the Home Page</Text>
          <Button
            title="Go to Friends"
            onPress={() => navigation.navigate('Friends')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black, 
    }
});

export default Home