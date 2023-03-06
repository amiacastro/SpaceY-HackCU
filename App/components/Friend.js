import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Alert } from 'react-native';

import { COLORS, SIZES } from '../constants';

import ViewModelInstance from '../ViewModel';

const Friend = ({friend}) => {
    let requestButton = null;
    if (ViewModelInstance.otherUsers.includes(friend)) {
        requestButton = <View style={{flex: 1, flexDirection: "row", gap: 15, justifyContent: 'flex-end', alignItems: "center", fontSize: SIZES.medium}}>
                            <Pressable onPress={() => {Alert.alert("Yay!","Friend request sent.")}}>
                                <Text style={{color: "blue" }}>Add</Text>
                            </Pressable>
                        </View>
    }

    return (
        <Pressable>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                <Image source={friend.image} style={{width: 50, height: 50, borderRadius: 25}} />
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{friend.firstname} {friend.lastname}</Text>
                    <Text style={{fontSize: 16, color: 'gray'}}>@{friend.username}</Text>
                </View>
                {requestButton}
            </View>
        </Pressable>
  )
}

export default Friend