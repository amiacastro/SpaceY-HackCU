import { useState } from 'react';
import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';
import { Friend, HomeHeader, FriendsHeader } from '../components';

import ViewModelInstance from '../ViewModel';

const Friends = ({navigation}) => {
    const [searchFriendData, setFriendData] = useState(ViewModelInstance.visibleFriends);
    
    const handleSearch = (value) => {
        ViewModelInstance.searchFriends(value);
        setFriendData(ViewModelInstance.visibleFriends);
    };
    return (
        <SafeAreaView style={{ flex:1 }}>
            <FlatList 
                data={searchFriendData}
                renderItem={({item}) => <Friend friend={item} navigation={navigation} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<FriendsHeader onSearch={handleSearch}/>}
            />
        </SafeAreaView>
    );
}

export default Friends;