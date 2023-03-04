import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Friend from '../components/Friend';

const Friends = () => {
    return (
        <SafeAreaView>
            <FlatList 
                data={FriendData}
                renderItem={({item}) => <Friend friend={item}/>}
                keyExtractor={item => item.id}
            />
                <View style={{ flex: 1}}>
                    <View style={{zIndex: 0}}>
                    <Text>TEst</Text>
                    <Button
                        title="Go to Home"
                        onPress={() => navigation.navigate('Home')}
                    />
                    </View>
                </View>
        </SafeAreaView>
    );
}

export default Friends;