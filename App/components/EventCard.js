import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Alert } from 'react-native';

import { COLORS, SIZES } from '../constants';

import ViewModelInstance from '../ViewModel';

const EventCard = ({event}) => {
    if (event === null) {
        return <View></View>
    }
    return (
        <View style={{paddingLeft:15, paddingRight:15}}>
            <View style={{borderRadius:20,flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: SIZES.padding, marginVertical: SIZES.base, backgroundColor: COLORS.pastel_pink}}>
                <View style={{padding:10,flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={event.image} style={{width: 50, height: 50, borderRadius: 25}}/>
                    <View style={{padding:10,marginLeft: SIZES.radius}}>
                        <Text style={{color: COLORS.black, ...SIZES.title, fontWeight: "bold"}}>{event.title}</Text>
                        <Text style={{color: COLORS.black, ...SIZES.body4}}>Date: {event.date}</Text>
                        <Text style={{color: COLORS.black, ...SIZES.body4}}>{event.location}</Text>
                        <Text style={{color: COLORS.black, ...SIZES.body4}}>{event.description}</Text>
                    </View>
                </View>
            </View>
        </View>
  )
}

export default EventCard