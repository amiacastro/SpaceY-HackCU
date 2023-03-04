import { View, Text, Pressable, FlatList } from 'react-native'
import { FriendData } from '../constants'
import React from 'react'

const Friend = (props) => {
  return (
    <Pressable>
      <FlatList 
        data={FriendData}
        renderItem={({item}) => <Friend name={item.name} />}
      />
    </Pressable>
  )
}

export default Friend