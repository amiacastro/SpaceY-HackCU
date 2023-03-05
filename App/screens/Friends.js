import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';
import { Friend, FriendsHeader } from '../components';

import ViewModelInstance from '../ViewModel';

const Friends = ({navigation}) => {    
    const handleSearch = (value) => {
        ViewModelInstance.searchFriends(value);
    };
    return (
        <SafeAreaView style={{ flex:1 }}>
            <FlatList 
                data={ViewModelInstance.searchedFriends}
                renderItem={({item}) => <Friend friend={item} navigation={navigation} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<FriendsHeader onSearch={handleSearch}/>}
            />
        </SafeAreaView>
    );
}

export default Friends;