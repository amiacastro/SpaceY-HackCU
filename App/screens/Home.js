import { useState } from 'react';
import { Button, View, SafeAreaView, FlatList, Text } from 'react-native';
import { COLORS } from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeHeader, FocusedStatusBar } from '../components';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <View style={{ flex: 1}}>
        <View style={{zIndex: 0}}>
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

export default Home