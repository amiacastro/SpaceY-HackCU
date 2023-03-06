import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, ImageBackground } from 'react-native';
import { COLORS, assets } from '../constants';
import { HomeHeader, FocusedStatusBar, EventCard } from '../components';


import ViewModelInstance from '../ViewModel';

const Home = ({ navigation }) => {
    const [events, setEvents] = useState(ViewModelInstance.getUpcomingEvents());
    ViewModelInstance.updateHomeEvents = () => {
        setEvents(ViewModelInstance.getUpcomingEvents());
    };
  return (
    <ImageBackground source={assets.gradient2} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>
        <FocusedStatusBar background={COLORS.primary} />
        <HomeHeader name={ViewModelInstance.firstname} />
        <FlatList
          data={events}
          renderItem={({ item }) => <EventCard event={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.white,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }
});

export default Home