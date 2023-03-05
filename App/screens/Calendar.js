import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { COLORS, SIZES, FONTS} from '../constants';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Calendar = () => {
  const [items, setItems] = useState({});

  //TODO: read events and labels from a file instead
  let dayEvents1 = [];
  let dayEvents2 = [];
  let dayEvents3 = [];
  dayEvents1 = ["Event 1", "Event 2"];
  dayEvents3 = ["Event 3", "Event 4"];
  const events = [dayEvents1, dayEvents2, dayEvents3];
  let dayLabels1 = [];
  let dayLabels2 = [];
  let dayLabels3 = [];
  dayLabels1 = ["A", "B"];
  dayLabels3 = ["C", "D"];
  const labels = [dayLabels1, dayLabels2, dayLabels3];

  const loadItems = (day) => {
    setTimeout(() => {
      let date = 0;
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = []; 
          if(events[date]!=null){
            const numItems = events[date].length;
            for (let j = 0; j < numItems; j++) {
              items[strTime].push({
                name: events[date][j],
                label: labels[date][j],
                height: Math.max(50, Math.floor(Math.random() * 150)),
              });
            }
        }
        }
        date = date + 1;
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
              <Avatar.Text label={item.label}/>
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
    <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.createEventContainer}>
            <TouchableHighlight
                style={styles.createEventButton}
                onPress={() => console.log("creating event")}
                underlayColor="#DDDDDD">
                <Text style={styles.createEventText}>Create Event</Text>
            </TouchableHighlight>
      </SafeAreaView>
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
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  emptyDateContainer: {
    height: 80,
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyDateText: {
    fontSize: SIZES.large,
    color: COLORS.gray,
  },
  createEventContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  createEventText:{
    color: COLORS.white,
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontSize: SIZES.medium
  },
  createEventButton:{
    marginRight:40,
    marginLeft:40,
    marginBottom:7,
    paddingTop:"3%",
    paddingBottom:"3%",
    width: "40%",
    backgroundColor: COLORS.gray,
    borderRadius:8,
    borderWidth: 1,
    borderColor: COLORS.white
  },
});
export default Calendar;