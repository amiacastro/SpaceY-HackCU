import { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, Alert, Modal, Pressable, FlatList } from 'react-native';
import { ProfileHeader, ModalCard } from '../components';
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
                    // ViewModelInstance.setModal(!ViewModelInstance.modalVisible);
                    // ViewModelInstance.modalVisible = !ViewModelInstance.modalVisible;
                }}>
                <View>
                    <Pressable
                        // onPress={() => ViewModelInstance.modalVisible = !ViewModelInstance.modalVisible}>                        
                        // onPress={() => ViewModelInstance.setModal(!ViewModelInstance.modalVisible)}>
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Close</Text>
                    </Pressable>
                    <FlatList 
                        data={ViewModelInstance.modalOptions}
                        // renderItem={({item}) => <Text>{item.name}</Text>}
                        renderItem={({item}) => <ModalCard data={item} />}
                        keyExtractor={(item) => item.id}
                    />
                    {/* <Text>Settings</Text>
                    <Text>Friends</Text>
                    <Text>Contacts</Text>
                    <Text>Your Activity</Text>
                    <Text>Archive</Text>
                    <Text>Saved</Text>
                    <Text>Favorited</Text>
                    <Text>Acquantances</Text>
                    <Text>Close Friends</Text>
                    <Text>Favorites</Text> */}
                </View>
            </Modal>
            <Pressable        
                // onPress={() => ViewModelInstance.setModal(true)}>       
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
    },

});

export default Profile;