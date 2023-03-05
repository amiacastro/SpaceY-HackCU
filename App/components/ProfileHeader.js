import React from "react";
import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Modal } from "react-native-paper";
import { FocusedStatusBar } from "../components";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import ViewModelInstance from "../ViewModel";

const ProfileHeader = ({ username }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <FocusedStatusBar />
            <Text style={styles.username} >
                {username}
            </Text>
            {/* <Pressable
                onPress={() => ViewModelInstance.setModal(true)}>
                <Text>Openupbitch</Text>
            </Pressable> */}
            {/* <Modal
                animationType="type"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
            }}>
                <View>
                    <Text>Settings</Text>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Close</Text>
                    </Pressable>
                </View>
            </Modal>
            <Pressable
                onPress={() => setModalVisible(true)}>
                <Text>Open</Text>
            </Pressable> */}
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
        marginTop: 10
    }
});

export default ProfileHeader;