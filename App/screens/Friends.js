import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Friend from '../components';

const Friends = ({navigation}) => {
    return (
        <SafeAreaView>
            <FlatList 
                data={FriendData}
                renderItem={({item}) => <Friend friend={item}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default Friends;