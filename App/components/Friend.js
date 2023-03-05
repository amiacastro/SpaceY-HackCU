import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const Friend = (props) => {
  const friend = props.friend
  return (
    <Pressable onPress={() => props.navigation.navigate('Friend', {friend: friend})}>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Image source={friend.image} style={{width: 50, height: 50, borderRadius: 25}} />
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{friend.name}</Text>
          <Text style={{fontSize: 16, color: 'gray'}}>{friend.user}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default Friend