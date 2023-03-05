import { useState } from 'react';
import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';
import { Friend, HomeHeader, FriendsHeader } from '../components';
import {Dimensions} from 'react-native';

import ViewModelInstance from '../ViewModel';

const Friends = ({navigation}) => {
    const fList = [{id:1,val:<MyFriends />}, {id:2,val:<Requests />}];
    const windowWidth = Dimensions.get('window').width;
    return (
        <SafeAreaView style={{ flex:1 }}>
            <FlatList
                style={{width:windowWidth}}
                horizontal
                pagingEnabled
                data={fList}
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

const Requests = () => {
    const [results, setResults] = useState(ViewModelInstance.friends);
    const handleSearch = (value) => {
        ViewModelInstance.searchFriends(value);
        setResults(ViewModelInstance.searchFriendsResults);
    };
    return (
        <View style={{ flex:1 , width:Dimensions.get('window').width}}>
            <FlatList 
                data={results}
                renderItem={({item}) => <Friend friend={item}/>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const MyFriends = () => {
    const [results, setResults] = useState(ViewModelInstance.friends);
    const handleSearch = (value) => {
        ViewModelInstance.searchFriends(value);
        setResults(ViewModelInstance.searchFriendsResults);
    };
    return (
        <View style={{ flex:1, width:Dimensions.get('window').width }}>
            <FriendsHeader onSearch={handleSearch}/>
            <FlatList 
                data={results}
                renderItem={({item}) => <Friend friend={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}



export default Friends;