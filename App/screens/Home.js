import { useState } from 'react';
import { Button, View, SafeAreaView, FlatList, Text } from 'react-native';
import { COLORS } from '../constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeHeader, FocusedStatusBar } from '../componenets';

const Home = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1}}>
        <View style={{zIndex: 0}}>
          <Text>TEst</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Friends')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home