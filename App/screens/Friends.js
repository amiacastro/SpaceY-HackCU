import { useState } from 'react';
import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';
import { Friend, HomeHeader, FriendsHeader } from '../components';
import { FriendData } from '../constants';

import ViewModelInstance from '../ViewModel';

const Friends = ({navigation}) => {
    const [searchfriendData, setFriendData] = useState(ViewModelInstance.visibleFriends);
    
    const handleSearch = (value) => {
        ViewModelInstance.searchFriends(value);
        setFriendData(ViewModelInstance.visibleFriends);
    };
    return (
        <SafeAreaView style={{ flex:1 }}>
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