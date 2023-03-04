import { View, Text, StatusBar } from 'react-native'
import {useIsFocused} from '@react-navigation/core'
import React from 'react'

const FocusedStatusBar = () => {

    const isFocused = useIsFocused(props);
    return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default FocusedStatusBar