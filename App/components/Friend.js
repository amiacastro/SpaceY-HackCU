import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const Friend = ({friend, requestable}) => {
    let requestButton = null;
    if (requestable) {
        requestButton = <View style={{flex: 1, flexDirection: "row", gap: 15, justifyContent: 'flex-end', alignItems: "center", fontSize: SIZES.medium}}>
                            <Pressable onPress={() => handleRequest(1,person)}>
                                <Text style={{color: COLORS.pastel_darker_blue }}>Accept</Text>
                            </Pressable>
                        </View>
    }
    return (
        <Pressable onPress={() => props.navigation.navigate('Friend', {friend: friend})}>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                <Image source={friend.image} style={{width: 50, height: 50, borderRadius: 25}} />
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{friend.firstname} {friend.lastname}</Text>
                    <Text style={{fontSize: 16, color: 'gray'}}>@{friend.username}</Text>
                </View>
            </View>
        </Pressable>
  )
}

export default Friend