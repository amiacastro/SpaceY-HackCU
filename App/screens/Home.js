import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { COLORS } from '../constants';

import { HomeHeader, FocusedStatusBar } from '../componenets';

const Home = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1}}>
        <View style={{zIndex: 0}}>
          <Text>TEst</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home