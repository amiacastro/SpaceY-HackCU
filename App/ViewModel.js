import { Users, modalOptions , Events} from './constants';

class ViewModel {
    constructor() {
        this.user;
        this.firstname;

        this.friends;
        this.otherUsers;
        this.events;
        this.upcomingEvents;

        this.searchFriendsResults;
        this.modalVisible = false;
        this.modalOptions;
        this.friendRequests;
        
        this.FriendListRef;
        this.AgendaRef;

        this.updateCalendarEvents = () => {};
        this.updateHomeEvents = () => {};
    }

    updateAllEvents() {
        this.updateCalendarEvents();
        this.updateHomeEvents();
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
        this.upcomingEvents = events;
        return events;
    }

    login(username, password, navigation) {
        const user = Users.find((user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password);

        if (user) {
            this.user = user;
            this.otherUsers = this.user.others;
            this.friends = this.user.friends;
            this.searchFriendsResults = this.user.friends;
            this.firstname = this.user.firstname;
            this.friendRequests = this.user.requests;
            this.modalVisible = false;
            this.events = Events;
            this.modalOptions = modalOptions;
            navigation.navigate('AppScreens');
            console.log("User: " + this.user.username + " logged in");
        } else {
            alert("Invalid username or password");
        }
    }

    newEvent(friends, hour, min, ampm, title, description){
        let event = {
            id: (friends.length+1)/2*hour*min,
            title: title,
            description: description,
            time: hour + ":" + min + " " + ampm,
            date: "March 6",
            host: this.user,
            attendees: friends,
            image: this.user.image,
            location: "Location TBD"
        }
        // console.log(this.AgendaRef.state.renderRow());
        this.events[17].push(event);
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