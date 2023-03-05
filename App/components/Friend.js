import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const Friend = (props) => {
  const friend = props.friend
  return (
    <Pressable>
      <Image source={friend.image} />
      <View>
        <Text>{friend.name}</Text>
        <Text>{friend.user}</Text>
      </View>
    </Pressable>
  )
}

export default Friend