import { useState } from 'react';
import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';
import { Friend, HomeHeader, FriendsHeader } from '../components';
import { FriendData } from '../constants';

const Friends = ({navigation}) => {
    const [searchfriendData, setFriendData] = useState(FriendData);
    const handleSearch = (value) => {
        if (!value.length) return setFriendData(FriendData);
        

        const filteredData = FriendData.filter((item) => 
            item.name.toLowerCase().includes(value.toLowerCase()));
            
        if (filteredData.length) {
            setFriendData(filteredData);
        } else {
            setFriendData(FriendData);
        }
    };
    return (
        <SafeAreaView style={{ flex:1 }}>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} style={{zIndex: 1}} />
            <FlatList 
                data={searchfriendData}
                renderItem={({item}) => <Friend friend={item} navigation={navigation} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<FriendsHeader onSearch={handleSearch}/>}
            />
        </SafeAreaView>
    );
}

export default Friends;