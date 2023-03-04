import { useState } from 'react';
import { Button, View, SafeAreaView, FlatList, Text } from 'react-native';
import { COLORS } from '../constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeHeader, FocusedStatusBar } from '../componenets';

const Home = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1}}>
        <View style={{zIndex: 0}}>
          <Text>TEst</Text>
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