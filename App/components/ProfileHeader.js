import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Modal } from "react-native-paper";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const ProfileHeader = ({ username }) => {
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

            </Modal>
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