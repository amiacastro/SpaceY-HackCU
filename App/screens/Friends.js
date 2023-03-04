import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Friend from '../components/Friend';

const Friends = () => {
    return (
        <SafeAreaView>
            <FlatList 
                data={FriendData}
                renderItem={({item}) => <Friend name={item.name}/>}
            />
                <View style={{ flex: 1}}>
                    <View style={{zIndex: 0}}>
                    <Text>TEst</Text>
                    <Button
                        title="Go to Friends"
                        onPress={() => navigation.navigate('Friends')}
                    />
                    </View>
                </View>
        </SafeAreaView>
    );
}

export default Friends;