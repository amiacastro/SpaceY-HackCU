import { useState } from 'react';
import { Button, View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

<<<<<<< HEAD
import { HomeHeader, FocusedStatusBar, Calendar} from '../components';
=======
import { HomeHeader, FocusedStatusBar } from '../components';
>>>>>>> 4bccd97a2ac87d850836f41e9f471c5d7bcf0690

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