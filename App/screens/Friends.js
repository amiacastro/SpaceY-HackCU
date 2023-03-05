import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Friend from '../components';
import FriendData from '../constants';

const Friends = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>Friends</Text>
            <FlatList 
                data={FriendData}
                renderItem={({item}) => <Text>TEDNJSANDASKJDSA</Text>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default Friends;