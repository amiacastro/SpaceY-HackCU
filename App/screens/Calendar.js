import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { COLORS, SIZES, FONTS} from '../constants';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Calendar = () => {
  const [items, setItems] = useState({});
  const events = []
  for (let i = 0; i < 5; i++) {
    //TODO: read from file instead
    events[i] = "Event number " + i
  }
  const labels = ["J"]
  // for (let i=0; i<5; i++){
  //   labels[i] = 'A'+1
  // }

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = events.length;
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: events[j],
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <SafeAreaView
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J"/>
            </SafeAreaView>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <SafeAreaView style={styles.emptyDateContainer}>
        <Text style={styles.emptyDate}>You have nothing scheduled!</Text>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2023-03-04'}
        renderItem={renderItem}
        showOnlySelectedDayItems={true}
        showClosingKnob={true}
        theme={{
          agendaKnobColor: 'gray',
          selectedDayBackgroundColor: '#00adf5',
        }}
        renderEmptyDate={renderEmptyDate}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  emptyDateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyDateText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    textAlign:'center',
  },
});
export default Calendar;