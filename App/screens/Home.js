import { useState } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeHeader, FocusedStatusBar, Calendar} from '../components';

import ViewModelInstance from '../ViewModel';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1}}>
        <View style={{zIndex: 0}}>
        <HomeHeader name={ViewModelInstance.name}/>
        <Text>This is the Home Page</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white, 
    }
});

export default Home