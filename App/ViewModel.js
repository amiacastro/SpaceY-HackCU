import { Users, modalOptions } from './constants';

class ViewModel {
    constructor() {
        this.user;
        this.firstname;
        this.friends;

        this.searchFriendsResults;
        this.modalVisible = false;
        this.modalOptions;
        this.friendRequests;
        
        this.FriendListRef;
    }

    login(username, password, navigation) {
        // const user = Users.find((user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password);

        // if (user) {
        //     this.user = user;
        //     this.friends = user.friends;
        //     this.searchedFriends = user.friends;
        //     navigation.navigate('AppScreens');
        // } else {
        //     alert("Invalid username or password");
        // }
        this.user = Users[0];
        this.friends = Users[0].friends;
        this.searchFriendsResults = Users[0].friends;
        this.firstname = Users[0].firstname;
        this.modalVisible = false;
        this.modalOptions = modalOptions;
        console.log("User: " + this.user.username + " logged in");
        navigation.navigate('AppScreens');
    }

    searchFriends(value) {
        console.log(value);
        if (!value.length) {
            this.searchFriendsResults = this.friends;
            return;
        }

        this.FriendListRef.scrollToIndex({
            animated: true,
            index: 0,
            viewPosition: 0
        })
        const filteredData = this.friends.filter((item) => {
            let name = item.firstname + " " + item.lastname;
            name.toLowerCase().includes(value.toLowerCase())
        });

        if (filteredData.length) {
            this.searchFriendsResults = filteredData;
        } else {
            this.searchFriendsResults = this.friends;
        }
    }

    setModal(boolVal) {
        this.modalVisible = boolVal;
    }

    acceptRequest(person) {
        this.friends.push(person);
        this.friendRequests = this.friendRequests.filter((item) => item.username !== person.username);
    }

    declineRequest(person) {
        this.friendRequests = this.friendRequests.filter((item) => item.username !== person.username);
    }
}

let ViewModelInstance = new ViewModel();

export default ViewModelInstance;