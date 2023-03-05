import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';
import { Friend } from '../components';
import { FriendData } from '../constants';

const Friends = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex:1 }}>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <FlatList 
                data={FriendData}
                renderItem={({item}) => <Friend friend={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default Friends;