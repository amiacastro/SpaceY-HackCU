import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Friend from '../components/Friend';

const Friends = () => {
    return (
        <SafeAreaView>
            <FlatList 
                data={FriendData}
                renderItem={({item}) => <Friend name={item.name}/>}
            />
        </SafeAreaView>
    );
}

export default Friends;