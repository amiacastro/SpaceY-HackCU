import { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, Alert, Modal, Pressable, FlatList } from 'react-native';
import { ProfileHeader, ModalCard } from '../components';
import { COLORS, FONTS, SIZES } from '../constants';
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
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    // visible={ViewModelInstance.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                        // ViewModelInstance.setModal(!ViewModelInstance.modalVisible);
                        // ViewModelInstance.modalVisible = !ViewModelInstance.modalVisible;
                    }}>
                    <View style={styles.modalContent}>
                        <View style={styles.closeContainer}>
                            <Pressable
                                // onPress={() => ViewModelInstance.modalVisible = !ViewModelInstance.modalVisible}>                        
                                // onPress={() => ViewModelInstance.setModal(!ViewModelInstance.modalVisible)}>
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.close}>Close</Text>
                            </Pressable>
                        </View>
                        <FlatList
                            data={ViewModelInstance.modalOptions}
                            // renderItem={({item}) => <Text>{item.name}</Text>}
                            renderItem={({ item }) => <ModalCard data={item} />}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </Modal>
                <Pressable
                    // onPress={() => ViewModelInstance.setModal(true)}>       
                    onPress={() => setModalVisible(true)}>
                    <Text>Options</Text>
                </Pressable>
            </View>

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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 450,
        alignItems: 'center'
    },
    modalContent: {
        height: '50%',
        marginTop: 'auto',
        borderRadius: 5,
    },
    closeContainer: {
        backgroundColor: COLORS.pastel_pink,
        opacity: 0.8,
        alignItems: 'center'
    },
    close: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
    }

});

export default Profile;