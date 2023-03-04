import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { COLORS } from '../constants';

import { HomeHeader, FocusedStatusBar } from '../componenets';

const Home = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <FocusedStatusBar background={COLORS.primary} />
 
    </SafeAreaView>
  )
}

export default Home