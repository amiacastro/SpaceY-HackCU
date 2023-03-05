import { Users } from './constants';

class ViewModel {
    constructor() {
        this.user;
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