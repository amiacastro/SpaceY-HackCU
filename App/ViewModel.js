import { Users } from './constants';

class ViewModel {
    constructor() {
        this.user;
        this.firstname;
        this.friends;
        this.searchedFriends;
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
        this.searchedFriends = Users[0].friends;
        this.firstname = Users[0].firstname;
        navigation.navigate('AppScreens');
    }

    searchFriends(value) {
        if (!value.length) return this.searchedFriends = this.friends;

        const filteredData = this.friends.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase()));

        if (filteredData.length) {
            this.searchedFriends = filteredData;
        } else {
            this.searchedFriends = this.friends;
        }
    }
}

let ViewModelInstance = new ViewModel();

export default ViewModelInstance;