import React from 'react'
import { SafeAreaView, TextInput, Text, StyleSheet, View, TouchableHighlight, ImageBackground } from 'react-native'
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'
import { COLORS, SIZES, FONTS, assets} from '../constants';

import ViewModelInstance from '../ViewModel';


const NewEvent = ({navigation}) => {
  const [title, onChangeTitle] = React.useState('');
  const [description, onChangeDesc] = React.useState('');
  const [friend, onChangeFriends] = React.useState('');
  const [hour, onChangeHour] = React.useState("");
  const [min, onChangeMin] = React.useState("");
  const [ampm, onChangeAM] = React.useState("");
  const hours = [
    {key:'1', value:'9'},
    {key:'2', value:'10', disabled:true},
    {key:'3', value:'11'},
    {key:'4', value:'12'},
  ]
  const mins = [
    {key:'1', value:'00'},
    {key:'2', value:'15'},
    {key:'3', value:'30'},
    {key:'4', value:'45'},
  ]
  const ampms = [
    {key:'1', value:'AM'},
    {key:'2', value:'PM'}
  ]
  const friends = ViewModelInstance.getCalendarFriends();
  const onPress = () => {
    ViewModelInstance.newEvent(friend, hour, min, ampm, title, description);
    ViewModelInstance.updateAllEvents();
    navigation.navigate("Calendar");
  };
  return (
    <ImageBackground source={assets.gradient7} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Schedule an Event</Text>
        <Text style={styles.subtitle}>Title: </Text>
        <TextInput
            style={styles.inputTitle}
            onChangeText={(val) => onChangeTitle(val)}
            value={title}
          />
        <Text style={styles.subtitle}>Description: </Text>
        <TextInput
            multiline
            style={styles.inputDesc}
            onChangeText={(val) => onChangeDesc(val)}
            value={description}
          />
        <Text style={styles.subtitle}>Friends: </Text>
        <MultipleSelectList style={styles.dropdown}
            setSelected={(val) => onChangeFriends(val)} 
            placeholder = "Friends"
            data={friends} 
            dropdownTextStyles = {{color: COLORS.gray}}
            inputStyles = {{color: COLORS.gray}}
            save="value"
            menuPlacement="auto"
            menuPosition="fixed"
          />
        <Text style={styles.subtitle}>Time: </Text>
        <View style={styles.time}>
          <SelectList style={styles.dropdown}
            setSelected={(val) => onChangeHour(val)} 
            placeholder = "Hour"
            data={hours} 
            dropdownTextStyles = {{color: COLORS.gray}}
            inputStyles = {{color: COLORS.gray}}
            save="value"
            menuPlacement="auto"
            menuPosition="fixed"
          />
          <SelectList 
            setSelected={(val) => onChangeMin(val)} 
            placeholder = "Minute"
            dropdownTextStyles = {{color: COLORS.gray}}
            inputStyles = {{color: COLORS.gray}}
            data={mins} 
            save="value"
            menuPlacement="auto"
            menuPosition="fixed"
          />
          <SelectList 
            setSelected={(val) => onChangeAM(val)} 
            placeholder = "AM/PM"
            dropdownTextStyles = {{color: COLORS.gray}}
            inputStyles = {{color: COLORS.gray}}
            data={ampms} 
            save="value"
            menuPlacement="auto"
            menuPosition="fixed"
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableHighlight
              style={styles.buttonCreate}
              onPress={() => onPress()}
              underlayColor="#DDDDDD">
              <Text style={styles.buttonText}>Create</Text>
          </TouchableHighlight>
          <TouchableHighlight
              style={styles.buttonCancel}
              onPress={() => navigation.navigate("Calendar")}
              underlayColor="#DDDDDD">
              <Text style={styles.buttonText}>Cancel</Text>
          </TouchableHighlight>
        </View>

      </SafeAreaView>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  title:{
    fontSize: SIZES.extraLarge,
    paddingTop: "10%",
    color: COLORS.text,
    textAlign: 'center',
  },
  subtitle:{
    fontSize: SIZES.large,
    paddingBottom: "1%",
    paddingTop: "3%",
    paddingLeft: "20%",
    paddingRight: "20%",
    color: COLORS.gray,
    textAlign: 'center',
  },
  inputTitle: {
    height: "6%",
    width: "80%",
    margin: "5%",
    borderWidth: 1,
    padding: "2%",
    color: COLORS.gray,
    borderColor: COLORS.gray
  },
  inputDesc: {
    height: "10%",
    width: "80%",
    margin: "5%",
    borderWidth: 1,
    padding: "2%",
    color: COLORS.gray,
    borderColor: COLORS.gray
  },
  time:{
    flexDirection: "row",
  },
  dropdown:{
    color: COLORS.gray,
  },
  buttonCreate:{
    marginRight:20,
    marginLeft:20,
    marginTop:45,
    paddingTop:"3%",
    paddingBottom:"3%",
    width: "30%",
    backgroundColor: COLORS.pastel_darker_blue,
    borderRadius:8,
    borderWidth: 1,
    borderColor: COLORS.gray
  },
  buttonCancel:{
    marginRight:20,
    marginLeft:20,
    marginTop:45,
    paddingTop:"3%",
    paddingBottom:"3%",
    width: "30%",
    backgroundColor: COLORS.notification,
    borderRadius:8,
    borderWidth: 1,
    borderColor: COLORS.gray
  },
  buttonText:{
    color: COLORS.white,
    textAlign:'center',
    paddingLeft : 5,
    paddingRight : 5,
    fontSize: SIZES.medium
  },
  buttonView:{
    flexDirection: "row",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }
});

export default NewEvent