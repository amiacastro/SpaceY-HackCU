import { FriendData } from './constants';

class ViewModel {
    constructor() {
        this.friends = FriendData;
        this.searchedFriends = FriendData;
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