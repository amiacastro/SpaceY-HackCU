import { Users, modalOptions , Events} from './constants';

class ViewModel {
    constructor() {
        this.user;
        this.firstname;

        this.friends;
        this.otherUsers;
        this.events;

        this.searchFriendsResults;
        this.modalVisible = false;
        this.modalOptions;
        this.friendRequests;
        
        this.FriendListRef;
    }

    getEvents() {
        return this.events;
    }

    getCalendarFriends() {
        let friends = [];
        for (let i = 0; i < this.friends.length; i++) {
            friends.push({key:i, value:(this.friends[i].firstname + " " + this.friends[i].lastname)});
        }
        return friends;
    }

    getUpcomingEvents() {
        let events = []
        for (let date = 0; date < this.events.length; date++) {
            if (date < 23) {
                events.push(...this.events[date]);
            }
        }
        console.log(events)
        return events;
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
        this.otherUsers = this.user.others;
        this.friends = this.user.friends;
        this.searchFriendsResults = this.user.friends;
        this.firstname = this.user.firstname;
        this.friendRequests = this.user.requests;
        this.modalVisible = false;
        this.events = Events;
        this.modalOptions = modalOptions;
        console.log("User: " + this.user.username + " logged in");
        navigation.navigate('AppScreens');
    }

    newEvent(friends, hour, min, ampm){
        
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
        });

        const filteredData = this.friends.filter((item) =>
            item.firstname.toLowerCase().includes(value.toLowerCase()));

        const filteredData2 = this.friends.filter((item) =>
            item.firstname.toLowerCase().includes(value.toLowerCase()));

        const filteredData3 = this.otherUsers.filter((user) =>
            user.username.toLowerCase().includes(value.toLowerCase()));

        const finalFiltered = [...new Set([...filteredData, ...filteredData2, ...filteredData3])];

        if (finalFiltered.length) {
            this.searchFriendsResults = finalFiltered;
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