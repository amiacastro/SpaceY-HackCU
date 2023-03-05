import { View, Text, Pressable, Image, Button } from 'react-native'
import { SIZES, COLORS } from "../constants";

import ViewModelInstance from '../ViewModel';

const Request = ({person, handleRequest}) => {
  return (
    <Pressable onPress={() => props.navigation.navigate('Friend', {friend: person})}>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Image source={person.image} style={{width: 50, height: 50, borderRadius: 25}} />
            <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{person.firstname} {person.lastname}</Text>
                <Text style={{fontSize: 16, color: 'gray'}}>@{person.username}</Text>
            </View>
            <View style={{flex: 1, flexDirection: "row", gap: 15, justifyContent: 'flex-end', alignItems: "center", fontSize: SIZES.medium}}>
                <Pressable onPress={() => handleRequest(1,person)}>
                    <Text style={{color: COLORS.pastel_darker_blue }}>Accept</Text>
                </Pressable>
                <Pressable onPress={() => handleRequest(0,person)}>
                    <Text style={{color: COLORS.pastel_darker_pink}}>Decline</Text>
                </Pressable>
            </View>
        </View>
    </Pressable>
  )
}

export default Request