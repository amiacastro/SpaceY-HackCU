import React from "react";
import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Modal } from "react-native-paper";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import ViewModelInstance from "../ViewModel";

const ProfileHeader = ({ username }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.username} >
                {username}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.pastel_darker_blue,
        padding: SIZES.font,
        flexDirection: "row",
        // marginTop: 30,
        height: 60,
    },
    username: {
        marginTop: 10,
        fontSize: 18,
        color: COLORS.black,
    }
});

export default ProfileHeader;