import React from 'react'
import { SafeAreaView, TextInput, Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'
import { COLORS, SIZES, FONTS} from '../constants';

import ViewModelInstance from '../ViewModel';


const NewEvent = ({navigation}) => {
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
    {key:'2', value:'15', disabled:true},
    {key:'3', value:'30'},
    {key:'4', value:'45'},
  ]
  const ampms = [
    {key:'1', value:'AM'},
    {key:'2', value:'PM'}
  ]
  const friends = [
    {key:'1', value:'Amia'},
    {key:'2', value:'Fernando'},
    {key:'3', value:'Albert'},
    {key:'4', value:'Cailyn'},
  ]
  const onPress = () => {
    ViewModelInstance.newEvent(friend, hour, min, ampm);
    navigation.navigate("Calendar");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Schedule an Event</Text>
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
            onPress={() => onPress()}
            underlayColor="#DDDDDD">
            <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
      </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  title:{
    fontSize: SIZES.extraLarge,
    padding: "10%",
    color: COLORS.text,
    textAlign: 'center',
  },
  subtitle:{
    fontSize: SIZES.large,
    paddingBottom: "8%",
    paddingTop: "8%",
    paddingLeft: "20%",
    paddingRight: "20%",
    color: COLORS.gray,
    textAlign: 'center',
  },
  input: {
    height: "8%",
    width: "60%",
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
    marginTop:60,
    paddingTop:"3%",
    paddingBottom:"3%",
    width: "30%",
    backgroundColor: COLORS.pastel_darker_blue,
    borderRadius:8,
    borderWidth: 1,
    borderColor: COLORS.white
  },
  buttonCancel:{
    marginRight:20,
    marginLeft:20,
    marginTop:60,
    paddingTop:"3%",
    paddingBottom:"3%",
    width: "30%",
    backgroundColor: COLORS.notification,
    borderRadius:8,
    borderWidth: 1,
    borderColor: COLORS.white
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
  }
});

export default NewEvent