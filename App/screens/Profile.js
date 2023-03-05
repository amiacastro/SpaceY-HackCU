import {  View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import ViewModelInstance from '../ViewModel';

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView>
            {/* Profile picture */}
            <View style={styles.imageStyling}>
                <Image source={ViewModelInstance.user.image} style={{width: '100%', height: '100%', borderRadius: 25}} />

            </View>
            {/* Events that have been made */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageStyling: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        padding: 10
    }
});

export default Profile;