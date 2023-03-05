import React from "react";
import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Modal } from "react-native-paper";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const ProfileHeader = ({ username }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.greeting} >
                {username}
            </Text>
            <Modal
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
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.pastel_darker_blue,
        padding: SIZES.font,
        flexDirection: "row",
    },
});

export default ProfileHeader;