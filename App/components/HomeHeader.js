import { View, Text, StatusBar } from 'react-native'
import {useIsFocused} from '@react-navigation/core'
import React from 'react'

const HomeHeader = () => {

    const isFocused = useIsFocused(props);
    return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default HomeHeader