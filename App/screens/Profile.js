import {  View, SafeAreaView, Text, StyleSheet, Image, Alert, Modal, Pressable } from 'react-native';
import { ProfileHeader } from '../components';
import ViewModelInstance from '../ViewModel';

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView>
            {/* Header */}
            <ProfileHeader username={ViewModelInstance.user.username} />
            {/* Profile picture */}
            <View style={styles.imageStyling}>
                <Image source={ViewModelInstance.user.image} style={{width: 300, height: 300, borderRadius: 25, marginTop: 5}} />
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
    }
});

export default Profile;