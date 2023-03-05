// import { FlatList, SafeAreaView, View, StyleSheet } from 'react-native';
// import ViewModelInstance  from '../ViewModel';

// const Profile = ({navigation}) => {
    
//     return (
//         <SafeAreaView>
//             {/* Profile picture */}
//             <View style={styles.imageStyling}>
//                 <Image 
//                     source={ViewModelInstance.user.image}
//                     resizeMode="contain"
//                     style={{
//                         width: '100%',
//                         height: '100%',
//                     }}
//                     />
                    
//             </View>
//             {/* Events that have been made */}
//             {/* <FlatList /> */}

//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     imageStyling: {
//         width: '100%',
//         height: 300,
//     }
// });

// export default Profile;


import {  View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import ViewModelInstance from '../ViewModel';

const Profile = ({ navigation }) => {
    return (
        // <SafeAreaView style={styles.container}>
        //     <FocusedStatusBar background={COLORS.primary} />

        //     <View style={{ flex: 1 }}>
        //         <View style={{ zIndex: 0 }}>
        //             <HomeHeader name={ViewModelInstance.name} />
        //             <Text>This is the Home Page</Text>
        //         </View>
        //     </View>
        // </SafeAreaView>
        <SafeAreaView>
            {/* Profile picture */}
            <View style={styles.imageStyling}>
                {/* <Image source={assets.images.person01} style={{width: 100, height:100}}/> */}
                <Image source={ViewModelInstance.user.image} style={{width: 50, height: 50, borderRadius: 25}} />

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