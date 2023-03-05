import { useCallback, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Friend, FriendsHeader, Request } from '../components';
import { Dimensions } from 'react-native';

import ViewModelInstance from '../ViewModel';

const Friends = ({navigation}) => {
    const [index, setIndex] = useState(0);

    const handleRequest = (val, person) => {
        if (val === 1) {
            ViewModelInstance.acceptRequest(person);
        } else {
            ViewModelInstance.declineRequest(person);
        }
        setList([{id:1,val:<MyFriends />}, {id:2,val:<Requests handleRequest={handleRequest} />}]);
    };

    const handleSearch = (value) => {
        ViewModelInstance.searchFriends(value);
        setList([{id:1,val:<MyFriends />}, {id:2,val:<Requests handleRequest={handleRequest} />}]);
    };

    const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        console.log("Visible items are", viewableItems[0].index);
        setIndex(viewableItems[0].index);
    }, []);

    const [list, setList] = useState([{id:1,val:<MyFriends />}, {id:2,val:<Requests handleRequest={handleRequest} />}]);

    return (
        <SafeAreaView style={{ flex:1 }}>
            <FriendsHeader index={index} onSearch={handleSearch}/>
            <FlatList
                ref={(ref) => {
                    ViewModelInstance.FriendListRef = ref;
                  }}
                onViewableItemsChanged={onViewableItemsChanged }
                style={{width:Dimensions.get('window').width}}
                horizontal
                pagingEnabled
                data={list}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                    item.val
                    );
                }}
            />
        </SafeAreaView>
    );
}

const Requests = ({handleRequest}) => {
    return (
        <View style={{ flex:1 , width:Dimensions.get('window').width}}>
            <FlatList 
                data={ViewModelInstance.friendRequests}
                renderItem={({item}) => <Request person={item} handleRequest={handleRequest}/>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const MyFriends = () => {
    return (
        <View style={{ flex:1, width:Dimensions.get('window').width }}>
            <FlatList 
                data={ViewModelInstance.searchFriendsResults}
                renderItem={({item}) => <Friend friend={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}



export default Friends;