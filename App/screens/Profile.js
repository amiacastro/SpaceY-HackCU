import { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, Alert, Modal, Pressable } from 'react-native';
import { ProfileHeader } from '../components';
import ViewModelInstance from '../ViewModel';

const Profile = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView>
            {/* Header */}
            <ProfileHeader username={ViewModelInstance.user.username} />
            {/* Profile picture */}
            <View style={styles.imageStyling}>
                <Image source={ViewModelInstance.user.image} style={{ width: 300, height: 300, borderRadius: 25, marginTop: 5 }} />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                // visible={ViewModelInstance.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                    // ViewModelInstance.setModal(false);
                    // ViewModelInstance.setModal(!ViewModelInstance.modalVisible);
                    // ViewModelInstance.modalVisible = !ViewModelInstance.modalVisible;
                }}>
                <View>
                    <Text>Settings</Text>
                    <Pressable
                        // onPress={() => ViewModelInstance.setModal(false)}>
                        // onPress={() => ViewModelInstance.setModal(!ViewModelInstance.modalVisible)}>
                        // onPress={() => ViewModelInstance.modalVisible = !ViewModelInstance.modalVisible}>                        
                        onPress={() => setModalVisible(!modalVisible)}>

                        <Text>Close</Text>
                    </Pressable>
                </View>
            </Modal>
            <Pressable

                // onPress={() => ViewModelInstance.setModal(true)}>  
                // onPress={() => ViewModelInstance.modalVisible = !ViewModelInstance.modalVisible}>
                onPress={() => setModalVisible(true)}>
                <Text>Openfffffffffffffffffffffffffff</Text>
            </Pressable>

            {/* Events that have been made */}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageStyling: {
        width: '100%',
        height: 400,
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
    }
});

export default Profile;