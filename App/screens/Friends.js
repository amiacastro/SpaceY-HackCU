import { useCallback, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Friend, FriendsHeader, Request } from '../components';
import { Dimensions } from 'react-native';
import { assets } from '../constants';

import ViewModelInstance from '../ViewModel';

const Friends = ({ navigation }) => {
    const [list, setList] = useState([{ id: 1, val: <MyFriends /> }, { id: 2, val: <Requests handleRequest={handleRequest} /> }]);
    const [index, setIndex] = useState(0);

    const handleRequest = (val, person) => {
        if (val === 1) {
            ViewModelInstance.acceptRequest(person);
        } else {
            ViewModelInstance.declineRequest(person);
        }
        setList([{ id: 1, val: <MyFriends /> }, { id: 2, val: <Requests handleRequest={handleRequest} /> }]);
    };

    const handleSearch = (value) => {
        ViewModelInstance.searchFriends(value);
        setList([{ id: 1, val: <MyFriends /> }, { id: 2, val: <Requests handleRequest={handleRequest} /> }]);
        console.log(ViewModelInstance.searchFriendsResults);
    };

    const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        setIndex(viewableItems[0].index);
    }, []);


    return (
        <ImageBackground source={assets.gradient6} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={{ flex: 1 }}>
                <FriendsHeader index={index} onSearch={handleSearch} />
                <FlatList
                    ref={(ref) => {
                        ViewModelInstance.FriendListRef = ref;
                    }}
                    onViewableItemsChanged={onViewableItemsChanged}
                    style={{ width: Dimensions.get('window').width }}
                    horizontal
                    pagingEnabled
                    data={list}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            item.val
                        );
                    }}
                />
            </SafeAreaView>
        </ImageBackground>
    );
}

const Requests = ({ handleRequest }) => {
    return (
        <View style={{ flex: 1, width: Dimensions.get('window').width }}>
            <FlatList
                data={ViewModelInstance.friendRequests}
                renderItem={({ item }) => <Request person={item} handleRequest={handleRequest} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const MyFriends = () => {
    return (
        <View style={{ flex: 1, width: Dimensions.get('window').width }}>
            <FlatList
                data={ViewModelInstance.searchFriendsResults}
                renderItem={({ item }) => <Friend friend={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
});
export default Friends;