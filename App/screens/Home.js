import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants';
import { HomeHeader, FocusedStatusBar, EventCard} from '../components';


import ViewModelInstance from '../ViewModel';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FocusedStatusBar background={COLORS.primary} />
            <HomeHeader name={ViewModelInstance.firstname}/>
            <FlatList
                data={ViewModelInstance.getUpcomingEvents()}
                renderItem={({item}) => <EventCard event={item}/>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
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