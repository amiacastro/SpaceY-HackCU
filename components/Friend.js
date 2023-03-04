import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Friend = (props) => {
  return (
    <Pressable>
      <Text>{props.name}</Text>
    </Pressable>
  )
}

export default Friend