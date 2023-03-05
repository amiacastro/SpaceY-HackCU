import { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, Alert, Modal, Pressable, FlatList, ImageBackground } from 'react-native';
import { ProfileHeader, ModalCard } from '../components';
import { COLORS, FONTS, SIZES, assets } from '../constants';
import ViewModelInstance from '../ViewModel';

const Profile = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.wrapper}>
            {/* Header */}
            <ProfileHeader username={ViewModelInstance.user.username} />
            <ImageBackground source={assets.gradient4} resizeMode="cover" style={styles.image}>

            {/* Profile picture */}
            <View style={styles.imageStyling}>
                <Image source={ViewModelInstance.user.image} style={{ width: 300, height: 300, borderRadius: 25, marginTop: 5 }} />
                <Text style={{ color: COLORS.black, ...SIZES.title, fontWeight: "bold", marginTop: 5 }}>{ViewModelInstance.user.firstname} {ViewModelInstance.user.lastname}</Text>
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
            </View>

            <View style={styles.modalButton}>
                <Pressable
                    // onPress={() => ViewModelInstance.setModal(true)}>       
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.optionStyle}>Options</Text>
                </Pressable>
            </View>
            </ImageBackground>

            {/* Events that have been made */}
        
            </SafeAreaView >
      
    )
}

const styles = StyleSheet.create({
    imageStyling: {
        width: '100%',
        height: 350,
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 50,
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
    },
    modalButton: {
        alignContent: 'center',
        alignItems: 'center',
        fontSize: SIZES.large,
        fontWeight: 'bold'
    },
    optionStyle: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    wrapper: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
});

export default Profile;